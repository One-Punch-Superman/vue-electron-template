<template>
    <div class="container">
        <div class="left">
            <div class="tree"></div>
        </div>
        <div class="content">
            <MdShow v-if="text" :text="text"></MdShow>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import MdShow from '@/components/MdShow.vue';
import { getJavaScriptMd } from '@/api/md';

const text = ref('');

onMounted(() => {
    getJavaScriptMd().then((res) => {
        text.value = res.data;
    });
});
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    .left {
        width: 300px;
        background-color: #fff;
        box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
    }
    .content {
        width: 1200px;
        margin: 0 auto;
    }
}
</style>
