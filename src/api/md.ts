import axios from 'axios';

export function getIndexMd() {
    return axios({
        url: '/document/index.md',
        method: 'get'
    });
}

export function getHtmlMd() {
    return axios({
        url: '/document/html.md',
        method: 'get'
    });
}

export function getCssMd() {
    return axios({
        url: '/document/css.md',
        method: 'get'
    });
}

export function getJavaScriptMd() {
    return axios({
        url: '/document/javaScript.md',
        method: 'get'
    });
}

export function getVueMd() {
    return axios({
        url: '/document/vue.md',
        method: 'get'
    });
}

export function getNetworkMd() {
    return axios({
        url: '/document/network.md',
        method: 'get'
    });
}

export function getBrowserMd() {
    return axios({
        url: '/document/browser.md',
        method: 'get'
    });
}
