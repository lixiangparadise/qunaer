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
            // city:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo(){
             //实际上已经定位到/static/mock下的文件
             //使用config/index.js配置proxy
            axios.get('/api/index.json')  
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
        this.getHomeInfo()
    }
}
</script>
<style>

</style>