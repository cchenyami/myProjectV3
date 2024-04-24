<template>
  <div>
    <app-header />
    <app-main />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

function init() {

}
onMounted(init)

</script>


<style scoped lang="scss">
</style>
<style>
.ant-layout {
  height: 100vh;
}
.ant-layout-header {
  background-color: #1890ff !important;
}
.ant-layout-content {
  height: calc(100vh - 110px);
  margin: 24px;
  background: #fff;
}
</style>