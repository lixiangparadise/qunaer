<template>
    <ul class='list'>
        <!-- CityAlphabet -->
        <li class="item"  v-for="(value,key) in cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display:flex
    flex-direction:column
    justify-content:center
    // align-items:center
    position: absolute
    top: 1.58rem
    right: 0
    bottom:0
    width: 0.4rem
    .item
        line-height:0.4rem
        text-align: center
        color: $bgColor
</style>