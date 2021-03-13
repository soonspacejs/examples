interface AnimationOptions {
    duration?: number;
    delay?: number;
    repeat?: number | boolean;
}
interface AnimationReturn<T> {
    source: T;
    target: T;
}
export { AnimationOptions, AnimationReturn };
