import './bootstrap';
import router from './routes';

Vue.component('Home', require('./views/Home.vue'));

new Vue({
    el: '#app',
    router
});
