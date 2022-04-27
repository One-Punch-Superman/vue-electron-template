<template>
    <div class="container">
        <div class="main">
            <v-md-editor ref="previewRef" v-model="htmlText" mode="preview"></v-md-editor>
        </div>
        <div class="list">
            <div
                v-for="(anchor, index) in list"
                :key="index"
                :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
                @click="handleAnchorClick(anchor)"
            >
                <a style="cursor: pointer">{{ anchor.title }}</a>
            </div>
        </div>
    </div>
    <div></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import { getHtmlMd } from '@/api/md';

const previewRef = ref();
const list = ref();
const htmlText = ref('');

onMounted(() => {
    getHtmlMd().then((res) => {
        htmlText.value = res.data;
        nextTick(() => {
            const anchors = previewRef.value.$el.querySelectorAll('h2,h3');
            const titles = Array.from(anchors).filter((title: any) => !!title.innerText.trim());
            if (!titles.length) {
                list.value = [];
                return;
            }
            const hTags = Array.from(new Set(titles.map((title: any) => title.tagName))).sort();
            list.value = titles.map((el: any) => ({
                title: el.innerText,
                lineIndex: el.getAttribute('data-v-md-line'),
                indent: hTags.indexOf(el.tagName)
            }));
        });
    });
});

const handleAnchorClick = (anchor: any) => {
    const { lineIndex } = anchor;
    const heading = previewRef.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);
    if (heading) {
        previewRef.value.previewScrollToTarget({
            target: heading,
            scrollContainer: window,
            top: 60
        });
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    margin: 20px auto;

    .main {
        padding: 20px;
        min-height: calc(100vh - 100px);
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
    }
    .list {
        position: fixed;
        top: 80px;
        left: calc(100vw / 2 + 600px);
    }
}
</style>
