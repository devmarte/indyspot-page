<template>
    <div id="works">
        <div class="container">
            <Sub-title
                v-bind:title="title"
                v-bind:shorten="shorten"
            ></Sub-title>
            <div v-for="(item, idx) in works" :key="idx" class="works-Item">
                <div class="img" v-on:click="openLink(item.link)"></div>
                <h2>{{ item.name }}</h2>
                <p>
                    {{ item.desc }}
                </p>
            </div>
        </div>
        <!-- <Footer /> -->
    </div>
</template>

<script>
// import Footer from "../components/Footer.vue";
import SubTitle from "../components/SubTitle.vue";
export default {
    components: {
        SubTitle,
        // Footer,
    },
    data() {
        return {
            shorten: true,
            title: "최고가 아닌 <span>유일</span>이</br > 되려고 합니다.",
            works: [
                {
                    img: "../assets/logo-look360.jpg",
                    name: "LOOK360",
                    desc: "오프라인 매장을 운영하시는 사장님들께 잠재고객을 유치할 수 있는 최적의 채널을 제공합니다. 단순히 매장 현장을 360도로 둘러보는 것 뿐만 아니라 매장이 가진 의미 있는 이야기를 “파노스토리”로 꾸며서 고객들에게 들려주세요~ 또한, 일반 사용자들은 보고 싶은 장소를 검색하고 온라인 상에서 미리 체험할 수 있습니다.",
                    link: "https://look360.kr/",
                },
                {
                    name: "CAMPUSTOWN",
                    desc: "대한민국 모든 학교에 대한 정보를 확인할 수 있는 것은 물론 전국 대학 캠퍼스를 360도 파노라마 VR 투어로 미리 체험할 수 있는 대학 입시생들의 필수 서비스! 대학 뿐 아니라 여러분들의 초중고등학교도 캠퍼스타운에서 방문할 수 있는 날까지 멈추지 않고 달리겠습니다.",
                    link: "http://campustown.co.kr/",
                },
                {
                    name: "SK8SPOT",
                    desc: "“스케이트보드를 어디서 타야하지?”라는 질문에 명쾌한 해답을 제공하는 서비스! 전국 스케이트보드 타는 장소를 모두 싹 다 모아 놨습니다.",
                    link: "http://sk8spot.kr/",
                },
            ],
        };
    },
    methods: {
        openLink: function (val) {
            window.open(val);
        },
    },
};
</script>

<style lang="scss">
#works {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        #works-tit {
            font-size: 18px;
            margin-top: 64px;
            margin-bottom: 80px;
        }
        .works-Item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            // max-width: 640px;
            margin-bottom: 160px;

            .img {
                // border: 1px solid #ccc;
                width: 100%;
                height: 400px;
                margin-bottom: 24px;
                cursor: pointer;
                border-radius: 16px;
                background-image: url("../assets/logo-look360.jpg");
                background-size: 500px;
                background-repeat: no-repeat;
                background-position: center;

                &:hover {
                    animation: enlarge 0.3s forwards;
                }
            }

            &:nth-of-type(3) {
                .img {
                    background-image: url("../assets/logo-campus.jpg");
                }
            }

            &:nth-of-type(4) {
                .img {
                    background-image: url("../assets/logo-sk8t.jpg");
                }
            }

            h2 {
                margin-bottom: 48px;
            }

            p {
                font-size: 18px;
                line-height: 1.75;
            }
        }
    }
}
@media screen and (max-width: 760px) {
    #works {
        .container {
            .works-Item {
                .img {
                    background-size: 50%;
                }
            }
        }
    }
}
@keyframes enlarge {
    0% {
        background-size: 1;
    }
    100% {
        background-size: 1.2;
    }
}
</style>