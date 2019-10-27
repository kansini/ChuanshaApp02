<template>
    <div class="home">
        <div class="mainNav">
            <div class="left">
                <div class="video"></div>
            </div>
            <div class="right">
                <div class="row">
                    <router-link tag="div" to="/regionalpb" class="nav-item-01">
                        区域化党建
                    </router-link>
                    <router-link tag="div" to="/" class="nav-item-02">
                        要闻速递
                    </router-link>
                </div>
                <div class="row">
                    <div class="nav-item-03">
                        “两新”党建
                    </div>
                    <div class="nav-item-right">
                        <div class="nav-item-04">
                            宣传统战
                        </div>
                        <div class="nav-item-05">
                            留言堂
                        </div>
                        <div class="row">
                            <div class="nav-item-06">
                                社会组织党建
                            </div>
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
        components: {}

    }
</script>
<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100vh;

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
                        color: #fff;
                        font-size: calc(28rem / 96);
                        cursor: pointer;
                        text-align: center;
                        overflow: hidden;

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
                        background: #3cadee;
                        margin-bottom: calc(24rem / 96);

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
                        line-height: calc(320rem / 96);
                        background: #f7ae6c;
                        margin-bottom: calc(24rem / 96);

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
                        line-height: calc(500rem / 96);
                        margin-right: calc(24rem / 96);
                        background: #f07879;

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
                        line-height: calc(240rem / 96);
                        margin-right: calc(24rem / 96);
                        background: #3fcaac;
                        margin-bottom: calc(24rem / 96);

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
                        line-height: calc(240rem / 96);
                        background: #8479f1;
                        margin-bottom: calc(24rem / 96);
                    }

                    .nav-item-06 {
                        width: calc(420rem / 96);
                        height: calc(152rem / 96);
                        line-height: calc(152rem / 96);
                        background: #ce87c2;

                        &::after {
                            top: calc(-160rem / 96);
                            left: calc(-300rem / 96);
                            width: calc(406rem / 96);
                            height: calc(248rem / 96);
                            transform: rotate(25deg);
                        }
                    }

                }
            }

        }

    }
</style>
