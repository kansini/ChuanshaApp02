<template>
    <div id="regionalPB">
        <div class="row">
            <div class="col-5">
                <div class="sub-nav">
                    <router-link tag="div" class="sub-nav-item" :to="item.path" v-for="(item,index) in subNav"
                                 :key="index">
                        {{item.name}}
                    </router-link>
                </div>
            </div>
            <div class="col-19">
                <div class="content" style="width: 100%;height: calc(734rem / 96);background: rgba(255,255,255,.8)">
                    <router-view></router-view>
                </div>
            </div>
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
        margin: 0 auto calc(24rem / 96) auto;
        padding: 0 calc(12rem / 96);
        box-sizing: border-box;
    }

    #regionalPB {
        width: 100%;
        padding:calc(64rem / 96) calc(40rem / 96);
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0);

        .sub-nav {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: calc(734rem / 96);
            font-size: calc(24rem / 96);
            color: #000;


            .sub-nav-item {
                width: 100%;
                height: calc(104rem / 96);
                line-height: calc(104rem / 96);
                text-align: center;
                color: #666;
                background: rgba(255, 255, 255, .8);
                box-shadow: 0px 0px 30px 0 rgba(184, 184, 184, 0.17);
                font-weight: bold;
                transition: all ease .6s;
                //border: 1px solid #F84141;
                border-radius: 6px;
                cursor: pointer;
            }

            .router-link-exact-active {
                color: #fff;
                background: #3cadee;
                box-shadow: 1px 2px 18px 0 #3cadee;
                border-radius: 6px;
            }
        }

        .bottom-nav {
            display: flex;
            justify-content: space-around;
            width: calc(100% - calc(24rem / 96));
            height: calc(124rem / 96);
            line-height: calc(124rem / 96);
            padding: 0 calc(12rem / 96);
            margin: 0 auto;
            box-sizing: border-box;
            background: rgba(255, 255, 255, .8);
            box-shadow: 1px 2px 18px 0 rgba(184, 184, 184, 0.17);
            border-radius: 4px;

            .bottom-nav-item {
                font-size: calc(24rem / 96);
                cursor: pointer;
            }
        }
    }
</style>