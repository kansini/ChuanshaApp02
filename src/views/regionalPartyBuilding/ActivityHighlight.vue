<template>
    <foto-list :foto-list="fotoList" color="#0086D4"/>
</template>

<script>
    export default {
        name: "EventHighlight",
        data() {
            return {
                fotoList: [
                    {
                        img: "./img/events/001.jpeg",
                        title: "社会组织党建活动1"
                    },
                    {
                        img: "./img/events/002.jpeg",
                        title: "社会组织党建活动2"
                    },
                    {
                        img: "./img/events/003.jpeg",
                        title: "社会组织党建活动3"
                    },
                    {
                        img: "./img/events/004.jpeg",
                        title: "社会组织党建活动4"
                    },
                    {
                        img: "./img/events/003.jpeg",
                        title: "社会组织党建活动5"
                    },
                    {
                        img: "./img/events/004.jpeg",
                        title: "社会组织党建活动6"
                    }
                ]

            }
        }

    }
</script>

<style scoped>

</style>
