<template>
    <div class="adsSlide">
        <marquee-text class="texts">
            #직무관련자기개발&nbsp; &nbsp; &nbsp; #월요일식사는맛집투어&nbsp;
            &nbsp; &nbsp; #칼퇴가아닌정시퇴근 &nbsp; &nbsp; &nbsp;
            #서로의취미생활독려&nbsp; &nbsp; &nbsp; #직무관련자기개발 &nbsp;
            &nbsp; &nbsp; #월요일식사는맛집투어&nbsp; &nbsp; &nbsp;
            #칼퇴가아닌정시퇴근 &nbsp; &nbsp; &nbsp; #서로의취미생활독려&nbsp;
            &nbsp; &nbsp;
        </marquee-text>
    </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
    components: {
        MarqueeText,
    },
};
</script>

<style lang="scss">
.adsSlide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 280px;
    background: #114b9b;
    overflow: hidden;
    padding: 2rem 0;
    color: #fff;
}
@media screen and (max-width: 425px) {
    .adsSlide {
        margin-bottom: 160px;
    }
}
@media screen and (max-width: 375px) {
    .adsSlide {
        margin-bottom: 120px;
    }
}
</style>