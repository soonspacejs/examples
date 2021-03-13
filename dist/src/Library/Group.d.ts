import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
interface GroupInfo extends BaseObject3DInfo {
}
declare class Group extends BaseObject3D {
    constructor(param: GroupInfo);
}
export { Group, GroupInfo };
