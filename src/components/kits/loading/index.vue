<template>
    <transition name="fadeIn">
        <div class="loader" v-show="isLoading">
            <div id="loading">
                <animation :path="path" id="loading-img" v-if="!customPath"/>
                <animation :path="customPath" id="loading-img" v-else/>
                <div class="loading-text" v-if="loadingText">{{loadingText}}</div>
            </div>
            <div class="mask" v-if="background" :style="{background: background}"></div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "loading",
        props: {
            type: {
                type: String,
                default: undefined
            },
            customPath: {
                type: String,
                default: undefined
            },
            loadingText: {
                type: String,
                default: undefined
            },
            loading: {
                type: Boolean,
                default: false
            },
            background: {
                type: String,
                default: undefined
            }
        },
        computed: {
            isLoading() {
                return this.loading
            },
            path() {
                if (this.type == "book") {

                    return "./ani/loading-book.json"
                }
                if (this.type == "bookmark") {

                    return "./ani/bookmark.json"
                }
                if (this.type == "image") {

                    return "./ani/image-loading.json"
                }
                if (this.type == 'skeleton') {

                    return "./ani/skeleton.json"
                }
                if (this.type == 'circle01') {

                    return "./ani/circle01.json"
                }
                if (this.type == 'circle02') {

                    return "./ani/circle2.json"
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loader {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        animation: fadeIn .8s forwards;

        #loading {
            position: absolute;
            left: calc(50% - 120px);
            top: calc(50% - 140px);
            z-index: 999;

            .loading-text {
                width: 100%;
                // background: #323B4E;
                color: #fff;
                font-size: 14px;
                margin-top: -48px;
                text-align: center;

            }
        }

        .mask {
            width: 100%;
            height: 100%;
            background: #fff;
            z-index: 998;
        }

        .loading {
            position: absolute;
            left: calc(50% - 32px);
            top: calc(50% - 32px);
            width: 64px;
            height: 64px;
            border-radius: 80px;
            box-shadow: 0 0 0 6px #fff;

            &::before {
                position: absolute;
                content: '';
                left: 20px;
                top: 20px;
                width: 24px;
                height: 24px;
                border-radius: 80px;
                box-shadow: 0 0 0 4px #fff;
                animation: circle linear 1.2s infinite;

            }
        }
    }


</style>
