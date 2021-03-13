import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
interface PoiNodeInfo extends BaseObject3DInfo {
    type: '2d' | '2D' | '2.5d' | '2.5D' | '3d' | '3D';
    element: HTMLElement;
}
declare class PoiNode extends BaseObject3D {
    readonly elementType: string;
    element: HTMLElement;
    constructor(param: PoiNodeInfo);
    create(type: PoiNodeInfo['type']): void;
    _create2D(): void;
    _create2DHalf(): void;
    _create3D(): void;
    _setElementDisplay(visible: boolean): void;
}
export { PoiNode, PoiNodeInfo };
