<template>
  <div class="full-card">
    <div class="full-card__body">
      <div class="full-card__card">
        <MarketCard />
      </div>
      <div class="full-card__information">
        <div class="full-card__overview">
          <p class="full-card__title">ОПИСАНИЕ</p>
          {{ data?.overview }}
        </div>
        <div class="full-card__params">
          <p class="full-card__title">ТЕХ. ПАРАМЕТРЫ</p>
          {{ data?.params }}
        </div>
        <div class="full-card__recomendations">
          <p class="full-card__title">РЕКОМЕНДАЦИИ ПО УХОДУ</p>
          {{ data?.recomendations }}
        </div>
        <div class="full-card__colors">
          <p class="full-card__title">ЦВЕТА</p>
          <div class="full-card__color">
            <th-tab class="full-card__color--row" :names="tabs" :withNumbers="true"/>
            {{ asd }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
  }
})

const asd = ref()
const tabs = [
    { label: '1', id: "1" },
    { label: '2', id: "2" },
    { label: '3', id: "3" },
    { label: '4', id: "4" },
    { label: '5', id: "5" },
    { label: '6', id: "6" },
    { label: '7', id: "7" },
    { label: '8', id: "8" },
]


</script>

<style lang='scss' scoped>
.full-card {
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  width: 100%;

  &__card {
    width: calc(50% - 10px);
  }

  &__body {
    display: flex;
    gap: 20px;
  }

  &__color {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding-bottom: 70px;

    &--row {
      border-radius: 30px;
      font-size: 2.5dvw;
    }
  }

  &__information {
    border: 1px solid black;
    border-radius: 20px;
    padding: 30px;
    width: calc(50% - 10px);
  }

  &__overview {
    font-size: 2dvw;
  }

  &__params {
    font-size: 2dvw;
  }

  &__recomendations {
    font-size: 2dvw;
  }

  &__title {
    padding: 10px 0 10px 0;
    font-size: 2.5dvw;
    font-weight: 600;
  }
}
</style>