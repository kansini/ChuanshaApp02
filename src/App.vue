<template>
    <div id="app">
        <div class="logo" @click="toggleFullscreen"></div>
        <router-view/>
    </div>
</template>

<script>
    import screenfull from 'screenfull'

    export default {
        components: {},
        data() {
            return {
                isFullScreen: false
            }
        },
        methods: {
            toggleFullscreen() {
                screenfull.toggle()
                this.isFullScreen = !this.isFullScreen
            }

        }
    }
</script>

<style lang="scss">
    #app {
        width: 100%;
        height: 100vh;

    }

    body {
        background: url("./assets/img/mainBg.jpg") no-repeat center;
        background-size: 100% 100%;
    }

    .logo {
        width: calc(1318rem / 96);
        height: calc(160rem / 96);
        margin: 0 auto;
        padding: calc(80rem / 96) 0;
        background: url("./assets/img/logo.png") no-repeat center;
        background-size: 100%;
        cursor: pointer;
    }


</style>
