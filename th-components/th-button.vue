<template>
  <button class="button" :style="getCurrentStyle">
    <slot />
  </button>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  withText: {
    type: Boolean,
    default: true // Если тру, то обычная кнопка, если фолс, то кнопка зеленая короче
  }
})

// const asd = () => {
//   if(withText === true) {
//     return // стили для обычной кнопки
//   } else {
//     return // стили для текста без текста
//   }

//   // withText === 'ZXC' ? 1vartiant : elseVariant
// }

const getCurrentStyle = computed(() => {
  const { withText } = props;
  return withText ? {
    background: '#F17CA9',
    color: 'white',
    borderRadius: '15px',
    padding: '12px 35px',
    border: '2px solid black',
    fontSize: '16px',
    fontWeight: '600'
  } : {
    borderRadius: '20px 30px 20px 30px',
    border: '1px solid black',
    color: '',
    background: 'rgb(115, 197, 160)',
    padding: '25px',
  }
})
</script>

<style scoped>
.button {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  box-shadow: none;
  cursor: pointer;
}
</style>