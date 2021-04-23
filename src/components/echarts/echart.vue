<template>
  <div class="echart_root" ref="chartBox"></div>
</template>

<script>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import * as echarts from 'echarts';
export default {
  name: 'echart',
  props: {
    option: {
      type: Object,
      default: () => ({ title: { text: 'Echart' } }),
    },
  },
  setup(props) {
    let chart = null;
    const chartBox = ref(null);

    const init = () => {
      chart = echarts.init(chartBox.value);
    };

    const chartId = () => {
      return chart
    }
    const drawChart = (option) => {
      chart.setOption(option);
    };

    const clearChart = () => {
      chart.clear()
    }
    onMounted(() => {
      nextTick(() => {
        if (!chart) {
          init();
        }
      });
    });

    onUnmounted(() => {
      chart = null
    })

    watch(
      () => props.option,
      (val) => {
        nextTick(() => {
          if (!chart) {
            init();
          }
          clearChart()
          if (!val) {
            drawChart({ title: { text: '暂无数据' } });
          } else {
            drawChart(val);
          }
        });
      },
      { deep: true, immediate: true }
    );

    return {
      chartBox,
      init,
      chartId,
      drawChart,
      clearChart
    };
  },
};
</script>

<style lang="scss" scoped>
.echart_root {
  width: 100%;
  height: 100%;
  min-height: 500px;
}
</style>
