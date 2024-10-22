<template>
  <div class="promo">
    <img class="promo__star--big" src="/public/page/star1.png" alt="">
    <img class="promo__img" src="/public/page/bg-homies.png" alt="">
    <p class="promo_content__text">Российский бренд вещей для дома основанный в 2023 году</p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.promo {
  width: 100%;
  height: calc(100dvh - 180px);
  padding: 2vw 15vw 1vw 16vw; 

  &__img {
    width: 100%;
;
  }
  &__star {
    &--big {
      position: absolute;
      bottom: 50%;
      left: -6%;
      width: 20%;
    }
    &--small {
      position: absolute;
      top: -12%;
      right: 70%;
      width: 10%;
    }
  }

  &_content {
    width: 100%;


    &__text {
      color: rgb(33, 31, 31);
      font-family: Better;
      font-size: 3dvw;
      font-weight: 400;
      letter-spacing: 0%;
      text-align: left;
      text-transform: uppercase;
    }
  }
}
</style>