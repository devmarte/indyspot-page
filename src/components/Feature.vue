<template>
    <div class="container">
        <div class="feature">
            <div
                v-for="(item, idx) in items"
                :key="idx"
                class="item"
                :class="{ reverse: idx % 2 !== 0 }"
            >
                <div class="img"></div>
                <div class="blank"></div>
                <div class="description">
                    <p class="title">{{ item.title }}</p>
                    <p class="paragraph">
                        {{ item.paragraph }}
                    </p>
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
                    img: "",
                    title: "반응형 VR",
                    paragraph:
                        "모바일, 태블릿 그리고 PC까지 다양한 크기의 형태에 맞추어 자동 반응하는 반응형 VR을 제작해드립니다. 더이상 화면 크기를 고민하지 않으셔도 됩니다.",
                },
                {
                    img: "",
                    title: "유지/관리비 무료",
                    paragraph:
                        "타사와 달리 VR 콘텐츠 유지/관리비가 없습니다. 서버비용은 저희가 모두 부담 합니다. 고객님은 촬영, 제작비와 출장비만 부담하세요.",
                },
                {
                    img: "",
                    title: "HTML5 & 최신브라우저",
                    paragraph:
                        "오래된 flash 제작물이나 프로그램을 설치해야하는 다른 서비스와 달리 저희는 최신 모던 웹 기술을 이용하여 VR을 제작 하고 있습니다.",
                },
                {
                    img: "",
                    title: "빠른 촬영 & 제작",
                    paragraph:
                        "특수 촬영이 아닌 일반적인 경우, 3-7일 이내 촬영과 VR제작이 완료됩니다. 규모가 작은 장소를 촬영할 경우, 촬영일 바로 결과물을 받으실 수도 있습니다.",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.feature {
    margin-bottom: 280px;

    .item {
        display: flex;
        margin-bottom: 80px;

        .img {
            width: 730px;
            height: 370px;
            border: 1px solid grey;
            border-radius: 32px;
        }
        .blank {
            width: 150px;
        }
        .description {
            width: 400px;

            .title {
                position: relative;
                margin-bottom: 20px;
                font-size: 24px;
                font-weight: bold;
                color: #353c45;

                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 14px;
                    width: 70%;
                    height: 16px;
                    border-radius: 8px;
                    background: #114b9b;
                    opacity: 0.3;
                    z-index: -10;
                }
            }

            .paragraph {
                line-height: 1.75;
                font-size: 16px;
                color: #656565;
            }
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    .reverse {
        flex-direction: row-reverse;
    }
}

@media screen and (max-width: 1024px) {
    .container {
        .feature {
            padding: 0 40px;

            .item {
                .img {
                    height: 180px;
                }
            }
        }
    }
}

@media screen and (max-width: 720px) {
    .feature {
        margin-bottom: 160px;

        .item {
            flex-direction: column;
            align-items: center;
            .img {
                width: 100%;
                margin-bottom: 16px;
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .container {
        .feature {
            padding-left: 0;
            padding-right: 0;

            .item {
                .description {
                    width: auto;
                }
            }
        }
    }
}

@media screen and (max-width: 375px) {
    .container {
        .feature {
            margin-bottom: 120px;
            .item {
                margin-bottom: 44px;
                .img {
                    margin-bottom: 12px;
                }
                .description {
                    .title {
                        font-size: 18px;
                    }
                    .paragraph {
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>