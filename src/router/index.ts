import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import Home from '@/views/index.vue';
const Html = () => import('@/views/html/index.vue');
const Css = () => import('@/views/css/index.vue');
const JavaScript = () => import('@/views/javaScript/index.vue');
const Vue = () => import('@/views/vue/index.vue');
const Network = () => import('@/views/network/index.vue');
const Browser = () => import('@/views/browser/index.vue');
const Optimize = () => import('@/views/optimize/index.vue');
const Project = () => import('@/views/project/index.vue');
const Other = () => import('@/views/other/index.vue');

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'home',
                component: Home
            },
            {
                path: 'html',
                name: 'html',
                component: Html
            },
            {
                path: 'css',
                name: 'css',
                component: Css
            },
            {
                path: 'javaScript/:id?',
                name: 'JavaScript',
                component: JavaScript
            },

            {
                path: 'vue/:id?',
                name: 'vue',
                component: Vue
            },
            // 计算机网络
            {
                path: 'network',
                name: 'network',
                component: Network
            },
            //浏览器原理
            {
                path: 'browser',
                name: 'browser',
                component: Browser
            },
            // 性能优化
            {
                path: 'optimize',
                name: 'optimize',
                component: Optimize
            },
            // 工程化
            {
                path: 'project',
                name: 'project',
                component: Project
            },
            {
                path: 'other',
                name: 'other',
                component: Other
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0
        };
    }
});

export default router;
