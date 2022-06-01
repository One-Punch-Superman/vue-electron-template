<template>
    <div class="catalog">
        <span>目录</span>
        <div
            v-for="(anchor, index) in props.list"
            :key="index"
            :class="{ active: anchor.lineIndex == selCatalog }"
            :style="{ paddingLeft: `${anchor.indent * 20}px` }"
        >
            <span @click="handleAnchorClick(anchor)">{{ anchor.title }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    list: {
        type: Object,
        default: () => {
            return {};
        }
    }
});
const previewRef = ref();
const selCatalog = ref('');

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const handleAnchorClick = (anchor: any) => {
    window.removeEventListener('scroll', handleScroll);
    const { lineIndex } = anchor;
    selCatalog.value = lineIndex;
    const heading = previewRef.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);
    if (heading) {
        previewRef.value.previewScrollToTarget(
            {
                target: heading,
                scrollContainer: window,
                top: 70
            },
            setTimeout(() => {
                window.addEventListener('scroll', handleScroll);
            }, 200)
        );
    }
};

const handleScroll = () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    for (let index = 0; index < props.list.length; index++) {
        const el = props.list[index];
        if (props.list[0].offsetTop > scroll + 11) {
            selCatalog.value = '';
            return;
        }
        if (el.offsetTop < scroll + 11) {
            selCatalog.value = el.lineIndex;
        }
    }
};
</script>

<style lang="scss" scoped>
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
.active {
    color: #007fff;
}
</style>
