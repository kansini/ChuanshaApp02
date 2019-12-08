<template>
    <div class="home">
        <pageLoader v-if="isLoading" :background="bgColor" :class="{quit:quit}"/>
        <div class="btn-close" @click="close()" v-if="isLoading"></div>
        <div class="mainNav">
            <div class="left">
                <div class="video"></div>
            </div>
            <div class="right">
                <shortcut/>
            </div>
        </div>
    </div>
</template>

<script>
    import shortcut from '@/components/Shortcut'
    import pageLoader from '@/components/PageLoader'

    export default {
        name: 'home',
        components: {
            shortcut,
            pageLoader
        },
        data() {
            return {
                isOpen: false,
                isLoading: false,
                bgColor: "",
                quit: false,
            }
        },
        methods: {
            close() {
                this.quit = true
                setTimeout(() => {
                    this.isLoading = false
                    this.quit = false
                }, 400)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        width: 100%;

        .btn-close {
            position: absolute;
            top: 0;
            right: 0;
            width: 64px;
            height: 64px;
            cursor: pointer;
            opacity: .85;
            transform: scale(.65);
            transition: all ease .5s;
            z-index: 1000;

            &:hover {
                transform: scale(.8) rotate(90deg);
                opacity: 1;
            }

            &::before,
            &::after {
                position: absolute;
                left: 16px;
                top: 31px;
                content: '';
                width: 32px;
                height: 2px;
                background: #fff;
            }

            &::before {
                transform: rotate(45deg);
            }

            &::after {
                transform: rotate(-45deg);
            }
        }


        .mainNav {
            width: calc(1680rem / 96);
            height: calc(600rem / 96);
            margin: calc(96rem / 96) auto;

            &::after {
                display: table;
                content: '';
                clear: both;
            }

            .left,
            .right {
                float: left;
            }

            .left {
                width: calc(50% - calc(24rem / 96));
                height: 100%;
                margin-right: calc(24rem / 96);
                overflow: hidden;
                padding: calc(16rem / 96);
                background: #fff;
                box-sizing: border-box;
                border-radius: 8px;


                .video {
                    width: 100%;
                    height: 100%;
                    background: url("../assets/img/video.png") no-repeat center;
                    background-size: auto 100%;
                    border-radius: 6px;
                }
            }

            .right {
                width: 50%;
                height: 100%;

                .row {
                    width: 100%;

                    &::after {
                        display: table;
                        content: '';
                        clear: both;
                    }


                }
            }

        }

        .quit {
            width: 100%;
            transform-origin: right center;
            animation: qiut linear .5s forwards;
        }
    }
</style>
