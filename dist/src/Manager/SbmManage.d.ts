import DefaultManage from './DefaultManage';
import Viewport from '../Viewport';
import { BaseObject3D, Group, GroupInfo, Sbm, SbmInfo } from '../Library';
import { ModelLoadingProgressCallback, GroupProgressCallback } from '../Interface';
declare class SbmManage extends DefaultManage {
    models: Map<string, Sbm>;
    imgs: Map<string, HTMLImageElement>;
    constructor(viewport: Viewport);
    load(sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    parse(data: ArrayBuffer, sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    clone(model: Sbm, sbmInfo: SbmInfo, parent?: BaseObject3D | null): Promise<Sbm>;
    loadToGroup(groupInfo: GroupInfo, sbmInfoList: SbmInfo[], onProgress?: GroupProgressCallback): Promise<Group>;
    addForGroup(groupId: GroupInfo['id'], sbmInfoList: SbmInfo[], onProgress?: GroupProgressCallback): Promise<Group | null>;
    createGroupFromXml(groupInfo: GroupInfo, url: string): Promise<unknown>;
    _loadItem(sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback, parent?: BaseObject3D | null): Promise<Sbm>;
    _copyMaterial(model: Sbm): void;
}
export default SbmManage;
