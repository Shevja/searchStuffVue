<script setup>
</script>

<template>
    <section class="section header">
        <div class="container">
            <div class="header__inner">
                <div class="header__title">
                    Жилфонд
                </div>
                <a href="#" class="header__cabinet">
                    Пользователь
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.header {
    padding: 50px 0 12px;

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    &__title {
        font-weight: 700;
        font-size: 32px;
        color: #e31f24;
    }

    &__cabinet {
        text-decoration: none;
        font-size: 16px;
        color: #333;
    }
}
</style>