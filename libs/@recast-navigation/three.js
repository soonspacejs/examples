import { DebugDrawerUtils } from '@recast-navigation/core';
import * as THREE from 'three';
import { Object3D, MeshBasicMaterial, Vector3, Mesh, CylinderGeometry, BufferGeometry, BufferAttribute, LineBasicMaterial, CircleGeometry, CatmullRomCurve3, Line, BoxGeometry } from 'three';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { mergePositionsAndIndices, generateSoloNavMesh, generateTiledNavMesh, generateTileCache } from '@recast-navigation/generators';

const _color = new THREE.Color();
class DebugDrawer extends THREE.Group {
  pointGeometry = new THREE.SphereGeometry(0.02, 32, 32);
  constructor({
    triMaterial,
    pointMaterial,
    lineMaterial
  } = {}) {
    super();
    this.debugDrawerUtils = new DebugDrawerUtils();
    this.triMaterial = triMaterial ?? new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      depthWrite: false
    });
    this.pointMaterial = pointMaterial ?? new THREE.MeshBasicMaterial();
    this.lineMaterial = lineMaterial ?? new LineMaterial({
      color: 0xffffff,
      linewidth: 2,
      vertexColors: true,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -10
    });
  }
  drawPrimitives(primitives) {
    for (const primitive of primitives) {
      switch (primitive.type) {
        case 'points':
          this.drawPoints(primitive);
          break;
        case 'lines':
          this.drawLines(primitive);
          break;
        case 'tris':
          this.drawTris(primitive);
          break;
        case 'quads':
          this.drawQuads(primitive);
          break;
      }
    }
  }
  drawHeightfieldSolid(hf) {
    const primitives = this.debugDrawerUtils.drawHeightfieldSolid(hf);
    this.drawPrimitives(primitives);
  }
  drawHeightfieldWalkable(hf) {
    const primitives = this.debugDrawerUtils.drawHeightfieldWalkable(hf);
    this.drawPrimitives(primitives);
  }
  drawCompactHeightfieldSolid(chf) {
    const primitives = this.debugDrawerUtils.drawCompactHeightfieldSolid(chf);
    this.drawPrimitives(primitives);
  }
  drawCompactHeightfieldRegions(chf) {
    const primitives = this.debugDrawerUtils.drawCompactHeightfieldRegions(chf);
    this.drawPrimitives(primitives);
  }
  drawCompactHeightfieldDistance(chf) {
    const primitives = this.debugDrawerUtils.drawCompactHeightfieldDistance(chf);
    this.drawPrimitives(primitives);
  }
  drawHeightfieldLayer(layer, idx) {
    const primitives = this.debugDrawerUtils.drawHeightfieldLayer(layer, idx);
    this.drawPrimitives(primitives);
  }
  drawHeightfieldLayers(lset) {
    const primitives = this.debugDrawerUtils.drawHeightfieldLayers(lset);
    this.drawPrimitives(primitives);
  }
  drawRegionConnections(cset, alpha = 1) {
    const primitives = this.debugDrawerUtils.drawRegionConnections(cset, alpha);
    this.drawPrimitives(primitives);
  }
  drawRawContours(cset, alpha = 1) {
    const primitives = this.debugDrawerUtils.drawRawContours(cset, alpha);
    this.drawPrimitives(primitives);
  }
  drawContours(cset, alpha = 1) {
    const primitives = this.debugDrawerUtils.drawContours(cset, alpha);
    this.drawPrimitives(primitives);
  }
  drawPolyMesh(mesh) {
    const primitives = this.debugDrawerUtils.drawPolyMesh(mesh);
    this.drawPrimitives(primitives);
  }
  drawPolyMeshDetail(dmesh) {
    const primitives = this.debugDrawerUtils.drawPolyMeshDetail(dmesh);
    this.drawPrimitives(primitives);
  }
  drawNavMesh(mesh, flags = 0) {
    const primitives = this.debugDrawerUtils.drawNavMesh(mesh, flags);
    this.drawPrimitives(primitives);
  }
  drawNavMeshWithClosedList(mesh, query, flags = 0) {
    const primitives = this.debugDrawerUtils.drawNavMeshWithClosedList(mesh, query, flags);
    this.drawPrimitives(primitives);
  }
  drawNavMeshNodes(query) {
    const primitives = this.debugDrawerUtils.drawNavMeshNodes(query);
    this.drawPrimitives(primitives);
  }
  drawNavMeshBVTree(mesh) {
    const primitives = this.debugDrawerUtils.drawNavMeshBVTree(mesh);
    this.drawPrimitives(primitives);
  }
  drawNavMeshPortals(mesh) {
    const primitives = this.debugDrawerUtils.drawNavMeshPortals(mesh);
    this.drawPrimitives(primitives);
  }
  drawNavMeshPolysWithFlags(mesh, flags, col) {
    const primitives = this.debugDrawerUtils.drawNavMeshPolysWithFlags(mesh, flags, col);
    this.drawPrimitives(primitives);
  }
  drawNavMeshPoly(mesh, ref, col) {
    const primitives = this.debugDrawerUtils.drawNavMeshPoly(mesh, ref, col);
    this.drawPrimitives(primitives);
  }
  // todo:
  // - drawTileCacheLayerAreas
  // - drawTileCacheLayerRegions
  // - drawTileCacheContours
  // - drawTileCachePolyMesh
  reset() {
    for (const child of this.children) {
      if (child instanceof THREE.Mesh || child instanceof LineSegments2) {
        child.geometry.dispose();
      }
    }
    this.clear();
  }
  dispose() {
    this.debugDrawerUtils.dispose();
    this.reset();
    this.pointGeometry.dispose();
    this.triMaterial.dispose();
    this.pointMaterial.dispose();
    this.lineMaterial.dispose();
  }
  drawPoints(primitive) {
    const geometry = this.pointGeometry;
    const instancedMesh = new THREE.InstancedMesh(geometry, this.pointMaterial, primitive.vertices.length / 3);
    for (let point = 0; point < primitive.vertices.length / 7; point++) {
      const [x, y, z, r, g, b] = primitive.vertices[point];
      instancedMesh.setMatrixAt(point, new THREE.Matrix4().setPosition(x, y, z));
      instancedMesh.setColorAt(point, _color.setRGB(r, g, b));
    }
    instancedMesh.instanceMatrix.needsUpdate = true;
    this.add(instancedMesh);
  }
  drawLines(primitive) {
    const lineSegmentsGeometry = new LineSegmentsGeometry();
    const positions = [];
    const colors = [];
    for (let i = 0; i < primitive.vertices.length; i += 2) {
      const [x1, y1, z1, r1, g1, b1] = primitive.vertices[i];
      const [x2, y2, z2, r2, g2, b2] = primitive.vertices[i + 1];
      positions.push(x1, y1, z1);
      positions.push(x2, y2, z2);
      colors.push(r1, g1, b1);
      colors.push(r2, g2, b2);
    }
    lineSegmentsGeometry.setPositions(positions);
    lineSegmentsGeometry.setColors(colors);
    const lineSegments = new LineSegments2(lineSegmentsGeometry, this.lineMaterial);
    this.add(lineSegments);
  }
  drawTris(primitive) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(primitive.vertices.length * 3);
    const colors = new Float32Array(primitive.vertices.length * 3);
    for (let i = 0; i < primitive.vertices.length; i++) {
      const [x, y, z, r, g, b] = primitive.vertices[i];
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      colors[i * 3 + 0] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = this.triMaterial;
    const mesh = new THREE.Mesh(geometry, material);
    this.add(mesh);
  }
  drawQuads(primitive) {
    const positions = [];
    const colors = [];
    for (let i = 0; i < primitive.vertices.length; i += 4) {
      const vertices = [primitive.vertices[i], primitive.vertices[i + 1], primitive.vertices[i + 2], primitive.vertices[i], primitive.vertices[i + 2], primitive.vertices[i + 3]];
      for (const [x, y, z, r, g, b] of vertices) {
        positions.push(x, y, z);
        colors.push(r, g, b);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
    const material = this.triMaterial;
    const mesh = new THREE.Mesh(geometry, material);
    this.add(mesh);
  }
}

class CrowdHelper extends Object3D {
  agentMeshes = new Map();
  constructor(crowd, params) {
    super();
    this.recastCrowd = crowd;
    this.agentMaterial = params?.agentMaterial ?? new MeshBasicMaterial({
      color: 'red'
    });
    this.update();
  }
  /**
   * Update the three debug view of the crowd agents.
   *
   * This should be called after updating the crowd.
   */
  update() {
    const agents = this.recastCrowd.getAgents();
    const unseen = new Set(this.agentMeshes.keys());
    for (const agent of agents) {
      unseen.delete(agent.agentIndex);
      const position = agent.position();
      const velocity = agent.velocity();
      let agentMesh = this.agentMeshes.get(agent.agentIndex);
      if (agentMesh === undefined) {
        agentMesh = this.createAgentMesh(agent);
        this.add(agentMesh);
        this.agentMeshes.set(agent.agentIndex, agentMesh);
      } else {
        this.updateAgentGeometry(agentMesh, agent);
      }
      agentMesh.position.set(position.x, position.y + agent.height / 2, position.z);
      agentMesh.lookAt(new Vector3().copy(agentMesh.position).add(velocity));
    }
    for (const agentId of unseen) {
      const agentMesh = this.agentMeshes.get(agentId);
      if (agentMesh) {
        this.remove(agentMesh);
        this.agentMeshes.delete(agentId);
      }
    }
  }
  createAgentMesh(agent) {
    const mesh = new Mesh();
    mesh.material = this.agentMaterial;
    this.updateAgentGeometry(mesh, agent);
    mesh.userData = {
      radius: agent.radius,
      height: agent.height
    };
    return mesh;
  }
  updateAgentGeometry(agentMesh, agentParams) {
    if (agentMesh.userData.radius !== agentParams.radius || agentMesh.userData.height !== agentParams.height) {
      const geometry = new CylinderGeometry(agentParams.radius, agentParams.radius, agentParams.height);
      agentMesh.geometry.dispose();
      agentMesh.geometry = geometry;
      agentMesh.userData.radius = agentParams.radius;
      agentMesh.userData.height = agentParams.height;
    }
  }
}

class NavMeshHelper extends Object3D {
  constructor(navMesh, params) {
    super();
    this.navMesh = navMesh;
    this.navMeshGeometry = new BufferGeometry();
    this.navMeshMaterial = params?.navMeshMaterial ? params.navMeshMaterial : new MeshBasicMaterial({
      color: 'orange',
      transparent: true,
      opacity: 0.7,
      depthWrite: false
    });
    this.update();
    this.mesh = new Mesh(this.navMeshGeometry, this.navMeshMaterial);
    this.add(this.mesh);
  }
  /**
   * Update the three debug nav mesh.
   *
   * This should be called after updating the nav mesh.
   */
  update() {
    const [positions, indices] = this.navMesh.getDebugNavMesh();
    this.navMeshGeometry.setAttribute('position', new BufferAttribute(Float32Array.from(positions), 3));
    this.navMeshGeometry.setIndex(new BufferAttribute(Uint32Array.from(indices), 1));
    this.navMeshGeometry.computeVertexNormals();
  }
}

class OffMeshConnectionsHelper extends Object3D {
  constructor(offMeshConnections, params) {
    super();
    this.offMeshConnections = offMeshConnections ?? [];
    this.entryCircleMaterial = params?.entryCircleMaterial ?? new MeshBasicMaterial({
      color: 'green'
    });
    this.exitCircleMaterial = params?.exitCircleMaterial ?? new MeshBasicMaterial({
      color: 'blue'
    });
    this.lineMaterial = params?.lineMaterial ?? new LineBasicMaterial({
      color: 'red'
    });
    this.update();
  }
  /**
   * Update the three debug view of the off mesh connections.
   */
  update() {
    this.clear();
    for (const offMeshConnection of this.offMeshConnections) {
      // start and end circles
      const circleGeometry = new CircleGeometry(offMeshConnection.radius, 16);
      const startMesh = new Mesh(circleGeometry, this.entryCircleMaterial);
      startMesh.position.copy(offMeshConnection.startPosition);
      startMesh.position.y += 0.001;
      startMesh.rotation.x = -Math.PI / 2;
      this.add(startMesh);
      const endMesh = new Mesh(circleGeometry, offMeshConnection.bidirectional ? this.entryCircleMaterial : this.exitCircleMaterial);
      endMesh.position.copy(offMeshConnection.endPosition);
      endMesh.position.y += 0.001;
      endMesh.rotation.x = -Math.PI / 2;
      this.add(endMesh);
      // line between points
      const start = new Vector3().copy(offMeshConnection.startPosition);
      const end = new Vector3().copy(offMeshConnection.endPosition);
      const middle = new Vector3().addVectors(start, end).multiplyScalar(0.5);
      middle.y *= 1.2;
      const curve = new CatmullRomCurve3([start, middle, end]);
      const curvePoints = curve.getPoints(50);
      const lineGeometry = new BufferGeometry().setFromPoints(curvePoints);
      const line = new Line(lineGeometry, this.lineMaterial);
      this.add(line);
    }
  }
}

class TileCacheHelper extends Object3D {
  obstacleMeshes = new Map();
  constructor(tileCache, params) {
    super();
    this.tileCache = tileCache;
    this.obstacleMaterial = params?.obstacleMaterial ? params.obstacleMaterial : new MeshBasicMaterial({
      color: 'red',
      wireframe: true,
      wireframeLinewidth: 2
    });
    this.update();
  }
  /**
   * Update the obstacle meshes.
   *
   * This should be called after adding or removing obstacles.
   */
  update() {
    const unseen = new Set(this.obstacleMeshes.keys());
    for (const [, obstacle] of this.tileCache.obstacles) {
      const obstacleMesh = this.obstacleMeshes.get(obstacle);
      unseen.delete(obstacle);
      if (!obstacleMesh) {
        const {
          position
        } = obstacle;
        const mesh = new Mesh(undefined, this.obstacleMaterial);
        mesh.position.copy(position);
        if (obstacle.type === 'box') {
          const {
            halfExtents,
            angle
          } = obstacle;
          mesh.geometry = new BoxGeometry(halfExtents.x * 2, halfExtents.y * 2, halfExtents.z * 2);
          mesh.rotation.y = angle;
        } else if (obstacle.type === 'cylinder') {
          const {
            radius,
            height
          } = obstacle;
          mesh.geometry = new CylinderGeometry(radius, radius, height, 16);
          mesh.position.y += height / 2;
        } else {
          throw new Error(`Unknown obstacle type: ${obstacle}`);
        }
        this.add(mesh);
        this.obstacleMeshes.set(obstacle, mesh);
      }
    }
    for (const obstacle of unseen) {
      const obstacleMesh = this.obstacleMeshes.get(obstacle);
      if (obstacleMesh) {
        this.remove(obstacleMesh);
        this.obstacleMeshes.delete(obstacle);
      }
    }
  }
}

const _position = new Vector3();
const getPositionsAndIndices = meshes => {
  const toMerge = [];
  for (const mesh of meshes) {
    const positionAttribute = mesh.geometry.attributes.position;
    if (!positionAttribute || positionAttribute.itemSize !== 3) {
      continue;
    }
    mesh.updateMatrixWorld();
    const positions = new Float32Array(positionAttribute.array);
    for (let i = 0; i < positions.length; i += 3) {
      const pos = _position.set(positions[i], positions[i + 1], positions[i + 2]);
      mesh.localToWorld(pos);
      positions[i] = pos.x;
      positions[i + 1] = pos.y;
      positions[i + 2] = pos.z;
    }
    let indices = mesh.geometry.getIndex()?.array;
    if (indices === undefined) {
      // this will become indexed when merging with other meshes
      const ascendingIndex = [];
      for (let i = 0; i < positionAttribute.count; i++) {
        ascendingIndex.push(i);
      }
      indices = ascendingIndex;
    }
    toMerge.push({
      positions,
      indices
    });
  }
  return mergePositionsAndIndices(toMerge);
};

const threeToSoloNavMesh = (meshes, navMeshGeneratorConfig = {}, keepIntermediates = false) => {
  const [positions, indices] = getPositionsAndIndices(meshes);
  return generateSoloNavMesh(positions, indices, navMeshGeneratorConfig, keepIntermediates);
};
const threeToTiledNavMesh = (meshes, navMeshGeneratorConfig = {}, keepIntermediates = false) => {
  const [positions, indices] = getPositionsAndIndices(meshes);
  return generateTiledNavMesh(positions, indices, navMeshGeneratorConfig, keepIntermediates);
};
const threeToTileCache = (meshes, navMeshGeneratorConfig = {}, keepIntermediates = false) => {
  const [positions, indices] = getPositionsAndIndices(meshes);
  return generateTileCache(positions, indices, navMeshGeneratorConfig, keepIntermediates);
};

export { CrowdHelper, DebugDrawer, NavMeshHelper, OffMeshConnectionsHelper, TileCacheHelper, getPositionsAndIndices, threeToSoloNavMesh, threeToTileCache, threeToTiledNavMesh };
