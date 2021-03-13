import DefaultManage from './DefaultManage';
import { PluginObject, PluginObjectInfo } from '../Library';
import Viewport from '../Viewport';
import { Object3D } from 'three';
declare class PluginManage extends DefaultManage {
    constructor(viewport: Viewport);
    createObject(info: PluginObjectInfo, object?: Object3D): PluginObject;
    addToObject(id: PluginObjectInfo['id'], object: Object3D): PluginObject | null;
}
export default PluginManage;
