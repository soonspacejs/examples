import DefaultManage from './DefaultManage';
import Viewport from '../Viewport';
import { PoiNode, PoiNodeInfo, Group, GroupInfo } from '../Library';
declare class PoiNodeManage extends DefaultManage {
    constructor(viewport: Viewport);
    create(info: PoiNodeInfo): PoiNode;
    createToGroup(groupInfo: GroupInfo, poiNodeInfo: PoiNodeInfo[]): Group;
    addForGroup(groupId: GroupInfo['id'], poiNodeInfo: PoiNodeInfo[]): Group | null;
    _openEnableRenderCss(info: PoiNodeInfo): void;
}
export default PoiNodeManage;
