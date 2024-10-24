<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const searchValue = ref(null)
const searchTokens = ref(null)

const getTokens = computed(() => {
    let tokens = searchValue.value.split(',')

    tokens = tokens.map(token => token.trim().replaceAll(/\s+/g, ' '))
    tokens = tokens.filter(token => token !== '')
    searchTokens.value = tokens.join(', ')

    store.dispatch('setSearchTokens', tokens)
})

const formatValue = computed(() => {
    searchValue.value = searchTokens.value
})

</script>

<template>
    <div class="search">
        <div class="search__title">
            Поиск сотрудников
        </div>
        <input v-model="searchValue" class="search__input" type="search" placeholder="Введите Id или имя"
            @input="getTokens" @blur="formatValue">
    </div>
</template>

<style lang="scss" scoped>
.search {
    &__title {
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #333;
        margin-bottom: 20px;
    }

    &__input {
        height: 46px;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        padding: 16px;
        font-size: 14px;
        width: 100%;
        color: #76787d;

        transition: border-color .2s;

        &:active,
        &:focus {
            border-color: #76787d;
        }
    }
}
</style>