<template>
    <div class="foto-list">
        <div class="foto-list-title" v-if="title">{{title}}</div>
        <div class="foto-list-content" :class="{hasTitle:title}">
            <div class="foto-list-item" v-for="(item,index ) in fotoList" :key="index" @click="view(item.img)">
                <img :src="item.img">
                <div class="foto-title" :style="{color:color}">{{item.title}}</div>
            </div>
            <div class="btn-group">
                <div :style="{background:color}">上一页</div>
                <div :style="{background:color}">下一页</div>
            </div>
        </div>
        <div class="mask"  v-if="showDetail" @click="showDetail = !showDetail"></div>
        <div class="foto-detail" v-if="showDetail">
            <img :src="detailImg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "fofo",
        props: {
            title: {
                type: String,
                default: ""
            },
            color: {
                type: String,
                default: "#333"
            },
            fotoList: {
                type: Array,
                default: () => {
                    return {}
                }
            },
            detail: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {
                showDetail: false,
                detailImg:""
            }
        },
        methods: {
            view(img) {
                this.showDetail = !this.showDetail
                this.detailImg = img
            }
        }
    }
</script>

<style lang="scss" scoped>
    .foto-list {
        width: 100%;
        background: rgba(255, 255, 255, 0);
        animation: fadeIn .4s forwards;
        background: url("../../../assets/img/deco.svg") no-repeat 0 0;
        background-size: 60%;
        text-align: left;

        .foto-list-title {
            width: 100%;
            height: calc(96rem / 96);
            line-height: calc(96rem / 96);
            font-size: 34px;
            color: #fff;
            font-family: 'fzht';
            text-align: center;
            text-shadow: 2px 2px 2px rgba(255, 255, 255, .3);
        }

        .hasTitle {
            padding: calc(16rem / 96) calc(32rem / 96);
            background: rgba(255, 255, 255, .9);
            width: calc(1520rem / 96);
            box-sizing: border-box;
            border-radius: 8px;
        }

        .foto-list-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-bottom: calc(128rem / 96);
            //height: calc(100vh - calc(144rem / 96));
            overflow: scroll;
            margin: 0 auto;

            .foto-list-item {
                width: calc(100% / 3);
                padding: calc(16rem / 96) calc(16rem / 96);
                box-sizing: border-box;
                cursor: pointer;
                .foto-title{
                    margin-top: calc(32rem / 96);
                    font-size: calc(22rem / 96);
                    text-align: center;
                }


                img {
                    width: 100%;
                    height: calc(320rem / 96);
                    border-radius: 8px;
                    overflow: hidden;
                }
            }
        }
        .mask{
            position: absolute;
            width: 100%;
            height: 100vh;
            left: 0;
            top:0;
            background: rgba(0,0,0,.6);
            z-index: 9999;
            cursor: pointer;
        }
        .foto-detail{
            position: absolute;
            left: 15%;
            width: 70%;
            top:calc(96rem / 96);
            z-index: 9999;
            padding: calc(24rem / 96);
            box-sizing: border-box;
            background: #fff;
            border-radius: 8px;
            animation: fadeIn .4s forwards;

            img{
                width: 100%;
            }
        }
    }

</style>
