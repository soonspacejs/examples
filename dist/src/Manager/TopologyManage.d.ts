import DefaultManage from './DefaultManage';
import { Group, GroupInfo, Topology, TopologyInfo } from '../Library';
import { TopologyInfoForGml, ShortestPathInfo } from '../Interface';
import Viewport from '../Viewport';
declare class TopologyManage extends DefaultManage {
    constructor(viewport: Viewport);
    createGroupFromGml(groupInfo: GroupInfo, topologyInfo: TopologyInfoForGml): Promise<Group>;
    create(topologyInfo: TopologyInfo): Topology;
    createToGroup(groupInfo: GroupInfo, topologyInfo: TopologyInfo[]): Group;
    addForGroup(groupId: GroupInfo['id'], topologyInfo: TopologyInfo[]): Group | null;
    getShortestPath(topology: Topology, info: ShortestPathInfo): Topology;
}
export default TopologyManage;
