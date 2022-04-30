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

export function getVueMd() {
    return axios({
        url: '/document/vue.md',
        method: 'get'
    });
}
