const App = Vue.createApp({
    data() {
        return {
            message : "<span>Hello World</span>",
            tab: [2,3,6,7,9],
            etudiant: { id: 320123, prenom: "Nazha", nom:"EL IDRISSI", note: 18},
            nom: "Youssef BADDI",
            personnes: [
                { id: 320123, prenom: "Nazha", nom:"EL IDRISSI"},
                { id: 320123, prenom: "Noual", nom:"Oueld elhairechu"},
                { id: 320123, prenom: "Nourdeddine", nom:"Belguinan"},
                { id: 320123, prenom: "Lahcen", nom:"AGLAGAL"}
            ]
        };
    },
    methods: {
        sayHello: function(){
            return 'Hello from VueJs 3';
        },
        sayBonjour(){
            return 'Hello from VueJs 3';
        },
        sayBonjourToMe(){
            return `Hello ${this.nom}`;
        },
        sayBonjourTo(nom){
            return `Hello ${nom}`;
        },

    }

});

App.mount('#app');


