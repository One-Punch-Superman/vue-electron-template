import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
    state: () => {
        return {
            name: 'cmz'
        };
    },
    getters: {
        nameLength: (state) => state.name.length
    },
    actions: {},
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'user',
                storage: localStorage
            }
        ]
    }
});
