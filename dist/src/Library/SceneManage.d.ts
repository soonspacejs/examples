import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
interface SceneManageInfo extends BaseObject3DInfo {
}
declare class SceneManage extends BaseObject3D {
    readonly isSceneManage: boolean;
    constructor(param: SceneManageInfo);
}
export { SceneManage, SceneManageInfo };
