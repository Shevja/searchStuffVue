<script setup>
import { onMounted, computed, ref } from 'vue'

const searchText = ref('')
const staff = ref([])

onMounted(() => {
    console.log('ready to search')
    getUserList()
})

async function getUserList() {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => staff.value.push(...json))
    console.log(staff.value)
}

const searchHandler = computed(() => {
    const workers = staff.value.filter(worker => worker.username.includes(searchText.value))

    return workers
})

</script>

<template>
    <div class="searcher">
        <div class="searcher-search">
            <div class="title searcher-search__title">
                Поиск сотрудников
            </div>
            <input v-model.trim="searchText" class="searcher-search__input" type="text"
                placeholder="Введите Id или имя">
        </div>
        <div class="searcher-result">
            <div class="title searcher-result__title">
                Результаты
            </div>

            <!-- Сообщения о результате поиска -->
            <div v-if="!searchText" class="searcher-result__text">
                начните поиск
            </div>
            <div v-else-if="!searchHandler.length" class="searcher-result__text">
                ничего не найдено
            </div>

            <!-- Результат поиска -->
            <ul v-else class="searcher-result-list">
                <li v-for="worker in searchHandler" :key="worker.id">
                    {{ worker.username }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title {
    font-weight: 600;
    line-height: 140%;
}

.searcher {
    padding: 27px 30px 27px 23px;
    display: flex;
    flex-direction: column;
    gap: 22px;

    &-search {
        &__title {
            margin-bottom: 22px;
        }

        &__input {
            width: 100%;
        }
    }

    &-result {
        &__title {
            margin-bottom: 10px;
        }

        &__text {
            font-size: 14px;
            color: #76787d;
        }

        &-list {
            max-height: 290px;
            overflow: auto;
        }
    }
}
</style>