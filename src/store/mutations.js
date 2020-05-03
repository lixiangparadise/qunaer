export default{
    changeCity(state, city){
        state.city = city
        //保存到本地中
        try{
            localStorage.city=city
        }catch(e){}
    } 
}


