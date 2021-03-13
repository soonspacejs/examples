import Viewport from '../Viewport';
import LightManage from './LightManage';
import SbmManage from './SbmManage';
import ModelManage from './ModelManage';
import PoiManage from './PoiManage';
import PoiNodeManage from './PoiNodeManage';
import PaintManage from './PaintManage';
import TopologyManage from './TopologyManage';
import HelperManage from './HelperManage';
import PluginObjectManage from './PluginObjectManage';
interface ManagerStore {
    LightManager: LightManage;
    sbmManager: SbmManage;
    modelManager: ModelManage;
    poiManager: PoiManage;
    poiNodeManager: PoiNodeManage;
    paintManager: PaintManage;
    topologyManager: TopologyManage;
    helperManager: HelperManage;
    pluginObjectManage: PluginObjectManage;
}
declare class Manager {
    needUpdate: boolean;
    readonly store: ManagerStore;
    readonly postUpdate: Function[];
    constructor(viewport: Viewport);
    render(): void;
    clearObject(): void;
    clear(): void;
    _addEventHandeler(): void;
}
export { ManagerStore };
export default Manager;
