<template>
  <section >
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
          <!-- <keep-alive> -->
            <component v-if="!route.meta.link" :is="Component" :key="route.path" />
          <!-- </keep-alive> -->
        </transition>
    </router-view>

  </section>
</template>

<script setup>


</script>
