<template>
	<div class="md-show">
		<div class="main">
			<v-md-editor
				ref="previewRef"
				v-model="showText"
				mode="preview"
				@copy-code-success="handleCopy"
			></v-md-editor>
		</div>
		<div v-if="catalogList.length > 1" class="sidebar">
			<div class="catalog">
				<span>目录</span>
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
	width: 1200px;
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
	}
}
.active {
	color: #007fff;
}
</style>
