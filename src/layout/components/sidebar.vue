<template>
  <div class="sidebar">
    <router-link :to="{ name: 'home' }">主页</router-link>
    <router-link :to="{ name: 'list' }">列表页</router-link>
  </div>
</template>
<script>
export default {
  name: 'sidebar'
}
</script>
<style scoped>
.sidebar {
  position: absolute;
  width: 100px;
  height: 100%;
  background: rgb(0, 204, 255);
}
</style>
