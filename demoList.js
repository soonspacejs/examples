export default [
  // start
  {
    title: "起步",
    key: "start",
    children: [
      {
        title: "Hello World",
        demoLink: "./page/start/helloWorld.html"
      },
      {
        title: "全局事件",
        demoLink: "./page/start/globalEvent.html"
      },
      {
        title: "模型独立事件",
        demoLink: "./page/start/modelEvent.html"
      },
      {
        title: "Poi 独立事件",
        demoLink: "./page/start/poiEvent.html"
      }
    ]
  },
  // model
  {
    title: "模型",
    key: "model",
    children: [
      {
        title: "加载 sbm",
        demoLink: "./page/model/loadSbm.html"
      },
      {
        title: "加载 sbm 01",
        demoLink: "./page/model/loadSbm01.html"
      },
      {
        title: "加载 gltf",
        demoLink: "./page/model/loadGltf.html"
      },
      {
        title: "加载 fbx",
        demoLink: "./page/model/loadFbx.html"
      }
    ]
  },
  // poi
  {
    title: "Poi",
    key: "poi",
    children: [
      {
        title: "Poi",
        demoLink: "./page/poi/createPoi.html"
      },
      {
        title: "PoiNode",
        demoLink: "./page/poi/createPoiNode.html"
      },
      {
        title: "PoiNode 空间视频",
        demoLink: "./page/poi/createPoiNodeForVideo.html"
      }
    ]
  },
  // canvas3D
  {
    title: "空间画布",
    key: "canvas3D",
    children: [
      {
        title: "点线面",
        demoLink: "./page/canvas3D/pointLinePolygon.html"
      },
      {
        title: "空间画布对象",
        demoLink: "./page/canvas3D/manipulatePolygon.html"
      }
    ]
  },
  // topology
  {
    title: "拓扑路径",
    key: "topology",
    children: [
      {
        title: "加载路径",
        demoLink: "./page/topology/loadGml.html"
      },
      {
        title: "最短路径计算",
        demoLink: "./page/topology/getShortestPath.html"
      },
      {
        title: "操控路径",
        demoLink: "./page/topology/transformTopology.html"
      }
    ]
  },
  // modelTool
  {
    title: "模型操作工具",
    key: "modelTool",
    children: [
      {
        title: "选中模型",
        demoLink: "./page/modelTool/selectModel.html"
      }
    ]
  },
  // sceneTool
  {
    title: "场景工具",
    key: "sceneTool",
    children: [
      {
        title: "背景色",
        demoLink: "./page/sceneTool/backgroundColor.html"
      },
      {
        title: "背景图",
        demoLink: "./page/sceneTool/backgroundImage.html"
      },
      {
        title: "天空盒",
        demoLink: "./page/sceneTool/skyBox.html"
      },
      {
        title: "球体天空盒",
        demoLink: "./page/sceneTool/sphereSkyBox.html"
      },
      {
        title: "场景雾化",
        demoLink: "./page/sceneTool/fog.html"
      },
    ]
  },
  // controls
  {
    title: "控制器",
    key: "controls",
    children: [
      {
        title: "控制器配置",
        demoLink: "./page/controls/setOptions.html"
      },
    ]
  },
  // camera
  {
    title: "相机",
    key: "camera",
    children: [
      {
        title: "视角枚举",
        demoLink: "./page/camera/viewpointEnum.html"
      },
      {
        title: "飞向",
        demoLink: "./page/camera/flyTo.html"
      },
      {
        title: "始终飞向正面",
        demoLink: "./page/camera/autoFrontViewpoint.html"
      },
      {
        title: "环绕",
        demoLink: "./page/camera/surround.html"
      }
    ]
  },
  // light
  {
    title: "灯光",
    key: "light",
    children: [
      {
        title: "自定义灯光",
        demoLink: "./page/light/customCreateLight.html"
      },
      {
        title: "动态设置灯光",
        demoLink: "./page/light/setLight.html"
      },
    ]
  },
  // 辅助器
  {
    title: "辅助器",
    key: "helper",
    children: [
      {
        title: "创建地面",
        demoLink: "./page/helper/createGround.html"
      },
      {
        title: "添加辅助器",
        demoLink: "./page/helper/addHelper.html"
      },
    ]
  },
  // animation
  {
    title: "动画",
    key: "animation",
    children: [
      {
        title: "创建动画",
        demoLink: "./page/animation/createAnimation.html"
      },
      {
        title: "动画模式枚举",
        demoLink: "./page/animation/animationModeEnum.html"
      },
      {
        title: "卷帘门模拟",
        demoLink: "./page/animation/juanlianmen.html"
      }
    ]
  },
  // plugin
  {
    title: "插件",
    key: "plugin",
    children: [
      {
        title: "SoonManager 协同",
        demoLink: "./page/plugin/soonmanagerSync.html"
      },
      {
        title: "热力图",
        demoLink: "./page/plugin/heatMap.html"
      },
      {
        title: "模型操作控制器",
        demoLink: "./page/plugin/transformControls.html"
      },
      {
        title: "跟随鼠标控制器",
        demoLink: "./page/plugin/followMouse.html"
      },
      {
        title: "路径巡检控制器",
        demoLink: "./page/plugin/patrolControls.html"
      },
      {
        title: "绘制拓扑路径",
        demoLink: "./page/plugin/drawTopology.html"
      },
      {
        title: "第一人称漫游控制器",
        demoLink: "./page/plugin/firstPersonControls.html"
      },
      {
        title: "相机跟随模型",
        demoLink: "./page/plugin/cameraFollower.html"
      },
      {
        title: "切割控制器 - 模型切割",
        demoLink: "./page/plugin/modelClipping.html"
      },
      {
        title: "切割控制器 - 场景切割",
        demoLink: "./page/plugin/sceneClipping.html"
      },
      {
        title: "模型爆炸拆分",
        demoLink: "./page/plugin/modelBlast.html"
      },
    ]
  },
  // featrue
  {
    title: "特性",
    key: "featrue",
    children: [
      {
        title: "多场景",
        demoLink: "./page/featrue/moreScene.html"
      },
      {
        title: "方向辅助器",
        demoLink: "./page/featrue/directionHelper.html"
      },
      {
        title: "扶梯运行",
        demoLink: "./page/featrue/escalatorOperation.html"
      }
    ]
  }
]