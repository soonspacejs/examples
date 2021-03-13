import DefaultManage from './DefaultManage';
import Viewport from '../Viewport';
import { Group, GroupInfo, Paint, PaintInfo } from '../Library';
declare class PaintManage extends DefaultManage {
    constructor(viewport: Viewport);
    create(info: PaintInfo): Paint;
    createToGroup(groupInfo: GroupInfo, poiInfo: PaintInfo[]): Group;
    addForGroup(groupId: GroupInfo['id'], poiInfo: PaintInfo[]): Group | null;
}
export default PaintManage;
