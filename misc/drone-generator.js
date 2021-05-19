import { weapons } from '../constants/weapons.js';
import { gimbals, scanners, steering, thrusters } from '../constants/utilities.js';
import nameGenerator from './name-generator.js';

const droneGenerator = () => {
    const weaponKeys = Object.keys(weapons);
    const scannerKeys = Object.keys(scanners);
    const thrusterKeys = Object.keys(thrusters);
    const steeringKeys = Object.keys(steering);
    const gimbalKeys = Object.keys(gimbals);
    return ({
        name: nameGenerator(),
        weapon: ~~(Math.random() * weaponKeys.length),
        gimbal: ~~(Math.random() * gimbalKeys.length),
        scanner: ~~(Math.random() * scannerKeys.length),
        steering: ~~(Math.random() * steeringKeys.length),
        thruster: ~~(Math.random() * thrusterKeys.length),
    });
}

export default droneGenerator;
