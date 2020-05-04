<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <!-- <router-link to="/detail"> -->
                <!-- border-bottom 1px边框 -->
                <!-- 使用router-link此时不会渲染成a标签而是li标签 -->
                <router-link 
                tag="li"
                class="item border-bottom" v-for="item of recommendList" :key="item.id"
                :to="'/detail/' + item.id">
                    <img class="item-img" :src='item.imgUrl' />
                    <div class='item-info'>
                        <p class='item-title'>{{item.title}}</p>
                        <p class='item-desc'>{{item.desc}}</p>
                        <button class='item-button'>查看详情</button>
                    </div>
                </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props:{
        recommendList:Array
    },
    data(){
        return{
            // recommendList:[
            //     {
            //         id:'0001',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/201301/14/bf26ff3662c7a2a393835fbb.png_200x200_35c6466e.png',
            //         title:'苏州海洋馆',
            //         desc:'连鱼儿都是成双成对的，你还在等着谁？'
            //     },
            //     {
            //         id:'0002',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1412/b4/77f601b2a965f62a39a8939fbd5db488.water.jpg_200x200_48b526c5.jpg',
            //         title:'苏七里山塘',
            //         desc:'千年的山塘街，千年的河水依然流淌。如果你到山塘街却不登一叶画舫，确为一大憾事。自古戏台登舟，安静的电瓶船将为你开创另一段思绪，穿过古老的桥洞，看着枕河人家的生活，粉墙黛瓦，斑驳的历史痕迹在你身边流淌，忘却了都市的喧嚣，无谓人生的烦忧。'
            //     },
            //     {
            //         id:'0003',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1412/10/e980cba87b79a92f54c511a393749b8d.water.jpg_200x200_d8ceaa65.jpg',
            //         title:'穹窿山景区',
            //         desc:'主峰“箬帽峰”，海拔341.7米，素有“吴中之巅”之称。'
            //     }

            // ]
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
    .item
        overflow:hidden
        display:flex
        height: 1.9rem
        // background-color red
        .item-img
            width:1.7rem
            height: 1.7rem
            padding: 0.1rem
        .item-info
            // background-color green
            flex:1
            min-width:0 //保证内容不超出外层容器
            padding: .1rem
            .item-title
                line-height:0.54rem
                font-size: 0.32rem
                ellipsis() //省略号
            .item-desc
                line-height:0.4rem
                color:#ccc
                ellipsis()
            .item-button
                line-height:0.4rem
                margin-top: 0.3rem
                background: #ff9300
                padding: 0 0.2rem
                border-radius: 0.06rem
                color: #fff
</style>