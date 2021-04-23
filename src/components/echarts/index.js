import EchartBox from './echart.vue';

EchartBox.install = function(vue){
  vue.component(EchartBox.name, EchartBox)
}

export default EchartBox