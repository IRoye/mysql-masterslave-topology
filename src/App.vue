<!--
 * @Descripttion: 
 * @Author: yuyi
 * @Date: 2020-11-29 13:52:59
 * @LastEditors: yuyi
 * @LastEditTime: 2020-11-29 15:25:04
-->
<template>
  <div id="app">
    <div id="manager1" class="item" :style="{top: '50px', left: '50px'}">1</div>
    <div id="manager2" class="item" :style="{top: '50px', left: '400px'}">2</div>
    <div id="manager3" class="item" :style="{top: '200px', left: '50px'}">3</div>
    <div id="manager4" class="item" :style="{top: '200px', left: '400px'}">4</div>
  </div>
</template>

<script>
import jsPlumbUtils from '@/utils/jsPlumbUtils.js'
export default {
  name: 'App',
  components: {
  },
  created() {
    this.jsPlumb = jsPlumbUtils.getInstance()
  },
  data() {
    return {
      jsPlumb: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.createConnections()
    });
  },
  methods: {
    createConnections() {
      if (!this.jsPlumb) {
        this.jsPlumb = jsPlumbUtils.getInstance()
      }
      this.jsPlumb.ready(() => {
          this.jsPlumb.reset();
          this.jsPlumb.importDefaults({
              Container: 'container',
              Connector: ['Flowchart'],
              PaintStyle : { strokeWidth : 2, stroke : '#909399' },
              ConnectionsDetachable: false,
              Anchors: ['Continuous', 'Continuous'],
              Endpoints: [['Dot', { radius: 5 }], 'Blank'],
              EndpointStyle: { fill: '#909399' },
              ConnectionOverlays: [
                  ['Arrow', {
                      location: 1,
                      visible: true,
                      width: 11,
                      length: 11,
                  }]
              ],
          });
          this.jsPlumb.setSuspendDrawing(true);
          this.jsPlumb.connect({ source: 'manager1', target: 'manager2' });
          this.jsPlumb.connect({ source: 'manager3', target: 'manager4' });
           this.jsPlumb.connect({ source: 'manager4', target: 'manager3' });
          this.jsPlumb.setSuspendDrawing(false, true);
      });
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item {
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 100px;
  height: 50px;
}
</style>
