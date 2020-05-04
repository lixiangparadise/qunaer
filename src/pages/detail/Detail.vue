<template>
    <div class='header'>
        <detail-banner></detail-banner>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
export default {
    name:'Detail',
    components:{
        DetailBanner
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
// .header
//     position: relative
//     overflow hidden
//     height:$headerHeight
//     line-height: $headerHeight
//     text-align: center
//     color:#fff
//     background-color:$bgColor
//     font-size: 0.32rem
//     .header-back
//         color:#fff
//         position:absolute
//         top:0
//         left:0
//         width 0.64rem
//         text-align:center
//         font-size: 0.4rem
</style>