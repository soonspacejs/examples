import { AnimationClip } from 'three';
interface ModelAnimationFindFunc {
    (animation: AnimationClip, index: number, obj: AnimationClip[]): void;
}
export { ModelAnimationFindFunc };
