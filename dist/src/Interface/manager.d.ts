import { IColor, IVector2, Position, Scale } from './base';
import { BaseObject3D, LightInfo, TopologyInfo } from '../Library';
interface UserDataPropertyFindFunc<T = BaseObject3D['userData']> {
    (userData: T): T;
}
interface BaseLightShadow {
    near?: number;
    far?: number;
    bias?: number;
    mapSize?: number;
}
interface BaseLightInfo extends LightInfo {
    id: string | number;
    name?: string;
    color?: IColor;
    intensity?: number;
}
interface AmbientLightOptions extends BaseLightInfo {
}
interface DirectionalLightOptions extends BaseLightInfo {
    position?: Position;
    target?: Position;
}
interface HemisphereLightOptions extends BaseLightInfo {
    skyColor?: IColor;
    groundColor?: IColor;
    position?: Position;
}
interface SpotLightOptions extends BaseLightInfo {
    position?: Position;
    target?: Position;
    distance?: number;
    shadow?: BaseLightShadow;
}
interface ModelLoadingProgress {
    total: number;
    loaded: number;
    timeStamp: number;
}
interface ModelLoadingProgressCallback {
    (progress: ModelLoadingProgress): void;
}
interface GroupProgress {
    modelTotal: number;
    loadingModelIndex: number;
    current: ModelLoadingProgress;
}
interface GroupProgressCallback {
    (groupProgress: GroupProgress): void;
}
interface TopologyInfoForGml {
    url: string;
    id?: string[];
    name?: string | string[];
    linkWidth?: number;
    linkColor?: IColor;
    renderNode?: boolean;
    nodeColor?: IColor;
}
interface ShortestPathInfo extends TopologyInfo {
    start: Position;
    end: Position;
}
interface GridHelperOptions {
    size?: number;
    divisions?: number;
    color?: IColor;
}
interface GroundOptions {
    imgUrl: string;
    id?: string;
    width?: number;
    height?: number;
    opacity?: number;
    position?: Position;
    rotation?: Position;
    scale?: Scale;
    repeat?: IVector2;
}
export { UserDataPropertyFindFunc, BaseLightShadow, BaseLightInfo, AmbientLightOptions, DirectionalLightOptions, HemisphereLightOptions, SpotLightOptions, ModelLoadingProgress, ModelLoadingProgressCallback, GroupProgress, GroupProgressCallback, TopologyInfoForGml, ShortestPathInfo, GridHelperOptions, GroundOptions, };
