import Viewport from '../Viewport';
import { SceneManage, BaseObject3D, Group, GroupInfo } from '../Library';
import { UserDataPropertyFindFunc } from '../Interface';
declare type findPropKey = 'name' | 'sid';
declare class DefaultManage {
    readonly type: string;
    readonly scene: SceneManage;
    readonly viewport: Viewport;
    constructor(type: string, viewport: Viewport);
    update(): void;
    getById<T>(id: BaseObject3D['sid']): T | null;
    getByName<T>(name: string): T[];
    getByUserDataProperty<T = BaseObject3D>(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): T[];
    removeById(id: BaseObject3D['sid']): boolean;
    createGroup(groupInfo: GroupInfo): Group;
    getGroupById<T = Group>(id: string | number): T | null;
    getGroupByName<T = Group>(name: string): T[];
    removeGroupById(id: BaseObject3D['sid']): boolean;
    clear(): void;
    getAll<T = BaseObject3D>(): T[];
    hideAll(): void;
    showAll(): void;
    _getChildByTypeAndProp<T = BaseObject3D>(type: string, propKey: findPropKey, propVal: any): T[];
}
export default DefaultManage;
