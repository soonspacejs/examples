import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { NodeInfo } from './Node';
import { CircleInfo } from './Circle';
import { LinkInfo } from './Link';
import { IColor } from '../Interface';
import { NodeData, TwoWaysLink } from '../Math/dijkstra';
interface TopologyInfo extends BaseObject3DInfo {
    nodes: NodeData[];
    links?: TwoWaysLink[];
    linkWidth?: number;
    renderNode?: boolean;
    renderCircle?: boolean;
    renderLink?: boolean;
    nodeColor?: IColor | IColor[];
    linkColor?: IColor | IColor[];
    imgUrl?: LinkInfo['imgUrl'];
    animation?: LinkInfo['animation'];
}
declare class Topology extends BaseObject3D {
    nodes: NodeData[];
    links: TwoWaysLink[];
    constructor(param: TopologyInfo);
    create(param: TopologyInfo): void;
    _createNode(param: NodeInfo): void;
    _createCircle(param: CircleInfo): void;
    _createLink(param: LinkInfo): void;
}
export { Topology, TopologyInfo };
