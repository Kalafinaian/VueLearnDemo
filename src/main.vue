<template>
    <div id="root">
        <h1>{{message}}</h1>
       <ul>
            <li><router-link to="/build/hello">Hello模块 ecc+rjindeal+sha256摘要加密</router-link></li>
            <li><router-link to="/build/world">World模块 获取豆瓣电影排行榜(http get)</router-link></li>
            <li><router-link to="/build/counter">Counter模块 Vuex例子</router-link></li>
        </ul>
        <router-view></router-view>
    </div> 
</template>
<script>
export default {
    name : 'main',
    data () {
        return {
            message:'这个是Vuex学习例子！'
           
        }
    }, 
    created () {
        console.log(this.data)
    }
}
</script>

