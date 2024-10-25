<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const profileInResults = computed(() => {
    const activeProfile = store.state.activeProfile
    const searchTokens = store.state.searchTokens

    if (!activeProfile) return false

    const profileFound = searchTokens.includes(activeProfile.username) || searchTokens.includes(String(activeProfile.id))

    if (profileFound) {
        return true
    } else {
        store.dispatch('removeActiveProfile')
        return false
    }
})
</script>

<template>
    <div class="table">
        <Transition name="fade">
            <div v-if="!profileInResults" class="table-placeholder">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </Transition>
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
        padding: 250px 20px 20px;
        text-align: center;
    }

    &-profile {
        display: flex;
        flex-wrap: wrap;
        row-gap: 30px;
        column-gap: 60px;
        padding: 30px 20px;

        &__img {
            height: fit-content;
            min-width: 300px;
            width: 100%;
            flex: 1;

            img {
                height: auto;
                max-height: 285px;
                object-fit: contain;
                object-position: left;
            }
        }

        &__info {
            min-width: 50%;
            width: 100%;
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