<template>
    <v-md-editor v-model="props.text" mode="preview"></v-md-editor>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

const props = defineProps({
    text: {
        type: String
    }
});
onMounted(() => {
    debugger;
    console.log(props);
});
</script>

<style lang="scss" scoped></style>
