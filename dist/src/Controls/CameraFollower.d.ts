import Viewport from '../Viewport';
import { PerspectiveCamera, Vector3 } from 'three';
import { BaseObject3D } from '../Library/BaseObject3D';
interface CameraFollowerOptions {
    offset?: Vector3;
    rotation?: Vector3;
}
declare class CameraFollower {
    viewport: Viewport;
    camera: PerspectiveCamera;
    object: BaseObject3D;
    options: CameraFollowerOptions;
    constructor(viewport: Viewport, camera: PerspectiveCamera, object: BaseObject3D, options?: CameraFollowerOptions);
    init(): void;
}
export default CameraFollower;
