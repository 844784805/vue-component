<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <echart :option="option" ref="chartDiv" />
</template>

<script>
// import Echart from '@/components/echarts/echart.vue';
import { reactive, ref, toRefs, onMounted, nextTick } from 'vue';
export default {
  name: 'App',
  components: {
    // Echart,
  },
  setup() {
    const state = reactive({
      option: {
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {
          // show: true,
          trigger: 'item',
          position: 'top',
        },
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          triggerEvent: true,
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
          {
            name: '销量1',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      chart: null,
    });

    const chartDiv = ref(null);
    let index = 0;
    onMounted(() => {
      nextTick(() => {
        state.chart = chartDiv.value.chartId();
        console.log(state.chart);
        state.chart.on('click', 'xAxis', function(params) {
          console.log(params);
        });

        setInterval(() => {
          const len = index % 6;
          // console.log(len);
          state.chart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: len,
          });
          index++;
        }, 2000);
      });
    });

    return {
      ...toRefs(state),
      chartDiv,
    };
  },
};
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
</style>
