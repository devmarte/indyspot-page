<template>
    <div class="container">
        <div class="wrap">
            <div class="posNav">
                <ul>
                    <li
                        v-for="(item, idx) in lists"
                        :key="idx"
                        v-on:click="crntTab = idx"
                        v-bind:class="{ active: crntTab === idx }"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="detail">
                <p v-show="crntTab == 0">
                    즐겁게 UX를 탐색하는데 두근 거린다면??<br />
                    누군가에게 정보를 공유하거나 발표를 하는게 가슴을 뛰게
                    한다면??
                </p>
                <p v-show="crntTab == 1">
                    어디든 즐겁게 여행하고 사진을 찍는것이 좋다면??<br />
                    남다른 크리에이티브 능력으로 다른 사람의 마음을 사로 잡고
                    싶다면??
                </p>
                <p v-show="crntTab == 2">
                    무언가를 만들고 조립하는게 행복하다면??<br />
                    내손으로 직접 만들어 뿌듯함을 느낀다면??
                </p>
                <div class="btn-container">
                    <div>
                        <img src="@/assets/saramin.png" alt="" />
                        <p>지원하기</p>
                    </div>
                    <div>
                        <img src="@/assets/jobkorea.png" alt="" />
                        <p>지원하기</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            crntTab: 0,
            lists: ["기획", "촬영 및 디자인", "개발"],
        };
    },
};
</script>

<style lang="scss">
.wrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1060px;
    margin: 0 auto 280px;

    .posNav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        // height: 300px;
        padding: 40px 0;
        margin-right: 40px;
        ul {
            li {
                margin-bottom: 16px;
                padding: 16px 24px;
                text-align: center;
                font-size: 24px;
                color: #656565;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    font-size: 26px;
                }
            }

            .active {
                border: 1px solid #ccc;
                border-radius: 16px;
                font-weight: bold;
                color: #353c45;
            }
        }
    }

    .detail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 620px;
        height: 300px;
        padding: 40px 0;

        p {
            line-height: 1.75;
            font-size: 18px;
        }

        .btn-container {
            display: flex;

            div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                flex: 1;
                padding: 2px;
                font-size: 18px;
                color: #353c45;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.125s;

                &:hover {
                    color: #ffaa0d;
                }
            }
        }
    }
}
@media screen and (max-width: 1100px) {
    .wrap {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .posNav {
            margin-right: 0;
            padding-top: 0;

            ul {
                display: flex;
            }
        }
        .detail {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            p {
                text-align: center;
            }
        }
    }
    @media screen and (max-width: 760px) {
        .wrap {
            .posNav {
                width: auto;
            }
            .detail {
                width: auto;

                img {
                    width: 100%;
                }
            }
        }
    }
    @media screen and (max-width: 425px) {
        .wrap {
            margin-bottom: 180px;
            .posNav {
                padding: 0;
                ul {
                    li {
                        font-size: 18px;
                    }
                }
            }
            .detail {
                p {
                    font-size: 14px;
                }

                img {
                    width: 100%;
                }
            }
        }
    }
}
@media screen and (max-width: 375px) {
    .wrap {
        margin-bottom: 120px;
        .posNav {
            padding: 0;
            ul {
                li {
                    padding: 12px 16px;
                    margin-bottom: 0;
                }
            }
        }
        .detail {
            p {
                font-size: 14px;
            }

            img {
                width: 100%;
            }
            .btn-container {
                div {
                    justify-content: start;
                }
            }
        }
    }
}
</style>