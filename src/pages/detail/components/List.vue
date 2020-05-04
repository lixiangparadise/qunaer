<template>
<div>
    <div class="item" v-for="(value,key) in list" :key="key">
        <!-- 标题 -->
        <div class="item-title border-bottom">
            <span class="item-title-icon"></span>
            {{value.title}}
        </div>
        <!-- 如果value有children，则将数据传递给自身 -->
        <div v-if="value.children" class="item-chilren">
            <detail-list :list="value.children"></detail-list>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name:'DetailList',
    props:{
        list:Array
    },
    data(){
        return{
            
        }
    },
    methods:{
        
    }

}
</script>

<style lang="stylus" scoped>
.item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
.item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
.item-chilren
    padding: 0 .2rem
</style>