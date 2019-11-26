<template>
    <div class="custom-list">
        <div class="custom-list-title">{{title}}</div>
        <div class="custom-list-content">
            <div class="custom-list-item" :style="{color:color,borderColor:color}"
                 v-for="(row,index ) in listData.data">
                <div v-for="(col,index) in listData.rules" :style="{width:col.width + '%'}">
                    {{row[col.prop]}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomList",
        props: {
            title: {
                type: String,
                default: ""
            },
            color: {
                type: String,
                default: "#333"
            },
            listData: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>
    .custom-list {
        width: 100%;
        background: rgba(255, 255, 255, 0);
        animation: fadeIn 2s forwards;
        background: url("../../assets/img/deco.svg") no-repeat 0 0;
        background-size: 60%;
        text-align: left;

        .custom-list-title {
            width: 100%;
            height: calc(96rem / 96);
            line-height: calc(96rem / 96);
            font-size: 34px;
            font-family: 'fzht';
            text-align: center;
            text-shadow: 2px 2px 2px rgba(255, 255, 255, .3);
        }

        .custom-list-content {
            padding: 0 calc(24rem / 96);
            width: calc(1520rem / 96);
            height: 100vh;
            overflow: scroll;
            margin: 0 auto;
            box-sizing: border-box;
            background: rgba(255, 255, 255, .9);
            border-radius: 8px 8px 0 0;

            .custom-list-item {
                display: flex;
                justify-content: space-between;
                padding: calc(24rem / 96) 0;
                border-bottom: 1px solid;
                font-size: calc(24rem / 96);
                z-index: 3;

                div {

                }
            }

        }
    }
</style>
