<template>
    <div id="world_app">
        <h1>~I am a title.~</h1>
        <a>written by {{author}}</a><br>
        <input v-model="author">
        
           
        <h1>豆瓣电影排行榜</h1>
        <ul>
            <li v-for="article in articles"  :key="article in articles">
                {{article.title}}
            </li>    
        </ul>    
          

    </div>
</template>
<script>
export default 
{
    
    data() {
        return{
            author:'微信公众号',
            articles:[]
        }
    },

    mounted:function(){
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
            headers:{

            },
            emulateJSON:true

        }).then(function(response){
            this.articles=response.data.subjects;
        },function(response){
            console.log(response);
        });

    }


}
</script>

