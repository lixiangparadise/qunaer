<template>
  <div id="app">
    <!-- 路由保持keep-alive -->
    <!-- //对于所有路由keep-alive，但是除了Detail不被缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
