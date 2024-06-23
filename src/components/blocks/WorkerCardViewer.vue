<script setup>
</script>

<template>
    <div class="worker-viewer">
        <div class="worker-viewer__placeholder">
            Выберите сотрудника, чтобы посмотреть его профиль
        </div>
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
.worker-viewer {
    &__placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 14px;
        color: #76787d;
    }
}
</style>