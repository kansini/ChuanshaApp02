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
                    path: '/regionalPB',
                    name: 'regionalPartyBuilding',
                    component: () => import ('@/views/regionalPartyBuilding'),
                    redirect: '/promotionAssociation',
                    children: [
                        {
                            path: '/promotionAssociation',
                            name: 'promotionAssociation', //区域化党建促进会
                            component: () => import('@/views/regionalPartyBuilding/PromotionAssociation')
                        },
                        {
                            path: '/resourceList',
                            name: 'resourceList', //区域化党建资源清单
                            component: () => import('@/views/regionalPartyBuilding/ResourceList')
                        },//
                        {
                            path: '/projectList',
                            name: 'projectList', //区域化党建项目清单
                            component: () => import('@/views/regionalPartyBuilding/ProjectList')
                        },
                        {
                            path: '/programme',
                            name: 'programme', //区域化党建活动安排
                            component: () => import('@/views/regionalPartyBuilding/Programme')
                        },
                        {
                            path: '/activityHighlight',
                            name: 'activityHighlight', //区域化党建活动集锦
                            component: () => import('@/views/regionalPartyBuilding/ActivityHighlight')
                        }
                    ]
                },
                {
                    path:'/guestBook',
                    name:'guestBook', //留言堂
                    component: () => import('@/views/GuestBook')
                },
                {
                    path:'/news',
                    name:'news', //要闻速递
                    component: () => import('@/views/News')
                },
                {
                    path:'/liangxin',
                    name:'liangxin', //“两新”党建
                    component: () => import('@/views/Liangxin') //
                },
                {
                    path:'/tongzhan',
                    name:'tongzhan', //宣传统战
                    component: () => import('@/views/Tongzhan')
                },
                {
                    path:'/so',
                    name:'socialOrganization', //社会组织党建
                    component: () => import('@/views/SocialOrganization')
                }
            ]
        },

    ]
})
