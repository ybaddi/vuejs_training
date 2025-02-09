// const App = Vue.createApp({
//     data() {
//         return {
//             message : "Hello World"
//     };
//     }
// });

// App.mount('#app');


import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            message : "Hello World"
    };
    }
}).mount('#app');