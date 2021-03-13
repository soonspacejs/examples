import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
interface LightInfo extends BaseObject3DInfo {
}
declare class Light extends BaseObject3D {
    constructor(param: LightInfo);
}
export { Light, LightInfo };
