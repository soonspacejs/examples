class s{constructor(s){this.ssp=s,this.viewport=s.viewport,this.nodes=[],this.topology=null,this.mouseDownNode=null,this.mouseMoveNode=null,this.options={id:"draing_topology",type:"line",nodes:[]},this.onMouseDowm=this.onMouseDowm.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onClick=this.onClick.bind(this),this.onDblClick=this.onDblClick.bind(this),this.onRightClick=this.onRightClick.bind(this),this.onKeyUp=this.onKeyUp.bind(this)}start(s){this.options=s,this.ssp.signals.mouseDown.add(this.onMouseDowm),this.ssp.signals.mouseMove.add(this.onMouseMove),this.ssp.signals.click.add(this.onClick),this.ssp.signals.dblClick.add(this.onDblClick),this.ssp.signals.rightClick.add(this.onRightClick),this.ssp.signals.keyUp.add(this.onKeyUp)}stop(){this.nodes=[],this.mouseDownNode=null,this.mouseMoveNode=null,this.options={id:"draing_topology",type:"line",nodes:[]},this.ssp.signals.mouseDown.remove(this.onMouseDowm),this.ssp.signals.mouseMove.remove(this.onMouseMove),this.ssp.signals.click.remove(this.onClick),this.ssp.signals.dblClick.remove(this.onDblClick),this.ssp.signals.rightClick.remove(this.onRightClick),this.ssp.signals.keyUp.remove(this.onKeyUp)}onMouseDowm(s){const o=this.ssp.viewport.getIntersects(s);o[0]&&(this.mouseDownNode={id:`node${this.nodes.length+1}`,name:`node${this.nodes.length+1}`,position:o[0].point.clone().setY(o[0].point.y+.01),graphs:[]})}onMouseMove(s){const o=this.ssp.viewport.getIntersects(s);o[0]&&(this.mouseMoveNode={id:`node${this.nodes.length+1}`,name:`node${this.nodes.length+1}`,position:o[0].point.clone().setY(o[0].point.y),graphs:[]},this.renderTopology([...this.nodes,this.mouseMoveNode]))}onClick(s){this.mouseDownNode&&(this.nodes.push(this.mouseDownNode),this.renderTopology(this.nodes),this.mouseDownNode=null)}onDblClick(s){this.mouseDownNode&&(this.nodes.push(this.mouseDownNode),this.renderTopology(this.nodes),this.mouseDownNode=null,this.options.onDone&&this.options.onDone([...this.nodes]),this.stop())}onRightClick(s){this.nodes.pop(),this.renderTopology(this.nodes)}onKeyUp(s){switch(s.code){case"Backspace":this.nodes.pop(),this.renderTopology(this.nodes);break;case"Enter":this.options.onDone&&this.options.onDone([...this.nodes]),this.renderTopology(this.nodes),this.stop();break;case"Escape":this.options.onCancel&&this.options.onCancel(),this.ssp.removeTopologyById(this.options.id),this.stop()}}renderTopology(s){this.topology?this.ssp.resetTopologyNodes(this.topology,s):this.topology=this.ssp.createTopology(Object.assign(Object.assign({},this.options),{type:"line",nodes:s}))}}export{s as default};