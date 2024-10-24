<script setup>
import { computed } from 'vue';
import BaseListCard from './BaseListCard.vue'
import { useStore } from 'vuex';

const store = useStore()

const userList = computed(() => store.state.userList)
const searchTokens = computed(() => store.state.searchTokens)

</script>

<template>
    <div class="stuff">
        <div class="stuff__title">
            Результаты
        </div>
        <span v-if="!searchTokens.length" class="stuff__placeholder">
            начните поиск
        </span>
        <span v-else-if="!userList" class="stuff__placeholder stuff__placeholder_loading">
        </span>
        <span v-else-if="!userList.length" class="stuff__placeholder">
            ничего не найдено
        </span>
        <ul v-else class="stuff__list">
            <li v-for="user in userList" :key="user.id">
                <BaseListCard :id="user.id" :name="user.username" :email="user.email" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.stuff {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;

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

        &_loading {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                top: 20%;
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 100%;
                border: 4px solid #adadad;
                border-bottom-color: transparent;
                animation: spin .6s linear infinite;
            }
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

@keyframes spin {
    100% {
        rotate: 360deg;
    }
}
</style>