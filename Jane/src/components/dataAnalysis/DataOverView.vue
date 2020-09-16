<template>
    <div class="dataviem">
        <el-card>
            <div id="main1"></div>
        </el-card>
        <el-card>
            <div id="main2"></div>
        </el-card>
    </div>
</template>

<script>
export default {
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = this.$echarts.init(document.getElementById('main1'))
    // 绘制图表
    myChart1.setOption({
      title: {
        text: '9期框架班-Demo'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })

    var myChart2 = this.$echarts.init(document.getElementById('main2'))
    myChart2.setOption({
      title: {
        text: '框架班人数'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['框架10班', '框架3班', '框架4班', '框架1班', '框架8班', '框架9班']
      },
      series: [
        {
          name: '人数',
          type: 'bar',
          data: [39, 25, 70, 90, 66, 99]
        }]
    })
  }
}
</script>

<style lang="scss" scoped>
.dataviem {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .el-card{
        width: 50%;
        #main1,#main2{
        height: 300px;
        padding: 20px;
    }
    }
}
</style>>
