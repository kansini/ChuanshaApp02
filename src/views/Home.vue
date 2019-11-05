<template>
    <div class="home">
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

    export default {
        name: 'home',
        components: {
            shortcut
        },
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


    }
</style>
