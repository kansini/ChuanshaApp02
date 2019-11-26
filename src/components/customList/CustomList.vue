<template>
    <div class="custom-list">
        <div class="custom-list-item">
            <div>列表</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomList"
    }
</script>

<style lang="scss" scoped>
    .custom-list{
        padding: calc(24rem / 96);
        width: calc(1520rem / 96);
        height: 100vh;
        overflow: scroll;
        margin: 40px auto 0 auto;
        box-sizing: border-box;
        background: rgba(255, 255, 255, .9);
        border-radius: 8px 8px 0 0;
        z-index: 3;
        animation: fadeIn 1s forwards;
    }
</style>
