import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, AnimationMixer, Intersection, Object3D, AnimationAction, AnimationClip } from 'three';
import Scener from './Scener';
import { CSS2DRenderer, CSS2DHalfRenderer, CSS3DRenderer } from '../Renderer';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import RendererManager from './RendererManager';
import CameraControlerManager, { CameraManager, ControlsManager } from './CameraControlerManager';
import { FullFreeControls } from '../Controls';
import { Sbm, Model } from '../Library';
import { IColor, OffsetPoint, SceneEventType, ViewportOptions, ViewportState, ModelAnimationFindFunc } from '../Interface';
declare class Viewport {
    options: ViewportOptions;
    state: ViewportState;
    scener: Scener;
    scene: Scene;
    rendererManager: RendererManager;
    container: HTMLElement;
    interactiveContainer: HTMLElement;
    renderer: WebGLRenderer;
    rendererCSS2D: CSS2DRenderer;
    rendererCSS3D: CSS3DRenderer;
    rendererCSS2DHalf: CSS2DHalfRenderer;
    cameraControlerManager: CameraControlerManager;
    camera: PerspectiveCamera;
    controls: FullFreeControls;
    cameraManager: CameraManager;
    controlsManager: ControlsManager;
    effectComposer: EffectComposer;
    pass: any;
    mixer: AnimationMixer;
    selectModel: Sbm | Model | null;
    _loop: null | number;
    postRender: Map<string, Function>;
    constructor(options: ViewportOptions);
    /**
     ***************************** background ***************************
     */
    setSphereSkyBackground(imgUrl: string): void;
    setSkyBackground(dirPath: string, fileNames: Array<string>): void;
    setBackgroundColor(color: IColor): void;
    setBackgroundImage(imgUrl: string): void;
    /**
     ***************************** modelAnimation ***************************
     */
    playModelAnimation(model: Model, animation: number | AnimationClip | ModelAnimationFindFunc): AnimationAction | undefined;
    stopModelAnimation(model: Model, animation: number | AnimationClip | ModelAnimationFindFunc): void;
    /**
     ***************************** render ***************************
     */
    render(fn: Function, callback?: Function): void;
    trigerRender(count?: number): void;
    autoRender(): void;
    animate(): void;
    getPositionByOffset(offset: any, z?: number): Vector3;
    getIntersects(event: MouseEvent | TouchEvent | OffsetPoint, objects?: import("../Library/BaseMesh").BaseMesh[]): Intersection[];
    rayClash(startPoint?: Vector3, dir?: Vector3, objects?: import("../Library/BaseMesh").BaseMesh[]): Intersection[];
    setHoverEnabled(enabled: boolean): void;
    clearSignals(): void;
    dispose(): void;
    _signalsEventListen(): void;
    _containerAddEventListener(container: HTMLElement): void;
    /**
     * 触发场景交互事件
     * @param {SceneEventType}               eventType 事件类型 hover | click | dblClick | rightClick
     * @param {MouseEvent | TouchEvent} event     鼠标事件对象 或 触摸事件对象
     */
    _triggerSceneEventInAllObject(eventType: SceneEventType, event: MouseEvent | TouchEvent): void;
    _getManagerScene(type: string): Object3D;
}
export default Viewport;
