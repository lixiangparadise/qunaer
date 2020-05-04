<template>
    <div class='header'>
        <detail-banner :sightName = "sightName" :bannerImg = "bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="categoryList"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            // list:[{
            // "title": "成人票",
            // "children": [{
            //     "title": "成人三馆联票",
            //     "children": [{
            //         "title": "成人三馆联票 - 某一连锁店销售"
            //     }]
            //     },{
            //     "title": "成人五馆联票"
            // }]
            // }, {
            //     "title": "学生票"
            // }, {
            //     "title": "儿童票"
            // }, {
            //     "title": "特惠票"
            // }],
            sightName:'',
            bannerImg: '',
            categoryList: [],
            gallaryImgs: []
        }
        

    },
    created(){
        // console.log(this.$route)
        // axios.get('/api/detail.json?id='+this.$route.params.id)
        axios.get('/api/detail.json',{
            params:{
                id: this.$route.params.id
            }
        })
        .then((res)=>{
            // console.log(res);
            res = res.data;
            if(res.ret && res.data){
                const data = res.data;
                this.sightName = res.sightName;
                this.bannerImg = data.bannerImg;
                this.categoryList = data.categoryList;
                this.gallaryImgs = data.gallaryImgs;
            }
        })
        .catch((err)=>{
            console.log("city ajax error")
        })
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.content
    height:50rem
</style>