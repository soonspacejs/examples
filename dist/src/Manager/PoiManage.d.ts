import DefaultManage from './DefaultManage';
import { SpriteMaterial } from 'three';
import { Poi, PoiInfo, Group, GroupInfo } from '../Library';
import Viewport from '../Viewport';
declare class PoiManage extends DefaultManage {
    materials: Map<string, SpriteMaterial>;
    constructor(viewport: Viewport);
    create(info: PoiInfo): Poi;
    createToGroup(groupInfo: GroupInfo, poiInfo: PoiInfo[]): Group;
    addForGroup(groupId: GroupInfo['id'], poiInfo: PoiInfo[]): Group | null;
    _createMaterial(url: PoiInfo['url']): SpriteMaterial;
}
export default PoiManage;
