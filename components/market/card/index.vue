<template>
  <div class="card">
    <div class="card__body">
      <div class="card__title">{{ data?.title }}</div>
      <MarketSwiper/>
      <div class="card__color">{{ data?.color }}</div>
      <div class="card__buttons__cart">
        <th-button>В КОРЗИНУ</th-button>
        <th-tag>{{ data?.price ?? '-₽' }}</th-tag>
      </div>
    </div>
    <div class="card__button__overview">
      <th-button :withText="false">
        <nuxt-icon filled name="arrow-right" class="card__button_icon"></nuxt-icon>
      </th-button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
  }
})
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px 30px 10px 30px;
  position: relative;

  &__title {
    font-size: 150%;
    line-height: 1;
    padding-bottom: 30px;
  }

  &__color {
    padding: 8px 0 80px 0;
    font-size: 120%;
  }

  &__buttons {
    &__cart {
      display: flex;
      gap: 15px;
    }
  } 
  
  &__button {
    &_icon {
      color: white;
      font-size: 20px;
    }

    &__overview {
      position: absolute;
    padding: 20px 0 0 20px;
    bottom: -2px;
    right: -2px;
    background: #fff;
    border:  black 1px solid;
    background: white;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-right-color: white;
    border-bottom-color: white;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    }
  }
}
</style>