<template>
  <div class="layout">
    <topHeader></topHeader>
    <Sidebar></Sidebar>
    <mainContent></mainContent>
  </div>
</template>
<script>
import topHeader from './components/header.vue'
import Sidebar from './components/sidebar.vue'
import mainContent from './components/main.vue'
export default {
  name: 'layout',
  components: {
    topHeader,
    Sidebar,
    mainContent
  }
}
</script>
