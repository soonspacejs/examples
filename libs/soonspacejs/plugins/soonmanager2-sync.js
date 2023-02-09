function t(t,e,i,s){return new(i||(i=Promise))((function(o,n){function a(t){try{l(s.next(t))}catch(t){n(t)}}function r(t){try{l(s.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,r)}l((s=s.apply(t,e||[])).next())}))}const e="/SceneMetadata.json",i="/db/sign",s="/db/tree_models.json",o="/db/topology_paths.json",n="/db/properties.json",a="/db/animations.json",r="/db/model_visions.json",l="properties";var h;!function(t){t[t.BIDIRECTION=0]="BIDIRECTION",t[t.POSITIVE=1]="POSITIVE",t[t.OPPOSITE=2]="OPPOSITE",t[t.FORBID=3]="FORBID"}(h||(h={}));class c{get path(){return this._path}set path(t){const e=this._path;this._path=t,this._path!==e&&this._verifySign()}constructor(t){this.ssp=t,this._path="",this._treeDataMaps=new Map,this.metaData=null,this.treeData=null,this.topologyData=null,this.propertiesData=null,this.animationsData=null,this.modelVisionsData=null}_verifySign(){return t(this,void 0,void 0,(function*(){const{version:t,sceneId:e}=this.metaData=yield this.fetchMetaData();if(t>1){const t=yield this._fetchSign().then((t=>t.text())),[i,s]=t.slice(0,2),o=t.slice(2);if(!i||!s||!o)return;const n=yield this._fetchTreeDataResponse().then((t=>t.clone().text())),{license:a}=this.ssp.viewport,{encryptInfo:{serialNums:r=[]}}=a,l=r.map((t=>t.replace(/\/|=/g,""))).filter((t=>t.charAt(5)===i&&t.charAt(20)===s));for(const t of l){const i=`${e}${n}${t}`;if(a.verify(i,o))break}}}))}_resolvePath(t){return`${this._path}${t}`}_fetchData(e){return t(this,void 0,void 0,(function*(){const{utils:t}=this.ssp;return t.fetchFile(this._resolvePath(e)).then((t=>t.json()))}))}fetchMetaData(){return t(this,void 0,void 0,(function*(){return this._fetchData(e)}))}_fetchSign(){return t(this,void 0,void 0,(function*(){const{utils:t}=this.ssp;return t.fetchFile(this._resolvePath(i))}))}_fetchTreeDataResponse(){return t(this,void 0,void 0,(function*(){const t=this._treeDataMaps.get(this.path);if(t)return t;const{utils:e}=this.ssp,i=e.fetchFile(this._resolvePath(s));return this._treeDataMaps.set(this.path,i),i}))}fetchTreeData(){return t(this,void 0,void 0,(function*(){return this._fetchTreeDataResponse().then((t=>t.clone().json()))}))}fetchTopologyData(){return t(this,void 0,void 0,(function*(){return this._fetchData(o).then((t=>{const e={linkWidth:.1,linkColor:["#00ff00"],nodeRadius:.05,nodeColor:"#0000ff"};return t.map((t=>Object.assign(Object.assign({},e),t)))}))}))}fetchPropertiesData(){return t(this,void 0,void 0,(function*(){return this._fetchData(n).then((t=>d(t,"modelId")))}))}fetchAnimationsData(){return t(this,void 0,void 0,(function*(){return this._fetchData(a).then((t=>d(t,"modelId")))}))}fetchModelVisions(){return t(this,void 0,void 0,(function*(){return this._fetchData(r).then((t=>new Map(Object.entries(t))))}))}loadObjects(e){return t(this,void 0,void 0,(function*(){if(!this.treeData)return void console.error("treeData is null");const{syncProperties:i}=e,s=(e,o)=>t(this,void 0,void 0,(function*(){const{ssp:t}=this,{THREE:{Matrix4:n}}=t,{id:a,name:r,renderType:h,path:c,matrix:d}=e,u=(new n).fromArray(d);let f=null;if("3D"===h)if(c)try{f=yield t.loadModel({id:a,name:r,url:this._resolvePath(c),userData:Object.assign({},e)})}catch(t){console.error(t)}else t.utils.warn(`id: ${a} path 为空`);else"GROUP"===h&&(f=t.createGroup({id:a,name:r,userData:Object.assign({},e)}));if(f&&(u.decompose(f.position,f.quaternion,f.scale),o&&t.addObject(f,o),i&&this.propertiesData)){const t=this.propertiesData.get(a);t&&(f.userData[l]=t)}e.children.length>0&&(yield Promise.allSettled(e.children.map((t=>s(t,f)))))}));yield Promise.allSettled(this.treeData.map((t=>s(t,null))))}))}setPath(t){this.path=t}loadScene(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,void 0,void 0,(function*(){e=Object.assign({syncProperties:!0,syncModelVisions:!0,needsModelsBoundsTree:!0},e),yield Promise.allSettled([(()=>t(this,void 0,void 0,(function*(){e.syncProperties&&(this.propertiesData=yield this.fetchPropertiesData())})))(),(()=>t(this,void 0,void 0,(function*(){e.syncModelVisions&&(this.modelVisionsData=yield this.fetchModelVisions())})))()]),this.treeData=yield this.fetchTreeData(),yield this.loadObjects(e),e.needsModelsBoundsTree&&this.ssp.computeModelsBoundsTree()}))}getTopologies(){return t(this,void 0,void 0,(function*(){return this.topologyData=yield this.fetchTopologyData(),this.topologyData}))}playAnimationById(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(this,void 0,void 0,(function*(){const{utils:{error:t},animation:o,THREE:n}=this.ssp,{onStart:a,onUpdate:r}=s;this.animationsData||(this.animationsData=yield this.fetchAnimationsData());const l=this.ssp.getObjectById(e);if(!l)return void t(`playAnimationById: id 为 ${e} 场景对象未找到`);const h=this.animationsData.get(e);if(h){const s=h[i];if(s)for(let t=0,e=s.keyframes.length;t<e;t++){let e;if(s.keyframes[t-1]){const i=s.keyframes[t-1];e={x:i.x,y:i.y,z:i.z,rotationX:i.rotationX,rotationY:i.rotationY,rotationZ:i.rotationZ,scaleX:i.scaleX,scaleY:i.scaleY,scaleZ:i.scaleZ}}else{const t=new n.Object3D,i=(new n.Matrix4).fromArray(l.userData.matrix);t.applyMatrix4(i),e={x:t.position.x,y:t.position.y,z:t.position.z,rotationX:t.rotation.x,rotationY:t.rotation.y,rotationZ:t.rotation.z,scaleX:t.scale.x,scaleY:t.scale.y,scaleZ:t.scale.z}}const i=s.keyframes[t],{delay:h,duration:c,easing:d,repeat:u,yoyo:f}=i,p={x:i.x,y:i.y,z:i.z,rotationX:i.rotationX,rotationY:i.rotationY,rotationZ:i.rotationZ,scaleX:i.scaleX,scaleY:i.scaleY,scaleZ:i.scaleZ};yield o(e,p,{delay:h,duration:c,mode:d,repeat:-1===u?1/0:u,yoyo:f},((t,e)=>{l.position.set(t.x,t.y,t.z),l.rotation.set(t.rotationX,t.rotationY,t.rotationZ),l.scale.set(t.scaleX,t.scaleY,t.scaleZ),null==r||r(t,e)}),(t=>{null==a||a(t)}))}else t(`id: ${e} 未找到索引为 ${i} 的动画`)}else t(`id: ${e} 未找到动画`)}))}}function d(t,e){const i=new Map;return t.reduce(((t,i)=>{const s=t.get(i[e]);return s?s.push(i):t.set(i[e],[i]),t}),i),i}export{a as ANIMATIONS_DATA_FILE_PATH,e as META_DATA_FILE_PATH,r as MODEL_VISIONS_DATA_FILE_PATH,n as PROPERTIES_DATA_FLEE_PATH,l as PROPERTIES_KEY,i as SIGN_PATH,o as TOPOLOGY_DATA_FILE_PATH,s as TREE_DATA_FILE_PATH,c as default};