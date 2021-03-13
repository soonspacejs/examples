import Viewport from '../Viewport';
import DefaultManage from './DefaultManage';
import { GridHelper, AxesHelper, Box3Helper, Box3 } from 'three';
import { GridHelperOptions, GroundOptions, IColor } from '../Interface';
import { BaseMesh } from '../Library';
declare class HelperManage extends DefaultManage {
    constructor(viewport: Viewport);
    addGridHelper(options?: GridHelperOptions): GridHelper;
    addAxishelper(axisLength?: number): AxesHelper;
    addBoxHelper(box: Box3, color?: IColor): Box3Helper;
    createGround(options: GroundOptions): BaseMesh;
}
export default HelperManage;
