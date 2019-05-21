import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import main from '../views/main.vue'
import ChatRoom from '../views/ChatRoom.vue'

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: main,
            name: 'main'
        },
        {
            path: '/ChatRoom',
            component: ChatRoom,
            name: 'ChatRoom'
        }
    ]
})