import { Mesh, Vector3 } from 'three';
import { Position, Scale, IColor, AnimationOptions } from '../Interface';
interface LineInfo {
    id: string | number;
    start: Position | Vector3;
    end: Position | Vector3;
    color?: IColor;
    opacity?: number;
    imgUrl?: string;
    animation?: boolean | AnimationOptions;
    width?: number;
    name?: string;
    position?: Position | Vector3;
    scale?: Scale | Vector3;
}
declare class Line extends Mesh {
    sid: string | number;
    stype: string;
    constructor(param?: LineInfo);
}
export { Line, LineInfo };
