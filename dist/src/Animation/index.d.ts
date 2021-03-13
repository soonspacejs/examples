import { Tween } from '@tweenjs/tween.js';
import { UnknownProps, AnimationOptions, AnimationReturn } from '../Interface';
declare function Animation<PropType extends UnknownProps>(source: PropType, target: PropType, option?: AnimationOptions, onUpdate?: (object: PropType, tween: Tween<PropType>) => void, onStart?: (tween: Tween<PropType>) => void): Promise<AnimationReturn<PropType>>;
export default Animation;
