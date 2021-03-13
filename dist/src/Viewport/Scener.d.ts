import { Scene, Object3D } from 'three';
import { BaseObject3D, BaseMesh } from '../Library';
import { EdgeSelectOptions, StrokeSelectOptions, OpacitySelectOptions, HighlightSelectOptions, EmissiveSelectOptions, FogOptions } from '../Interface';
declare class Scener {
    scene: Scene;
    selectedObjects: {
        edge: BaseObject3D[];
        stroke: BaseObject3D[];
        opacity: BaseObject3D[];
        highlight: BaseObject3D[];
        emissive: BaseObject3D[];
    };
    intersectsList: {
        meshOfModelList: BaseMesh[];
        poiIconList: BaseMesh[];
        otherObjList: BaseMesh[];
        getAll: () => BaseMesh[];
    };
    constructor();
    addObject(object: Object3D, parent?: Object3D): void;
    removeObject(object: Object3D): void;
    openSceneFog(options?: FogOptions): void;
    closeSceneFog(): void;
    edgeShow(object: BaseObject3D | BaseObject3D[], options?: EdgeSelectOptions): Promise<void>;
    unEdgeShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    strokeShow(object: BaseObject3D | BaseObject3D[], options?: StrokeSelectOptions): Promise<void | void[]>;
    unStrokeShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    opacityShow(object: BaseObject3D | BaseObject3D[], options?: OpacitySelectOptions): Promise<void | void[]>;
    unOpacityShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    highlightShow(object: BaseObject3D | BaseObject3D[], options?: HighlightSelectOptions): Promise<void | void[]>;
    unHighlightShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    emissiveShow(object: BaseObject3D | BaseObject3D[], options?: EmissiveSelectOptions): Promise<void | void[]>;
    unEmissiveShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    _triggerObjectAdded(object: Object3D): void;
}
export default Scener;
