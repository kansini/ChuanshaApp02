<template>
    <div class="guestbook-list">
        <div class="guestbook-list-title">{{title}}</div>
        <div class="guestbook-list-content">
            <div v-for="(pic,index) in guestbook">
                <img :src="'./img/' + pic" alt="">
            </div>
        </div>
        <div class="btn-group">
            <div style="background:rgb(131, 121, 241)">上一页</div>
            <div style="background:rgb(131, 121, 241)">下一页</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuestbookList",
        props: {
            title: {
                type: String,
                default: "留言堂"
            },
            color: {
                type: String,
                default: "#333"
            }
        },
        data() {
            return {
                guestbook: []
            }
        },
        mounted() {
            this.getGuestbookData()
        },
        methods: {
            getGuestbookData() {
                this.$axios.get('guestbookData.json')
                    .then(res => this.guestbook = res.data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .guestbook-list {
        width: 100%;
        background: rgba(255, 255, 255, 0);
        animation: fadeIn .6s forwards;
        background: url("../assets/img/deco.svg") no-repeat 0 0;
        background-size: 60%;
        text-align: left;

        .guestbook-list-title {
            width: 100%;
            height: calc(96rem / 96);
            line-height: calc(96rem / 96);
            font-size: 34px;
            font-family: 'fzht';
            color: #fff;
            text-align: center;
            text-shadow: 2px 2px 2px rgba(255, 255, 255, .3);
        }

        .guestbook-list-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: calc(16rem / 96) calc(32rem / 96);
            width: calc(1520rem / 96);
            height: calc(100vh - calc(96rem / 96));
            overflow: scroll;
            margin: 0 auto;
            box-sizing: border-box;
            background: rgba(255, 255, 255, .9);
            border-radius: 8px 8px 0 0;

            div {
                width: calc(100% / 2);

                img {
                    width: 100%;
                }
            }
        }
    }

</style>
