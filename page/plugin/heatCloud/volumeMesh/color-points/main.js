
import * as THREE from 'three';
window.THREE = THREE;



import { createColorFogPoints } from "@three3d/volume";


import { render, gui, scene,gltfLoader } from "../initScene";


var heatData = [
  {x:0,y:0,z:0,color:[255,0,0,1],radius:10000},
  {x:10,y:0,z:0,color:[0,255,0,1],radius:10000},
  {x:20,y:0,z:0,color:[0,0,255,1],radius:10000},
  // {x:50,y:0,z:50,value:25,radius:10},
  // {x:0,y:100,z:100,value:50,radius:50},
];

let pointCount = 300;
while (pointCount-- > 0){
  heatData.push({
    x:Math.random()*200,
    y:Math.random()*60,
    z:Math.random()*100,
    radius:Math.random()*10000,
    color:[Math.random()*255,Math.random()*255,Math.random()*255,Math.random()],
  });
}

var mesh 
var model;
var material;
function createHeatmap3D(){
  gltfLoader.load( "../assets/floor.glb",(gltf) => {
    model = gltf.scene;
    model.scale.multiplyScalar(5);
    model.position.copy({x: 48.49175763627945, y: 6.059975879290931, z: 25.089185142637064})
    scene.add(model);
  });

  
  const fog = createColorFogPoints({points:heatData,vertexColors:true,exp:2,star:true});
  material =fog.material;
  scene.add(fog);
  window.fog = mesh = fog;
}





function setupGui() {

  gui.add( material, 'star');
  gui.add( material.color, 'r', 0, 1).name("color.r").onFinishChange(updateUniforms);
  gui.add( material.color, 'g', 0, 1).name("color.g").onFinishChange(updateUniforms);
  gui.add( material.color, 'b', 0, 1).name("color.b").onFinishChange(updateUniforms);
  gui.add( material, 'vertexColors');
  gui.add( material, 'sizeAttenuation');
  gui.add( material, 'size',0,1000);
  gui.add( material, 'exp', 0, 5, 1 );
  gui.add( material, 'solid', 0, 1);
  gui.add( material, 'scale', 0, 10000000);
  gui.add( material, 'opacity', 0, 1 );
}

function updateUniforms() {
  material.color = material.color;
}




function setup(){

  createHeatmap3D();
  setupGui();
  render();
}


setup();





