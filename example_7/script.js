import HomeView from "./componenets/HomeView.js";
const App = Vue.createApp({
components: {
    'home-view': HomeView
}
});

App.mount('#app');


