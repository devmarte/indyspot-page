<template>
    <div id="app">
        <div id="nav">
            <h1>
                <router-link to="/" class="eng"
                    ><img src="./assets/logo.svg" alt="인디스팟"
                /></router-link>
            </h1>
            <div class="items">
                <router-link to="/" class="eng">About</router-link>
                <router-link to="/works" class="eng">Works</router-link>
                <router-link to="/contact" class="eng">Contact</router-link>
            </div>

            <transition name="fade">
                <div class="itemsRes" v-if="isToggle">
                    <router-link to="/" class="eng">About</router-link>
                    <router-link to="/works" class="eng">Works</router-link>
                    <router-link to="/contact" class="eng">Contact</router-link>

                    <div class="closeBtn" v-on:click="toggleMenu">
                        <span>X</span>
                    </div>
                </div>
            </transition>

            <div class="burger" v-on:click="toggleMenu">
                <img src="./assets/burger.png" alt="" />
            </div>
        </div>

        <transition name="fade" mode="out-in">
            <router-view class="contents" />
        </transition>
        <Footer />
    </div>
</template>
<script>
import Footer from "./components/Footer.vue";
export default {
    data() {
        return {
            isToggle: false,
        };
    },
    components: {
        Footer,
    },
    methods: {
        toggleMenu: function () {
            this.isToggle = !this.isToggle;
            console.log(this.isToggle);
        },
    },
    watch: {
        $route(to, from) {
            if (to.path != from.path) {
                this.toggleMenu();
            }
        },
    },
};
</script>

<style lang="scss">
#app {
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // width: 100%;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    color: #656565;
    overflow-x: hidden;

    .contents {
        width: 100%;
        flex: 1;
    }
}

#nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 24px 40px;

    .items {
        a {
            font-size: 14px;
            margin-right: 64px;
            text-decoration: none;
            color: #1f1f1f;

            &:last-child {
                margin-right: 0;
            }

            &.router-link-exact-active {
                color: #114b9b;
            }
        }

        .closeBtn {
            display: none;
        }
    }

    .itemsRes {
        display: none;
    }

    .burger {
        cursor: pointer;
        display: none;
    }
}

#wrapper {
    width: 100%;
    max-width: 1320px;
    padding: 0 20px;
}
@media screen and (max-width: 760px) {
    #nav {
        .items {
            display: none;
        }
        .itemsRes {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            position: fixed;
            top: 50%;
            left: 50%;
            padding-left: 8%;
            padding-bottom: 180px;
            transform: translate(-50%, -50%);
            background: #fff;
            z-index: 99;
            a {
                font-size: 2.5rem;
                padding: 12px 0;
                text-decoration: none;
                color: #1f1f1f;

                &.router-link-exact-active {
                    color: #114b9b;
                }
            }

            .closeBtn {
                position: absolute;
                top: 32px;
                right: 32px;
                display: block;
                font-size: 32px;
                cursor: pointer;
            }
        }
        .burger {
            display: block;
        }
    }
}
@media screen and (max-width: 425px) {
    #nav {
        padding: 24px 20px;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
