<template>
    <div id="regionalPB">
        <div class="header">
            <div class="sub-nav">
                <router-link tag="div" class="sub-nav-item" :to="item.path" v-for="(item,index) in subNav"
                             :key="index">
                    {{item.name}}
                </router-link>
            </div>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "regionalPB",
        data() {
            return {
                subNav: [
                    {
                        name: "区域化党建促进会",
                        path: 'promotionAssociation'
                    },
                    {
                        name: "区域化党建资源清单",
                        path: '/resourceList'
                    },
                    {
                        name: "区域化党建项目清单",
                        path: '/projectList'
                    },
                    {
                        name: "区域化党建活动安排",
                        path: '/programme'
                    },
                    {
                        name: "区域化党建活动集锦",
                        path: '/activityHighlight'
                    }
                ],
                bottomNav: [
                    {
                        name: "首页",
                        path: '/'
                    },
                    {
                        name: "区域化党建",
                        path: '/regionalpb'
                    },
                    {
                        name: "要闻速递",
                        path: '/news'
                    },
                    {
                        name: "'两新'党建",
                        path: '/liangxin'
                    },
                    {
                        name: "统战宣传",
                        path: '/tongzhan'
                    },
                    {
                        name: "留言堂",
                        path: '/guestBook'
                    },
                    {
                        name: "社会组织党建",
                        path: '/socialOrganisation'
                    }
                ]

            }
        },
        created() {
            this.$parent.init('/promotionAssociation')
        }
    }
</script>

<style lang="scss" scoped>
    #regionalPB {
        position: relative;
        width: 100%;
        // padding: calc(64rem / 96) 0;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0);
        animation: fadeIn 2s forwards;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: calc(-128rem / 96);
            width: calc(1236rem / 96);
            height: calc(992rem / 96);
            background: url("../../assets/img/deco.svg") no-repeat 0 0;
            background-size: 100%;
            z-index: 999;
        }

        .header {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 64px;
            line-height: 64px;
            color: #fff;
            font-size: 16px;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
            z-index: 1000;

            .sub-nav {
                display: flex;
                justify-content: space-between;
                width: 60%;
                margin: 0 16px;

                .sub-nav-item {
                    font-size: calc(20rem / 96);
                    position: relative;
                    text-align: center;
                    padding: 0 calc(24rem / 96);
                    box-sizing: border-box;
                    color: #fff;
                    transition: all ease .6s;
                    cursor: pointer;
                }

                .router-link-exact-active {
                    background: #0086D4;
                    //background: rgba(255, 255, 255, .15);
                    //font-size: calc(26rem / 96);
                    //font-weight: bold;
                    transition: all ease .6s;

                    &::before {
                        position: absolute;
                        content: '';
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 2px;
                        background: rgba(255, 255, 255, 1);
                        background-size: 100%;

                    }
                }
            }

        }

        .content {
            padding: calc(24rem / 96);
            width: calc(1520rem / 96);
            height: calc(100vh - 80px);
            overflow: scroll;
            margin: 88px auto 0 auto;
            box-sizing: border-box;
            background: rgba(255, 255, 255, .9);
            border-radius: 8px 8px 0 0;
        }

    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
        }
        100% {
            opacity: 1;
        }

    }
</style>