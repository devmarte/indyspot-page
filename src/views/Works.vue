<template>
    <div id="works">
        <div class="container">
            <hooper :infiniteScroll="true" centerMode>
                <slide> LOOK360 </slide>
                <slide> CAMPUSTOWN </slide>
                <slide> SK8SPOT </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
        </div>
    </div>
</template>

<script>
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation,
    Pagination as HooperPagination,
} from "hooper";
import "hooper/dist/hooper.css";
export default {
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,
    },
};
</script>

<style lang="scss">
#works {
    display: flex;
    justify-content: center;
    align-items: center;

    .hooper-slide {
        background: pink;
    }
}
</style>