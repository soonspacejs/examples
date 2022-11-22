var t={defaultRadius:40,defaultGradient:{.25:"rgb(0,0,255)",.55:"rgb(0,255,0)",.85:"yellow",1:"rgb(255,0,0)"},defaultMaxOpacity:1,defaultMinOpacity:0,defaultBlur:.85,defaultXField:"x",defaultYField:"y",defaultValueField:"value",plugins:{}},i=function(){function t(){this.eStore={};}return t.prototype.on=function(t,i,a){this.eStore[t]||(this.eStore[t]=[]),this.eStore[t].push((function(t){return i.call(a,t)}));},t.prototype.emit=function(t,i){this.eStore[t]&&this.eStore[t].forEach((function(t){return t(i)}));},t}(),a=function(){function a(a){this.coordinator=new i,this.data=[],this.radi=[],this.min=10,this.max=1,this.xField=a.xField||t.defaultXField,this.yField=a.yField||t.defaultYField,this.valueField=a.valueField||t.defaultValueField,this.radius=a.radius||t.defaultRadius;}return a.prototype._organiseData=function(t,i){var a=t[this.xField],e=t[this.yField],r=this.radi,n=this.data,s=this.max,h=this.min,o=t[this.valueField]||1,d=t.radius||this.radius;r[a]||(n[a]=[],r[a]=[]),r[a][e]?n[a][e]+=o:(n[a][e]=o,r[a][e]=d);var u=n[a][e];return u?u>s?(i?this.setDataMax(u):this.max=u,!1):u<h?(i?this.setDataMin(u):this.min=u,!1):void 0:{x:a,y:e,value:o,radius:d,min:h,max:s}},a.prototype._unOrganizeData=function(){for(var t=[],i=0;i<this.radi.length;i++)for(var a=0;a<this.radi[i].length;a++)t.push({x:i,y:a,radius:this.radi[i][a],value:this.radi[i][a]});return {min:this.min,max:this.max,data:t}},a.prototype._onExtremaChange=function(){this.coordinator.emit("extremachange",{min:this.min,max:this.max});},a.prototype.addData=function(t){var i=this._organiseData(t,!0);i&&(0===this.data.length&&(this.min=i.value,this.max=i.value),this.coordinator.emit("renderpartial",{min:this.min,max:this.max,data:[i]}));},a.prototype.setData=function(t){var i=t.data;this.data=[],this.radi=[];for(var a=0;a<i.length;a++)this._organiseData(i[a],!1);return this.min=t.min||0,this.max=t.max||100,this._onExtremaChange(),this.coordinator.emit("renderall",this._getInternalData()),this},a.prototype.setDataMax=function(t){return this.max=t,this._onExtremaChange(),this.coordinator.emit("renderall",this._getInternalData()),this},a.prototype.setDataMin=function(t){return this.min=t,this._onExtremaChange(),this.coordinator.emit("renderall",this._getInternalData()),this},a.prototype._getInternalData=function(){return {max:this.max,min:this.min,data:this.data,radi:this.radi}},a.prototype.getData=function(){return this._unOrganizeData()},a}(),e=function(){function i(t){this.canvas=t.canvas||document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.shadowCanvas=t.shadowCanvas||document.createElement("canvas"),this.shadowCtx=this.shadowCanvas.getContext("2d"),this.width=t.width||512,this.height=t.height||512,this.max=100,this.min=1,this.blur=1,this.opacity=1,this.maxOpacity=1,this.minOpacity=0,this.useGradientOpacity=!1,this.canvas.style.cssText=this.shadowCanvas.style.cssText="position:absolute;left:0;top:0;",t.container&&(t.container.style.position="relative",t.container.appendChild(this.canvas)),this.renderBoundaries=[1e4,1e4,0,0],this.palette=this._getColorPalette(t),this.templates=[],this._setStyles(t);}return i.prototype.renderPartial=function(t){t.data.length>0&&(this._drawAlpha(t),this._colorize());},i.prototype.renderAll=function(t){this._clear(),t.data.length>0&&(this._drawAlpha(this._prepareData(t)),this._colorize());},i.prototype.updateConfig=function(t){t.gradient&&this._updateGradient(t),this._setStyles(t);},i.prototype.setDimensions=function(t,i){this.width=this.canvas.width=this.shadowCanvas.width=t,this.height=this.canvas.height=this.shadowCanvas.height=i;},i.prototype.getValueAt=function(t){if(!this.shadowCtx)return 0;var i=this.shadowCtx.getImageData(t.x,t.y,1,1);return Math.abs(this.max-this.min)*(i.data[3]/255)>>0},i.prototype.getDataURL=function(){return this.canvas.toDataURL()},i.prototype._getColorPalette=function(i){var a=i.gradient||t.defaultGradient,e=document.createElement("canvas"),r=e.getContext("2d");if(e.width=256,e.height=1,!r)return new Uint8ClampedArray(1024);var n=r.createLinearGradient(0,0,256,1);for(var s in a)n.addColorStop(Number(s),a[s]);return r.fillStyle=n,r.fillRect(0,0,256,1),r.getImageData(0,0,256,1).data},i.prototype._getPointTemplate=function(t,i){var a=document.createElement("canvas"),e=a.getContext("2d");if(!e)return a;var r=t,n=t;if(a.width=a.height=2*t,1===i)e.beginPath(),e.arc(r,n,t,0,2*Math.PI,!1),e.fillStyle="rgba(0,0,0,1)",e.fill();else {var s=e.createRadialGradient(r,n,t*i,r,n,t);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=s,e.fillRect(0,0,2*t,2*t);}return a},i.prototype._prepareData=function(t){for(var i=[],a=t.min,e=t.max,r=t.radi,n=t.data,s=Object.keys(n),h=s.length;h--;)for(var o=s[h],d=Object.keys(n[o]),u=d.length;u--;){var l=d[u],c=n[o][l],p=r[o][l];i.push({x:Number(o),y:Number(l),value:c,radius:p});}return {min:a,max:e,data:i}},i.prototype._setStyles=function(i){this.blur=0===i.blur?0:i.blur||t.defaultBlur,i.backgroundColor&&(this.canvas.style.backgroundColor=i.backgroundColor),this.width=this.canvas.width=this.shadowCanvas.width=i.width||this.width,this.height=this.canvas.height=this.shadowCanvas.height=i.height||this.height,this.opacity=255*(i.opacity||0),this.maxOpacity=255*(i.maxOpacity||t.defaultMaxOpacity),this.minOpacity=255*(i.minOpacity||t.defaultMinOpacity),this.useGradientOpacity=!!i.useGradientOpacity;},i.prototype._updateGradient=function(t){this.palette=this._getColorPalette(t);},i.prototype._drawAlpha=function(t){for(var i=this.min=t.min||0,a=this.max=t.max||100,e=t.data||[],r=e.length,n=1-this.blur;r--;){var s=e[r],h=s.x,o=s.y,d=s.radius,u=Math.min(s.value,a),l=h-d,c=o-d;if(!this.shadowCtx)return;var p=void 0;this.templates[d]?p=this.templates[d]:this.templates[d]=p=this._getPointTemplate(d,n);var m=(u-i)/(a-i);this.shadowCtx.globalAlpha=m<.01?.01:m,this.shadowCtx.drawImage(p,l,c),l<this.renderBoundaries[0]&&(this.renderBoundaries[0]=l),c<this.renderBoundaries[1]&&(this.renderBoundaries[1]=c),l+2*d>this.renderBoundaries[2]&&(this.renderBoundaries[2]=l+2*d),c+2*d>this.renderBoundaries[3]&&(this.renderBoundaries[3]=c+2*d);}},i.prototype._colorize=function(){var t=this.renderBoundaries[0],i=this.renderBoundaries[1],a=this.renderBoundaries[2]-t,e=this.renderBoundaries[3]-i,r=this.width,n=this.height;if(t<0&&(t=0),i<0&&(i=0),t+a>r&&(a=r-t),i+e>n&&(e=n-i),this.ctx&&this.shadowCtx){for(var s=this.shadowCtx.getImageData(t,i,a,e),h=3;h<s.data.length;h+=4){var o,d=s.data[h],u=4*d;if(u)o=this.opacity>0?this.opacity:d<this.maxOpacity?d<this.minOpacity?this.minOpacity:d:this.maxOpacity,s.data[h-3]=this.palette[u],s.data[h-2]=this.palette[u+1],s.data[h-1]=this.palette[u+2],s.data[h]=this.useGradientOpacity?this.palette[u+3]:o;}this.ctx.putImageData(s,t,i),this.renderBoundaries=[1e3,1e3,0,0];}},i.prototype._clear=function(){this.ctx&&this.shadowCtx&&(this.ctx.clearRect(0,0,this.width,this.height),this.shadowCtx.clearRect(0,0,this.width,this.height));},i}(),r=function(){function i(t){this.config=t,this.renderer=new e(this.config),this.store=new a(this.config),this._init();}return i.prototype._init=function(){var i=this;this.store.coordinator.on("renderpartial",this.renderer.renderPartial,this.renderer),this.store.coordinator.on("renderall",this.renderer.renderAll,this.renderer),this.store.coordinator.on("extremachange",(function(a){i.config.onExtremaChange&&i.config.onExtremaChange({min:a.min,max:a.max,gradient:i.config.gradient||t.defaultGradient});}));},i.prototype.addData=function(t){return this.store.addData(t),this},i.prototype.setData=function(t){return this.store.setData(t),this},i.prototype.setDataMaxx=function(t){return this.store.setDataMax(t),this},i.prototype.setDataMin=function(t){return this.store.setDataMin(t),this},i.prototype.repaint=function(){return this.store.coordinator.emit("renderall",this.store._getInternalData()),this},i.prototype.getData=function(){return this.store.getData()},i.prototype.getDataURL=function(){return this.renderer.getDataURL()},i.prototype.getValueAt=function(t){return this.renderer.getValueAt(t)},i}();

