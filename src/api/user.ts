import { get, post } from '@/utils/request';

export function login(data: any) {
    return post(`/user/login`, data);
}

export function getInfo() {
    return get('/user/info');
}

export function logout() {
    return post(`/user/logout`);
}
