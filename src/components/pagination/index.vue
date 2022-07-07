<template>
  <div class="">{{ str }}</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const str = ref('');
onMounted(() => {
  console.log();
});
</script>

<style lang="scss" scoped></style>
