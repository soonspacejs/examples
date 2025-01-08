import { NavMesh } from '@recast-navigation/core';
import { BufferGeometry, Material, Mesh, Object3D } from 'three';
export type NavMeshHelperParams = {
    navMeshMaterial?: Material;
};
export declare class NavMeshHelper extends Object3D {
    navMesh: NavMesh;
    mesh: Mesh;
    navMeshMaterial: Material;
    navMeshGeometry: BufferGeometry;
    constructor(navMesh: NavMesh, params?: NavMeshHelperParams);
    /**
     * Update the three debug nav mesh.
     *
     * This should be called after updating the nav mesh.
     */
    update(): void;
}
