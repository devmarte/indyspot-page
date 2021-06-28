<template>
    <div class="adsSlide">
        <ul>
            <li>#직무관련_자기개발</li>
            <li>#월요일_식사는_맛집투어</li>
            <li>#칼퇴가_아닌_정시_퇴근</li>
            <li>#서로의_취미생활_독려</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.adsSlide {
    width: 100vw;
    margin-bottom: 280px;
    background: #114b9b;
    overflow: hidden;

    ul {
        width: 1024px;
        overflow: hidden;
        li {
            float: left;
            margin-right: 40px;
            font-size: 18px;
            color: #fff;

            &:last-child {
                margin-right: 0;
            }
        }
        ul:after {
            content: "";
            display: block;
            clear: both;
        }
    }
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