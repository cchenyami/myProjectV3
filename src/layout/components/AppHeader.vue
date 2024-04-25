<template>
  <div class="app-header">
    <template v-for="item in menus">
      <div class="menu-item" @click="toPush(item)">{{ item.name }}</div>
    </template>
  </div>
</template>

<script setup name="AppHeader">
import { menus } from '../data.ts'
import { useRouter } from 'vue-router'
const router = useRouter();
function toPush(obj){
  router.push(obj.path)
}
</script>
<style scoped lang="scss">
.app-header {
  height: 50px;
  // color: $color-primary;
  @include primary-font-color();
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  column-gap: 12px;
  row-gap: 12px;
  justify-items: center;
  align-items: center;
  


  .menu-item {
    cursor: pointer;
  }
}
</style>