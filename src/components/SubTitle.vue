<template>
    <div class="container">
        <div class="sub-title" :class="{ shorten: shorten }">
            <p v-html="title"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        shorten: Boolean,
    },
};
</script>

<style lang="scss">
.sub-title {
    width: 100%;
    margin-bottom: 280px;
    padding: 80px 110px;
    font-size: 26px;
    color: #656565;
    line-height: 39px;

    span {
        font-weight: bold;
        color: #114b9b;
    }
}
.shorten {
    margin-bottom: 48px;
}
</style>