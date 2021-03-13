import DefaultManage from './DefaultManage';
import { BaseObject3D, Group, GroupInfo, Model, ModelInfo } from '../Library';
import Viewport from '../Viewport';
declare class ModelManage extends DefaultManage {
    constructor(viewport: Viewport);
    load(modelInfo: ModelInfo): Promise<Model>;
    clone(model: Model, info: ModelInfo, parent?: BaseObject3D | null): Promise<Model>;
    loadToGroup(groupInfo: GroupInfo, modelInfo: ModelInfo[]): Promise<Group>;
    addForGroup(groupId: GroupInfo['id'], modelInfo: ModelInfo[]): Promise<Group | null>;
    _loadItem(modelInfo: ModelInfo, parent?: BaseObject3D | null): Promise<Model>;
    _copyMaterial(model: Model): void;
}
export default ModelManage;
