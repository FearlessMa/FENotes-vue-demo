<template>
  <div id="app">
    <div>首页</div>
    <hr />
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
};
</script>
<style lang="less" scoped>
#app {
  text-align: center;
}
</style>
