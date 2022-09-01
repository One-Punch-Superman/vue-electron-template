<template>
    <div id="mytitle">
        <Titlebtn type="min" />
        <Titlebtn type="max" />
        <Titlebtn type="close" />
    </div>
</template>

<script setup lang="ts">
import Titlebtn from './Titlebtn.vue';
</script>

<style scoped>
#mytitle {
    position: absolute;
    width: 100%;
    height: 52px;
    -webkit-app-region: drag;
}
</style>