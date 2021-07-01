<template>
    <div id="about">
        <!-- 고화질해상도, 빠른 합리적인 가격 -->
        <Sub-title v-bind:title="title"></Sub-title>
        <Process />
        <h2 class="eng">Feature</h2>
        <Feature />
        <h2 class="eng">Team</h2>
        <Team />
        <Slide />
        <h2 class="eng">Career</h2>
        <Career />
        <h2 class="eng">Place</h2>
        <Place />
    </div>
</template>

<script>
import SubTitle from "../components/SubTitle.vue";
import Process from "../components/Process.vue";
import Feature from "../components/Feature.vue";
import Team from "../components/Team.vue";
import Slide from "../components/Slide.vue";
import Career from "../components/Career.vue";
import Place from "../components/Place.vue";
export default {
    components: {
        SubTitle,
        Process,
        Feature,
        Team,
        Slide,
        Career,
        Place,
    },
    data() {
        return {
            title: "당신의 소중한 공간을<br /><span>재창조</span> 합니다.",
            svg: "",
        };
    },
};
</script>

<style lang="scss">
#about {
    width: 100%;
}
h2 {
    margin-bottom: 90px;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #114b9b;
}

@media screen and (max-width: 720px) {
    h2 {
        margin-bottom: 64px;
    }
}

@media screen and (max-width: 375px) {
    h2 {
        margin-bottom: 44px;
    }
}
</style>