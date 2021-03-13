/**
  ____                    ____
 / ___|  ___   ___  _ __ / ___| _ __   __ _  ___ ___
 \___ \ / _ \ / _ \| '_ \\___ \| '_ \ / _` |/ __/ _ \
  ___) | (_) | (_) | | | |___) | |_) | (_| | (_|  __/
 |____/ \___/ \___/|_| |_|____/| .__/ \__,_|\___\___|
                               |_|
*/
import * as shared from './Shared';
import Animation from './Animation';
import * as library from './Library';
import { BaseObject3D, Sbm, SbmInfo, Model, ModelInfo, Poi, PoiInfo, PoiNode, PoiNodeInfo, Topology, TopologyInfo, Group, GroupInfo, Paint, PaintInfo, LightInfo } from './Library';
import Viewport from './Viewport';
import Manager from './Manager';
import Signals from './Signals';
import PluginObjectManage from './Manager/PluginObjectManage';
import { PluginsConstructor, IColor, Position, Rotation, AnimationOptions, ModelAnimationFindFunc, Viewpoint, CameraViewpointData, TlyToViewpoint, FlyToOptions, SurroundOptions, LabelOptions, ClippingOptions, AxisEnum, EdgeSelectOptions, StrokeSelectOptions, OpacitySelectOptions, HighlightSelectOptions, EmissiveSelectOptions, FogOptions, UserDataPropertyFindFunc, AmbientLightOptions, DirectionalLightOptions, HemisphereLightOptions, ModelLoadingProgressCallback, GroupProgressCallback, ShortestPathInfo, TopologyInfoForGml, GridHelperOptions, GroundOptions } from './Interface';
import { Object3D, Vector3, Euler, Box3, AnimationClip, AnimationAction } from 'three';
import { InitOptions, InitEvents } from './init';
interface SoonSpaceConstructor {
    el: string;
    options?: InitOptions;
    events?: InitEvents;
}
export * from './Interface';
export { ManagerStore } from './Manager';
export { CameraManager, ControlsManager } from './Viewport/CameraControlerManager';
export { InitOptions, InitEvents, SoonSpaceConstructor };
export default class SoonSpace {
    readonly version: string;
    readonly options: InitOptions;
    readonly utils: typeof shared;
    readonly domElement: Element | null;
    readonly animation: typeof Animation;
    readonly library: typeof library;
    readonly signals: typeof Signals;
    readonly viewport: Viewport;
    readonly manager: Manager;
    readonly plugins: Record<string, any>;
    constructor(param: SoonSpaceConstructor);
    /******/
    /******/
    /******* Init methods */
    /******/
    /******/
    private _init;
    private _initEvents;
    private _initDefaultLight;
    /******/
    /******/
    /******* plugins methods */
    /******/
    /******/
    registerPlugin<TP>(plugin: PluginsConstructor<TP, this, PluginObjectManage>, name: string): TP;
    getPlugin<TP>(name: string): TP | null;
    /******/
    /******/
    /******* Viewport methods */
    /******/
    /******/
    /**
     * 设置开启鼠标悬浮
     * @param enabled
     */
    setHoverEnabled(enabled: boolean): void;
    /**
     * 设置背景色
     * @param color
     */
    setBackgroundColor(color: IColor): void;
    /**
     * 设置背景图
     * @param imgUrl
     */
    setBackgroundImage(imgUrl: string): void;
    /**
     * 设置球形天空背景
     * @param imgUrl
     */
    setSphereSkyBackground(imgUrl: string): void;
    /**
     * 设置天空背景
     * @param dirPath
     * @param fileNames
     */
    setSkyBackground(dirPath: string, fileNames: string[]): void;
    /**
     * 播放模型动画
     * @param model
     * @param animation
     */
    playModelAnimation(model: Model, animation: number | AnimationClip | ModelAnimationFindFunc): AnimationAction | undefined;
    /**
     * 停止播放模型动画
     * @param model
     * @param animation
     */
    stopModelAnimation(model: Model, animation: number | AnimationClip | ModelAnimationFindFunc): void;
    /**
     * 手动渲染一次场景
     * @param fn
     * @param callback
     */
    render(fn: Function, callback?: Function): void;
    /**
     * 清除事件信号监听
     */
    clearSignals(): void;
    /**
     * 销毁场景
     */
    dispose(): void;
    /******/
    /******/
    /******* Viewport CameraControlerManager methods */
    /******/
    /******/
    /**
     * 获取当前相机视角数据
     */
    getCameraViewpoint(): CameraViewpointData;
    /**
     * 设置相机视角数据
     */
    setCameraViewpoint(data: CameraViewpointData): void;
    /**
     * 相机飞向主场景
     * @param viewpoint
     * @param options
     */
    flyMainViewpoint(viewpoint?: TlyToViewpoint, options?: FlyToOptions): Promise<any>;
    /**
     * 相机飞向
     * @param position
     * @param rotation
     * @param options
     */
    flyTo(position: Position, rotation?: Viewpoint | Rotation | Euler, options?: AnimationOptions): Promise<any>;
    /**
     * 相机飞向包围盒
     * @param bbox
     * @param viewpoint
     * @param options
     */
    flyToBoundingBox(bbox: Box3, viewpoint?: TlyToViewpoint, options?: AnimationOptions): Promise<any>;
    /**
     * 相机飞向对象
     * @param object
     * @param viewpoint
     * @param options
     */
    flyToObj(object: Object3D, viewpoint?: TlyToViewpoint, options?: FlyToOptions): Promise<any>;
    /**
     * 相机在目标点上环绕
     * @param target
     * @param options
     */
    surroundOnTarget(target?: Vector3 | Position, options?: SurroundOptions): Promise<any>;
    /**
     * 相机在对象上环绕
     * @param object
     * @param options
     */
    surroundOnObject(object: BaseObject3D, options?: SurroundOptions): Promise<any>;
    /**
     * 获取对象的标签位置坐标
     * @param object
     * @param options
     */
    getObjectLabelPos(object: BaseObject3D, options: LabelOptions): Position;
    /******/
    /******/
    /******* Viewport RendererManager methods */
    /******/
    /******/
    /**
     * 场景切割
     * @param options
     */
    sceneClipping(options: ClippingOptions): void;
    /**
     * 切换场景切割
     * @param options
     */
    changeSceneClipping(options: ClippingOptions): void;
    /**
     * 移除场景切割
     * @param axis
     */
    removeSceneClipping(axis?: AxisEnum): void;
    /**
     * 模型切割
     * @param model
     * @param options
     */
    changeModelClipping(model: BaseObject3D, options: ClippingOptions): void;
    /**
     * 切换模型切割
     * @param model
     * @param options
     */
    modelClipping(model: BaseObject3D, options: ClippingOptions): void;
    /**
     * 移除模型切割
     * @param model
     * @param axis
     */
    removeModelClipping(model: BaseObject3D, axis?: string): void;
    /******/
    /******/
    /******* Viewport Scener methods */
    /******/
    /******/
    /**
     * 添加对象
     * @param object
     * @param parent
     */
    addObject(object: Object3D, parent?: Object3D): void;
    /**
     * 移除对象
     * @param object
     */
    removeObject(object: Object3D): void;
    /**
     * 开启场景雾化
     * @param options
     */
    openSceneFog(options?: FogOptions): void;
    /**
     * 关闭场景雾化
     */
    closeSceneFog(): void;
    /**
     * 轮廓显示模型
     * @param object
     * @param options
     */
    edgeShow(object: BaseObject3D | BaseObject3D[], options?: EdgeSelectOptions): Promise<void>;
    /**
     * 取消轮廓显示模型
     * @param objects
     */
    unEdgeShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /**
     * 描边显示模型
     * @param object
     * @param options
     */
    strokeShow(object: BaseObject3D | BaseObject3D[], options?: StrokeSelectOptions): Promise<void | void[]>;
    /**
     * 取消描边显示模型
     * @param objects
     */
    unStrokeShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /**
     * 透明显示模型
     * @param object
     * @param options
     */
    opacityShow(object: BaseObject3D | BaseObject3D[], options?: OpacitySelectOptions): Promise<void | void[]>;
    /**
     * 取消透明显示模型
     * @param objects
     */
    unOpacityShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /**
     * 高亮显示模型
     * @param object
     * @param options
     */
    highlightShow(object: BaseObject3D | BaseObject3D[], options?: HighlightSelectOptions): Promise<void | void[]>;
    /**
     * 取消高亮显示模型
     * @param objects
     */
    unHighlightShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /**
     * 自发光显示模型
     * @param object
     * @param options
     */
    emissiveShow(object: BaseObject3D | BaseObject3D[], options?: EmissiveSelectOptions): Promise<void | void[]>;
    /**
     * 取消自发光显示模型
     * @param objects
     */
    unEmissiveShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /******/
    /******/
    /******* Manager methods */
    /******/
    /******/
    /**
     * 清除除灯光外所有对象
     */
    clearObject(): void;
    /**
     * 清除所有对象
     */
    clear(): void;
    /******/
    /******/
    /******* Light methods */
    /******/
    /******/
    /**
     * 创建环境关
     * @param options
     */
    createAmbientLight(options?: AmbientLightOptions): import("three").AmbientLight;
    /**
     * 创建平行光
     * @param options
     */
    createDirectionalLight(options?: DirectionalLightOptions): import("three").DirectionalLight;
    /**
     * 创建半球光
     * @param options
     */
    createHemisphereLight(options?: HemisphereLightOptions): import("three").HemisphereLight;
    /**
     * 根据 id 查询 Light 对象
     * @param id
     */
    getLightById<T extends Object3D>(id: LightInfo['id']): T | null;
    /**
     * 根据 name 查询 Light 对象
     * @param name
     */
    getLightByName<T extends Object3D>(name: string): T[];
    /**
     * 根据 id 移除 Light 对象
     * @param id
     */
    removeLightById(id: LightInfo['id']): boolean;
    /******/
    /******/
    /******* Sbm methods */
    /******/
    /******/
    /**
     * 加载 Sbm 模型
     * @param sbmInfo
     * @param parent
     * @param onProgress
     */
    loadSbm(sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    /**
     * 解析 Sbm 模型
     * @param data
     * @param sbmInfo
     * @param onProgress
     */
    parseSbm(data: ArrayBuffer, sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    /**
     * 克隆 Sbm 模型
     * @param model
     * @param sbmInfo
     * @param parent
     */
    cloneSbm(model: Sbm, sbmInfo: SbmInfo, parent?: BaseObject3D | null): Promise<Sbm>;
    /**
     * 根据 id 查询 Sbm 模型
     * @param id
     */
    getSbmById(id: SbmInfo['id']): Sbm | null;
    /**
     * 根据 name 查询 Sbm 模型
     * @param name
     */
    getSbmByName(name: string): Sbm[];
    /**
     * 根据用户数据查询 Sbm 模型
     * @param name
     */
    getSbmByUserDataProperty(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Sbm[];
    /**
     * 根据 id 删除 Sbm 模型
     * @param id
     */
    removeSbmById(id: SbmInfo['id']): boolean;
    /**
     * 为 Sbm 创建组
     * @param groupInfo
     */
    createGroupForSbm(groupInfo: GroupInfo): Group;
    /**
     * 加载 Sbm 模型到组内
     * @param groupInfo
     * @param sbmInfoList
     * @param onProgress
     */
    loadSbmToGroup(groupInfo: GroupInfo, sbmInfoList: SbmInfo[], onProgress?: GroupProgressCallback): Promise<Group>;
    /**
     * 为已有的组添加 Sbm 模型
     * @param groupId
     * @param sbmInfoList
     * @param onProgress
     */
    addSbmForGroup(groupId: GroupInfo['id'], sbmInfoList: SbmInfo[], onProgress?: GroupProgressCallback): Promise<Group | null>;
    /**
     * 创建 SSbm 组，从 xml 文件资源
     * @param groupInfo
     * @param url
     */
    createSbmGroupFromXml(groupInfo: GroupInfo, url: string): Promise<unknown>;
    /**
     * 根据 id 查询 Sbm 模型组
     * @param id
     */
    getSbmGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Sbm 模型组
     * @param name
     */
    getSbmGroupByName(name: string): Group[];
    /**
     * 根据 id 删除 Sbm 模型组
     * @param id
     */
    removeSbmGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Sbm 模型
     */
    clearSbm(): void;
    /**
     * 获取所有 Sbm 模型
     */
    getAllSbm(): Sbm[];
    /**
     * 显示所有 Sbm 模型
     */
    showAllSbm(): void;
    /**
     * 隐藏所有 Sbm 模型
     */
    hideAllSbm(): void;
    /******/
    /******/
    /******* Model methods */
    /******/
    /******/
    /**
     * 加载 Model 模型
     * @param modelInfo
     * @param parent
     * @param onProgress
     */
    loadModel(modelInfo: ModelInfo): Promise<Model>;
    /**
     * 克隆 Model 模型
     * @param model
     * @param modelInfo
     * @param parent
     */
    cloneModel(model: Model, modelInfo: ModelInfo, parent?: BaseObject3D | null): Promise<Model>;
    /**
     * 根据 id 查询 Model 模型
     * @param id
     */
    getModelById(id: ModelInfo['id']): Model | null;
    /**
     * 根据 name 查询 Model 模型
     * @param name
     */
    getModelByName(name: string): Model[];
    /**
     * 根据用户数据查询 Model 模型
     * @param name
     */
    getModelByUserDataProperty(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Model[];
    /**
     * 根据 id 删除 Model 模型
     * @param id
     */
    removeModelById(id: ModelInfo['id']): boolean;
    /**
     * 为 Model 创建组
     * @param groupInfo
     */
    createGroupForModel(groupInfo: GroupInfo): Group;
    /**
     * 加载 Model 模型到组内
     * @param groupInfo
     * @param modelInfo
     * @param onProgress
     */
    loadModelToGroup(groupInfo: GroupInfo, modelInfo: ModelInfo[]): Promise<Group>;
    /**
     * 为已有的组添加 Model 模型
     * @param groupId
     * @param modelInfo
     * @param onProgress
     */
    addModelForGroup(groupId: GroupInfo['id'], modelInfo: ModelInfo[]): Promise<Group | null>;
    /**
     * 根据 id 查询 Model 模型组
     * @param id
     */
    getModelGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Model 模型组
     * @param name
     */
    getModelGroupByName(name: string): Group[];
    /**
     * 根据 id 删除 Model 模型组
     * @param id
     */
    removeModelGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Model 模型
     */
    clearModel(): void;
    /**
     * 获取所有 Model 模型
     */
    getAllModel(): Model[];
    /**
     * 显示所有 Model 模型
     */
    showAllModel(): void;
    /**
     * 隐藏所有 Model 模型
     */
    hideAllModel(): void;
    /******/
    /******/
    /******* Poi methods */
    /******/
    /******/
    /**
     * 创建 Poi
     * @param info
     */
    createPoi(info: PoiInfo): Poi;
    /**
     * 根据 id 查询 Poi
     * @param id
     */
    getPoiById(id: PoiInfo['id']): Poi | null;
    /**
     * 根据 name 查询 Poi
     * @param id
     */
    getPoiByName(name: string): Poi[];
    /**
     * 根据用户数据查询 Poi
     * @param name
     */
    getPoiByUserDataPropert(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Poi[];
    /**
     * 根据 id 删除 Poi
     * @param id
     */
    removePoiById(id: PoiInfo['id']): boolean;
    /**
     * 为 Poi 创建组
     * @param groupInfo
     */
    createGroupForPoi(groupInfo: GroupInfo): Group;
    /**
     * 创建 Poi 到组内
     * @param groupInfo
     * @param poiInfo
     */
    createPoiToGroup(groupInfo: GroupInfo, poiInfo: PoiInfo[]): Group;
    /**
     * 为已有的组添加 Poi
     * @param groupInfo
     * @param poiInfo
     */
    addPoiForGroup(groupId: GroupInfo['id'], poiInfo: PoiInfo[]): Group | null;
    /**
     * 根据 id 查询 Poi 组
     * @param id
     */
    getPoiGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Poi 组
     * @param name
     */
    getPoiGroupByName(name: string): Group[];
    /**
     * 根据 id 删除 Poi 组
     * @param id
     */
    removePoiGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Poi
     */
    clearPoi(): void;
    /**
     * 获取所有 Poi 模型
     */
    getAllPoi(): Poi[];
    /**
     * 显示所有 Poi
     */
    showAllPoi(): void;
    /**
     * 隐藏所有 Poi
     */
    hideAllPoi(): void;
    /******/
    /******/
    /******* PoiNode methods */
    /******/
    /******/
    /**
     * 创建 PoiNode
     * @param info
     */
    createPoiNode(info: PoiNodeInfo): PoiNode;
    /**
     * 根据 id 查询 PoiNode
     * @param id
     */
    getPoiNodeById(id: PoiNodeInfo['id']): PoiNode | null;
    /**
     * 根据 name 查询 PoiNode
     * @param id
     */
    getPoiNodeByName(name: string): PoiNode[];
    /**
     * 根据用户数据查询 PoiNode
     * @param name
     */
    getPoiNodeByUserDataPropert(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): PoiNode[];
    /**
     * 根据 id 删除 PoiNode
     * @param id
     */
    removePoiNodeById(id: PoiNodeInfo['id']): boolean;
    /**
     * 为 PoiNode 创建组
     * @param groupInfo
     */
    createGroupForPoiNode(groupInfo: GroupInfo): Group;
    /**
     * 创建 PoiNode 到组内
     * @param groupInfo
     * @param poiNodeInfo
     */
    createPoiNodeToGroup(groupInfo: GroupInfo, poiNodeInfo: PoiNodeInfo[]): Group;
    /**
     * 为已有的组添加 PoiNode
     * @param groupInfo
     * @param poiNodeInfo
     */
    addPoiNodeForGroup(groupId: GroupInfo['id'], poiNodeInfo: PoiNodeInfo[]): Group | null;
    /**
     * 根据 id 查询 PoiNode 组
     * @param id
     */
    getPoiNodeGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 PoiNode 组
     * @param name
     */
    getPoiNodeGroupByName(name: string): Group[];
    /**
     * 根据 id 删除 PoiNode 组
     * @param id
     */
    removePoiNodeGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 PoiNode
     */
    clearPoiNode(): void;
    /**
     * 获取所有 PoiNode 模型
     */
    getAllPoiNode(): PoiNode[];
    /**
     * 显示所有 PoiNode
     */
    showAllPoiNode(): void;
    /**
     * 隐藏所有 PoiNode
     */
    hideAllPoiNode(): void;
    /******/
    /******/
    /******* Paint methods */
    /******/
    /******/
    /**
     * 创建 Paint
     * @param info
     */
    createPaint(info: PaintInfo): Paint;
    /**
     * 根据 id 查询 Paint
     * @param id
     */
    getPaintById(id: PaintInfo['id']): Paint | null;
    /**
     * 根据 name 查询 Paint
     * @param id
     */
    getPaintByName(name: string): Paint[];
    /**
     * 根据用户数据查询 Paint
     * @param name
     */
    getPaintByUserDataPropert(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Paint[];
    /**
     * 根据 id 删除 Paint
     * @param id
     */
    removePaintById(id: PaintInfo['id']): boolean;
    /**
     * 为 Paint 创建组
     * @param groupInfo
     */
    createGroupForPaint(groupInfo: GroupInfo): Group;
    /**
     * 创建 Paint 到组内
     * @param groupInfo
     * @param paintInfo
     */
    createPaintToGroup(groupInfo: GroupInfo, paintInfo: PaintInfo[]): Group;
    /**
     * 为已有的组添加 Paint
     * @param groupInfo
     * @param paintInfo
     */
    addPaintForGroup(groupId: GroupInfo['id'], paintInfo: PaintInfo[]): Group | null;
    /**
     * 根据 id 查询 Paint 组
     * @param id
     */
    getPaintGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Paint 组
     * @param name
     */
    getPaintGroupByName(name: string): Group[];
    /**
     * 根据 id 删除 Paint 组
     * @param id
     */
    removePaintGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Paint
     */
    clearPaint(): void;
    /**
     * 获取所有 Paint 模型
     */
    getAllPaint(): Paint[];
    /**
     * 显示所有 Paint
     */
    showAllPaint(): void;
    /**
     * 隐藏所有 Paint
     */
    hideAllPaint(): void;
    /******/
    /******/
    /******* Topology methods */
    /******/
    /******/
    /**
     * 获取最短路径
     * @param topology
     * @param info
     */
    getShortestPath(topology: Topology, info: ShortestPathInfo): Topology;
    /**
     * 创建 Topology 组，从 gml 文件资源
     * @param groupInfo
     * @param gmlUrl
     */
    createTopologyGroupFromGml(groupInfo: GroupInfo, topologyInfo: TopologyInfoForGml): Promise<Group>;
    /**
     * 创建 Topology
     * @param info
     */
    createTopology(info: TopologyInfo): Topology;
    /**
     * 根据 id 查询 Topology
     * @param id
     */
    getTopologyById(id: TopologyInfo['id']): Topology | null;
    /**
     * 根据 name 查询 Topology
     * @param id
     */
    getTopologyByName(name: string): Topology[];
    /**
     * 根据用户数据查询 Topology
     * @param name
     */
    getTopologyByUserDataPropert(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Topology[];
    /**
     * 根据 id 删除 Topology
     * @param id
     */
    removeTopologyById(id: TopologyInfo['id']): boolean;
    /**
     * 为 Topology 创建组
     * @param groupInfo
     */
    createGroupForTopology(groupInfo: GroupInfo): Group;
    /**
     * 创建 Topology 到组内
     * @param groupInfo
     * @param topologyInfo
     */
    createTopologyToGroup(groupInfo: GroupInfo, topologyInfo: TopologyInfo[]): Group;
    /**
     * 为已有的组添加 Topology
     * @param groupInfo
     * @param topologyInfo
     */
    addTopologyForGroup(groupId: GroupInfo['id'], topologyInfo: TopologyInfo[]): Group | null;
    /**
     * 根据 id 查询 Topology 组
     * @param id
     */
    getTopologyGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Topology 组
     * @param name
     */
    getTopologyGroupByName(name: string): Group[];
    /**
     * 根据 id 删除 Topology 组
     * @param id
     */
    removeTopologyGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Topology
     */
    clearTopology(): void;
    /**
     * 获取所有 Topology 模型
     */
    getAllTopology(): Topology[];
    /**
     * 显示所有 Topology
     */
    showAllTopology(): void;
    /**
     * 隐藏所有 Topology
     */
    hideAllTopology(): void;
    /******/
    /******/
    /******* Helper methods */
    /******/
    /******/
    /**
     * 添加网格辅助器
     * @param options
     */
    addGridHelper(options?: GridHelperOptions): import("three").GridHelper;
    /**
     * 添加轴线辅助器
     * @param axisLength
     */
    addAxishelper(axisLength?: number): import("three").AxesHelper;
    /**
     * 添加包围盒辅助器
     * @param box
     * @param color
     * @returns
     */
    addBoxHelper(box: Box3, color?: IColor): import("three").Box3Helper;
    /**
     * 创建地面
     * @param options
     * @returns
     */
    createGround(options: GroundOptions): library.BaseMesh;
}
