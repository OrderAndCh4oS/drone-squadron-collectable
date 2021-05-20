import { colours, context, debug } from '../constants/constants.js';
import Vector from '../service/vector.js';
import Particle from './abstract/particle.js';
import Health from '../service/health.js';
import { chassis, gimbals, scanners, steering, thrusters } from '../constants/utilities.js';
import { weapons } from '../constants/weapons.js';
import DisplayData from '../user-interface/display-particle-data.js';

const chassisValues = Object.values(chassis);
const weaponValues = Object.values(weapons);
const scannerValues = Object.values(scanners);
const thrusterValues = Object.values(thrusters);
const steeringValues = Object.values(steering);
const gimbalValues = Object.values(gimbals);

export default class Drone extends Particle {
    constructor(drone, squad, x, y, angle) {
        super(drone.id, x, y, 0, 13, angle);
        this._squadId = squad.id;
        this._colour = squad.colour;
        this.name = drone.name;
        this.vector = new Vector(0, 1);
        this.vector.setAngle(angle);
        this.weapon = new weaponValues[drone.weapon](this, x, y, angle, gimbalValues[drone.gimbal]);
        this.scanner = new scannerValues[drone.scanner]();
        this.thruster = new thrusterValues[drone.thruster]();
        this.steering = new steeringValues[drone.steering]();
        this.chassis = new chassisValues[drone.chassis]();
        console.log(this.chassis)
        console.log(this.chassis.health)
        this.health = new Health(this.chassis.health);
        this._damage = 0;
        this._kills = 0;
        this._killed = [];
        this._sprite = new Image();
        const thrusterNo = drone.thruster + 1;
        const steeringNo = drone.steering + 1;
        const chassisNo = ~~(Math.random() * 5) + 1;
        this._sprite.src = `assets/drones/${this._colour}/c${chassisNo}_w${steeringNo}_e${thrusterNo}_v1.png`;
    }

    get killed() {
        return this._killed;
    }

    get damage() {
        return this._damage;
    }

    get kills() {
        return this._kills;
    }

    get squadId() {
        return this._squadId;
    }

    get angle() {
        return this.vector.getAngle();
    }

    set angle(angle) {
        this.vector.setAngle(angle);
    }

    updateDamage(damage) {
        this._damage += damage;
    }

    updateKills(killedDrone) {
        this._kills++;
        this._killed.push(killedDrone);
    }

    update() {
        this.scanner.scanArea(this);
        this.thruster.setPower(this);
        this.steering.turn(this);
        if(this.thruster.isThrusting()) {
            this.velocity.setAngle(this.vector.getAngle());
        }
        this.move();
        this.weapon.update(this);
    }

    draw() {
        this.weapon.draw();
        this.thruster.draw(this);
        context.translate(this.position.x, this.position.y);
        this.drawName();
        this.drawData();
        this.drawSprite();
        context.resetTransform();
        this.health.draw(this);
        this.scanner.draw(this);
    }

    drawSprite() {
        context.rotate(this.vector.getAngle() + (Math.PI / 180) * 90);
        context.translate(-24, -24);
        context.drawImage(this._sprite, 0, 0, 48, 48);
    }

    drawDrone() {
        context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(-10, -7);
        context.lineTo(-10, 7);
        context.lineTo(10, 0);
        context.strokeStyle = this._colour;
        context.stroke();
        context.fillStyle = this._colour;
        context.fill();
    }

    drawName() {
        if(debug.droneNameToggle) {
            context.font = '11px Verdana';
            context.textAlign = 'center';
            context.fillStyle = colours[this._colour];
            context.fillText(this.name, 0, -18);
        }
    }

    drawData() {
        if(debug.droneDataToggle) {
            const positionText = `Position: (${Math.round(
                this.position.x)}, ${Math.round(this.position.y)})`;
            const gridText = `Grid: (${this.gridX}, ${this.gridY})`;
            const displayData = new DisplayData(0, 0, this.colour);
            displayData.addLine('ID: ' + this.id);
            displayData.addLine('SquadID: ' + this.squadId);
            displayData.addLine('Weapon: ' + this.weapon.name);
            displayData.addLine('Health: ' + this.health.currentHealth);
            displayData.addLine('Damage: ' + this._damage);
            displayData.addLine('Kills: ' + this._kills);
            displayData.addLine(positionText);
            displayData.addLine(gridText);
            displayData.draw();
        }
    }
}
