import { SoloNavMeshGeneratorConfig, TileCacheGeneratorConfig, TiledNavMeshGeneratorConfig } from '@recast-navigation/generators';
import { Mesh } from 'three';
export declare const threeToSoloNavMesh: (meshes: Mesh[], navMeshGeneratorConfig?: Partial<SoloNavMeshGeneratorConfig>, keepIntermediates?: boolean) => import("@recast-navigation/generators").GenerateSoloNavMeshResult;
export declare const threeToTiledNavMesh: (meshes: Mesh[], navMeshGeneratorConfig?: Partial<TiledNavMeshGeneratorConfig>, keepIntermediates?: boolean) => import("@recast-navigation/generators").GenerateTiledNavMeshResult;
export declare const threeToTileCache: (meshes: Mesh[], navMeshGeneratorConfig?: Partial<TileCacheGeneratorConfig>, keepIntermediates?: boolean) => import("@recast-navigation/generators").TileCacheGeneratorResult;
