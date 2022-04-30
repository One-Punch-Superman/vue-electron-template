<h1 align="center">Vue Router</h1>

## 介绍

Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。功能包括：

嵌套路由映射
动态路由选择
模块化、基于组件的路由配置
路由参数、查询、通配符
展示由 Vue.js 的过渡系统提供的过渡效果
细致的导航控制
自动激活 CSS 类的链接
HTML5 history 模式或 hash 模式
可定制的滚动行为
URL 的正确编码

## Install

```bash
# use npm
npm i @kangc/v-md-editor -S

# use yarn
yarn add @kangc/v-md-editor
```

## Quick Start

```js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
```

## Usage

```html
<template>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script>
    export default {
        data() {
            return {
                text: ''
            };
        }
    };
</script>
```

## Refrence

-   [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)
-   [vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)
