<template>
    <div class="layout-header">
        <el-menu :default-active="activeMenu" mode="horizontal" @select="handleSelect">
            <el-sub-menu index="1">
                <template #title>基础</template>
                <el-menu-item index="html">HTTML</el-menu-item>
                <el-menu-item index="css">CSS</el-menu-item>
                <el-menu-item index="javaScript">JavaScript</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2" show-timeout="200" hide-timeout="200">
                <template #title>框架</template>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeMenu = ref('');
const handleSelect = (path: string) => {
    router.push({ path });
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
:deep(.el-menu-item) {
    font-size: 16px;
}
.el-menu--popup {
    .el-menu-item {
        font-size: 14px;
    }
}
</style>
