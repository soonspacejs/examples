import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { ObjectEvents } from '../Interface';
import { AnimationClip } from 'three';
interface ModelInfo extends BaseObject3DInfo, ObjectEvents<Model> {
    url: string;
    format: string;
}
declare class Model extends BaseObject3D implements ObjectEvents<Model> {
    readonly formatType: string;
    animations: AnimationClip[];
    onLoad: ((object: Model) => any) | null;
    onHover: ((object: Model) => any) | null;
    onUnHover: ((object: Model) => any) | null;
    onClick: ((object: Model) => any) | null;
    onDblClick: ((object: Model) => any) | null;
    onRightClick: ((object: Model) => any) | null;
    constructor(param: ModelInfo);
}
export { Model, ModelInfo };
