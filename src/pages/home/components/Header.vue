<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/经典/主题
        </div>
        <router-link to = "/city">
            <div class="header-right">
                <!-- {{this.city}} -->
                <!-- {{this.$store.state.city}} -->
                {{this.city}}

                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>

</template>
<script>
// 使用 mapState 辅助函数帮助我们生成计算属性
import {mapState} from 'vuex'
export default {
    name: 'HomeHeader',
    computed:{
        //将vuex中的city公用数据映射到city的计算属性中
        ...mapState(['city'])
    }
    // props:{
    //     city:String
    // }
}
</script>


<style lang="stylus" scoped>
// 在css中引入其他css文件使用@(即src/)需要加~
// @import '../../../assets/styles/varibles.styl'
// @import '~@/assets/styles/varibles.styl'
@import '~styles/varibles.styl'
.header
    display: flex
    line-height: $headerHeight
    background: $bgColor  //将颜色抽离到全局
    color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
            text-align:center
            font-size: 0.4rem
    .header-input
        flex: 1
        height:0.64rem
        line-height: 0.64rem
        margin-top: 0.12rem
        margin-left: 0.2rem
        padding-left:0.2rem
        background: #fff
        border-radius: 0.1rem
        color: #ccc
    .header-right
        min-width: 1.04rem
        padding:0 0.1rem
        float: right
        text-align: center
        color: #fff
        .arrow-icon
            marigin-left:-0.04rem
            font-size: 0.24rem
</style>