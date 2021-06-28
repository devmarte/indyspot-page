<template>
    <div class="container">
        <div class="team">
            <div class="wrap">
                <div v-for="(item, idx) in items" :key="idx" class="profile">
                    <div class="pic"></div>
                    <p class="name" v-html="item.name"></p>
                    <p class="description" v-html="item.description"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    pic: "",
                    name: "김상욱 | <span>CEO</span>",
                    description:
                        "처음 파노라마 VR을 접했을 때의 기억이 지금도 생생합니다.<br />모든사람들에게 이로운 서비스를 만들겠습니다.<br />세상 모든 장소의 이야기를 파노라마 VR에 담는 그날까지!",
                },
                {
                    pic: "",
                    name: "문갑기 | <span>CTO</span>",
                    description:
                        "지금도 개발하고 있지만 더욱 더 격렬하게 개발하고 싶다.<br />세상 모든 장소의 이야기를 파노라마 VR에 담는 그날까지!",
                },
                {
                    pic: "",
                    name: "안성훈 | <span>파노그래퍼</span>",
                    description:
                        "최선을 다해서 최고가 되겠습니다 모든 사람들이 방 안에서<br />전 세계를 생생하게 느낄 수 있는 그날까지!",
                },
                {
                    pic: "",
                    name: "이시욱 | <span>연구원</span>",
                    description: "나초 마싯썽",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.team {
    position: relative;

    .wrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1060px;
        margin: 0 auto;

        .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 510px;
            margin-right: 40px;
            margin-bottom: 80px;

            &:nth-child(even) {
                margin-right: 0;
            }
            .pic {
                width: 188px;
                height: 188px;
                margin-bottom: 32px;
                border: 1px solid #ccc;
                border-radius: 50%;
            }

            .name {
                margin-bottom: 16px;
                font-size: 18px;
                font-weight: 700;
                color: #353c45;

                span {
                    font-weight: 400;
                }
            }

            .description {
                line-height: 1.5;
                font-size: 16px;
                color: #656565;
            }
        }
    }
}
@media screen and (max-width: 1100px) {
    .team {
        .wrap {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .profile {
                width: auto;
                margin-right: 0;
            }
        }
    }
}
@media screen and (max-width: 375px) {
    .team {
        .wrap {
            .profile {
                margin-bottom: 44px;
                .pic {
                    margin-bottom: 12px;
                }
                .name {
                    font-size: 16px;
                }
                .description {
                    font-size: 14px;
                }
            }
        }
    }
}
</style>