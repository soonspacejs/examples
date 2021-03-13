import { Object3D, AmbientLight, DirectionalLight, HemisphereLight, SpotLight } from 'three';
import DefaultManage from './DefaultManage';
import Viewport from '../Viewport';
import { AmbientLightOptions, DirectionalLightOptions, HemisphereLightOptions, SpotLightOptions } from '../Interface';
import { LightInfo } from '../Library';
declare class LightManage extends DefaultManage {
    constructor(viewport: Viewport);
    createAmbientLight(options?: AmbientLightOptions): AmbientLight;
    createDirectionalLight(options?: DirectionalLightOptions): DirectionalLight;
    createHemisphereLight(options?: HemisphereLightOptions): HemisphereLight;
    createSpotLight(options?: SpotLightOptions): SpotLight;
    getLightById<T extends Object3D>(id: LightInfo['id']): T | null;
    getLightByName<T extends Object3D>(name: string): T[];
}
export default LightManage;
