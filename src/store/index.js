import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

//拆分到state.js中
// let defaultCity = '上海'
// //浏览器不支持localStorage时会报错，所以需要try catch
// try{
//   if(localStorage.City){
//     defaultCity = localStorage.City
//   }
// }catch(e){}

export default new Vuex.Store({
    //公用数据
    // state: {
    //   // city: localStorage.city || '上海'
    //   // city: defaultCity
    //   state
    // },
    // // actions:{
    // //   //参数：上下文ctx和数据
    // //   changeCity(ctx, city){
    // //     //action调用mutation changeCity
    // //     ctx.commit('changeCity',city);
    // //   }
    // // },
    // mutations:{
    //   mutations
    //   //放入mutations.js
    //   //mutation 改变数据
    //   // changeCity(state, city){
    //   //   state.city = city
    //   //   //保存到本地中
    //   //   try{
    //   //     localStorage.city=city
    //   //   }catch(e){}
        
      
    // }
    //键值相同简化后：
    state,
    mutations
})