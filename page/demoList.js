export default [
  // start
  {
    title: "起步",
    key: "start",
    children: [
      {
        title: "Hello World",
        demoLink: "./start/helloWorld.html"
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
        demoLink: "./model/loadSbm.html"
      },
      {
        title: "加载 gltf",
        demoLink: "./model/loadGltf.html"
      },
      {
        title: "加载 fbx",
        demoLink: "./model/loadFbx.html"
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
        demoLink: "./poi/createPoi.html"
      },
      {
        title: "PoiNode",
        demoLink: "./poi/createPoiNode.html"
      },
      {
        title: "PoiNode 空间视频",
        demoLink: "./poi/createPoiNodeForVideo.html"
      }
    ]
  },
  // event
  {
    title: "事件",
    key: "event",
    children: [
      {
        title: "全局事件",
        demoLink: "./event/globalEvent.html"
      },
      {
        title: "模型事件",
        demoLink: "./event/modelEvent.html"
      },
      {
        title: "poi事件",
        demoLink: "./event/poiEvent.html"
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
        demoLink: "./canvas3D/pointLinePolygon.html"
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
        demoLink: "./topology/loadGml.html"
      },
      {
        title: "最短路径计算",
        demoLink: "./topology/getShortestPath.html"
      },
      {
        title: "操控路径",
        demoLink: "./topology/transformTopology.html"
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
        demoLink: "./modelTool/selectModel.html"
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
        demoLink: "./sceneTool/backgroundColor.html"
      },
      {
        title: "背景图",
        demoLink: "./sceneTool/backgroundImage.html"
      },
      {
        title: "天空盒",
        demoLink: "./sceneTool/skyBox.html"
      },
      {
        title: "球体天空盒",
        demoLink: "./sceneTool/sphereSkyBox.html"
      },
      {
        title: "场景雾化",
        demoLink: "./sceneTool/fog.html"
      },
    ]
  },
  // camera
  {
    title: "相机",
    key: "camera",
    children: [
      {
        title: "控制器配置",
        demoLink: "./camera/controlsOptions.html"
      },
      {
        title: "视角枚举",
        demoLink: "./camera/viewpointEnum.html"
      },
      {
        title: "飞向",
        demoLink: "./camera/flyTo.html"
      },
      {
        title: "始终飞向正面",
        demoLink: "./camera/autoFrontViewpoint.html"
      },
      {
        title: "环绕",
        demoLink: "./camera/surround.html"
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
        demoLink: "./light/customCreateLight.html"
      },
      {
        title: "动态设置灯光",
        demoLink: "./light/setLight.html"
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
        demoLink: "./helper/createGround.html"
      },
      {
        title: "添加辅助器",
        demoLink: "./helper/addHelper.html"
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
        demoLink: "./animation/createAnimation.html"
      },
      {
        title: "动画模式枚举",
        demoLink: "./animation/animationModeEnum.html"
      },
      {
        title: "卷帘门模拟",
        demoLink: "./animation/juanlianmen.html"
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
        demoLink: "./plugin/soonmanagerSync.html"
      },
      {
        title: "热力图",
        demoLink: "./plugin/heatMap.html"
      },
      {
        title: "模型操作控制器",
        demoLink: "./plugin/transformControls.html"
      },
      {
        title: "跟随鼠标控制器",
        demoLink: "./plugin/followMouse.html"
      },
      {
        title: "路径巡检控制器",
        demoLink: "./plugin/patrolControls.html"
      },
      {
        title: "绘制拓扑路径",
        demoLink: "./plugin/drawTopology.html"
      },
      {
        title: "第一人称漫游控制器",
        demoLink: "./plugin/firstPersonControls.html"
      },
      {
        title: "相机跟随模型",
        demoLink: "./plugin/cameraFollower.html"
      },
      {
        title: "切割控制器 - 模型切割",
        demoLink: "./plugin/modelClipping.html"
      },
      {
        title: "切割控制器 - 场景切割",
        demoLink: "./plugin/sceneClipping.html"
      },
    ]
  }
]