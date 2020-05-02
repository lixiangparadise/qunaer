<template>
    <div class='wrapper'>
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide  v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <!-- <swiper-slide>
                <img class="swiper-img" src="https://imgs.qunarzz.com/p/tts8/1912/99/49185399009dca02.jpg_750x440_db4faff3.jpg"/>
            </swiper-slide> -->
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeSwiper',
    data(){
        return{
            //设置轮播
            swiperOption:{
                pagination: '.swiper-pagination',
                loop:true //循环
            },
            //list图片
            swiperList:[
                {
                    id:'0001',
                    imgUrl: 'https://imgs.qunarzz.com/p/tts3/1912/9f/a68ead8501fa6b02.jpg_750x440_608aa936.jpg'

                },{
                    id:'0002',
                    imgUrl: 'https://imgs.qunarzz.com/p/tts8/1912/99/49185399009dca02.jpg_750x440_db4faff3.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>

.wrapper >>> .swiper-pagination-bullet-active
    background:#fff
.wrapper
    width:100%
    height: 60vw
    background-color:#eee
    
    .swiper-img
        width:100%
</style>