import { defineStore } from 'pinia';

export const userStore = defineStore('main', {
    state: () => {
        return {
            name: 'cmz'
        };
    },
    getters: {
        nameLength: (state) => state.name.length
    },
    actions: {}
});
