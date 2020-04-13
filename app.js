new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0,
        name: '',
        age: '',
        a: 0,
        b: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function() {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You clicked me');
        },
        logName: function() {
            console.log('you entered your name');
        },
        logAge: function() {
            console.log('you entered your age');
        }
    },
    computed: {
        addToA: function () {
            console.log('addTOa');
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addTOb');
            return this.b + this.age;
        }
    }
});