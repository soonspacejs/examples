import { Mesh, Intersection } from 'three';
import { Poi, Sbm, Model } from '../Library';
import { Position, SceneEventType } from './base';
interface ScenePoiIntersect {
    poi: Poi;
    sourceData: Intersection;
}
interface SceneModelIntersect {
    model: Sbm | Model;
    sourceData: Intersection;
}
interface ModelEventParam {
    target: Sbm | Model;
    currentTarget: Mesh;
    intersects: SceneModelIntersect[];
}
interface SceneClickParam {
    type: SceneEventType;
    event: MouseEvent | TouchEvent;
}
interface SceneGlobalEvents {
    modelHover?: (param: ModelEventParam) => void;
    modelUnHover?: (model: Sbm | Model) => void;
    modelClick?: (param: ModelEventParam) => void;
    modelRightClick?: (param: ModelEventParam) => void;
    modelDblClick?: (param: ModelEventParam) => void;
    poiHover?: (poi: Poi) => void;
    poiClick?: (poi: Poi) => void;
    poiRightClick?: (poi: Poi) => void;
    poiDblClick?: (poi: Poi) => void;
    selectPosition?: (position: Position) => void;
    sceneClick?: (param: SceneClickParam) => void;
    resize?: () => void;
}
export { ScenePoiIntersect, SceneModelIntersect, ModelEventParam, SceneClickParam, SceneGlobalEvents };
