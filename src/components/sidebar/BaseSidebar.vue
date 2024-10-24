<script setup>
import BaseSearch from './BaseSearch.vue'
import BaseList from './BaseList.vue'
</script>

<template>
    <div class="sidebar">
        <BaseSearch />
        <BaseList />
    </div>
</template>

<style scoped>
.sidebar {
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 25px;
    background: #fdfdfd;
    max-width: 290px;
}
</style>