//es6语法加载模块
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


//引用自定义的vue
import mainVue from './main.vue'

import helloVue from './component/hello.vue'
import worldVue from './component/world.vue'
import counterVue from './component/counter.vue'

import counterStore from './store/counterStore'


//开启debug模式
Vue.config.debug=true;



//Vue启用Vuex
Vue.use(Vuex);

//Vue启用VueRouter
Vue.use(VueRouter);


//Vue启用VueResource,这样才能使用http的jsonp
Vue.use(VueResource);



//创建一个路由器实例，并配置路由规则
const vue_router=new VueRouter({
        mode:'history',
        base:__dirname,
        routes:[
            {
                path:'/build/hello',
                component:helloVue
            },
            {
                path:'/build/world',
                component:worldVue
            },
            {
                path:'/build/counter',
                component:counterVue
            }
        ]

    });

//将路由绑定到mainVue中，而main对象挂在到admin元素中
//通过<router-link>实现点击不同的选项，
//通过<router-view>显示当前路由的节点
const main=new Vue(
{
    el:"#admin",
    store:counterStore,
    router:vue_router, //sotre 注入到整个App应用之中
    render:h=> h(mainVue) //在id=admin节点上挂在mainVue
})

// new Vue({
//     el:"#root",
//     components: {
//         hello:helloVue,
//         world:worldVue
//     }
// })