<template>
    <div class="home">
        <svg-vr />
    </div>
</template>

<script>
import SvgVr from "../components/SvgVr.vue";
export default {
    name: "Home",
    components: { SvgVr },
    mounted() {},
};
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>