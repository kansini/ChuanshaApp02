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
    .row {
        width: 100%;
        margin: calc(24rem / 96) auto;
        padding: 0 calc(12rem / 96);
        box-sizing: border-box;
    }

    #regionalPB {
        width: 100%;
        // padding: calc(64rem / 96) 0;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0);

        .header {
            width: 100%;
            height: 64px;
            line-height: 64px;
            color: #fff;
            font-size: 16px;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);

            .sub-nav {
                display: flex;
                justify-content: space-between;
                width: 60%;
                margin: 0 16px;
                font-family: 'ping';

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
            box-sizing: border-box;
        }

    }
</style>