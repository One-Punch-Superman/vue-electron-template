<template>
    <div class="container">
        <div class="main">html</div>
        <div></div>
    </div>
    <div></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log();
});
</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    margin: 20px auto;

    .main {
        padding: 20px;
        min-height: calc(100vh - 100px);
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
    }
}
</style>
