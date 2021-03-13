import { Point, PointInfo } from './Point';
interface NodeInfo extends PointInfo {
}
declare class Node extends Point {
    constructor(param: NodeInfo);
}
export { Node, NodeInfo };
