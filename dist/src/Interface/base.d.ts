interface IVector2 {
    x: number;
    y: number;
}
interface IVector3 extends IVector2 {
    z: number;
}
interface Position extends IVector3 {
}
interface Rotation extends IVector3 {
}
interface Scale extends IVector3 {
}
interface Level {
    max: number | null;
    min: number | null;
}
interface OffsetPoint {
    offsetX: number;
    offsetY: number;
}
declare type IColor = string | number;
declare type UnknownProps = Record<string, any>;
declare type Viewpoint = 'top' | 'bottom' | 'front' | 'back' | 'left' | 'right' | 'frontTop' | 'backTop' | 'leftTop' | 'rightTop' | 'leftFrontTop' | 'rightFrontTop' | 'leftBackTop' | 'rightBackTop' | 'TOP' | 'BOTTOM' | 'FRONT' | 'BACK' | 'LEFT' | 'RIGHT' | 'FRONTTOP' | 'BACKTOP' | 'LEFTTOP' | 'RIGHTTOP' | 'LEFTFRONTTOP' | 'RIGHTFRONTTOP' | 'LEFTBACKTOP' | 'RIGHTBACKTOP';
declare type TlyToViewpoint = 'current' | 'CURRENT' | Viewpoint;
declare type AxisEnum = 'x' | 'y' | 'z';
declare type SceneEventType = 'hover' | 'click' | 'rightClick' | 'dblClick';
interface ObjectEvents<T> {
    onLoad?: ((object: T) => any) | null;
    onHover?: ((object: T) => any) | null;
    onUnHover?: ((object: T) => any) | null;
    onClick?: ((object: T) => any) | null;
    onDblClick?: ((object: T) => any) | null;
    onRightClick?: ((object: T) => any) | null;
}
export { IVector2, IVector3, Position, Rotation, Scale, Level, OffsetPoint, Viewpoint, TlyToViewpoint, IColor, UnknownProps, AxisEnum, SceneEventType, ObjectEvents };
