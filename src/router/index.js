import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/regionalpb',
            name: 'regionalpb',
            component: () => import('@/views/regionalPartyBuilding'),
            redirect:'promotionAssociation', //
            children:[
                {
                    path: '/promotionAssociation',
                    name: 'promotionAssociation',
                    component: () => import('@/views/regionalPartyBuilding/PromotionAssociation')
                },
                {
                    path: '/resourceList',
                    name: 'resourceList',
                    component: () => import('@/views/regionalPartyBuilding/ResourceList')
                },
                {
                    path: '/projectList',
                    name: 'projectList',
                    component: () => import('@/views/regionalPartyBuilding/ProjectList')
                },
                {
                    path: '/programme',
                    name: 'programme',
                    component: () => import('@/views/regionalPartyBuilding/Programme')
                },
                {
                    path: '/eventHighlight',
                    name: 'eventHighlight',
                    component: () => import('@/views/regionalPartyBuilding/EventHighlight')
                }
            ]
        }

    ]
})
