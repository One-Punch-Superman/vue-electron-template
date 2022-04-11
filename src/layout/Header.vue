<template>
    <div class="layout-header">
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >
            <el-menu-item index="1">HTTML</el-menu-item>
            <el-menu-item index="2">CSS</el-menu-item>
            <el-menu-item index="3">JavaScript</el-menu-item>
            <el-menu-item index="4">Vue</el-menu-item>
            <el-menu-item index="5">计算机网络</el-menu-item>
            <el-menu-item index="6">浏览器原理</el-menu-item>
            <el-menu-item index="7">性能优化</el-menu-item>
            <el-menu-item index="8">工程化</el-menu-item>
            <el-menu-item index="9">其他</el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex2 = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.layout-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    z-index: 100;
    background-color: #fff;
    box-shadow: 0 2px 10px #f9f9f9;
}
</style>
