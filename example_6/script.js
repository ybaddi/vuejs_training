const App = Vue.createApp({
    data() {
        return {
            message : "<span>Hello World</span>",
            tab: [2,3,6,7,9],
            etudiant: { id: 320123, prenom: "Nazha", nom:"EL IDRISSI", note: 18},
            nom: "BADDI Y",
            age: 24,
            personnes: [
                { id: 320123, prenom: "Nazha", nom:"EL IDRISSI"},
                { id: 320123, prenom: "Noual", nom:"Oueld elhairechu"},
                { id: 320123, prenom: "Nourdeddine", nom:"Belguinan"},
                { id: 320123, prenom: "Lahcen", nom:"AGLAGAL"}
            ],
            link:"http://uit.ac.ma",
            href:"http://uit.ac.ma",
            linkTarget:{
                href: "http://uit.ac.ma",
                target: "_blank",
                title: "UIT",
                arg:"hello"
            },
            red: true,
            color: 'white',
            colorBg: 'red',
            style:{
                color: 'blue',
                backgroundColor: 'red'
            },
            font:{
                fontWeight: 'bold'
            },
            disable: true,
            messageInput: '',
            messageTwoWay: 'Youssef BADDI'
        };
    },
    watch:{
        messageTwoWay(newValue, oldValue){
            console.log(newValue, oldValue);
        }
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
        isPair(index){
            return index % 2 === 0;
        },
        getColor(){
            return 'white';
        },
        getBgColor(){
            return 'red';
        },
        colorCondition(){
            var res;
            if(this.red==false)
                res="rouge"
            else
                res="bleu"

            this.red= !this.red;
            return res;
        },
        getStyle(){
            return { color: 'white', backgroundColor: 'red'}
        },
        sayBonjourToMeOnClick(){
            alert('Hello from VueJs 3');
        },
        showValue(str,event){
            console.log(str);
            console.log(event.target.value);
            console.log(event.data);
        },
        updateMessage(event){
            this.messageInput = event.target.value;
        }

    }

});

App.mount('#app');


