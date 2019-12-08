<template>
    <div class="page-loader" :style="{background:background}">
        <router-view v-if="!isLoading"/>
        <loading :loading="isLoading" :type="loadingIcon" loadingText="数据加载中，请稍后……"/>
    </div>
</template>

<script>
    export default {
        name: "PageLoader",
        components: {},
        props: {
            background: {
                type: String,
                default: ""
            },
            loadingIcon: {
                type: String,
                default: "skeleton"
            }
        },
        data() {
            return {
                isLoading: true,
            }
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false
            }, 2400)

        }
    }
</script>

<style lang="scss" scoped>
    .page-loader {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        transform-origin: left center;
        height: 100%;
        animation: loading linear .5s forwards;
        z-index: 999;

        .works-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 24px;
            border: 2px solid rgba(255, 255, 255, .85);
            border-radius: 35px;
            box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 40px;
            height: 88px;
            z-index: 9999;

            [class^="btn-"] {
                width: 40px;
                height: 40px;
                cursor: pointer;
                opacity: .6;
                transition: all ease .4s;

                &:hover {
                    opacity: 1;
                    transform: scale(1.2);
                }
            }

            .btn-next {
                background: url("../assets/img/ico-next.svg") no-repeat center;
                background-size: 6px;
            }

            .btn-pre {
                background: url("../assets/img/ico-pre.svg") no-repeat center;
                background-size: 6px;
            }


        }
    }

</style>
