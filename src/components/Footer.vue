<template>
    <div class="footer">
        <div class="container footerWrap">
            Copyright © 2021 by INDYSPOT.KR All rights reserved.
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
    width: 100%;
    height: 300px;
    background: #1a1a1a;
    color: #fff;

    .footerWrap {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 48px 0;
    }
}

@media screen and (max-width: 1280px) {
    .footer {
        .footerWrap {
            text-align: center;
        }
    }
}
@media screen and (max-width: 1024px) {
    .footer {
        height: 160px;
    }
}
</style>