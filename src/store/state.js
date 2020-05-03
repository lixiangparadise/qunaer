let defaultCity = '上海'
//浏览器不支持localStorage时会报错，所以需要try catch
try{
  if(localStorage.City){
    defaultCity = localStorage.City
  }
}catch(e){}

export default{
    city: defaultCity
}