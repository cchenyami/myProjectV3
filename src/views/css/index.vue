<template>
  <div class="css">
    <h3>1、左右磁吸样式(自适应)</h3>
    <div class="css-box1">
      <div v-for="item in [1,2,3,4,5,6,7,8]" :key="item" class="item">
          {{ item }}
        </div>
    </div>
    <h3>2、查询常用</h3>
    <div class="css-box2">
      <div v-for="item in list" :key="item" :class="`css-box2-${item} item`">
          {{ item }}
        </div>
    </div>
    
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

const list = ['11111111111','222222222','3','4453453522224444444444','55555555555555555','666666666666666666666666666666']

function init() {

}
onMounted(init)

</script>


<style scoped lang="scss">
.css-box1 {
  width: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap:12px;
  .item {
    @include primary-font-color();
    display: grid;
    align-items: center;
    justify-content: center;
  }
}


.css-box2 {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  padding-right: 12px;
  .item {
    @include primary-font-color();
    padding: 0 20px;
    margin-left: 12px;
    margin-bottom: 12px;
    flex: 1;
  }
  .item:last-child {
    background: red;
    text-align: right;
  }
}
</style>