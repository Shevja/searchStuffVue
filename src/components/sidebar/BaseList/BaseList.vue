<script setup>
import { computed, ref, watch } from 'vue';
import BaseListResult from './BaseListResult.vue';
import BaseListCard from './BaseListCard.vue'
import { useStore } from 'vuex';

const store = useStore()

const userList = computed(() => store.state.userList)
const fetchError = computed(() => store.state.fetchError)
const searchStatus = computed(() => store.state.searchStatus)

const loadingTextIntervalId = ref(null)
const loadingTextIntervalDelay = 5000
const loadingTextIndex = ref(0)

const loadingTextList = [
    'Загрузка...',
    'Загрузка занимает чуть больше времени чем обычно...',
    'Еще чуть-чуть загрузка......',
    '"Ну на моем компьютере все работало..." - Разрабочик',
    'Все ещё загрузка...'
]

const loadingText = computed(() => loadingTextList[loadingTextIndex.value])

function stopLoadingTextInterval() {
    clearInterval(loadingTextIntervalId.value)
    loadingTextIntervalId.value = null
}

// loading text switcher interval
watch(
    searchStatus,
    (status) => {
        if (status === 'searching') {

            if (!loadingTextIntervalId.value) {

                loadingTextIntervalId.value = setInterval(() => {

                    console.log('create')
                    if (loadingTextIndex.value < loadingTextList.length - 1) {
                        loadingTextIndex.value++
                    } else {
                        stopLoadingTextInterval()
                    }

                }, loadingTextIntervalDelay)

            }

        } else if (loadingTextIntervalId.value) {
            stopLoadingTextInterval()
            loadingTextIndex.value = 0
        }
    }
)

</script>

<template>
    <div class="stuff">
        <div class="stuff__title">
            Результаты
        </div>

        <!-- Waiting for user input -->
        <span v-if="searchStatus === 'waiting'" class="stuff__placeholder">
            начните поиск
        </span>

        <!-- Fetching data -->
        <span v-else-if="searchStatus === 'searching'" class="stuff__placeholder stuff__placeholder_loading">
            {{ loadingText }}
        </span>

        <!-- Fetch Result -->
        <template v-else-if="searchStatus === 'finished'">

            <!-- Errors -->
            <div v-if="fetchError" class="stuff__placeholder">

                <span v-if="fetchError === 404">
                    Ресурс не найден - {{ fetchError }}
                </span>
                <span v-else-if="fetchError === 600">
                    Ошибка сети, либо запрашиваемый ресурс не существует - {{ fetchError }}
                </span>
                <span v-else-if="fetchError === 700">
                    Полученные данные имеют неправильный формат - {{ fetchError }}
                </span>
                <span v-else-if="fetchError === 701">
                    Произошла неизведанная доселе ошибка приложения - {{ fetchError }}
                </span>

            </div>

            <!-- Result -->
            <template v-if="userList">

                <!-- Empty data -->
                <span v-if="!userList.length">
                    ничего не найдено
                </span>

                <!-- Data -->
                <BaseListResult v-else :list="userList" />

                <!-- <ul v-else class="stuff__list">
                    <li v-for="user in userList" :key="user.id">
                        <BaseListCard :id="user.id" :name="user.username" :email="user.email" />
                    </li>
                </ul> -->
            </template>
        </template>
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
            padding-top: 60px;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            position: relative;
            text-align: center;

            &::before {
                content: '';
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 100%;
                border: 4px solid #adadad;
                border-bottom-color: transparent;
                animation: spin .6s linear infinite;
            }
        }
    }
}

@keyframes spin {
    100% {
        rotate: 360deg;
    }
}
</style>