<!-- <template>
  <div class="idi-nahui">
    <th-accordion v-for="(item, idx) in mokDataAccordion" :data="item" />
  </div>
</template>

<script setup>

const mokDataAccordion = [
  {
    title: 'Спальня', childrens: [
      { title: 'Кружки для сна' },
      { title: 'Пастельное белье' },
      { title: 'Освещение' }
    ]
  },
  {
    title: 'Гостиная', childrens: [
      { title: 'Кружки для сна' },
      { title: 'Пастельное белье' },
      { title: 'Освещение' },
      { title: 'Кружки для сна' },
    ]
  },
  {
    title: 'Кухня', childrens: [
      { title: 'Кружки для сна' },
      { title: 'Пастельное белье' },
      { title: 'Освещение' },
      { title: 'Кружки для сна' },
      { title: 'Пастельное белье' },
      { title: 'Освещение' }
    ]
  }
]
</script>

<style scoped>
.idi-nahui {
  border: 1px solid black;
  border-radius: 10px;
  max-width: 348px;
}
</style> -->
<template>
  <div class="test">
    <MarketCard v-for="(item, index) in mokoDataCard"  :data="item" :key='index'/>
  </div>
</template>

<script setup>

 const mokoDataCard = [{
  title: 'Чашка из блока "А"',
  image: '/public/card/card-pic.png',
  color: 'Красныыыыыый',
  price: '1990₽',
  }
]

</script>

<style scoped>
.test {
  margin: 100px 100px;
}
.idi-nahui {
  border: 1px solid black;
  border-radius: 10px;
  max-width: 348px;
}
</style>