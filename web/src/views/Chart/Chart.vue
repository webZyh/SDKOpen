<template>
  <div class="">
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <div :class="className" :style="{height:height,width:width}" ref="myChart"></div>
    </el-row>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '350px'
      },
    },
    data() {
      return {
        chart: null
      }
    },
    mounted(){
      this.initChart()
    },
    methods:{
      initChart(){
        this.chart = echarts.init(this.$refs.myChart);
        //此处可以获取异步数据
        this.chart.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }]
        });
      }
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose();
      this.chart = null
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    margin-left: 100px;
  }
</style>
