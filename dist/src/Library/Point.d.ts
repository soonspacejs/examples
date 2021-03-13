import { BaseMesh, BaseMeshInfo } from './BaseMesh';
import { IColor } from '../Interface';
interface PointInfo extends BaseMeshInfo {
    radius?: number;
    color?: IColor;
    opacity?: number;
}
declare class Point extends BaseMesh {
    stype: string;
    constructor(param?: PointInfo);
}
export { Point, PointInfo };
