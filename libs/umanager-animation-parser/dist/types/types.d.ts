import { AnimationModeType, IVector3 } from 'soonspacejs';
import { Tween } from 'three/examples/jsm/libs/tween.module.js';
export type TAnimationFrame = {
    position: IVector3;
    rotation: IVector3;
    scale: IVector3;
    duration: number;
    delay: number;
    repeat: number;
    yoyo: boolean;
    easing: AnimationModeType;
};
export type TTransformObject = Pick<TAnimationFrame, 'position' | 'rotation' | 'scale'>;
export type TTweenSource = {
    x: number;
    y: number;
    z: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
};
export type TTweenType = Tween<TTweenSource>;
export type TEventMap = {
    update: {
        source: TTweenSource;
        tween: TTweenType;
    };
    start: {
        tween: TTweenType;
    };
};
