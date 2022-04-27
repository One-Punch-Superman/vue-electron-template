<template>
    <md-editor v-model="indexText"></md-editor>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import MdEditor from '@/components/MdEditor.vue';
import { getIndexMd } from '@/api/md';

const indexText = ref('');
onMounted(() => {
    getIndexMd().then((res) => {
        indexText.value = res.data;
    });
});
</script>

<style lang="scss" scoped></style>
