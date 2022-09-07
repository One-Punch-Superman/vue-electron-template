<template>
  <div class="head">
  </div>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>


<style scoped>
.head{
  -webkit-app-region: drag;
  height: 50px;
  border-bottom:1px solid #d0d7de;
}
</style>
