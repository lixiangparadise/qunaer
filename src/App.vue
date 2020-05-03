<template>
  <div id="app">
    <!-- 路由保持keep-alive -->
    <keep-alive>
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
