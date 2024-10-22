<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div v-for="(slide, index) in slides" :key="`swiper-slide__${index}`" class="swiper-slide">
                <div class="slide-content">
                    <img :src="slide ?? 'https://placehold.co/375x258'" alt="Slide">
                </div>
            </div>
        </div>
        <div class="swiper-pagination" />
    </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/pagination';
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


const slides = ref([
    'https://placehold.co/375x258',
    'https://placehold.co/375x258',
    'https://placehold.co/375x258',
    'https://placehold.co/375x258',
    'https://placehold.co/375x258'
]);

const swiper = ref();

const swiperOptions = {

    loop: true,
    modules: [Pagination],
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        
    },
};
onMounted(() => {
    swiper.value = new Swiper('.swiper-container', swiperOptions);
    
});

watch(slides, () => {
    swiper.value.update();
    
});


</script>



<style scoped>


.swiper-container {
    overflow: hidden;
    border: 1px solid rgb(33, 31, 31);
    box-sizing: border-box;
    border-radius: 15px;
}

.swiper-slide {
    text-align: center;
    background: #fff;

}

.swiper-slide img {
    padding: 2.917vw 1.146vw 6.302vw 1.146vw;
}

.swiper-pagination {
    position: relative;
    bottom: 25px;
}


</style>