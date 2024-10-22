<template>
    <div class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__item">
                    <a class="header__item__logo" href="#">
                        <img src="/public/header/logo.png" alt="image">
                        <img src="/public/header/namelogo.png" alt="image">
                    </a>
                    <nav class="menu">
                        <ul class="menu__list">
                            <li class="menu__list-item">
                                <a href=""> Маркет</a>
                            </li>
                            <li class="menu__list-item">
                                <a href=""> О нас </a>
                            </li>
                            <li class="menu__list-item">
                                <a href=""> КАК МЫ РАБОТАЕМ </a>
                            </li>
                            <li class="menu__list-item">
                                <a href=""> Доставка</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <th-button class="header__bucket">Корзина</th-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useProductStore} from "~/stores/product";
const ProductStore = useProductStore()

onMounted(async () => {
    const zxc = await ProductStore.getAllProducts();
    console.log(zxc)
})
</script>

<style scoped lang="scss">
.header {
    margin-top: 40px;
    height: 140px;
    &__item {
        display: flex;
        align-items: center;


        &__logo {
            flex-wrap: nowrap;
            display: flex;
            align-items: center;
        }


    }

    &__inner {
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    &__bucket {
        display: flex;
        align-items: center;
        height: 48px;
    }
}





.menu {
    &__list-item {
        font-family: 'Inter';
        margin: 0 10px;
        line-height: 36px;
        display: flex;
        gap: 80px;
        align-items: center;

        a {
            white-space: nowrap;
        }
    }

    &__list {
        display: flex;
        flex-direction: row;
        // justify-content: center;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
    }
}
</style>
