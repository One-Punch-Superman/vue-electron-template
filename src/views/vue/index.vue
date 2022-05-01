<template>
    <MdShow v-if="text" :text="text"></MdShow>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import MdShow from '@/components/MdShow.vue';
import { getVueMd } from '@/api/md';

const text = ref('');

onMounted(() => {
    getVueMd().then((res) => {
        text.value = res.data;
    });
});
</script>

<style lang="scss" scoped></style>
