<template>
    <div class="layout-header">
        <el-menu :default-active="activeMenu" mode="horizontal" @select="handleSelect">
            <el-sub-menu index="1">
                <template #title>基础</template>
                <el-menu-item index="1-1">HTTML</el-menu-item>
                <el-menu-item index="1-2">CSS</el-menu-item>
                <el-menu-item index="1-3">JavaScript</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>框架</template>
                <el-menu-item index="2-1">Vue</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">计算机网络</el-menu-item>
            <el-menu-item index="4">浏览器原理</el-menu-item>
            <el-menu-item index="5">性能优化</el-menu-item>
            <el-menu-item index="6">工程化</el-menu-item>
            <el-menu-item index="7">其他</el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeMenu = ref('1-1');
const handleSelect = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.layout-header {
    position: sticky;
    top: 0;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    padding: 0 40px;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
}
.el-menu--horizontal {
    border-bottom: 0;
}
:deep(.el-sub-menu__title) {
    font-size: 16px;
}
.el-sub-menu {
    font-size: 16px;
}
.el-menu--popup {
    .el-sub-menu {
        font-size: 14px;
    }
}
</style>
