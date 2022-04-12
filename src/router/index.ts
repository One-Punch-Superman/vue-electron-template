import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import Home from '@/views/index.vue';
import Html from '@/views/html/index.vue';
import Css from '@/views/css/index.vue';
import JavaScript from '@/views/javaScript/index.vue';
import Vue from '@/views/vue/index.vue';
import Network from '@/views/network/index.vue';
import Browser from '@/views/browser/index.vue';
import Optimize from '@/views/optimize/index.vue';
import Project from '@/views/project/index.vue';
import Other from '@/views/other/index.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Login',
                component: Home
            },
            {
                path: 'html',
                name: 'Html',
                component: Html
            },
            {
                path: 'css',
                name: 'Css',
                component: Css
            },

            {
                path: 'javaScript',
                name: 'JavaScript',
                component: JavaScript
            },
            {
                path: 'vue',
                name: 'Vue',
                component: Vue
            },
            // 计算机网络
            {
                path: 'network',
                name: 'Network',
                component: Network
            },
            //浏览器原理
            {
                path: 'browser',
                name: 'Browser',
                component: Browser
            },
            // 性能优化
            {
                path: 'optimize',
                name: 'Optimize',
                component: Optimize
            },
            // 工程化
            {
                path: 'project',
                name: 'Project',
                component: Project
            },
            {
                path: 'other',
                name: 'Other',
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
