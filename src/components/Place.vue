<template>
    <div class="place">
        <div id="map"></div>
        <div class="paraWrap">
            <p>
                경기도 용인시 수지구 죽전로 152, 단국대학교 글로컬산학협력관
                202호<br />
                우)18751 070 7518 3600<br />
                indyspot.kr@gmail.com
            </p>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
    },
    methods: {
        initMap() {
            var container = document.getElementById("map");
            var options = {
                center: new kakao.maps.LatLng(
                    37.322168706974246,
                    127.12365137144305
                ),
                level: 4,
            };
            var map = new kakao.maps.Map(container, options); //마커추가하려면 객체를 아래와 같이 하나 만든다.
            var marker = new kakao.maps.Marker({ position: map.getCenter() });
            marker.setMap(map);
        },
        addScript() {
            const script = document.createElement("script"); /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
                "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5c5735b57aa53a4f48f6ca08edd33a54";
            document.head.appendChild(script);
        },
    },
};
</script>

<style lang="scss">
.place {
    width: 100%;
    margin: 0 auto 280px;

    #map {
        width: 100%;
        height: 400px;
        margin-bottom: 100px;
    }
    .paraWrap {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;

        p {
            line-height: 1.75;
            font-size: 16px;
        }
    }
}
@media screen and (max-width: 1440px) {
    .paraWrap {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            text-align: center;
        }
    }
}
@media screen and (max-width: 425px) {
    .place {
        padding: 0 20px;
        margin-bottom: 160px;
        #map {
            margin-bottom: 64px;
        }
        .paraWrap {
            p {
                font-size: 14px;
            }
        }
    }
}
</style>