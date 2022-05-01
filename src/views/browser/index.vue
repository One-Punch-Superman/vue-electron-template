<template>
    <div class="container">
        <div class="left">
            <div class="tree"></div>
        </div>
        <div class="content">
            <div class="main">
                <v-md-editor
                    ref="previewRef"
                    mode="preview"
                    v-model="vueText"
                    @copy-code-success="handleCopy"
                ></v-md-editor>
            </div>
            <div class="sidebar" v-if="catalogList.length > 1">
                <div class="catalog">
                    <span>目录</span>
                    <div
                        v-for="(anchor, index) in catalogList"
                        :key="index"
                        :class="{ active: anchor.lineIndex == selCatalog }"
                        :style="{ paddingLeft: `${anchor.indent * 20}px` }"
                        @click="handleAnchorClick(anchor)"
                    >
                        <a style="cursor: pointer">{{ anchor.title }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import { getVueMd } from '@/api/md';

const previewRef = ref();
const catalogList = ref<any>([]);
const selCatalog = ref('');
const vueText = ref('');
const list = [
    {
        label: 'Vue',
        id: '1',
        children: [
            {
                label: 'vue基础',
                id: '1-1'
            },
            {
                label: 'vue高级',
                id: '1-2'
            }
        ]
    },
    {
        label: 'Vue Router',
        id: '2',
        children: [
            {
                label: 'Vue Router基础',
                id: '2-1'
            }
        ]
    },
    {
        label: 'Pinia',
        id: '3',
        children: [
            {
                label: 'Pinia基础',
                id: '3-1'
            }
        ]
    }
];

onMounted(() => {
    getVueMd().then((res) => {
        vueText.value = res.data;
        nextTick(() => {
            const anchors = previewRef.value.$el.querySelectorAll('h2,h3');
            const titles = Array.from(anchors).filter((title: any) => !!title.innerText.trim());
            if (!titles.length) {
                catalogList.value = [];
                return;
            }
            const hTags = Array.from(new Set(titles.map((title: any) => title.tagName))).sort();
            catalogList.value = titles.map((el: any) => ({
                title: el.innerText,
                offsetTop: el.offsetTop,
                lineIndex: el.getAttribute('data-v-md-line'),
                indent: hTags.indexOf(el.tagName)
            }));
            window.addEventListener('scroll', handleScroll);
        });
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
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

const handleScroll = () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    for (let index = 0; index < catalogList.value.length; index++) {
        let el = catalogList.value[index];
        if (el.offsetTop < scroll + 11) {
            selCatalog.value = el.lineIndex;
        }
    }
};

const handleCopy = () => {
    ElMessage({
        message: '复制成功',
        type: 'success'
    });
};
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    display: flex;
    .left {
        width: 300px;
        background-color: #fff;
        box-shadow: 0 3px 10px 0 rgba(0, 27, 27, 0.06);
    }
    .content {
        width: 1200px;
        margin: 0 auto;
        display: flex;
    }
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
    .active {
        color: #007fff;
    }
}
</style>
