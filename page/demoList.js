export default [
  // start
  {
    title: "起步",
    icon: "bank",
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
    icon: "bank",
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
    icon: "bank",
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
    icon: "bank",
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
    icon: "bank",
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
    title: "路径",
    icon: "bank",
    key: "topology",
    children: [
      {
        title: "加载 Gml 路径",
        demoLink: "./topology/loadGml.html"
      },
      {
        title: "创建 topology 路径",
        demoLink: "./topology/createTopology.html"
      },
      {
        title: "操控 topology 路径",
        demoLink: "./topology/transformTopology.html"
      }
    ]
  },
  // modelTool
  {
    title: "模型操作工具",
    icon: "bank",
    key: "modelTool",
    children: [
      {
        title: "选中模型",
        demoLink: "./modelTool/selectModel.html"
      },
      {
        title: "模型切割",
        demoLink: "./modelTool/modelClipping.html"
      }
    ]
  },
  // sceneTool
  {
    title: "场景工具",
    icon: "bank",
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
      // {
      //   title: "2D模式",
      //   demoLink: "./sceneTool/2DMode.html"
      // },
      {
        title: "场景雾化",
        demoLink: "./sceneTool/fog.html"
      },
      {
        title: "场景切割",
        demoLink: "./sceneTool/sceneClipping.html"
      },
      // {
      //   title: "测量",
      //   demoLink: "./sceneTool/measure.html"
      // }
    ]
  },
  // camera
  {
    title: "相机",
    icon: "bank",
    key: "camera",
    children: [
      // {
      //   title: "相机限制",
      //   demoLink: "./camera/cameraLimit.html"
      // },
      {
        title: "视角枚举",
        demoLink: "./camera/viewpointEnum.html"
      },
      {
        title: "飞向",
        demoLink: "./camera/flyTo.html"
      },
      {
        title: "环绕",
        demoLink: "./camera/surround.html"
      },
      // {
      //   title: "相机跟随",
      //   demoLink: "./camera/cameraFollower.html"
      // },
      // {
      //   title: "第一人称",
      //   demoLink: "./camera/firstPersonRoot.html"
      // },
    ]
  },
  // light
  // {
  //   title: "灯光",
  //   icon: "bank",
  //   key: "light",
  //   children: [
  //     {
  //       title: "灯光配置",
  //       demoLink: "./light/lightOption.html"
  //     },
  //     {
  //       title: "创建点光源",
  //       demoLink: "./light/createSpotLight.html"
  //     },
  //   ]
  // },
  // 辅助器
  {
    title: "辅助器",
    icon: "bank",
    key: "helper",
    children: [
      {
        title: "创建地面",
        demoLink: "./helper/createGround.html"
      },
    ]
  },
  // animation
  {
    title: "动画",
    icon: "bank",
    key: "animation",
    children: [
      {
        title: "创建动画",
        demoLink: "./animation/createAnimation.html"
      },
      // {
      //   title: "卷帘门升降",
      //   demoLink: "./animation/juanlianmen.html"
      // },
    ]
  },
  // plugin
  {
    title: "插件",
    icon: "bank",
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
        title: "切割控制器 - 模型切割",
        demoLink: "./plugin/modelClipping.html"
      },
      {
        title: "切割控制器 - 场景切割",
        demoLink: "./plugin/sceneClipping.html"
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
        title: "第一人称漫游控制器",
        demoLink: "./plugin/firstPersonControls.html"
      },
    ]
  }
]