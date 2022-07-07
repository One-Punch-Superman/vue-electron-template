<template>
  <div class="container">
    <MdShow v-if="text" :text="text"></MdShow>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import MdShow from '@/components/mdShow/index.vue';
import { getOptimizeMd } from '@/api/md';

const text = ref('');

onMounted(() => {
  getOptimizeMd().then((res) => {
    text.value = res.data;
  });
});
</script>

<style lang="scss" scoped>
.container {
  width: 1400px;
  margin: 0 auto;
}
</style>
