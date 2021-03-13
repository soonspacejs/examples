import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { Icon, IconInfo } from './Icon';
import { SpriteMaterial, Box3 } from 'three';
import { ObjectEvents, Scale } from '../Interface';
interface PoiInfo extends BaseObject3DInfo, ObjectEvents<Poi> {
    url: string;
    nameScale?: Scale;
}
interface CanvasTextInfo {
    fontFamily?: string;
    fontSize?: number;
    color?: string;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
}
declare class Poi extends BaseObject3D implements ObjectEvents<Poi> {
    icon: Icon | null;
    text: Icon | null;
    onLoad: ((object: Poi) => any) | null;
    onHover: ((object: Poi) => any) | null;
    onUnHover: ((object: Poi) => any) | null;
    onClick: ((object: Poi) => any) | null;
    onDblClick: ((object: Poi) => any) | null;
    onRightClick: ((object: Poi) => any) | null;
    constructor(material: SpriteMaterial, param: PoiInfo);
    create(material: SpriteMaterial, info: PoiInfo): void;
    getBoundingBox(padding?: number): Box3;
    _createIcon(material: SpriteMaterial): void;
    _createText(info: IconInfo): void;
    _createCanvasText(text: string, info?: CanvasTextInfo): HTMLCanvasElement;
}
export { Poi, PoiInfo, CanvasTextInfo };
