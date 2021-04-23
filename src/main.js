import { createApp } from 'vue'
import App from './App.vue'
// import EchartBox from './components/echarts/index';
import Zechart from 'z-echarts';
import 'z-echarts/style/echarts-com.css';

createApp(App).use(Zechart).mount('#app')
