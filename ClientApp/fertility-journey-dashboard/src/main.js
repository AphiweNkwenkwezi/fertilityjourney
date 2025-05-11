import './style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
  } from 'chart.js';
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement
  );
  
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const options = {
  position: "top-right",
  timeout: 3000,

};

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: 'top-right',
  toastDefaults: {
    success: {
      className: 'custom-success-toast',
    },
    error: {
      className: 'custom-error-toast',
    }
  }
});
app.component('Loading', Loading);

app.mount('#app');
