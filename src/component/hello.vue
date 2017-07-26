<template>
    <div id="hello_app">
        <h1>sha256加密过程</h1>
        请你输入
        <input v-model="message"><br>

        需加密数据为: {{message}} 
        <button @click="encryt_data">sha256</button><br>

        sha256获取摘要的结果为:
        <input v-model="encryt_message" size="75" readonly="true"><br>
        
    </div>
</template>
<script>

import {sha256_digest,fun} from '../util/sha256' //引用地址不需要加上后缀.js

export default 
{
    data(){
        return{
            message:'微信公众号',
            encryt_message:''
        }
    },

    methods: {
        encryt_data()
        {
            
            var input_str=this.message;

           
            var sha256_summary=sha256_digest(input_str);

            console.log('input data of encryption:'+input_str);
            console.log('output data of encryption:'+sha256_summary);
            console.log('output of fun:'+fun(36));

            this.encryt_message=sha256_summary;
        },
    }
}
</script>

