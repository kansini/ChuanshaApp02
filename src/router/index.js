import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'


const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
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
                    path: '/activityHighlight',
                    name: 'activityHighlight',
                    component: () => import('@/views/regionalPartyBuilding/ActivityHighlight')
                }
            ]

        },

    ]
})
