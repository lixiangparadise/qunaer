<template>
    <ul class='list'>
        <!-- CityAlphabet -->
        <!-- v-for="(value,key) in cities" -->
        <!-- 在手机端会拖动页面
            touchstart.prevent阻止start的默认行为，就不会出现页面上下拖动的效果 -->
            <!-- pc需要click事件因为pc不能识别tochstart
                mobile就不需要click事件
             -->
        <li class="item" 
        v-for="value of letter" 
        :key="value"
        :ref="value"
        @touchstart.prevent = "handleTouchStart"
        @touchmove = "handleTouchMove"
        @touchend = "handleTouchEnd"
        @click = "handleLetterClick"
        >
            {{value}}
        </li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    computed:{
        letter(){
            const letters = [];
            for(let i in this.cities){
                letters.push(i);
            }
            return letters;
        }
        
    },
    data(){
        return{
            touchStatus: false,
            startY: 0,
            timer:null
        }
    },
    //使用updated优化以防止startY重复计算
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
        // console.log(this.startY )
    },
    methods:{
        handleLetterClick(e){
            console.log("cdfsdf")
            //兄弟组件之间传递数据
            //通过一个父组件City
            this.$emit('change',e.target.innerText)
        },
        /*下面三个方法针对的场景： 滑动右边A-Z使得右边也开始动
          计算距离从而测量到达的位置，然后将对应的字母传递到上层组件
        */
        //原生事件
        handleTouchStart(e){
            console.log("start")
            this.touchStatus = true;
        },
        handleTouchMove(e){
            console.log("move")
            //为true时
            if(this.touchStatus){
                //元素A到[输入城市名或拼音]的距离
                // const startY = this.$refs['A'][0].offsetTop;
                // console.log(startY);
                //e.touches[0].clientY表示手指touch位置到根元素顶部距离
                //79是绿色底部到顶部的距离
                //touchY就是手指触摸位置到绿色底部的距离
                //如果定时器不为空
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    const touchY = e.touches[0].clientY - 79;
                    //20是每个字母的高度
                    const index = Math.floor((touchY-this.startY)/20);
                    //即可以得出手指对应的字母的下标
                    // console.log(this.letter);
                    if(index>=0 && index<this.letter.length){
                        //将页数传递给上层组件
                        this.$emit('change',this.letter[index]);
                    }
                },16)
                
            }
        },
        handleTouchEnd(e){
            console.log("end")
            // console.log("toch3")
            this.touchStatus = false;
        }
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