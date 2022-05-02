<template>
    <div class="container">
        <div class="main">
            <v-md-editor ref="previewRef" v-model="text"></v-md-editor>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getIndexMd } from '@/api/md';
import { getVueList } from '@/utils/tool';

const text = ref('');
onMounted(() => {
    getIndexMd().then((res) => {
        text.value = res.data;
    });
    const modules = getVueList();
    console.log(modules);
});
</script>

<style lang="scss" scoped>
.container {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    .main {
        flex: 1;
        margin-right: 20px;
        min-height: calc(100vh - 100px);
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
        .v-md-editor {
            min-height: calc(100vh - 100px);
        }
    }
}
</style>
