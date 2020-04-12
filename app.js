new Vue({
    el: '#vue-app',
    data: {
        name:' Ibby',
        job: 'Banker',
        website: 'http://whatsapp.com',
        websiteTag: '<a href="http://whatsapp.com">Also Whats App</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + this.name;
        }
    }
});