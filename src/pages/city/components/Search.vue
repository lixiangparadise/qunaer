<template>
    <div class='search'>
        <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
</template>

<script>
export default {
    name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height:0.72rem
    background-color:$bgColor
    font-size: 0.32rem
    padding:0 0.1rem
    .search-input
        box-sizing: border-box
        width:100%
        padding: 0 0.1rem
        height: 0.62rem
        line-height 0.62rem
        text-align:center
        border-radius:0.06rem
        color:#666
</style>