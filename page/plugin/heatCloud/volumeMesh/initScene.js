import {
  Color,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
  Clock,
  AnimationMixer,
  Vector3,
  ImageLoader,
} from "three";
import * as THREE from "three";
window.THREE = THREE;

import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { ViewHelper } from "three/examples/jsm/helpers/ViewHelper.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export var gui = new GUI();
gui.title("控制器");

export var imageLoader = new ImageLoader();

export var scene = new Scene();
scene.background = new Color(0x444444);

export var clock = new Clock();
export var mixer = new AnimationMixer(scene);

export var gltfLoader = new GLTFLoader();

export var camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
camera.position.set(0, 0, 100);
camera.lookAt(new Vector3());

export var webglrenderer = new WebGLRenderer({ antialias: true });
webglrenderer.setPixelRatio(window.devicePixelRatio);
webglrenderer.setSize(window.innerWidth, window.innerHeight);
webglrenderer.localClippingEnabled = true;

document.body.appendChild(webglrenderer.domElement);

export var orbit = new OrbitControls(camera, webglrenderer.domElement);

export var control = new TransformControls(camera, webglrenderer.domElement);
scene.add(control);

control.addEventListener("dragging-changed", function (event) {
  orbit.enabled = !event.value;
});

export var lights = [];
lights[0] = new PointLight(0xffffff, 1, 0);
lights[1] = new PointLight(0xffffff, 1, 0);
lights[2] = new PointLight(0xffffff, 1, 0);

lights[0].position.set(0, 200, 0);
lights[1].position.set(100, 200, 100);
lights[2].position.set(-100, -200, -100);

scene.add(lights[0]);
scene.add(lights[1]);
scene.add(lights[2]);

export var viewHelper = new ViewHelper(camera);
viewHelper.scale.set(10, 10, 10);
for (const helper of viewHelper.children) {
  helper.material.depthTest = false;
}
scene.add(viewHelper);

function onDocumentMouseDown(event) {
  event.preventDefault();
  var vector = new THREE.Vector3(); //三维坐标对象
  vector.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
    0.5
  );
  vector.unproject(camera);
  var raycaster = new THREE.Raycaster(
    camera.position,
    vector.sub(camera.position).normalize()
  );
  raycaster.camera = camera;
  var intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    var selected = intersects[0]; //取第一个物体
    console.log("选中的物体:", selected.object);
    console.log({
      x: selected.object.position.x,
      y: selected.object.position.y,
      z: selected.object.position.z,
    });
  }
}
// webglrenderer.domElement.addEventListener("click", onDocumentMouseDown, false);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  webglrenderer.setSize(window.innerWidth, window.innerHeight);
});

Object.assign(window, {
  gui,
  scene,
  camera,
  webglrenderer,
  orbit,
  lights,
  clock,
  mixer,
  viewHelper,
});

export function render() {
  requestAnimationFrame(render);
  mixer.update(clock.getDelta());
  webglrenderer.render(scene, camera);
}

export function getBoundingBox(mesh) {
  const box = new THREE.Box3();
  box.setFromObject(mesh);
  var size = new THREE.Vector3();
  box.getSize(size);
  return box.getSize(size);
}
