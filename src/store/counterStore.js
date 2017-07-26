import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    count:0,
    year:0,
    month:0,
    whichweek:-1
}


const mutations=
{

        decrement:(state,numjson)=>{state.count=state.count-numjson.num;},
        increment:(state,numjson)=>{state.count=state.count+numjson.num;},
        

        findMonthFirstDayWhichWeek:(state,numjson)=>{
            //1900年1月1日是星期X
            let X=1 
            let Y=numjson.year
            let M=numjson.month

            //如果传入的参数是字符串先转为数字 
            if(typeof Y=='string')
                Y=parseInt(Y);

            if(typeof M=='string')
                M=parseInt(M);

            console.log('counterStore.js Y:'+Y+' M:'+M)

            //计算Y年1月到1900年1月有多少天
            let totalDay=(Y-1900)*365 


            //加上其间闰年多出的天数,单纯算4的倍数
            totalDay+=Math.floor(Math.abs((Y-1901)/4))+1 
            

            //减去不能被400整除的100倍数年份，上一部多算1900等年份为闰年
            for(let i=19;i<=Math.floor(Y/100);i++) {
                    i%4!==0 && --totalDay;
                  //console.log(i+' '+Math.floor(i/4))
            }
           
            //加上月份日期偏移
            const MM=[31,28,31,30,31,30,31,31,30,31,30,31];

            for (let i=0;i<M-1;i++)
                totalDay+= MM[i];
     
            //考察当年是否为闰年
            if(M>3)
                totalDay=totalDay+(Math.floor(Y/400)==0?1:(Math.floor(Y/4)==0&& Math.floor(Y/100)!=0 ?1:0))
             
            console.log(totalDay)

            //用0表示星期日,数组从0开始所以许多日期插件第一列元素为星期日
            console.log('total day:'+totalDay)
            console.log('Get which week:'+(X+ totalDay)%7)
            state.whichweek=(X+ totalDay)%7
        }
}

// const actions={
//         increment:({commit})=>{ commit('increment') },
//         decrement:({commit})=>{ commit('decrement')}
// }


const getters={
    getCount:(state)=>{return state.count},
    getYear:(state)=>{return state.year},
    getMonth:(state)=>{return state.month},
    getWhichWeek:(state)=>{return state.whichweek}
}

export default new Vuex.Store({
   state,
//    actions,
   mutations,
   getters,
   strict: true

})