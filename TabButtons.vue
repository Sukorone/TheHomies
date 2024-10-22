<template>
<div class="tab">
    <button class="tab__button" @click="handleClickTab(tab)" v-for="(tab, index) in names"
    :class="{ 'tab__button--active': stateIds.includes(tab?.id) }" :key="index">
    {{ tab.label }}
    </button>
</div>
</template>

<script setup>
import { defineProps, ref, computed, watch, defineEmits } from 'vue';

const state = ref([]);
const stateIds = computed(() => {
return state.value?.map(item => item?.id);
});
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
names: {
    type: Array,
    required: true
},
modelValue: {
    type: Array,
    default: () => []
}
});

const handleClickTab = (tab) => {
if (stateIds.value.includes(tab?.id)) state.value = state.value.filter(item => item.id !== tab.id);
else state.value.push(tab);
};

watch(() => state.value, () => {
emit('update:modelValue', state.value);
}, {
deep: true
});

watch(() => props.modelValue, () => {
if (Array.isArray(props.modelValue)) {
    state.value = props.modelValue;
}
}, {
immediate: true,
deep: true
});
</script>

<style scoped lang="scss">
.tab {
display: flex;
flex-wrap: wrap;
width: 348px;
gap: 20px;

&__button {
    color: rgb(33, 31, 31);
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 12px 27px 12px 27px;
    background-color: #fff;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid rgb(33, 31, 31);
    border-radius: 20px;
    transition: all 0.3s ease;

    &--active {
    background: rgb(115, 197, 160);
    }

    &:hover {
    background: rgb(93, 159, 129);
    }
}
}
</style>
  