<script setup>
import { useStore } from 'vuex';

const store = useStore()

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    img: {
        default: '/placeholder.jpg',
        type: String,
    }
})

function setActiveProfile() {
    store.dispatch('setActiveProfile', props.id);
}

</script>

<template>
    <div @click="setActiveProfile" class="card">
        <div class="card__img">
            <img :src="props.img" alt="">
        </div>
        <div class="card-info">
            <div>
                <div class="card-info__name">
                    {{ props.name }}
                </div>
                <div class="card-info__contact">
                    {{ props.email }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    max-height: 70px;
    transition: background .2s ease;

    &:hover {
        cursor: pointer;
        background: #e0e0e0;
    }

    &__img {
        border-right: 1px solid #e0e0e0;
        width: 30%;

        img {
            object-fit: cover;
        }
    }

    &-info {
        overflow: hidden;
        margin: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        flex: 1;
        width: 100%;

        &__name {
            font-weight: 600;
            font-size: 14px;
            color: #333;
        }

        &__contact {
            font-size: 14px;
            color: #76787d;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>