<template>
    <div>
        <!-- <home-header :city = "city"></home-header> -->
        <home-header></home-header>
        <home-swiper :swiperList = "swiperList"></home-swiper>
        <home-icons :iconList = "iconList"></home-icons>
        <home-recommend :recommendList = "recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>
<script>
// 局部组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios' //引入axios
import {mapState} from 'vuex'
export default {
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return{
            lastCity:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    computed:{
        //将vuex中的city公用数据映射到city的计算属性中
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
             //实际上已经定位到/static/mock下的文件
             //使用config/index.js配置proxy
            axios.get('/api/index.json?city='+this.city)  
            .then(this.getHomeInfoSucc)
            .catch(function (error) {
                console.log(err)
            })
        },
        getHomeInfoSucc(res){
            res=res.data;
            // console.log(res)
            if(res.ret && res.data){
                const data = res.data;
                // this.city = data.city;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }

        }
    },
    //在home里面发送ajax请求
    mounted(){
        // console.log("mounted")
        this.lastCity = this.city;
        this.getHomeInfo()
    },
    //由于使用了keep-alive所以在跳转另一个city的时候直接使用缓存中的数据，主页并没有变化
    //所以需要监测是否发生变化，如果发生变化需要重新请求数据
    //使用keep-alive的生命周期
    activated(){
        //如果不相同则需要改变页面
        if(this.lastCity !== this.city){
            this.lastCity = this.city;
            this.getHomeInfo(); //重新发送请求
        }
        // console.log("activated")
    },
    deactivated(){
        // console.log("deactivated")
    }
}
</script>
<style>

</style>