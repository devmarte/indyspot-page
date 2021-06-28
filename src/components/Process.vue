<template>
    <div class="container">
        <div class="process">
            <div v-for="(item, idx) in items" :key="idx" class="item">
                <div class="item-img"></div>
                <p class="item-title">{{ item.title }}</p>
                <p class="item-paragraph">{{ item.itemParagraph }}</p>
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
                    title: "제작 상담",
                    itemParagraph:
                        "고객이 원하는 최종 결과물의 납품형태와 규모에 따라 계약서 작성 또는 출장비 선지급 요청 안내 진행 촬영 장소 정보를 전달 받고, 촬영 및 작업물 납품 일정 등을 조율",
                },
                {
                    img: "",
                    title: "제작 의뢰",
                    itemParagraph:
                        "계약작성 또는 출장비 선 지급 이후에 촬영 일정과 시간을 협의하여 촬영 진행",
                },
                {
                    img: "",
                    title: "제작 납품",
                    itemParagraph:
                        "LOOK360 온라인 VR 플랫폼을 이용하여 납품할 경우 결과물을 확인할 수 있는 고유 url링크를 공유하며 활용 방법 안내 납품 형태가 소스 전달일 경우에 결과물을 압축하여 전달",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.process {
    display: flex;
    margin-bottom: 280px;
    .item {
        width: 400px;
        margin-right: 40px;
        .item-img {
            width: 100%;
            max-width: 260px;
            height: 260px;
            margin: 0 auto 34px;
            border: 1px solid #ccc;
            border-radius: 50%;
        }
        .item-title {
            padding-bottom: 20px;
            font-size: 28px;
            font-weight: bold;
            color: #353c45;
        }
        .item-paragraph {
            line-height: 1.75;
            font-size: 16px;
            color: #656565;
        }
        &:last-of-type {
            margin-right: 0;
        }
    }
}

@media screen and (max-width: 1024px) {
    .process {
        flex-direction: column;
        align-items: center;

        .item {
            margin-right: 0;
            margin-bottom: 100px;

            p {
                text-align: center;
            }
        }
    }
}

@media screen and (max-width: 760px) {
    .process {
        margin-bottom: 160px;
    }
}
@media screen and (max-width: 425px) {
    .process {
        .item {
            width: auto;
        }
    }
}
@media screen and (max-width: 375px) {
    .process {
        margin-bottom: 120px;
        .item {
            margin-bottom: 64px;
            .item-img {
                max-width: 160px;
                height: 160px;
                margin-bottom: 16px;
            }
            .item-title {
                font-size: 18px;
            }
            .item-paragraph {
                font-size: 14px;
            }
        }
    }
}
</style>