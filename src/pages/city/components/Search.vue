<template>
<div>
    <div class='search'>
        <input v-model="keyword"
        class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <!-- 如果输入关键字则显示列表 -->
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li class="search-item border-bottom" 
            v-for="item in list" :key="item.id"
             @click="handleCityClick(item.name)"
            >
            {{item.name}}
            </li>
            <!-- 应用于：当输入关键字没有列表数据时 
                v-show="list.length" => computed
            -->
            <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
    </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:'',
            list:[], //包含关键字的城市list
            timer:null
        }
    },
    methods:{
        // handleCityClick(city){
        //     //修改store中的数据
        //     this.$store.commit('changeCity',city);
        //     this.$router.push('/');
        // }
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
    computed:{
        //显示提示信息
        hasNoData(){
            return !this.list.length;
        }
    },
    watch:{
        keyword(){
            //优化
            if(this.timer){
                clearTimeout(this.timer);
            }
            //keyword为空时直接返回
            if(!this.keyword){
                this.list=[];
                return;
            }
            this.timer = setTimeout(()=>{
                //查找满足关键字的list
                const result = [];
                for(let i in this.cities){
                    //这里的i是key
                    this.cities[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword) > -1
                         || value.name.indexOf(this.keyword) > -1){
                             result.push(value);
                         }
                    })
                }
                this.list = result;
                
            },100);
        }
    },
    mounted(){
        //对于数据过多需要滚动
        this.scroll = new Bscroll(this.$refs.search);
    }
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
.search-content
    z-index:1
    overflow hidden
    position absolute
    top: 1.58rem
    left:0
    bottom:0
    right:0
    background: #eee
    .search-item
        color:#666
        background-color:#fff
        line-height:0.62rem
        padding-left:0.2rem

</style>