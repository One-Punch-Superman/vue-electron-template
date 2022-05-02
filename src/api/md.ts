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

export function getJavaScriptMd(name: string) {
    return axios({
        url: `/document/javaScript/${name}.md`,
        method: 'get'
    });
}

export function getVueMd(name: string) {
    return axios({
        url: `/document/vue/${name}.md`,
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

export function getOptimizeMd() {
    return axios({
        url: '/document/optimize.md',
        method: 'get'
    });
}
export function getProjectMd() {
    return axios({
        url: '/document/project.md',
        method: 'get'
    });
}
export function getOtherMd() {
    return axios({
        url: '/document/other.md',
        method: 'get'
    });
}
