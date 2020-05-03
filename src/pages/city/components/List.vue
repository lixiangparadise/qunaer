<template>
    <div class='list' ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <!-- <div class="button">{{this.$store.state.city}}</div> -->
                        <div class="button">{{this.currentCity}}</div>
                        
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                    v-for="item in hotCities" :key="item.id"
                    @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" 
            v-for="(item, key) in cities" 
            :key="key"
            :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" >
                    <div class="item border-bottom" 
                    v-for="innerItem in item" :key="innerItem.id"
                    @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
// 使用 mapState 辅助函数帮助我们生成计算属性
import {mapState, mapMutations} from 'vuex'
export default {
    name:'CityList',
    props:{
        hotCities:Array,
        cities: Object,
        letter:String
    },
    computed:{
        ...mapState({
            currentCity: 'city'
        })//将vuex中的city数据映射到计算属性（名为currentCity）中
    },
    methods:{
        handleCityClick(city){
            //修改store中的数据
            //调用action
            // this.$store.dispatch('changeCity',city);
            //直接调用mutation
            // this.$store.commit('changeCity',city);
            this.changeCity(city);
            this.$router.push('/');
        },
        //有个changCity的mutation，将该mutation映射到本组件中changeCity的方法中
        ...mapMutations(['changeCity'])
    },
    //监听letter变化
    watch:{
        letter(){
            // console.log(letter)
            // console.log(this.$refs[this.letter][0])
            const element = this.$refs[this.letter][0];
            //better-scroll滚动到element元素
            this.scroll.scrollToElement(element);
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: 0.54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>