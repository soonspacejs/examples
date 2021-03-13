import { Box3, Vector3, Euler, Mesh, Geometry, BufferGeometry, Material } from 'three';
import { Position, Rotation, Scale, Level, AnimationOptions, AnimationReturn } from '../Interface';
interface BaseMeshInfo {
    id: string | number;
    name?: string;
    level?: Level;
    visible?: boolean;
    position?: Position;
    rotation?: Rotation;
    scale?: Scale;
    userData?: any;
}
declare class BaseMesh extends Mesh {
    sid: string | number;
    stype: string;
    handleHide: boolean;
    level: Level;
    isEventPropagation: boolean;
    constructor(geometry: Geometry | BufferGeometry, material: Material, param?: BaseMeshInfo, type?: string);
    show(): void;
    hide(): void;
    setMove(position: Position | Vector3, options?: AnimationOptions): Promise<AnimationReturn<Position>>;
    setRotate(rotation: Rotation | Euler, options?: AnimationOptions): Promise<AnimationReturn<Rotation>>;
    setScale(scale: Scale | Vector3, options?: AnimationOptions): Promise<AnimationReturn<Scale>>;
    getBoundingBox(): Box3;
    eventPropagation(): void;
}
export { BaseMesh, BaseMeshInfo };
