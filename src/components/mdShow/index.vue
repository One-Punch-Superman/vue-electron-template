<template>
  <div class="md-show">
    <div class="main">
      <v-md-editor ref="previewRef" v-model="showText" mode="preview" @copy-code-success="handleCopy"></v-md-editor>
    </div>
    <div v-if="catalogList.length > 1" class="sidebar">
      <div class="catalog">
        <div
          v-for="(anchor, index) in catalogList"
          :key="index"
          :class="{ active: anchor.lineIndex == selCatalog }"
          :style="{ paddingLeft: `${anchor.indent * 20}px` }"
        >
          <span @click="handleAnchorClick(anchor)">{{ anchor.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { ElMessage } from 'element-plus';

const props = defineProps({
  text: {
    type: String,
    default: ''
  }
});
const previewRef = ref();
const catalogList = ref<any>([]);
const selCatalog = ref('');
const showText = ref('');

onMounted(() => {
  init();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const init = () => {
  showText.value = props.text;
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
    // window.addEventListener('scroll', handleScroll);
  });
};

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
  for (let index = 0; index < catalogList.value.length; index++) {
    const el = catalogList.value[index];
    if (catalogList.value[0].offsetTop > scroll + 11) {
      selCatalog.value = '';
      return;
    }
    if (el.offsetTop < scroll + 11) {
      selCatalog.value = el.lineIndex;
    }
  }
};
defineExpose({
  init
});

const handleCopy = () => {
  ElMessage({
    message: '复制成功',
    type: 'success'
  });
};
</script>

<style lang="scss" scoped>
.md-show {
  display: flex;
  .main {
    min-height: calc(100vh - 100px);
    background-color: #fff;
    box-sizing: border-box;
    flex: 1;
  }
  .sidebar {
    width: 280px;
    .catalog {
      position: sticky;
      top: 100px;
      padding: 0 20px;
      font-size: 14px;
      background-color: #fff;
      border-left: 1px solid rgb(0 0 0 / 10%);
      box-sizing: border-box;
      > span {
        display: block;
        height: 32px;
        margin-bottom: 10px;
        line-height: 32px;
        border-bottom: 1px solid #e4e6eb;
      }
      > div {
        width: 240px;
        height: 32px;
        overflow: hidden;
        line-height: 32px;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        span {
          cursor: pointer;
        }
      }
    }
  }
}
.active {
  color: #007fff;
}
.v-md-editor {
  max-width: 1000px;
  min-width: 800px;
  margin: 0 auto;
}
</style>
