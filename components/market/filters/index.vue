<template>
    <div class="filter">
      <div class="filter__border">
        <th-accordion v-for="(item, idx) in mokDataAccordion" :data="item" :key="idx" />
      </div>
        <th-tab :names="tabs" v-model="asd" />
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
const tabs = [
    { label: 'Цвет', id: "1" },
    { label: 'Подороже', id: "2" },
    { label: 'Подешевле', id: "3" },
    { label: 'Новинки ', id: "4" },
]

tabs.sort(function (a, b) {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
});
</script>


<style lang="scss" scoped>
.filter {
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 31px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__border{
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 31px;
  
  }
}

</style>