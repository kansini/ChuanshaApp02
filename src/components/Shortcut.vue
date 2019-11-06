<template>
    <div id="shortcut">
        <transition name="fadeIn">
            <div class="close" @click="close()" v-if="current > 0"></div>
        </transition>

        <div :class="['shortcut-item-0' + item.id,{open:current == index + 1}]" v-for="(item,index) in shortcut"
             :key="index" @click="open(index,item.path)">
            <regionalPartyBuilding v-if="current == 1"/>
            <div class="icon">
                <img :src="'./img/icons/ico-' + item.icon + '.svg' ">
            </div>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
    import regionalPartyBuilding from '@/views/regionalPartyBuilding'

    export default {
        name: "shortcut",
        components: {regionalPartyBuilding},
        data() {
            return {
                current: 0,
                shortcut: [
                    {
                        "id": "1",
                        "title": "区域化党建",
                        "icon": "quyuhua",
                        "path": "promotionAssociation"
                    },
                    {
                        "id": "2",
                        "title": "要闻速递",
                        "icon": "news"
                    },
                    {
                        "id": "3",
                        "title": "“两新”党建",
                        "icon": "liangxin"
                    },
                    {
                        "id": "4",
                        "title": "宣传统战",
                        "icon": "tongzhan"
                    },
                    {
                        "id": "5",
                        "title": "留言堂",
                        "icon": "guestbook"
                    },
                    {
                        "id": "6",
                        "title": "社会组织党建",
                        "icon": "so"
                    }
                ]
            }
        },
        methods: {
            open(index, path) {
                this.current = index + 1
            },
            close() {
                this.current = 0
                this.$router.push('/')
            },
            init(path) {
                this.$router.push(path)
            }

        }
    }
</script>

<style lang="scss" scoped>
    #shortcut {
        .close {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 64px;
            height: 64px;
            background: url("../../public/img/icons/ico-close.svg") no-repeat center;
            background-size: 16px;
            opacity: .6;
            cursor: pointer;
            z-index: 1000;
            transition: all linear .4s;

            &:hover {
                opacity: 1;
                transform: rotate(180deg);
            }
        }

        [class^="shortcut-item-"] {
            float: left;
            position: relative;
            border-radius: 8px;
            color: rgba(255, 255, 255, .9);
            font-family: "fzht";
            font-size: calc(30rem / 96);
            cursor: pointer;
            text-align: center;
            overflow: hidden;
            box-sizing: border-box;
            transition: all ease .4s;

            .icon {
                width: calc(120rem / 96);
                height: calc(120rem / 96);
                opacity: 1;
                transition: all ease .2s;

                img {
                    width: 100%;
                }
            }

            span {
                opacity: 1;
                transition: all ease .2s;
            }


            &::before,
            &::after {
                position: absolute;
                content: '';
                background: rgba(255, 255, 255, .1);
                border-radius: 100%;
            }
        }


        .shortcut-item-01 {
            width: calc(538rem / 96);
            height: calc(230rem / 96);
            padding-top: calc(104rem / 96);
            padding-left: calc(48rem / 96);
            margin-right: calc(24rem / 96);
            background: rgba(60, 173, 238, 1);
            margin-bottom: calc(24rem / 96);
            box-shadow: 0 0 20px rgba(60, 173, 238, .5);

            &:hover {
                background: #0086D4;
                box-shadow: 0 0 30px rgba(60, 173, 238, 1);
            }


            .icon {
                position: absolute;
                width: calc(96rem / 96);
                height: calc(96rem / 96);
                top: calc(72rem / 96);
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

        .shortcut-item-02 {
            width: calc(198rem / 96);
            height: calc(230rem / 96);
            background: rgba(247, 174, 108, 1);
            margin-bottom: calc(24rem / 96);
            box-shadow: 0 0 20px rgba(247, 174, 108, .6);

            &:hover {
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

        .shortcut-item-03 {
            width: calc(314rem / 96);
            height: calc(346rem / 96);
            margin-right: calc(24rem / 96);
            background: rgba(239, 95, 96, 1);
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

        .shortcut-item-04 {
            width: calc(198rem / 96);
            height: calc(166rem / 96);
            margin-right: calc(24rem / 96);
            background: rgba(63, 202, 172, 1);
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

        .shortcut-item-05 {
            width: calc(198rem / 96);
            height: calc(166rem / 96);
            background: rgba(131, 121, 241, 1);
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

        .shortcut-item-06 {
            width: calc(420rem / 96);
            height: calc(152rem / 96);
            padding-top: calc(64rem / 96);
            padding-left: calc(80rem / 96);
            background: rgba(206, 135, 194, 1);
            box-shadow: 0 0 10px rgba(206, 135, 194, .5);

            &:hover {
                background: rgba(206, 135, 194, 1);
                box-shadow: 0 0 30px rgba(206, 135, 194, 1);
            }

            .icon {
                position: absolute;
                width: calc(72rem / 96);
                height: calc(72rem / 96);
                top: calc(40rem / 96);
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

        .open {
            position: absolute;
            padding: calc(24rem / 96);
            margin: 0;
            transition: all ease .6s;
            z-index: 999;
            animation: open .4s forwards;

            &::before,
            &::after {
                width: 0;
                height: 0;
            }

            .icon {
                opacity: 0;
            }

            span {
                opacity: 0;
            }

        }

        @keyframes open {
            0% {
                top: 40px;
                left: 20%;
            }
            90% {
                top: 0;
                left: 0;
                border-radius: 0;
                width: 100%;
            }


            100% {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 0;
                padding: 0;
                box-shadow: 0 0 0px rgba(60, 173, 238, 0);
            }


        }


    }

</style>