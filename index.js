import {
    audioHandler,
    background,
    canvas,
    colour,
    debug,
    dm,
    game,
    grid,
    loading,
    pm,
    restartButton,
    squadrons,
    startButton,
    stopButton,
} from './constants/constants.js';
import { deltaTime } from './service/delta-time.js';
import SquadronFactory from './factory/squadron-factory.js';
import UI from './user-interface/ui.js';
import GameOver from './user-interface/display-game-over.js';
import nDronesGenerator from './misc/n-drones-generator.js';
import nameGenerator from './misc/name-generator.js';
import enemyQueue from './data/enemy-queue.js';

let drones;
let squadronOne;
const c1 = ~~(Math.random() * 6);
let fpsInterval, startTime, now, then, elapsed;

debug.initialiseListeners();

startButton.onclick = async function() {
    startButton.style.display = 'none';
    document.getElementById('debug-bar').style.display = 'flex';
    await initialise();
};

stopButton.onclick = () => {
    game.state = 'stopped';
    audioHandler.stop('music');
    startButton.style.display = 'block';
    document.getElementById('debug-bar').style.display = 'none';
};

window.onresize = async() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    background.update();
    background.draw();
    if(game.state !== 'stopped') {
        await initialise();
    }
};

window.onload = async() => {
    drones = nDronesGenerator(6);
    squadronOne = {
        id: 1, colour: colour[c1], name: 'Squadron ' + nameGenerator(),
        drones: drones.map((d, i) => ({id: i + 1, ...d})),
    };
    loading.style.display = 'block';
    await audioHandler.setAudioFile('explosion', 'assets/audio/sound/explosion_1.wav');
    await audioHandler.setAudioFile('uzi', 'assets/audio/sound/uzi_1.wav');
    await audioHandler.setAudioFile('shotgun', 'assets/audio/sound/shotgun_1.wav');
    await audioHandler.setAudioFile('rifle', 'assets/audio/sound/rifle_1.wav');
    await audioHandler.setAudioFile('music', 'assets/audio/music/Urban-Future.mp3', 'audio/mpeg');
    loading.style.display = 'none';
    startAnimating(60);
};

restartButton.onclick = async() => {
    await initialise();
};

async function initialise() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    audioHandler.play('music', 0.4, true);
    dm.init();
    pm.init();
    grid.init();
    await setupDrones();
    game.state = 'playing';
}

async function fetchEnemySquadron(rank) {
    const enemy = enemyQueue[rank];
    const enemySquadronData = await fetch(
        `./data/enemy-drones/${enemy.id}_${enemy.seed}/squadron.json`);
    return await enemySquadronData.json();
}

async function setupDrones() {
    squadrons.splice(0, squadrons.length);
    const enemy = await fetchEnemySquadron(game.rank);
    let c2;
    do {
        c2 = ~~(Math.random() * 6);
    } while(c2 === c1);
    [
        squadronOne,
        {
            id: 2, colour: colour[c2], name: 'Squadron ' + enemy.leader,
            drones: enemy.drones.map((d, i) => ({id: i + drones.length + 1, ...d})),
        },
    ].map(s => squadrons.push(SquadronFactory.make(s)));
}

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

function setFrameTimeData() {
    now = Date.now();
    elapsed = now - then;
    if(elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
    }
}

let i = 0;

function animate() {
    background.draw();
    deltaTime.update();
    if(game.state === 'playing' || game.state === 'game-over') {
        dm.update();
        pm.update();
        grid.draw();
        grid.log();
        UI.displaySquadData();
        if(game.state === 'playing' && squadrons[0]?.health > 0 && squadrons[1]?.health <= 0) {
            game.rank++;
            restartButton.innerText = 'Continue'
        }
        if(game.state === 'playing' && squadrons[0]?.health <= 0 && squadrons[1]?.health > 0) {
            game.rank = 0;
            restartButton.innerText = 'Restart'
        }
        if(squadrons[0]?.health <= 0 || squadrons[1]?.health <= 0) game.state = 'game-over';
    }
    if(game.state === 'game-over') {
        new GameOver().draw();
    }
    requestAnimationFrame(animate);
    setFrameTimeData();
    i++;
    if(i % 200 === 0) {
        console.log(squadrons[0].health);
        console.log(game.state);
    }
    if(i % 200 === 0) {
        console.log(squadrons[1].health);
        console.log(game.state);
    }
}
