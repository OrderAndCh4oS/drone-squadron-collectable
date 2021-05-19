import Bullet from '../abstract/bullet.js';
import { colours } from '../../constants/constants.js';

export default class SevenSixTwoMM extends Bullet {
    constructor(drone, x, y, angle, velocity) {
        super(drone, x, y, 50, 5, angle, velocity, 16);
        this._colour = colours.acid;
    }
}
