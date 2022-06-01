<template>
    <div class="container">
        <div class="left">
            <div class="list">
                <div v-for="(item, index) in list" :key="index" :class="{ active: item == selItem }">
                    <span @click="handleItemClick(item)">{{ item.name }}</span>
                </div>
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
import { getVueMd } from '@/api/md';
import { getVueList } from '@/utils/tool';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const list = ref<any>([]);
const selItem = ref();
const mdShowRef = ref();
const text = ref('');

onMounted(() => {
    const id = Number(route.params.id);
    list.value = getVueList();
    if (id) {
        selItem.value = list.value[id];
    } else {
        selItem.value = list.value[0];
        router.replace(`/vue/${selItem.value.id}`);
    }
    const name = `${selItem.value.id}.${selItem.value.name}`;
    getVueMd(name).then((res) => {
        text.value = res.data;
    });
});

const handleItemClick = (item: any) => {
    selItem.value = item;
    const name = `${selItem.value.id}.${selItem.value.name}`;
    getVueMd(name).then((res) => {
        text.value = res.data;
        nextTick(() => {
            mdShowRef.value.init();
        });
        router.push(`/vue/${item.id}`);
    });
};
</script>

<style lang="scss" scoped>
.container {
    min-height: calc(100vh - 60px);
    display: flex;
    .left {
        width: 280px;
        padding: 10px 20px;
        background-color: #fff;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        .list {
            position: fixed;
            height: calc(100vh - 60px);
            > div {
                width: 280px;
                height: 35px;
                line-height: 35px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                span {
                    cursor: pointer;
                }
            }
        }
    }
    .content {
        flex: 1;
    }
}
.active {
    color: #007fff;
}
</style>
