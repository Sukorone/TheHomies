<template>
  <div class="test">
    <MarketFullcard v-for="(item, index) in mokodataFullCard" :data="item" :colors="colors" :key="index"/>
  </div>
</template>

<script setup>
const mokodataFullCard = [{
    overview: 'Синюш ний синий Синюшний синий Синюшний синийСинюшний синий Синюшний синийСин юшний синийСи нюшний синий',
    params: 'Синюш ний синий Синюшний синий Синюшний синийСинюшний синий Синюшний синийСин юшний синийСи нюшний синий',
    recomendations: 'Синюш ний синий Синюшний синий Синюшний синийСинюшний синий Синюшний синийСин юшний синийСи нюшний синий'
}]
const colors = [1 ,2,3,4,5,6,7,8]
</script>

<style scoped>
.test {
    padding: 40px;
    width: 100%;
}
</style>