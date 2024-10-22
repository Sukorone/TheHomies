<template>
  <div class="th-accordion">
    <div class="th-accordion__title" @click="handleOpenCloseAccordion()">
      <nuxt-icon :name="isOpen ? 'arrow-up' : 'arrow-down'" class="th-accordion__title__icon"></nuxt-icon>
      <p class="th-accordion__title">{{ data?.title }}</p>
    </div>
    <div v-if="isOpen" class="th-accordion__childrens" v-for="(child, idx) in data?.childrens" :key="idx">
      <nuxt-icon name="empty-circle" class="th-accordion__childrens__icon"></nuxt-icon>
      <p class="th-accordion__child">{{ child?.title }}</p>
    </div>
  </div>
</template>




<script setup>
const props = defineProps({
  data: {
    type: Object,
  }
})

const isOpen = ref(false)

const handleOpenCloseAccordion = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.th-accordion {
  &__title {
    font-size: clamp(2px, 2.7dvw, 30px);
    display: flex;
    gap: 15px;
    cursor: pointer;
    align-items: center;
    &:hover {
      font-weight: 600;
    }

    &__icon {
      font-size: 3.5dvw;
    }
  }

  &__childrens {
  
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: clamp(3px, 2.7dvw, 30px);
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
    &__icon {
      font-size: clamp(10px, 2.7dvw, 30px);
    }
  }
}
</style>