<template>
    <div>
        <city-header></city-header>
        <city-search :cities = "cities"></city-search>
        <city-list 
        :hotCities = "hotCities" 
        :cities = "cities" 
        :letter="letter"></city-list>
        <city-alphabet :cities = "cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name:'City',
    data(){
        return{
            hotCities:[],
            cities: {},
            letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        handleLetterChange(letter){
            this.letter = letter;
        }
    },
    created(){
        axios.get('/api/city.json')
        .then(res=>{
            res = res.data;
            if(res.ret && res.data){
                //此时可以获得数据
                const data=res.data;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            }
            // console.log(res)
        })
        .catch(err=>{
            conole.log("city ajax error");
        })
    }
}
</script>

<style lang="stylus" scoped>

</style>