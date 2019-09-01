<template>
    <div class="home">
        <div class="logo"></div>
        <div class="mainNav">
            <div class="left"></div>
            <div class="right">
                <div class="row">
                    <router-link tag="div" to="/" class="nav-item-01">
                        区域化党建
                    </router-link>
                    <div class="nav-item-02"></div>
                </div>
                <div class="row">
                    <div class="nav-item-03"></div>
                    <div class="nav-item-right">
                        <div class="nav-item-04"></div>
                        <div class="nav-item-05"></div>
                        <div class="row">
                            <div class="nav-item-06"></div>
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

        .logo {
            width: calc(1318rem / 96);
            height: calc(160rem / 96);
            margin: 0 auto;
            padding: calc(80rem / 96) 0;
            background: url("../assets/img/logo.png") no-repeat center;
            background-size: 100%;
        }

        .mainNav {
            width: calc(1680rem / 96);
            height: calc(600rem / 96);
            margin: 0 auto;

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
                background: #42b983;
                margin-right: calc(24rem / 96);
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
                        border-radius: 10px;
                        color: #fff;
                        font-size: calc(28rem / 96);
                        cursor: pointer;
                    }

                    .nav-item-01 {
                        width: calc(538rem / 96);
                        height: calc(230rem / 96);
                        line-height: calc(230rem / 96);
                        margin-right: calc(24rem / 96);
                        background: #3cadee;
                        margin-bottom: calc(24rem / 96);

                    }

                    .nav-item-02 {
                        width: calc(198rem / 96);
                        height: calc(230rem / 96);
                        background: #f7ae6c;
                        margin-bottom: calc(24rem / 96);
                    }

                    .nav-item-03 {
                        width: calc(314rem / 96);
                        height: calc(346rem / 96);
                        margin-right: calc(24rem / 96);
                        background: #f07879;
                    }

                    .nav-item-04 {
                        width: calc(198rem / 96);
                        height: calc(166rem / 96);
                        margin-right: calc(24rem / 96);
                        background: #3fcaac;
                        margin-bottom: calc(24rem / 96);
                    }

                    .nav-item-05 {
                        width: calc(198rem / 96);
                        height: calc(166rem / 96);
                        background: #8479f1;
                        margin-bottom: calc(24rem / 96);
                    }

                    .nav-item-06 {
                        width: calc(420rem / 96);
                        height: calc(152rem / 96);
                        background: #ce87c2;
                    }

                }
            }

        }

    }
</style>
