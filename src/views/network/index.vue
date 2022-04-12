<template>
    <div class="container">
        <div class="main">计算机网络</div>
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
    margin: 0 auto;
    overflow: hidden;
    .main {
        margin-top: 20px;
        padding: 20px;
        min-height: calc(100vh - 140px);
        background-color: #fff;
        box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
    }
}
</style>
