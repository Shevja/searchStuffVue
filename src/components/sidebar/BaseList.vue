<script setup>
import { computed } from 'vue';
import BaseListCard from './BaseListCard.vue'
import { useStore } from 'vuex';

const store = useStore()

const searchResult = computed(() => {
    // console.log(store.state.searchTokens, 'search results')
    const userList = store.state.userList
    const searchTokens = [...store.state.searchTokens]

    return userList.filter(user => searchTokens.includes(user.username) || searchTokens.includes(String(user.id)))
})
</script>

<template>
    <div class="stuff">
        <div class="stuff__title">
            Результаты
        </div>
        <span v-if="!store.state.userList" class="stuff__placeholder">
            начните поиск
        </span>
        <ul v-else class="stuff__list">
            <li v-for="user in searchResult" :key="user.id">
                <BaseListCard :id="user.id" :name="user.name" :email="user.email" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.stuff {
    &__title {
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #333;
        margin-bottom: 20px;
    }

    &__placeholder {
        font-size: 14px;
        color: #76787d;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>