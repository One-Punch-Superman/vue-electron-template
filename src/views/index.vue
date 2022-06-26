<template>
    <div class="container">
        <div class="main">
            <v-md-editor ref="previewRef" v-model="text"></v-md-editor>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getIndexMd } from '@/api/md';

const text = ref('');
onMounted(() => {
    getIndexMd().then((res) => {
        text.value = res.data;
    });
});
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    width: 1400px;
    margin: 0 auto;
    .main {
        min-height: calc(100vh - 100px);
        margin-right: 20px;
        background-color: #ffffff;
        box-shadow: 0 3px 10px 0 rgb(0 27 27 / 6%);
        box-sizing: border-box;
        flex: 1;
        .v-md-editor {
            min-height: calc(100vh - 100px);
        }
    }
}
</style>
