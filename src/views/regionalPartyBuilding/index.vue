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
                <div class="content" style="width: 100%;height: calc(734rem / 96);background: #ff3366">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="bottom-nav" style="width: 100%;height: calc(112rem / 96);background: #ff3333;"></div>
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
                        path: '/eventHighlight'
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    #regionalPB {
        width: calc(1704rem / 96);
        height: calc(870rem / 96);
        margin: 0 auto;
        background: rgba(255, 255, 255, 0);

        .sub-nav {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: calc(734rem / 96);
            font-size: calc(28rem / 96);
            color: #000;


            .sub-nav-item {
                width: 100%;
                height: calc(104rem / 96);
                line-height: calc(104rem / 96);
                text-align: center;
                background: #FFFFFF;
                border: 1px solid #F84141;
                border-radius: 6px;
                cursor: pointer;
            }
            .router-link-exact-active{
                color: #fff;
                background: #F84141;
                border-radius: 6px;
            }
        }

        .bottom-nav {
            padding: 0 calc(12rem / 96);
            box-sizing: border-box;
        }
    }
</style>