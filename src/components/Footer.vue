<template>
    <div class="footer">
        <div class="footerWrap">
            <p>Copyright © 2021 by INDYSPOT.KR All rights reserved.</p>
            <a href="https://look360.kr/" target="_blank">LOOK360</a> |
            <a href="http://campustown.co.kr/" target="_blank">CAMPUSTOWN</a> |
            <a href="http://sk8spot.kr/" target="_blank">SK8SPOT</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
    width: 100%;
    height: 240px;
    margin-top: auto;
    background: #1a1a1a;
    color: #fff;

    .footerWrap {
        display: block;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 48px 0;
        line-height: 1.5;

        a {
            text-decoration: none;
            color: #fff;
        }
    }
}

@media screen and (max-width: 1280px) {
    .footer {
        .footerWrap {
            text-align: center;
        }
    }
}
@media screen and (max-width: 720px) {
    .footer {
        height: 160px;

        p {
            font-size: 14px;
        }

        a {
            font-size: 14px;
        }
    }
}
</style>