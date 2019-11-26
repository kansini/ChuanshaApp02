<template>
    <div class="custom-list">
        <div class="custom-list-title">{{title}}</div>
        <div class="custom-list-item" :style="{color:color}">
            <div>列表</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomList",
        props: ['title','color']
    }
</script>

<style lang="scss" scoped>
    .custom-list {
        width: 100%;
        background: rgba(255, 255, 255, 0);
        animation: fadeIn 2s forwards;
        background: url("../../assets/img/deco.svg") no-repeat 0 0;
        background-size: 60%;

        .custom-list-title {
            font-size: 32px;
            font-family: 'fzht';
            height: calc(96rem / 96);
            line-height: calc(96rem / 96);
            text-shadow: 2px 2px 2px rgba(255,255,255,.3);
        }
        .custom-list-item {
            padding: calc(24rem / 96);
            width: calc(1520rem / 96);
            height: 100vh;
            overflow: scroll;
            margin: 0 auto;
            box-sizing: border-box;
            background: rgba(255, 255, 255, .9);
            border-radius: 8px 8px 0 0;
            z-index: 3;
        }
    }
</style>
