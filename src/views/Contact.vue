<template>
    <div id="contact">
        <Sub-title v-bind:title="title" v-bind:shorten="shorten"></Sub-title>
        <div class="form-container">
            <div class="form">
                <div class="form-top">
                    <input v-model="usrName" type="text" placeholder="이름" />
                    <input
                        v-model="usrMethod"
                        type="text"
                        placeholder="이메일 or 전화번호"
                    />
                </div>
                <div class="form-bottom">
                    <textarea
                        v-model="usrText"
                        name="textbox"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="글을 입력하세요."
                    ></textarea>
                </div>
                <button>보내기</button>
            </div>
            <p>{{ usrName }}</p>
            <br />
            <p>{{ usrMethod }}</p>
            <br />
            <p>{{ usrText }}</p>
        </div>
    </div>
</template>

<script>
import SubTitle from "../components/SubTitle.vue";
export default {
    components: {
        SubTitle,
    },
    data() {
        return {
            usrName: "",
            usrMethod: "",
            usrText: "",
            title: "우리는 당신의<br /><span>이야기</span>를 듣고싶습니다.",
            shorten: true,
        };
    },
};
</script>

<style lang="scss">
#contact {
    width: 100%;

    .form-container {
        display: flex;
        width: 100%;
        max-width: 1280px;
        padding-right: 180px;
        justify-content: flex-end;
        margin-bottom: 80px;

        .form {
            display: flex;
            flex-direction: column;
            width: 400px;
            .form-top {
                display: flex;
                margin-bottom: 16px;
                input {
                    flex: 1;
                    border: none;
                    border-bottom: 2px solid #cacaca;
                    padding: 6px;
                    margin-right: 8px;

                    &:last-of-type {
                        margin-right: 0;
                    }
                }
            }
            .form-bottom {
                textarea[name="textbox"] {
                    width: 100%;
                    padding: 6px;
                    border: 2px solid #cacaca;
                    border-radius: 8px;
                    box-sizing: border-box;
                    resize: none;
                }
            }
            button {
                margin-top: 28px;
                padding: 16px;
                border: none;
                border-radius: 6px;
                font-size: 16px;
                background: #114b9b;
                color: #fff;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    background: #669deb;
                }
                &:active {
                    background: #063e8e;
                }
            }
        }
    }
}

@media screen and (max-width: 760px) {
    #contact {
        .form-container {
            justify-content: center;
            padding-right: 0;
        }
    }
}

@media screen and (max-width: 425px) {
    #contact {
        .form-container {
            padding: 0 20px;
            .form {
                width: 100%;
            }
        }
    }
}

@media screen and (max-width: 325px) {
    #contact {
        .form-container {
            .form {
                .form-top {
                    input {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>