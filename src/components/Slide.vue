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
    padding: 24px;
    margin-bottom: 280px;
    background: #114b9b;

    ul {
        display: flex;
        overflow: hidden;
        li {
            margin-right: 100px;
            font-size: 18px;
            color: #fff;

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>