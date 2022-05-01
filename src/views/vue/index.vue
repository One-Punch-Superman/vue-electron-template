<template>
    <div class="container">
        <div class="main">
            <v-md-editor
                ref="previewRef"
                mode="preview"
                v-model="vueText"
                @copy-code-success="copyHandle"
            ></v-md-editor>
        </div>
        <div class="sidebar">
            <div class="catalog">
                <span>目录</span>
                <div
                    v-for="(anchor, index) in list"
                    :key="index"
                    :style="{ paddingLeft: `${anchor.indent * 20}px` }"
                    @click="handleAnchorClick(anchor)"
                >
                    <a style="cursor: pointer">{{ anchor.title }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import { getVueMd } from '@/api/md';
import { ElMessage } from 'element-plus';

const previewRef = ref();
const list = ref();
const vueText = ref('');

onMounted(() => {
    getVueMd().then((res) => {
        vueText.value = res.data;
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
            top: 70
        });
    }
};

const copyHandle = () => {
    ElMessage({
        message: '复制成功',
        type: 'success'
    });
};
</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    .main {
        flex: 1;
        margin-right: 20px;
        min-height: calc(100vh - 100px);
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
    }
    .sidebar {
        width: 300px;
        .catalog {
            position: sticky;
            top: 80px;
            padding: 10px 20px;
            background-color: #fff;
            box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
            > span {
                height: 32px;
                line-height: 32px;
                display: block;
                margin-bottom: 10px;
                border-bottom: 1px solid #e4e6eb;
            }
            > div {
                height: 32px;
                line-height: 32px;
            }
        }
    }
}
</style>
