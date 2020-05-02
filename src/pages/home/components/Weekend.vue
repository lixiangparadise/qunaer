<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <!-- border-bottom 1px边框 -->
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div  class='item-img-wrapper'>
                    <img class="item-img" :src='item.imgUrl' />
                </div>
                <div class='item-info'>
                    <p class='item-title'>{{item.title}}</p>
                    <p class='item-desc'>{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data(){
        return{
            recommendList:[
                {
                    id:'0001',
                    imgUrl:'//img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_600x330_6dddcf68.jpg',
                    title:'拙政园',
                    desc:'这一大观园式的古典豪华园林，以其布局的山岛、竹坞、松岗、曲水之趣，被胜誉为“天下园林之典范”。'
                },
                {
                    id:'0002',
                    imgUrl:'//img1.qunarzz.com/sight/p0/2004/b5/b5eb5856f343534da3.water.jpg_600x330_f47eee3e.jpg',
                    title:'华谊兄弟电影世界',
                    desc:'作为华谊兄弟实景娱乐的旗舰项目，华谊兄弟电影世界坐落于风光旖旎的苏州阳澄湖半岛国家旅游度假区。'
                },
                {
                    id:'0003',
                    imgUrl:'//img1.qunarzz.com/sight/p0/1805/16/16b71336f2019286a3.img.jpg_600x330_b3e581bf.jpg',
                    title:'上方山森林动物世界',
                    desc:'上方山森林动物世界位于上方山南麓，占地面积为24042.5平方米，是一家集野生动物保护繁育、科普教育、生态游览及休闲娱乐于一体的综合性生境模拟展区。'
                }

            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top:0.2rem
        line-height: 0.8rem
        background-color: #eee
        text-indent:0.2rem
    .item-img-wrapper
        overflow:hidden
        height:0
        padding-bottom:55%
    .item-img
        width:100%
    .item-info
        padding :0.1rem
        .item-title
            // background-color green
            line-height:0.54rem
            font-size: 0.32rem
            ellipsis() //省略号
        .item-desc
            line-height:0.4rem
            color:#ccc
            ellipsis()
</style>