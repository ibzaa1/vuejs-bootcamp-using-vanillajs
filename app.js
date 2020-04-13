new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0,
        name: '',
        age: ''
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
    }
});