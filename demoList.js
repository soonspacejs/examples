export default [
  // start
  {
    title: '起步',
    key: 'start',
    children: [
      {
        title: 'Hello World',
        demoLink: './page/start/helloWorld.html',
      },
      {
        title: '全局事件',
        demoLink: './page/start/globalEvent.html',
      },
      {
        title: '模型独立事件',
        demoLink: './page/start/modelEvent.html',
      },
      {
        title: 'Poi 独立事件',
        demoLink: './page/start/poiEvent.html',
      },
      {
        title: '多事件',
        demoLink: './page/start/multiEvent.html',
      },
      {
        title: '对象分组',
        demoLink: './page/start/objectGroup.html',
      },
    ],
  },
  // model
  {
    title: '模型',
    key: 'model',
    children: [
      {
        title: '加载 sbm',
        demoLink: './page/model/loadSbm.html',
      },
      // {
      //   title: "加载 sbm 01",
      //   demoLink: "./page/model/loadSbm01.html"
      // },
      {
        title: '加载 gltf',
        demoLink: './page/model/loadGltf.html',
      },
      {
        title: '加载 fbx',
        demoLink: './page/model/loadFbx.html',
      },
      {
        title: '加载点云',
        demoLink: './page/model/loadPcd.html',
      },
      {
        title: 'dxf 二三维联动',
        demoLink: './page/model/loadDxf.html',
      },
    ],
  },
  // poi
  {
    title: 'Poi',
    key: 'poi',
    children: [
      {
        title: '创建 Poi',
        demoLink: './page/poi/createPoi.html',
      },
      {
        title: '文字样式',
        demoLink: './page/poi/poiText.html',
      },
      {
        title: 'Poi 类型',
        demoLink: './page/poi/poiType.html',
      },
      {
        title: 'Poi 多图层',
        demoLink: './page/poi/poiLevel.html',
      },
      {
        title: 'Poi 缩放固定',
        demoLink: './page/poi/poiScaleFixed.html',
      },
    ],
  },
  // poiNode
  {
    title: 'PoiNode',
    key: 'poiNode',
    children: [
      {
        title: '创建 PoiNode',
        demoLink: './page/poiNode/createPoiNode.html',
      },
      {
        title: 'PoiNode 遮挡朝向',
        demoLink: './page/poiNode/poiNodeNormal.html',
      },
      {
        title: 'PoiNode 遮挡',
        demoLink: './page/poiNode/poiNodeOcclude.html',
      },
      {
        title: 'PoiNode 显隐过渡',
        demoLink: './page/poiNode/poiNodeTransition.html',
      },
      {
        title: 'PoiNode 多图层',
        demoLink: './page/poiNode/poiNodeLevel.html',
      },
      {
        title: 'PoiNode 位置计算',
        demoLink: './page/poiNode/poiNodePosition.html',
      },
      {
        title: 'PoiNode 缩放固定',
        demoLink: './page/poiNode/poiNodeScaleFixed.html',
      },
      {
        title: '空间视频',
        demoLink: './page/poiNode/createPoiNodeForVideo.html',
      },
    ],
  },
  // poiMesh
  {
    title: 'PoiMesh',
    key: 'PoiMesh',
    children: [
      {
        title: '创建PoiMesh',
        demoLink: './page/poiMesh/createPoiMesh.html',
      },
    ],
  },

  // canvas3D
  {
    title: '空间画布',
    key: 'canvas3D',
    children: [
      {
        title: '点线面',
        demoLink: './page/canvas3D/pointLinePolygon.html',
      },
      {
        title: '渐变',
        demoLink: './page/canvas3D/gradient.html',
      },
      {
        title: '空间画布对象',
        demoLink: './page/canvas3D/manipulatePolygon.html',
      },
    ],
  },
  // topology
  {
    title: '拓扑路径',
    key: 'topology',
    children: [
      {
        title: '加载路径',
        demoLink: './page/topology/loadGml.html',
      },
      {
        title: '最短路径计算',
        demoLink: './page/topology/getShortestPath.html',
      },
      {
        title: '设置路径 passable',
        demoLink: './page/topology/topologyPassable.html',
      },
      {
        title: '沿路径移动',
        demoLink: './page/topology/pathAnimation.html',
      },
      {
        title: '操控路径',
        demoLink: './page/topology/transformTopology.html',
      },
    ],
  },
  // decal
  {
    title: '贴花',
    key: 'decal',
    children: [
      {
        title: '贴花更新',
        demoLink: './page/decal/decalTransform.html',
      },
      {
        title: '创建贴花',
        demoLink: './page/decal/decalSpotting.html',
      },
    ],
  },
  // modelTool
  {
    title: '模型操作工具',
    key: 'modelTool',
    children: [
      {
        title: '模型漫反射',
        demoLink: './page/modelTool/modelEnvMap.html',
      },
      {
        title: '选中模型',
        demoLink: './page/modelTool/selectModel.html',
      },
    ],
  },
  // sceneTool
  {
    title: '场景工具',
    key: 'sceneTool',
    children: [
      {
        title: '背景色',
        demoLink: './page/sceneTool/backgroundColor.html',
      },
      {
        title: '背景色（不透明度）',
        demoLink: './page/sceneTool/backgroundColorAlpha.html',
      },
      {
        title: '背景图',
        demoLink: './page/sceneTool/backgroundImage.html',
      },
      {
        title: '天空盒',
        demoLink: './page/sceneTool/skyBox.html',
      },
      {
        title: '球体天空盒',
        demoLink: './page/sceneTool/sphereSkyBox.html',
      },
      {
        title: '场景雾化',
        demoLink: './page/sceneTool/fog.html',
      },
      {
        title: '环境反射',
        demoLink: './page/sceneTool/environment.html',
      },
      {
        title: '色彩空间',
        demoLink: './page/sceneTool/colorSpace.html',
      },
      {
        title: '色调映射',
        demoLink: './page/sceneTool/toneMapping.html',
      },
      {
        title: '天空',
        demoLink: './page/sceneTool/sky.html',
      },
      {
        title: '海洋',
        demoLink: './page/sceneTool/ocean.html',
      },
      {
        title: '环境光遮蔽',
        demoLink: './page/sceneTool/SSAO.html',
      },
      {
        title: '空间反射',
        demoLink: './page/sceneTool/SSR.html',
      },
      {
        title: '泛光',
        demoLink: './page/sceneTool/bloom.html',
      },
      {
        title: '选择泛光',
        demoLink: './page/sceneTool/selection-bloom.html',
      },
    ],
  },
  // controls
  {
    title: '控制器',
    key: 'controls',
    children: [
      {
        title: '属性',
        demoLink: './page/controls/properties.html',
      },
      {
        title: '方法',
        demoLink: './page/controls/methods.html',
      },
      {
        title: '无限 dolly',
        demoLink: './page/controls/infinity-dolly.html',
      },
      {
        title: '动态 target',
        demoLink: './page/controls/dynamic-target.html',
      },
    ],
  },
  // camera
  {
    title: '相机',
    key: 'camera',
    children: [
      {
        title: '视角枚举',
        demoLink: './page/camera/viewpointEnum.html',
      },
      {
        title: '飞向',
        demoLink: './page/camera/flyTo.html',
      },
      {
        title: '类型',
        demoLink: './page/camera/cameraType.html',
      },
      {
        title: '环绕',
        demoLink: './page/camera/surround.html',
      },
    ],
  },
  // light
  {
    title: '灯光',
    key: 'light',
    children: [
      {
        title: '创建灯光',
        demoLink: './page/light/createLight.html',
      },
      {
        title: '动态设置灯光',
        demoLink: './page/light/setLight.html',
      },
      {
        title: '矩形区域光',
        demoLink: './page/light/rectAreaLight.html',
      },
      {
        title: '场景阴影',
        demoLink: './page/light/sceneShadow.html',
      },
    ],
  },
  // 辅助器
  {
    title: '辅助器',
    key: 'helper',
    children: [
      {
        title: '创建地面',
        demoLink: './page/helper/createGround.html',
      },
      {
        title: '添加辅助器',
        demoLink: './page/helper/addHelper.html',
      },
    ],
  },
  // animation
  {
    title: '动画',
    key: 'animation',
    children: [
      {
        title: '创建动画',
        demoLink: './page/animation/createAnimation.html',
      },
      {
        title: '动画模式枚举',
        demoLink: './page/animation/animationModeEnum.html',
      },
      {
        title: '卷帘门模拟',
        demoLink: './page/animation/juanlianmen.html',
      },
      {
        title: '区域闪烁',
        demoLink: './page/animation/polygonOpacity.html',
      },
      {
        title: '渐变色过渡',
        demoLink: './page/animation/randomColor.html',
      },

      {
        title: '路径动画-tween',
        demoLink: './page/animation/pathAnimation.html',
      },
      {
        title: '路径动画-Action',
        demoLink: './page/animation/createPathAnimationAction.html',
      },
      // {
      //   title: "相机动画",
      //   demoLink: "./page/animation/createPathAnimationActionForCamera.html",
      // },
      {
        title: '骨骼动画',
        demoLink: './page/animation/createBonePathAnimation.html',
      },
    ],
  },
  // plugin
  {
    title: '插件',
    key: 'plugin',
    children: [
      {
        title: 'SoonManager 协同',
        demoLink: './page/plugin/soonmanagerSync.html',
      },
      {
        title: 'SoonManager2.0 协同',
        demoLink: './page/plugin/soonmanager2Sync.html',
      },
      {
        title: 'CPS SoonManager 场景',
        demoLink: './page/plugin/cpsSoonmanager.html',
      },
      {
        title: 'CPS SoonManager 分层加载',
        demoLink: './page/plugin/cpsSoonmanagerLevel.html',
      },
      {
        title: 'CPS 预案八卦盘',
        demoLink: './page/plugin/cpsScheme.html',
      },
      {
        title: '导航插件',
        demoLink: './page/plugin/navigation.html',
      },
      {
        title: '热力云',
        key: 'heatCloud',
        children: [
          {
            title: '随机热力云',
            demoLink: './page/plugin/heatCloud/createHeatCloud.html',
          },
          {
            title: '线性热力云',
            demoLink: './page/plugin/heatCloud/creatLineCloud.html',
          },
          {
            title: '图片挤压',
            demoLink: './page/plugin/heatCloud/createImageExtrusion.html',
          },
          {
            title: '深入梯度体积材质',
            children: [
              {
                title: '梯度立体材质',
                demoLink: './page/plugin/heatCloud/volumeMesh/gradient.html',
              },
              {
                title: '图像立体材质',
                demoLink: './page/plugin/heatCloud/volumeMesh/image.html',
              },
              {
                title: '球形雾立体材质',
                demoLink: './page/plugin/heatCloud/volumeMesh/sphere.html',
              },
              {
                title: '颜色雾点材质',
                demoLink: './page/plugin/heatCloud/volumeMesh/colorFogPoints.html',
              },
              {
                title: '梯度雾点材质',
                demoLink: './page/plugin/heatCloud/volumeMesh/gradientFogPoints.html',
              },
            ],
          },
        ],
      },
      {
        title: '热力图',
        demoLink: './page/plugin/heatMap.html',
      },

      {
        title: '多边形热力图',
        demoLink: './page/plugin/polygonHeatMap.html',
      },
      {
        title: '快速绘制热力图',
        demoLink: './page/plugin/heatMapDrawing.html',
      },
      {
        title: '特效',
        demoLink: './page/plugin/effect.html',
      },
      {
        title: '特效：粒子簇',
        demoLink: './page/plugin/particle.html',
      },
      {
        title: '地面阴影',
        demoLink: './page/plugin/contactShadows.html',
      },
      {
        title: '天气',
        demoLink: './page/plugin/weatherEffect.html',
      },
      {
        title: '星星',
        demoLink: './page/plugin/sparkles.html',
      },
      {
        title: '光圈波浪',
        demoLink: './page/plugin/createWave.html',
      },
      {
        title: '点波浪',
        demoLink: './page/plugin/createPointsWave.html',
      },
      {
        title: '绘制基础图形',
        demoLink: './page/plugin/drawingShape.html',
      },
      {
        title: '模型操作控制器',
        demoLink: './page/plugin/transformControls.html',
      },
      {
        title: '跟随鼠标控制器',
        demoLink: './page/plugin/followMouse.html',
      },
      {
        title: '路径巡检控制器',
        demoLink: './page/plugin/patrolControls.html',
      },
      {
        title: '绘制拓扑路径',
        demoLink: './page/plugin/drawingTopology.html',
      },
      {
        title: '路径寻找',
        demoLink: './page/plugin/pathfinding.html',
      },
      {
        title: '第一人称漫游控制器',
        demoLink: './page/plugin/firstPersonControls.html',
      },
      {
        title: '相机跟随模型',
        demoLink: './page/plugin/cameraFollower.html',
      },
      {
        title: '切割控制器 - 模型切割',
        demoLink: './page/plugin/modelClipping.html',
      },
      {
        title: '切割控制器 - 场景切割',
        demoLink: './page/plugin/sceneClipping.html',
      },
      {
        title: '模型爆炸拆分（mesh）',
        demoLink: './page/plugin/modelBlast.html',
      },
      {
        title: '模型爆炸拆分（objects）',
        demoLink: './page/plugin/modelBlast-objects.html',
      },
      {
        title: '测量',
        demoLink: './page/plugin/measuring.html',
      },
      {
        title: '3D Tiles 加载',
        demoLink: './page/plugin/tiles.html',
      },
    ],
  },
  // {
  //   title: 'SoonGIS',
  //   key: 'soongis',
  //   children: [
  //     {
  //       title: 'gis融合',
  //       demoLink: './page/soongis/get-started.html',
  //     },
  //     {
  //       title: '线条效果',
  //       demoLink: './page/soongis/trips.html',
  //     },
  //   ],
  // },
  // feature
  {
    title: '特性',
    key: 'feature',
    children: [
      {
        title: '多场景',
        demoLink: './page/feature/moreScene.html',
      },
      {
        title: '方向辅助器',
        demoLink: './page/feature/directionHelper.html',
      },
      {
        title: '扶梯运行',
        demoLink: './page/feature/escalatorOperation.html',
      },
    ],
  },
];
