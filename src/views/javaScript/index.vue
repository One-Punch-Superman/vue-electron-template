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
import MdShow from '@/components/mdShow/index.vue';
import { getJavaScriptMd } from '@/api/md';
import { getJsList } from '@/utils/tool';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const list = ref<any>([]);
const selItem = ref();
const mdShowRef = ref();
const text = ref('');

onMounted(() => {
  const id = Number(route.params.id);
  list.value = getJsList();
  if (id) {
    selItem.value = list.value[id - 1];
  } else {
    selItem.value = list.value[0];
    router.replace(`/javaScript/${selItem.value.id}`);
  }
  const name = `${selItem.value.id}.${selItem.value.name}`;
  getJavaScriptMd(name).then((res) => {
    text.value = res.data;
  });
});

const handleItemClick = (item: any) => {
  selItem.value = item;
  const name = `${selItem.value.id}.${selItem.value.name}`;
  getJavaScriptMd(name).then((res) => {
    text.value = res.data;
    nextTick(() => {
      mdShowRef.value.init();
    });
    router.push(`/javaScript/${item.id}`);
  });
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: calc(100vh - 60px);
  .left {
    width: 280px;
    padding: 10px 20px;
    background-color: #ffffff;
    box-shadow: 0 3px 10px 0 rgb(0 27 27 / 6%);
    .list {
      position: fixed;
      height: calc(100vh - 60px);
      > div {
        width: 280px;
        height: 35px;
        overflow: hidden;
        line-height: 35px;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
          cursor: pointer;
        }
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
