import Vue from 'vue';
import { imageHost } from './src/util/filters';

Vue.config.productionTip = false;

Vue.filter('imageHost', imageHost);
