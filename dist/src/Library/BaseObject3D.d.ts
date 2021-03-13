import { Object3D, Box3, Vector3, Euler } from 'three';
import { Position, Rotation, Scale, Level, AnimationOptions, AnimationReturn } from '../Interface';
interface BaseObject3DInfo {
    id: string | number;
    name?: string;
    level?: Level;
    visible?: boolean;
    position?: Position;
    rotation?: Rotation;
    scale?: Scale;
    userData?: any;
}
declare class BaseObject3D extends Object3D {
    sid: string | number;
    stype: string;
    handleHide: boolean;
    level: Level;
    isEventPropagation: boolean;
    constructor(param?: BaseObject3DInfo, type?: string);
    show(): void;
    hide(): void;
    setMove(position: Position | Vector3, options?: AnimationOptions): Promise<AnimationReturn<Position>>;
    setRotate(rotation: Rotation | Euler, options?: AnimationOptions): Promise<AnimationReturn<Rotation>>;
    setScale(scale: Scale | Vector3, options?: AnimationOptions): Promise<AnimationReturn<Scale>>;
    getBoundingBox(): Box3;
    eventPropagation(): void;
}
export { BaseObject3D, BaseObject3DInfo };
