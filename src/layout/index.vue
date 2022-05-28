<template>
	<div class="layout-container">
		<Header></Header>
		<div class="layout-main">
			<router-view v-slot="{ Component }">
				<transition name="fade">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</div>
	<el-backtop :right="50" :bottom="50" />
</template>

<script lang="ts" setup>
import Header from '@/layout/Header.vue';
</script>

<style lang="scss" scoped>
.layout-container {
	color: #252f41;
	min-width: 1600px;
	.layout-main {
		min-height: calc(100vh - 60px);
		background-color: #fff;
	}
}
</style>
