import {
    audioManager,
    background,
    canvas,
    colourHex,
    colours, continueButton,
    debug,
    dm,
    game,
    grid,
    loading,
    playerOneScoreEl,
    playerTwoScoreEl,
    pm,
    scoreManager,
    scoresEl,
    squadrons,
    startButton,
    stopButton,
} from './constants/constants.js';
import { deltaTime } from './service/delta-time.js';
import SquadronFactory from './factory/squadron-factory.js';
import UI from './user-interface/ui.js';
import GameOver from './user-interface/display-game-over.js';
import enemyQueue from './data/enemy-drones/enemy-queue.js';

let fpsInterval, startTime, now, then, elapsed;

debug.initialiseListeners();

startButton.onclick = async function() {
    startButton.style.display = 'none';
    document.getElementById('debug-bar').style.display = 'flex';
    await initialise();
};

continueButton.onclick = async function() {
    continueButton.style.display = 'none';
    await initialise();
};

stopButton.onclick = () => {
    game.state = 'stopped';
    game.rank = 0;
    scoreManager.reset();
    audioManager.stop('music');
    startButton.style.display = 'block';
    document.getElementById('debug-bar').style.display = 'none';
    scoresEl.style.display = 'none';

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
    loading.style.display = 'block';
    await audioManager.setAudioFile('explosion', 'assets/audio/sound/explosion_1.wav');
    await audioManager.setAudioFile('pulse-rifle', 'assets/audio/sound/pulse-rifle.wav');
    await audioManager.setAudioFile('arc-gun', 'assets/audio/sound/arc-gun.wav');
    await audioManager.setAudioFile('phase-rifle', 'assets/audio/sound/phase-rifle.wav');
    await audioManager.setAudioFile('fusion-cannon', 'assets/audio/sound/fusion-cannon.wav');
    await audioManager.setAudioFile('plasma-cannon', 'assets/audio/sound/plasma-cannon.wav');
    await audioManager.setAudioFile('music', 'assets/audio/music/Urban-Future.mp3', 'audio/mpeg');
    loading.style.display = 'none';
    startAnimating(60);
};

async function initialise() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    audioManager.play('music', 0.4, true);
    dm.init();
    pm.init();
    grid.init();
    await setupDrones();
    if(game.rank === 0) {
        scoreManager.resetPlayerOne();
    }
    scoreManager.resetPlayerTwo();
    scoresEl.style.display = 'flex';
    playerOneScoreEl.style.color = colours[squadrons[0].colour];
    playerTwoScoreEl.style.color = colours[squadrons[1].colour];
    game.state = 'playing';
}

async function fetchEnemySquadron(rank) {
    const enemy = enemyQueue[rank];
    const enemySquadronData = await fetch(
        `./data/enemy-drones/${enemy.id}_${enemy.seed}/squadron.json`);
    return await enemySquadronData.json();
}

async function fetchPlayerSquadron() {
    const playerSquadronData = await fetch(
        `./data/player-drones/3_oovWusjQiHBKkhxGs7UWN1Zn5W4NEe3aouSMTAWmrg2QAtE9BKA/squadron.json`);
    return await playerSquadronData.json();
}

async function setupDrones() {
    squadrons.splice(0, squadrons.length);
    const enemy = await fetchEnemySquadron(game.rank);
    const player = await fetchPlayerSquadron();
    const c1 = player.colour;
    let c2;
    do {
        c2 = ~~(Math.random() * 6);
    } while(c2 === c1);
    [
        {
            id: 1, colour: colourHex[c1], name: 'Squadron ' + player.leader,
            drones: player.drones.map((d, i) => ({id: i, ...d})),
        },
        {
            id: 2, colour: colourHex[c2], name: 'Squadron ' + enemy.leader,
            drones: enemy.drones.map((d, i) => ({id: i + player.drones.length + 1, ...d})),
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
        pm.update();
        dm.update();
        grid.draw();
        grid.log();
        playerOneScoreEl.innerText = scoreManager.playerOneScore.toString();
        playerTwoScoreEl.innerText = scoreManager.playerTwoScore.toString();
        UI.displaySquadData();
        if(game.state === 'playing' && squadrons[0]?.health > 0 && squadrons[1]?.health <= 0) {
            game.rank++;
            continueButton.style.display = 'block';
        }
        if(game.state === 'playing' && squadrons[0]?.health <= 0 && squadrons[1]?.health > 0) {
            game.rank = 0;
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
