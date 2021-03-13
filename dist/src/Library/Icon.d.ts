import { Sprite, SpriteMaterial } from 'three';
import { Position, Scale } from '../Interface';
interface IconInfo {
    name?: string;
    position?: Position;
    scale?: Scale;
    stype?: string;
}
declare class Icon extends Sprite {
    stype: string;
    constructor(material: SpriteMaterial, param?: IconInfo);
}
export { Icon, IconInfo };
