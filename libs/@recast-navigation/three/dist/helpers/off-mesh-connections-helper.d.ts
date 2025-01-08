import { OffMeshConnectionParams } from '@recast-navigation/core';
import { LineBasicMaterial, Material, Object3D } from 'three';
export type OffMeshConnectionsHelperParams = {
    entryCircleMaterial?: Material;
    exitCircleMaterial?: Material;
    lineMaterial?: LineBasicMaterial;
};
export declare class OffMeshConnectionsHelper extends Object3D {
    offMeshConnections: OffMeshConnectionParams[];
    entryCircleMaterial: Material;
    exitCircleMaterial: Material;
    lineMaterial: LineBasicMaterial;
    constructor(offMeshConnections: OffMeshConnectionParams[], params?: OffMeshConnectionsHelperParams);
    /**
     * Update the three debug view of the off mesh connections.
     */
    update(): void;
}
