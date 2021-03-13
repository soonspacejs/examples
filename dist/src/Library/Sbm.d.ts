import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { ObjectEvents } from '../Interface';
interface SbmInfo extends BaseObject3DInfo, ObjectEvents<Sbm> {
    url: string;
    isPlatform?: boolean;
}
declare class Sbm extends BaseObject3D implements ObjectEvents<Sbm> {
    onLoad: ((object: Sbm) => any) | null;
    onHover: ((object: Sbm) => any) | null;
    onUnHover: ((object: Sbm) => any) | null;
    onClick: ((object: Sbm) => any) | null;
    onDblClick: ((object: Sbm) => any) | null;
    onRightClick: ((object: Sbm) => any) | null;
    constructor(param: SbmInfo);
}
export { Sbm, SbmInfo };
