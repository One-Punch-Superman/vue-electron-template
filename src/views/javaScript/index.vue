<template>
    <div class="container">
        <div class="left">
            <div v-for="(item, index) in list" :key="index" :class="{ active: item == selItem }">
                <span @click="handleItemClick(item)">{{ item.name }}</span>
            </div>
        </div>
        <div class="content">
            <MdShow v-if="text" ref="mdShowRef" :text="text"></MdShow>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import MdShow from '@/components/MdShow.vue';
import { getJavaScriptMd } from '@/api/md';
import { getJsList } from '@/utils/tool';

const list = ref<any>([]);
const selItem = ref();
const mdShowRef = ref();
const text = ref('');

onMounted(() => {
    list.value = getJsList();
    selItem.value = list.value[0];
    getJavaScriptMd(selItem.value.name).then((res) => {
        text.value = res.data;
    });
});

const handleItemClick = (item: any) => {
    selItem.value = item;
    getJavaScriptMd(item.name).then((res) => {
        text.value = res.data;
        nextTick(() => {
            mdShowRef.value.init();
        });
    });
};
</script>

<style lang="scss" scoped>
.container {
    min-height: calc(100vh - 60px);
    display: flex;
    .left {
        position: fixed;
        width: 280px;
        height: calc(100vh - 60px);
        padding: 10px 20px;
        background-color: #fff;
        box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
        > div {
            width: 260px;
            height: 32px;
            line-height: 32px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            span {
                cursor: pointer;
            }
        }
    }
    .content {
        width: 1200px;
        margin: 0 auto;
    }
}
.active {
    color: #007fff;
}
</style>
