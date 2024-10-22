<template>
    <!-- tab__button--active -->
    <div class="tab">
        <button class="tab__button" @click="handleClickTab(tab)" v-for="(tab, index) in names"
            :class="{ 'tab__button--active': stateIds.includes(tab?.id) }" :key="index" :style="getCurrentStyle">
            <nuxt-icon class="tab__button__icon" name='square' v-if="stateIds.includes(tab?.id) && withNumbers"></nuxt-icon>
            <p v-else>{{ tab.label }}</p>
        </button>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted,computed } from 'vue';


const state = ref([]);
const stateIds = computed(() => {
    console.log(state.value?.map(item => item?.id))
    return state.value?.map(item => item?.id);
})
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    names: {
        type: Array,
        required: true
    },
    modelValue: {
        type: Array,
        default: () => []
    },
    withNumbers: {
    type: Boolean,
    default: false,
  }
});



const handleClickTab = (tab) => {
    if (props.withNumbers) {
        const index = state.value.findIndex(item => item.id === tab.id);
    if (index !== -1) {
        state.value.splice(index, 1);
    } else {
        state.value = [tab];
    } 
    } else {
        if (stateIds.value.includes(tab?.id)) state.value = state.value.filter(item => item.id !== tab.id);
        else state.value.push(tab);
    }
}


watch(() => state.value, () => {
    emit('update:modelValue', state.value);
}, {
    deep: true
})

watch(() => props.modelValue, () => {
    if (Array.isArray(props.modelValue)) {
        state.value = props.modelValue;
    }
}, {
    immediate: true,
    deep: true
})


const getCurrentStyle = computed(() => {
  const { withNumbers } = props;
  return withNumbers ? {
    flexWrap: 'nowrap',
    padding: '24px',
    borderRadius: '30px',
    border: '2px solid black',
    fontWeight: 'bold',
    fontSize: 'clamp(10px, 2.7dvw, 30px)',
  } : {
    padding: '10px',
    fontSize: 'clamp(10px, 2.7dvw, 30px)',
  }
})
</script>

<style scoped lang="scss">
.tab {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;

    &__button {
        color: rgb(33, 31, 31);
        font-family: Inter;
        background-color: #fff;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
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

        &__icon {
        color: white;
        font-size: 20px; 
        }
    }
}
</style>