<template>
    <div class="home">
        <!-- <p>단순한 '아카이브'가 아닌 Re:chive 입니다.</p> -->
        <!-- https://www.youtube.com/watch?v=8MgpE2DTTKA -->
        <div class="video-background">
            <video
                class="movie"
                src="../assets/movie.mp4"
                loop
                autoplay
                muted
            ></video>
            <!-- <iframe
                    src="https://www.youtube.com/embed/xm2K-sEYENk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlistxm2K-sEYENk"
                    frameborder="0"
                    allowfullscreen
                    allow="autoplay"
                ></iframe> -->
        </div>
        <!-- <Footer /> -->
    </div>
</template>

<script>
// import Footer from "../components/Footer.vue";
export default {
    name: "Home",
    // components: { Footer },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    p {
        color: #fff;
        font-weight: 700;
        text-shadow: 1px 1px 2px #2b2b2b;
    }

    .video-background {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        // height: 100vh;
        z-index: -99;

        .movie {
            width: 100%;
            // max-width: 1280px;
        }
    }
    // .video-background {
    //     background: #000;
    //     position: fixed;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    //     z-index: -99;
    // }
    // .video-foreground,
    // .video-background iframe {
    //     width: 100%;
    //     height: 100%;
    //     pointer-events: none;
    // }
    // #vidtop-content {
    //     top: 0;
    //     color: #fff;
    // }
    // .vid-info {
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     width: 33%;
    //     background: rgba(0, 0, 0, 0.3);
    //     color: #fff;
    //     padding: 1rem;
    //     font-family: Avenir, Helvetica, sans-serif;
    // }
    // .vid-info h1 {
    //     font-size: 2rem;
    //     font-weight: 700;
    //     margin-top: 0;
    //     line-height: 1.2;
    // }
    // .vid-info a {
    //     display: block;
    //     color: #fff;
    //     text-decoration: none;
    //     background: rgba(0, 0, 0, 0.5);
    //     transition: 0.6s background;
    //     border-bottom: none;
    //     margin: 1rem auto;
    //     text-align: center;
    // }
    // @media (min-aspect-ratio: 16/9) {
    //     .video-foreground {
    //         height: 300%;
    //         top: -100%;
    //     }
    // }
    // @media (max-aspect-ratio: 16/9) {
    //     .video-foreground {
    //         width: 300%;
    //         left: -100%;
    //     }
    // }
    // @media all and (max-width: 600px) {
    //     .vid-info {
    //         width: 50%;
    //         padding: 0.5rem;
    //     }
    //     .vid-info h1 {
    //         margin-bottom: 0.2rem;
    //     }
    // }
    // @media all and (max-width: 500px) {
    //     .vid-info .acronym {
    //         display: none;
    //     }
    // }
}
</style>