import { IColor, Position, Rotation, AxisEnum } from './base';
import { AnimationOptions } from './animation';
import { BaseObject3D } from '../Library';
import { GridHelperOptions } from './manager';
interface CameraViewpointData {
    position: Position;
    rotation: Rotation;
}
interface FlyToOptions extends AnimationOptions {
    padding?: number;
}
interface SurroundOptions {
    speed?: number;
    angle?: number;
}
interface LabelOptions {
    mode?: 'scene' | 'screen';
    viewpoint?: string;
    extendScale?: number;
}
interface InternalOptions {
    enableRenderCss2D: boolean;
    enableRenderCss2DHalf: boolean;
    enableRenderCss3D: boolean;
    [x: string]: boolean;
}
interface ClippingOptions {
    axis: AxisEnum;
    position: number;
    isForward: boolean;
}
interface SelectModelOptions<TOptions> {
    objects: BaseObject3D[];
    options?: TOptions;
}
interface EdgeSelectOptions {
    color?: number | string;
    hideColor?: number | string;
    edgeThickness?: number;
    edgeStrength?: number;
    pulsePeriod?: number;
}
interface StrokeSelectOptions {
    isOpacityShow: boolean;
    color: IColor;
    opacity: number;
    edgeColor: IColor;
    edgeOpacity: number;
}
interface OpacitySelectOptions {
    color?: number | string;
    opacity?: number;
}
interface HighlightSelectOptions extends OpacitySelectOptions {
}
interface EmissiveSelectOptions extends OpacitySelectOptions, AnimationOptions {
    isAnimation?: boolean;
    minOpacity?: number;
    maxOpacity?: number;
}
interface FogOptions {
    color?: IColor;
    near?: number;
    far?: number;
}
interface ViewportOptions {
    showInfo?: boolean;
    showGrid?: boolean | GridHelperOptions;
    background?: {
        color?: IColor | null;
        alpha?: boolean;
        img?: string;
        skyBox?: string | {
            dirPath: string;
            fileNames: string[];
        };
    };
    hoverEnabled?: boolean;
    closeWarnLog?: boolean;
    fog?: boolean | FogOptions;
    useIndexedDB?: boolean;
    logarithmicDepthBuffer?: boolean;
}
interface ViewportState {
    useFreq: number;
    animationTotal: number;
    nextRender: boolean;
}
export { CameraViewpointData, FlyToOptions, SurroundOptions, LabelOptions, InternalOptions, ClippingOptions, SelectModelOptions, EdgeSelectOptions, StrokeSelectOptions, OpacitySelectOptions, HighlightSelectOptions, EmissiveSelectOptions, FogOptions, ViewportOptions, ViewportState };
