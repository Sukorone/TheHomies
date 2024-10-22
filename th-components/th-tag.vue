<template>
  <div class="block-with-price">
    <slot/>
  </div>
</template>

<script setup>

</script>

<style scoped>
.block-with-price {
  border-radius: 15px;
  padding: 12px 27px;
  border: 1px solid black;
  font-size: 20px;
  font-weight: 600;
}
</style>