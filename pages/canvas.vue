<template>
  <div>
    <h1>お絵かき</h1>
    <div id="canvas-area">
      <canvas id="myCanvas" :width="width" :height="height"
        @mousedown="dragStart"
        @mouseup="dragEnd"
        @mouseout="dragEnd"
        @mousemove="draw">
      </canvas>
      <p>縦線：<input name="vertical" v-model="verticalLineNum" type="number" @change="changeLineNum">本</p>
      <p>横線：<input name="horizontal" v-model="horizontalLineNum" type="number" @change="changeLineNum">本</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrawTool",
  data() {
    return {
        canvas: null,
        context: null,
        isDrag: false,
        width: 200,
        height: 250,
        verticalLineNum: 0,
        horizontalLineNum: 0,
    };
  },
  mounted(){
      this.canvas = document.querySelector('#myCanvas')
      this.context = this.canvas.getContext('2d')
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 1;

      this.context.strokeStyle = '#000000';
  },
  methods: {
    changeLineNum(e) {
      // リセット
      this.context.clearRect(0, 0, this.width, this.height)

      this.context.beginPath()

      const verticalLineNum = e.target.name === 'vertical' ? Number(e.target.value) : this.verticalLineNum
      console.log(verticalLineNum)
      console.log(verticalLineNum + 1)
      const lineBetweenWidth = this.width / (Number(verticalLineNum) + 1)
      console.log(lineBetweenWidth)

      for (let i = 0; i < verticalLineNum; i++) {
        const horizotalAxis = lineBetweenWidth * (i + 1)
        this.context.moveTo(horizotalAxis, 0)
        this.context.lineTo(horizotalAxis, this.height)
      }

      const horizontalLineNum = e.target.name === 'horizontal' ? Number(e.target.value) : this.horizontalLineNum
      const lineBetweenHeight = this.height / (Number(horizontalLineNum) + 1)

      for (let i = 0; i < horizontalLineNum; i++) {
        const verticalAxis = lineBetweenHeight * (i + 1)
        this.context.moveTo(0, verticalAxis)
        this.context.lineTo(this.width, verticalAxis)
      }

      this.context.stroke()
    },
    // 描画中
    draw :function(e) {
      var x = e.layerX
      var y = e.layerY
 
      console.log(this.isDrag)
      if(!this.isDrag) {
        return;
      }
 
      this.context.lineTo(x, y);
      this.context.stroke();
    },
    // 描画開始（mousedown）
    dragStart:function(e) {
      var x = e.layerX
      var y = e.layerY
 
      this.context.beginPath();
      this.context.lineTo(x, y);
      this.context.stroke();
   
      this.isDrag = true;
    },
    // 描画終了（mouseup, mouseout）
    dragEnd: function() {
      this.context.closePath();
      this.isDrag = false;
    }
  }
};
</script>

<style scoped>
#myCanvas {
 border: 1px solid #000000;
 background-image: url('assets/img/dog.png');
}
</style>