const THREE$1 = self.THREE;
function getPolygonGeometryInfo(points) {
    const matrix3 = createPlaneMatrix(points);
    const modelMatrix = new THREE$1.Matrix4();
    modelMatrix.setFromMatrix3(matrix3);
    const position = points[0];
    const planeMatrix = modelMatrix.clone();
    planeMatrix.setPosition(position);
    const projectionMatrix = planeMatrix.clone().invert();
    const planePoints = points.map(p => {
        const p3 = p.clone().applyMatrix4(projectionMatrix);
        return new THREE$1.Vector2(p3.x, p3.y);
    });
    const shape = new THREE$1.Shape(planePoints);
    const geometry = new THREE$1.ShapeGeometry(shape);
    const polygonBox = new THREE$1.Box2();
    polygonBox.setFromPoints(planePoints);
    const uvMatrix = createUVMatrix(polygonBox);
    const uvAttr = geometry.getAttribute('uv');
    uvAttr.applyMatrix3(uvMatrix);
    geometry.applyMatrix4(modelMatrix);
    return { geometry, polygonBox, modelMatrix, planeMatrix, projectionMatrix, position, };
}
/**
 * 创建平面投影矩阵
 * @param points
 */
function createPlaneMatrix(points) {
    const [p1, p2, p3] = points;
    const plane = new THREE$1.Plane();
    plane.setFromCoplanarPoints(p2, p1, p3);
    const zAxis = plane.normal;
    const xAxis = zAxis.clone().cross(new THREE$1.Vector3(0, 0, 1));
    if (xAxis.equals(new THREE$1.Vector3())) {
        xAxis.set(1, 0, 0);
    }
    const yAxis = zAxis.clone().cross(xAxis);
    xAxis.normalize();
    yAxis.normalize();
    zAxis.normalize();
    const matrix = new THREE$1.Matrix3();
    matrix.elements = [
        xAxis.x, xAxis.y, xAxis.z,
        yAxis.x, yAxis.y, yAxis.z,
        zAxis.x, zAxis.y, zAxis.z
    ];
    return matrix;
}
/**
 * 创建 uv 变换矩阵
 * @remarks
 * 需要对热力图数据进行y值翻转
 * @param points
 * @returns
 */
