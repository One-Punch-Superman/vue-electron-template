<template>
    <div class="layout-header">
        <el-menu :default-active="activeMenu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="">首页</el-menu-item>
            <el-sub-menu index="1">
                <template #title><span @click="handleSelect('html')">基础</span></template>
                <el-menu-item index="html">HTTML</el-menu-item>
                <el-menu-item index="css">CSS</el-menu-item>
                <el-menu-item index="javaScript">JavaScript</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2" :show-timeout="100" :hide-timeout="100">
                <template #title><span @click="handleSelect('vue')">框架</span></template>
                <el-menu-item index="vue">Vue</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="network">计算机网络</el-menu-item>
            <el-menu-item index="browser">浏览器原理</el-menu-item>
            <el-menu-item index="optimize">性能优化</el-menu-item>
            <el-menu-item index="project">工程化</el-menu-item>
            <el-menu-item index="other">其他</el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const activeMenu = computed(() => {
    return route.path.split('/')[1];
});
const handleSelect = (path: string) => {
    router.push({ path: `/${path}` });
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
    height: 60px;
}
:deep(.el-sub-menu__title) {
    font-size: 16px;
    padding: 0 10px;
    margin: 0 10px !important;
}
.el-menu-item {
    font-size: 16px;
    padding: 0 10px;
    margin: 0 10px !important;
}
.el-menu--popup {
    .el-menu-item {
        font-size: 14px;
    }
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: #fff;
}
</style>
