<template>
    <div id="app">
        <div id="nav">
            <h1>
                <router-link to="/" class="eng"
                    ><img src="./assets/logo.svg" alt="인디스팟"
                /></router-link>
            </h1>
            <div>
                <router-link to="/" class="eng">About</router-link>
                <router-link to="/works" class="eng">Works</router-link>
                <router-link to="/contact" class="eng">Contact</router-link>
            </div>
        </div>

        <!-- <div id="wrapper"> -->
        <router-view class="contents" />
        <!-- </div> -->
        <Footer />
    </div>
</template>
<script>
import Footer from "./components/Footer.vue";
export default {
    components: {
        Footer,
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
        flex: 1;
    }
}

#nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 24px 40px;

    div {
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
    }
}

#wrapper {
    width: 100%;
    max-width: 1320px;
    padding: 0 20px;
}
</style>