function createUVMatrix(box) {
    const min = box.min;
    const scale = box.getSize(new THREE$1.Vector2());
    const uvMatrix = new THREE$1.Matrix3();
    uvMatrix.elements = [
        scale.x, 0, 0,
        0, scale.y, 0,
        min.x, min.y, 1
    ];
    return uvMatrix.invert();
}
/**
 * 不需要对热力图数据进行y值翻转
 */
// export function createUVMatrix ( box: Box2 ): Matrix3 {
//   const min = box.min
//   const scale = box.getSize( new THREE.Vector2() )
//   const translate1 = new THREE.Matrix3()
//   translate1.elements[ 7 ] = -1
//   const turnY = new THREE.Matrix3()
//   turnY.elements[ 4 ] = -1
//   const zoom = new THREE.Matrix3()
//   zoom.elements[ 0 ] = scale.x
//   zoom.elements[ 4 ] = scale.y
//   const translate2 = new THREE.Matrix3()
//   translate2.elements[ 6 ] = min.x
//   translate2.elements[ 7 ] = min.y
//   const uvMatrix = translate2.clone()
//   uvMatrix.multiply( zoom ).multiply( turnY ).multiply( translate1 )
//   return uvMatrix.invert()
// }

class HeatMapPlugin {
    constructor(ssp) {
        this.ssp = ssp;
        this.store = new Map();
        this.maxCanvasSize = 512;
        this.hmInstance = null;
    }
    create(param) {
        const { id, name, yAxisHeight, minPosition, maxPosition, data, min = 0, max = 100, radius = 100, canvasScalar = 1, } = param;
        // 计算中心点
        const centerPosition = new this.ssp.THREE.Vector3((maxPosition.x + minPosition.x) / 2, yAxisHeight, (maxPosition.z + minPosition.z) / 2);
        // 空间平面宽高
        const width = maxPosition.x - minPosition.x;
        const height = maxPosition.z - minPosition.z;
        const canvasSize = this._formatCanvasSize(width * canvasScalar, height * canvasScalar);
        const { canvas, hmInstance, } = this.createInitData(Object.assign(Object.assign({}, canvasSize), { radius }));
        hmInstance.setData({
            max,
            min,
            data: this._formatData(data, minPosition, { width, height, }, canvasSize),
        });
        const geometry = new this.ssp.THREE.PlaneBufferGeometry(width, height);
        const texture = new this.ssp.THREE.CanvasTexture(canvas);
        const material = new this.ssp.THREE.MeshStandardMaterial({
            map: texture,
            depthWrite: false,
            transparent: true,
        });
        const heatMapPlane = new this.ssp.THREE.Mesh(geometry, material);
        const hmObject = this.ssp.createPluginObject({
            id,
            name,
            position: centerPosition.clone(),
            rotation: {
                x: -Math.PI / 2,
                y: 0,
                z: 0,
            },
        }, heatMapPlane);
        this.store.set(id, {
            object: hmObject,
            canvas,
            param: Object.assign(Object.assign({}, param), { min, max }),
            width,
            height,
        });
        return hmObject;
    }
    createPolygon(param) {
        const { id, name, points, data, min = 0, max = 100, radius = 100, } = param;
        const pos = points.map(p => new this.ssp.THREE.Vector3(p.x, p.y, p.z));
        const { geometry, projectionMatrix, polygonBox, position, } = getPolygonGeometryInfo(pos);
        // 计算中心点
        const pointBox = new this.ssp.THREE.Box3();
        pointBox.setFromPoints(pos);
        // 空间平面宽高
        const { x: width, y: height, } = polygonBox.getSize(new this.ssp.THREE.Vector2());
        const canvasSize = this._formatCanvasSize(width, height);
        const { canvas, hmInstance, } = this.createInitData(Object.assign(Object.assign({}, canvasSize), { radius }));
        hmInstance.setData({
            max,
            min,
            data: this._formatData_Polygon(data, projectionMatrix, polygonBox, canvasSize),
        });
        const texture = new this.ssp.THREE.CanvasTexture(canvas);
        const material = new this.ssp.THREE.MeshStandardMaterial({
            map: texture,
            depthWrite: false,
            transparent: true,
            side: this.ssp.THREE.DoubleSide,
        });
        const heatMapPlane = new this.ssp.library.BaseMesh(geometry, material, { id, name, });
        heatMapPlane.renderOrder = 0;
        const hmObject = this.ssp.createPluginObject({
            id,
            name,
            position: position,
        }, heatMapPlane);
        this.store.set(id, {
            object: hmObject,
            canvas,
            param: Object.assign(Object.assign({}, param), { min, max }),
            width,
            height,
            projectionMatrix,
            polygonBox,
            position: position.clone(),
        });
        return hmObject;
    }
    setData(id, data) {
        const store = this.store.get(id);
        if (store) {
            const { object, canvas, param: { minPosition, min, max, }, width, height, } = store;
            const initData = this.createInitData();
            const { canvas: newCanvas, hmInstance, } = initData;
            hmInstance.renderer.updateConfig({
                width: canvas.width,
                height: canvas.height,
            });
            hmInstance.setData({
                max,
                min,
                data: this._formatData(data, minPosition, { width, height, }, this._formatCanvasSize(width, height)),
            });
            const material = object.children[0].material;
            this.ssp.render(() => {
                const texture = new this.ssp.THREE.CanvasTexture(newCanvas);
                material.map = texture;
                material.version++;
            });
            return object;
        }
        else {
            return console.warn(`In soonspacejs: 插件（plugin-heat-map）未找到 id 为 '"${id}"' 的热力图对象!`);
        }
    }
    setDataPolygon(id, data) {
        const store = this.store.get(id);
        if (store) {
            const { object, canvas, param: { min, max, }, projectionMatrix, polygonBox, position, } = store;
            if (!projectionMatrix)
                throw new Error(`${id} 不是多边形热力图类型`);
            const heatObj = this.getById(id);
            if (!heatObj)
                return;
            heatObj.getWorldPosition(new THREE.Vector3());
            const currMatrix = heatObj.matrix.clone().invert().premultiply(projectionMatrix);
            const initData = this.createInitData();
            const { canvas: newCanvas, hmInstance, } = initData;
            hmInstance.renderer.updateConfig({
                width: canvas.width,
                height: canvas.height,
            });
            const polygonSize = polygonBox.getSize(new THREE.Vector2());
            hmInstance.setData({
                max,
                min,
                data: this._formatData_Polygon(data, currMatrix, polygonBox, this._formatCanvasSize(polygonSize.x, polygonSize.y), position),
            });
            const material = object.children[0].material;
            this.ssp.render(() => {
                const texture = new this.ssp.THREE.CanvasTexture(newCanvas);
                material.map = texture;
                material.version++;
            });
            return object;
        }
        else {
            return console.warn(`In soonspacejs: 插件（plugin-heat-map）未找到 id 为 '"${id}"' 的热力图对象!`);
        }
    }
    getById(id) {
        return this.ssp.getObjectById(id);
    }
    getByName(name) {
        return this.ssp.getObjectByName(name);
    }
    removeById(id) {
        if (this.store.has(id)) {
            this.ssp.removeObjectById(id);
            this.store.delete(id);
            return true;
        }
        return false;
    }
    createInitData(param) {
        const hmInstance = this.hmInstance = new r(param || {});
        return { hmInstance, canvas: hmInstance.renderer.canvas, };
    }
    _formatCanvasSize(width, height) {
        const ratio = width / height;
        if (width > this.maxCanvasSize) {
            width = this.maxCanvasSize;
            height = width / ratio;
        }
        if (height > this.maxCanvasSize) {
            height = this.maxCanvasSize;
            width = ratio * height;
        }
        return { width, height, };
    }
    _formatData(data, minPosition, scenePlaneSize, canvasSize) {
        return data.map(item => (Object.assign(Object.assign({}, item), { 
            // 取整，否则不生效
            x: Math.trunc((item.x - minPosition.x) / scenePlaneSize.width * canvasSize.width), y: Math.trunc((item.z - minPosition.z) / scenePlaneSize.height * canvasSize.height) })));
    }
    _formatData_Polygon(data, projectionMatrix, polygonBox, canvasSize, oriPosition, currPosition) {
        const offset = oriPosition && currPosition ? currPosition.clone().sub(oriPosition) : new THREE.Vector3(0, 0, 0);
        return data.map(item => {
            const point = new this.ssp.THREE.Vector3(item.x, item.y, item.z);
            point.sub(offset);
            point.applyMatrix4(projectionMatrix);
            const { x, y, } = polygonBox.getParameter(new this.ssp.THREE.Vector2(point.x, point.y), new this.ssp.THREE.Vector2());
            return Object.assign(Object.assign({}, item), { 
                // 取整，否则不生效
                x: Math.trunc(x * canvasSize.width), 
                // 热力图图片的 y 轴的正方向是 从 图片上方 到 图片 下方
                y: Math.trunc((1 - y) * canvasSize.height) });
        });
    }
}

export { HeatMapPlugin as default };
//# sourceMappingURL=index.esm.js.map
