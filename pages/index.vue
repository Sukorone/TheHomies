<template>
  <div class="main">
    <MarketPromo />
    <div class="grid">
      <MarketFilters class="grid__filters" />
      <div class="grid__content" >
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.grid {
  display: flex;
  gap: 20px;
  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));

    gap: 20px;
    // background: green;
    justify-content: center;

    // @media (max-width: 1500px) {
    //     grid-template-columns: repeat(3, minmax(300px, 470px));
    // }
  }
  &__filters {
    height: fit-content;
    width: 20dvw;
  }
}
</style>
