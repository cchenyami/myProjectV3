<script setup lang="ts">

import { onMounted, useCssModule } from 'vue';
const style = useCssModule();


</script>

<template>
  <div class="mains">
    <div class="col-1">1</div>
    <div class="col-2">2</div>
    <div class="col-3">3</div>

    <div class="blue-text">blue-text</div>
    <div class="red-text">red-text</div>
    <div class="green-text">green-text</div>


    <p>xxxxx</p>


    <div class="flexss">222</div>

    <div :class="style.flexss">333</div>
  </div>
</template>

<style scoped lang="scss" module >
// .mains {
//   // background-color: $bg-color;
//   @include box-shadow(0px, 0px, 4px, #fff);

//   @include set-color(3);
// }

// @for $i from 1 through 3 {
//   .col-#{$i} { width: 100%/12 * $i;background: pink; }
// }

// @each $color in blue, red, green {
//   .#{$color}-text {color: $color;}
// }


// div{
//   border: 2px solid green;
// }
// p{
//   @extend div;
//   width: 150px;
//   font-size: 2em;
// }

.flexss {
  display: flex;
  flex-flow: row nowrap;
  background: red;
}

</style>