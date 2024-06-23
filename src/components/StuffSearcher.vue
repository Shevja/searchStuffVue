<script setup>
import Searcher from './blocks/Searcher.vue'
import WorkerCardViewer from './blocks/WorkerCardViewer.vue';
</script>

<template>
    <section class="section stuff-searcher">
        <div class="container">
            <div class="stuff-searcher__inner">
                <Searcher class="stuff-searcher__search" />
                <WorkerCardViewer class="stuff-searcher__viewer" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.stuff-searcher {
    height: 590px;

    &__inner {
        display: flex;

        height: 100%;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    }

    &__search {
        width: 25%;
        height: 100%;
        background-color: #FDFDFD;
        border-right: 1px solid #dededd;
    }

    &__viewer {
        flex: 1;
        width: 100%;
    }
}
</style>