<script setup>
import { useStore } from 'vuex';

const store = useStore()
</script>

<template>
    <div class="table">
        <Transition name="fade">
            <div v-if="!store.state.activeProfile" class="table-placeholder">
                Выберите сотрудника, чтобы посмотреть его профиль
            </div>
            <div v-else class="table-profile">
                <div class="table-profile__img">
                    <img src="/placeholder.jpg" alt="">
                </div>
                <div class="table-profile__info">
                    <div class="profile__name">
                        {{ store.state.activeProfile.name }}
                    </div>

                    <div class="profile__contact">
                        <span>
                            email:
                        </span>
                        <a href="mailto:Shanna@melissa.tv">
                            {{ store.state.activeProfile.email }}
                        </a>
                    </div>

                    <div class="profile__contact">
                        <span>
                            phone:
                        </span>
                        <a href="tel:0106926593x09125">
                            {{ store.state.activeProfile.phone }}
                        </a>
                    </div>

                    <div class="profile__bio">
                        <div>
                            О себе:
                        </div>
                        <p>
                            {{ store.state.activeProfile.bio }}
                        </p>
                    </div>
                </div>
            </div>
        </Transition>
        <div>
            <div>test</div>
            <div>test</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.table {
    position: relative;
    background-color: white;
    width: 100%;
    height: auto;
    border-left: 1px solid #dededd;

    &-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: #76787d;
        padding-top: 250px;
        text-align: center;
    }

    &-profile {
        display: flex;
        align-items: start;
        gap: 60px;
        padding: 30px 20px;

        &__img {
            width: 50%;
            flex: 1;

            img {
                object-fit: contain;
            }
        }

        &__info {
            width: 50%;
            flex: 1;
        }
    }
}

.profile {
    &__name {
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #000;
        margin-bottom: 10px;
    }

    &__contact {
        font-weight: 600;
        font-size: 14px;
        line-height: 140%;
        color: #333;
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 20px;
        }

        a {
            font-weight: 400;
            color: #76787d;
        }
    }

    &__bio {
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #333;

        p {
            font-weight: 400;
            font-size: 14px;
            color: #76787d;
        }
    }
}
</style>