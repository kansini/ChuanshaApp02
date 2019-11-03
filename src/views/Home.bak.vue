<template>
    <div class="home">
        <div class="mainNav">
            <div class="left">
                <div class="video"></div>
            </div>
            <div class="right">
                <div class="row">
                    <router-link class="nav-item-01" tag="div" to="/regionalpb">
                        <div class="icon">
                            <img src="../../public/img/icons/ico-quyuhua.svg" alt="">
                        </div>
                        <span>区域化党建</span>
                    </router-link>
                    <router-link tag="div" to="/" class="nav-item-02">
                        <div class="icon">
                            <img src="../../public/img/icons/ico-news.svg" alt="">
                        </div>
                        要闻速递
                    </router-link>
                </div>
                <div class="row">
                    <router-link tag="div" to="/" class="nav-item-03">
                        <div class="icon">
                            <img src="../../public/img/icons/ico-liangxin.svg" alt="">
                        </div>
                        “两新”党建
                    </router-link>
                    <div class="nav-item-right">
                        <div class="nav-item-04">
                            <div class="icon">
                                <img src="../../public/img/icons/ico-tongzhan.svg" alt="">
                            </div>
                            宣传统战
                        </div>
                        <div class="nav-item-05">
                            <div class="icon">
                                <img src="../../public/img/icons/ico-guestbook.svg" alt="">
                            </div>
                            留言堂
                        </div>
                        <div class="row">
                            <router-link tag="div" to="/" class="nav-item-06">
                                <div class="icon">
                                    <img src="../../public/img/icons/ico-so.svg" alt="">
                                </div>
                                社会组织党建
                            </router-link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            handleItem01() {
                this.isOpen = true
            }
        }

    }
