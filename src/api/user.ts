import { get, post } from '@/utils/request';

export function login(data: any) {
    return post(`/vue-admin-template/user/login`, data);
}

export function getInfo() {
    return get('/vue-admin-template/user/info');
}

export function logout() {
    return post(`/vue-admin-template/user/logout`);
}
