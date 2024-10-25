<script setup>
import { computed, onBeforeMount, ref } from 'vue';
import BaseListCard from './BaseListCard.vue';

const props = defineProps({
    list: {
        type: Array,
        default: []
    }
})

const currentPage = ref(1)
const cardsPerPage = ref(4)
const currentPageList = ref(null)
const totalPages = computed(() => {
    return Math.ceil(props.list.length / cardsPerPage.value)
})

onBeforeMount(() => {
    // console.log(props.list.length)
    getItems()
})

function getItems() {
    let currentItems = null
    const upperBound = cardsPerPage.value * currentPage.value
    const lowerBound = cardsPerPage.value * (currentPage.value - 1)

    console.log(lowerBound, upperBound)

    if (upperBound >= props.list.length) {
        currentItems = props.list.slice(lowerBound)
    } else {
        currentItems = props.list.slice(lowerBound, upperBound)
    }

    currentPageList.value = currentItems
}

function nextPage() {
    currentPage.value++

    if (currentPage.value > totalPages.value) {
        currentPage.value = totalPages.value
    } else {
        getItems()
    }
}

function prevPage() {
    currentPage.value--

    if (currentPage.value <= 0) {
        currentPage.value = 1
    } else {
        getItems()
    }
}

</script>

<template>
    <div class="result">
        <ul class="result__list">
            <li v-for="user in currentPageList" :key="user.id">
                <BaseListCard :id="user.id" :name="user.username" :email="user.email" />
            </li>
        </ul>

        <div v-if="props.list.length > cardsPerPage" class="result__pagination">
            <a href="#" @click="prevPage"> &lt; </a>
            <div>
                <span>{{ currentPage }}</span>
                /
                <span>{{ totalPages }}</span>
            </div>
            <a href="#" @click="nextPage"> &gt; </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.result {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 20px;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;
    }

    &__pagination {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        color: #76787d;

        a {
            color: white;
            background-color: #e31f24;
            font-size: 1.3rem;
            text-decoration: none;
            border-radius: 100%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color .2s;

            &:hover {
                color: white;
                background-color: #ff454b;
            }
        }
    }
}
</style>