import { Mesh, Vector3 } from 'three';
import { Position, Rotation, Scale, IColor } from '../Interface';
interface CircleInfo {
    id: string | number;
    radius?: number;
    color?: IColor;
    name?: string;
    position?: Position | Vector3;
    rotation?: Rotation | Vector3;
    scale?: Scale | Vector3;
}
declare class Circle extends Mesh {
    sid: string | number;
    stype: string;
    constructor(param?: CircleInfo);
}
export { Circle, CircleInfo };
