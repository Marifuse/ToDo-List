// Importar los archivos Vue
import Vue from 'vue';
import App from "./App.vue";

// Configuraciones de Vue para desarrollo
Vue.config.productionTip = false;

// Renderizar Vue para apernar todo lo que se haga dentro del ID App en el HTML
new Vue({
    render: h=>h(App)
}).$mount('#app');