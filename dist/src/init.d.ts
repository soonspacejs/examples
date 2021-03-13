import { ViewportOptions, SceneGlobalEvents } from './Interface';
interface InitOptions extends ViewportOptions {
}
interface InitEvents extends SceneGlobalEvents {
}
declare function initDefaultOption(userOptions: InitOptions): InitOptions;
export { InitOptions, InitEvents, initDefaultOption };
