<template>
    <div>
        Counter is {{count}}
        <button @click="increment">+5</button>
        <button @click="decrement">-3</button>
        <br>
        Input Year and Month<br>
        Year
        <input v-model="inputYear"><br>
        Month
        <input v-model="inputMonth"><br>
        <button @click="findMonthFirstDayWhichWeek">Get week</button>
        whichweek is {{whichweek}}
    </div>
</template>
<script>

export default {
    data(){
        return{
            inputYear:0,
            inputMonth:0
        }
    },

    computed :{
        count(){ 
            return this.$store.getters.getCount;
        },
        whichweek(){
            return this.$store.getters.getWhichWeek;
        }
        //computed的属性和mehtods的方法不能写成lambda表达式，否则会报错Cannot read property
        // count:()=>{
        //     return this.$store.state.count;
        // }
    },
    
    
    methods:{
        increment(){
            this.$store.commit('increment',{num:5})
        },
        decrement(){
            this.$store.commit('decrement',{num:3})
        },
        findMonthFirstDayWhichWeek(){
            this.$store.commit('findMonthFirstDayWhichWeek',{year:this.inputYear,month:this.inputMonth})
        }
    },
    created(){
       

    }
}



</script>

