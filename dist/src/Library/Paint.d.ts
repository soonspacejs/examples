import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { PointInfo } from './Point';
import { LineInfo } from './Line';
import { FaceInfo } from './Face';
import { CircleInfo } from './Circle';
interface PaintInfo extends BaseObject3DInfo {
    points?: PointInfo[];
    lines?: LineInfo[];
    faces?: FaceInfo[];
    circles?: CircleInfo[];
}
declare class Paint extends BaseObject3D {
    constructor(param: PaintInfo);
    create(param: PaintInfo): void;
    _createPoint(param: PointInfo): void;
    _createLine(param: LineInfo): void;
    _createFace(param: FaceInfo): void;
    _createCircle(param: CircleInfo): void;
}
export { Paint, PaintInfo };
