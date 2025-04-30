<template>
<div id="headerComponent">
  <div class="headerLeft">
    <slot name="headerLeft"></slot>
  </div>
  <div class="headerCenter">
    <slot></slot>
  </div>
  <div class="headerRight">
    <slot name="headerRight"></slot>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#headerComponent {
  height: 57px;
  padding: 12px 16px 8px 16px;

  .headerCenter {
    height: 100%;
  }
}
</style>