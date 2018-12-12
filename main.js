Vue.component('info',{
    template: '<p>Vue (pronounced /vjuː/, like <b>view</b>) is a <b>progressive framework</b> for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>'
});

var app = new Vue({
    el: '#container',
    data: {
        vue: 'Vue',
        hello: 'Welcome'
    }
});