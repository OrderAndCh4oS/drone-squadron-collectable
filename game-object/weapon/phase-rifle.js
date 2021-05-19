import Weapon from '../abstract/weapon.js';
import { audioHandler, context } from '../../constants/constants.js';
import SevenSixTwoMM from '../ammo/seven-six-two-mm.js';

export default class PhaseRifle extends Weapon {
    constructor(drone, x, y, angle, gimbal) {
        const fireRate = 8;
        const round = SevenSixTwoMM;
        super(drone, 'Phase Rifle', '#577', x, y, angle, gimbal, round, fireRate);
    }

    draw() {
        context.translate(this.position.x, this.position.y);
        context.rotate(this.gimbal.vector.getAngle() + this.droneAngle);
        context.beginPath();
        context.lineTo(10, -2);
        context.lineTo(10, 2);
        context.lineTo(0, 2);
        context.lineTo(0, -2);
        this.applyStroke();
        this.applyFill();
        context.resetTransform();
    }

    fire() {
        super.fire();
        audioHandler.play('rifle', 0.7);
    }
}