</script>
<style lang="scss" scoped>
    .home {
        width: 100%;
        //height: 100vh;

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

                    [class^="nav-item-"] {
                        float: left;
                        position: relative;
                        border-radius: 10px;
                        color: rgba(255, 255, 255, .9);
                        font-family: "fzht";
                        font-size: calc(32rem / 96);
                        cursor: pointer;
                        text-align: center;
                        overflow: hidden;
                        box-sizing: border-box;
                        transition: all ease .6s;

                        .icon {
                            width: calc(120rem / 96);
                            height: calc(120rem / 96);

                            img {
                                width: 100%;
                            }
                        }


                        &::before,
                        &::after {
                            position: absolute;
                            content: '';
                            background: rgba(255, 255, 255, .1);
                            border-radius: 100%;
                        }
                    }


                    .nav-item-01 {
                        width: calc(538rem / 96);
                        height: calc(230rem / 96);
                        line-height: calc(230rem / 96);
                        margin-right: calc(24rem / 96);
                        background: rgba(60, 173, 238, .9);
                        margin-bottom: calc(24rem / 96);
                        padding-left: calc(48rem / 96);
                        box-shadow: 0 0 20px rgba(60, 173, 238, .5);

                        &:hover {
                            background: rgba(60, 173, 238, 1);
                            box-shadow: 0 0 20px rgba(60, 173, 238, 1);
                        }


                        .icon {
                            position: absolute;
                            width: calc(96rem / 96);
                            height: calc(96rem / 96);
                            top: calc(-56rem / 96);
                            left: calc(80rem / 96);
                        }

                        &::before {
                            top: calc(-48rem / 96);
                            left: calc(118rem / 96);
                            width: calc(230rem / 96);
                            height: calc(360rem / 96);
                            transform: rotate(15deg);
                        }

                        &::after {
                            top: calc(96rem / 96);
                            right: calc(-190rem / 96);
                            width: calc(270rem / 96);
                            height: calc(364rem / 96);
                            transform: rotate(15deg);
                        }


                    }

                    .nav-item-02 {
                        width: calc(198rem / 96);
                        height: calc(230rem / 96);
                        //line-height: calc(320rem / 96);
                        background: rgba(247, 174, 108, .9);
                        margin-bottom: calc(24rem / 96);
                        box-shadow: 0 0 20px rgba(247, 174, 108, .6);

                        &:hover {
                            background: rgba(247, 174, 108, 1);
                            box-shadow: 0 0 30px rgba(247, 174, 108, 1);
                        }


                        .icon {
                            width: calc(60rem / 96);
                            height: calc(60rem / 96);
                            margin: calc(56rem / 96) auto calc(24rem / 96);

                        }

                        &::after {
                            top: calc(96rem / 96);
                            left: calc(-108rem / 96);
                            width: calc(270rem / 96);
                            height: calc(364rem / 96);
                            transform: rotate(20deg);
                        }

                    }

                    .nav-item-03 {
                        width: calc(314rem / 96);
                        height: calc(346rem / 96);
                        margin-right: calc(24rem / 96);
                        background: rgba(239, 95, 96, .95);
                        box-shadow: 0 0 20px rgba(239, 95, 96, .5);

                        &:hover {
                            background: rgba(239, 95, 96, 1);
                            box-shadow: 0 0 20px rgba(239, 95, 96, 1);
                        }

                        .icon {
                            margin: calc(64rem / 96) auto calc(32rem / 96);

                        }


                        &::before {
                            top: calc(-298rem / 96);
                            left: calc(118rem / 96);
                            width: calc(230rem / 96);
                            height: calc(360rem / 96);
                            transform: rotate(15deg);
                        }

                        &::after {
                            top: calc(38rem / 96);
                            left: calc(18rem / 96);
                            width: calc(406rem / 96);
                            height: calc(248rem / 96);
                            transform: rotate(25deg);
                        }


                    }

                    .nav-item-04 {
                        width: calc(198rem / 96);
                        height: calc(166rem / 96);
                        //line-height: calc(240rem / 96);
                        margin-right: calc(24rem / 96);
                        background: rgba(63, 202, 172, .8);
                        margin-bottom: calc(24rem / 96);
                        box-shadow: 0 0 10px rgba(63, 202, 172, .5);

                        &:hover {
                            background: rgba(63, 202, 172, 1);
                            box-shadow: 0 0 30px rgba(63, 202, 172, 1);
                        }

                        .icon {
                            width: calc(64rem / 96);
                            height: calc(64rem / 96);
                            margin: calc(24rem / 96) auto calc(16rem / 96);
                        }

                        &::after {
                            top: calc(58rem / 96);
                            left: calc(-288rem / 96);
                            width: calc(406rem / 96);
                            height: calc(248rem / 96);
                            transform: rotate(25deg);
                        }
                    }

                    .nav-item-05 {
                        width: calc(198rem / 96);
                        height: calc(166rem / 96);
                        background: rgba(131, 121, 241, .9);
                        margin-bottom: calc(24rem / 96);
                        box-shadow: 0 0 10px rgba(131, 121, 241, .5);

                        &:hover {
                            background: rgba(131, 121, 241, 1);
                            box-shadow: 0 0 30px rgba(131, 121, 241, 1);
                        }

                        .icon {
                            width: calc(60rem / 96);
                            height: calc(60rem / 96);
                            margin: calc(24rem / 96) auto calc(16rem / 96);
                        }
                    }

                    .nav-item-06 {
                        width: calc(420rem / 96);
                        height: calc(152rem / 96);
                        line-height: calc(152rem / 96);
                        background: rgba(206, 135, 194, .9);
                        padding-left: calc(80rem / 96);
                        box-shadow: 0 0 10px rgba(206, 135, 194, .5);

                        &:hover {
                            background: rgba(206, 135, 194, 1);
                            box-shadow: 0 0 30px rgba(206, 135, 194, 1);
                        }

                        .icon {
                            position: absolute;
                            width: calc(72rem / 96);
                            height: calc(72rem / 96);
                            top: calc(-40rem / 96);
                            left: calc(64rem / 96);
                        }

                        &::after {
                            top: calc(-160rem / 96);
                            left: calc(-300rem / 96);
                            width: calc(406rem / 96);
                            height: calc(248rem / 96);
                            transform: rotate(25deg);
                        }
                    }

                    .opened {
                        position: absolute;
                        padding: calc(24rem / 96);

                        transition: all ease .6s;
                        z-index: 999;
                        animation: open linear 1.2s forwards;

                        .icon {
                            display: none;
                        }

                        span {
                            display: none;
                        }

                    }

                }
            }

        }

        @keyframes open {
            10%{
                top: 0;
            }
            30% {

                height: 100vh;

            }

            100% {
                top: 0;
                height: 100vh;
                left: 0;
                width: 100%;
                border-radius: 0;
                box-shadow: 0 0 0px rgba(60, 173, 238, 0);
            }
            100%{

            }

        }

    }
</style>
