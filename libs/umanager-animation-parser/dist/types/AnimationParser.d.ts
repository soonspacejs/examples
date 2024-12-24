import { EventDispatcher, Object3D } from 'three';
import SoonSpace from 'soonspacejs';
import { TAnimationFrame, TEventMap, TTransformObject, TTweenType } from './types';
declare class AnimationPlayer extends EventDispatcher<TEventMap> {
    readonly ssp: SoonSpace;
    readonly target: Object3D;
    tweenSet: Set<TTweenType>;
    constructor(ssp: SoonSpace, target: Object3D);
    initTransform(defaultTransform?: TTransformObject): TTransformObject;
    getInitialTransform(): TTransformObject | undefined;
    play(frames: TAnimationFrame[]): Promise<void>;
    stop(): void;
    reset(): void;
    dispose(): void;
}
export { AnimationPlayer };
