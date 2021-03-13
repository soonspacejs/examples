import { Mesh, Vector3 } from 'three';
import { IColor, Position } from '../Interface';
interface FaceInfo {
    id: string | number;
    points: (Position | Vector3)[];
    color?: IColor;
    opacity?: number;
}
declare class Face extends Mesh {
    sid: string | number;
    stype: string;
    points: (Position | Vector3)[];
    constructor(param: FaceInfo);
}
export { Face, FaceInfo };
