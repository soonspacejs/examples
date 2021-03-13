import { Box3, PerspectiveCamera, Vector3, Euler, Object3D } from 'three';
import { FullFreeControls } from '../Controls';
import { Rotation, Position, AnimationOptions, Viewpoint, TlyToViewpoint, CameraViewpointData, FlyToOptions, SurroundOptions, LabelOptions } from '../Interface';
import { BaseObject3D } from '../Library';
import Viewport from './index';
interface CameraManager {
    fullFreeCamera: PerspectiveCamera;
    [x: string]: PerspectiveCamera;
}
interface ControlsManager {
    fullFreeControler: FullFreeControls;
    [x: string]: any;
}
declare class CameraControlerManager {
    viewport: Viewport;
    cameraManager: CameraManager;
    controlsManager: ControlsManager;
    camera: PerspectiveCamera;
    controls: FullFreeControls;
    postUpdate: Function[];
    constructor(viewport: Viewport);
    createCamera(key: string): PerspectiveCamera;
    removeCamera(key: string): boolean;
    setMainCamera(camera: PerspectiveCamera): void;
    getMainCamera(): PerspectiveCamera;
    getCameraViewpoint(): CameraViewpointData;
    setCameraViewpoint(data: CameraViewpointData): void;
    rotateTo(rotation: Rotation, options?: AnimationOptions): Promise<any>;
    moveTo(position: Position, options?: AnimationOptions): Promise<any>;
    flyTo(position: Position, rotation?: Viewpoint | Rotation | Euler, options?: AnimationOptions): Promise<any>;
    getMovePosByBBox(bbox: Box3): Vector3;
    flyToBoundingBox(bbox: Box3, viewpoint?: TlyToViewpoint, options?: AnimationOptions): Promise<any>;
    flyToObj(object: Object3D, viewpoint?: TlyToViewpoint, options?: FlyToOptions): Promise<any>;
    surroundOnTarget(target?: Vector3 | Position, options?: SurroundOptions): Promise<any>;
    surroundOnObject(object: BaseObject3D, options?: SurroundOptions): Promise<any>;
    update(): void;
    getObjectLabelPos(object: BaseObject3D, options?: LabelOptions): Position;
    _getBboxLabelPos(bbox: Box3, options?: LabelOptions): Vector3;
}
export { CameraManager, ControlsManager };
export default CameraControlerManager;
