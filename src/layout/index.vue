<template>
    <div class="layout-container">
        <Header></Header>
        <div class="layout-main">
            <transition name="fade-transform" mode="out-in">
                <router-view :key="route"></router-view>
            </transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from '@/layout/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped>
.layout-container {
    min-width: 16px;
    color: #252f41;
    .layout-main {
        min-height: calc(100vh - 60px);
        background-color: #f6f9fd;
    }
}
</style>
<style lang="scss">
html {
    background-color: #f9f9f9;
}
</style>
