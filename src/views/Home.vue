<script setup>
import { ref, inject, onMounted } from 'vue'
import outlineBtn from "../components/common/button/outlineBtn.vue";

onMounted(() => {
    console.log(window.innerHeight)
    windowHeight.value = window.innerHeight
});


const $global = inject('$global')

const windowHeight = ref(0);

const timeSet = ref([
    {
        title: 'ARRIVAL',
        date: '2019-10-18',
    },
    {
        title: 'DEPARTURE',
        date: '2019-10-19',
    }
]);
const group = ref([{
    title: 'ADULTS',
    count: 2,
}, {
    title: 'CHILDREN',
    count: 0
}])
</script>
<template>
    <div style="background-color:#EDF1F5">
        <div class="bg-image"></div>
        <div
            class="position-relative"
            style="max-width:100vw"
        >
            <section
                class="text-white px-2"
                style="padding-top:120px;z-index:10;height:880px"
            >
                <div style="width:80%">
                    <p
                        class="fs-28 mb-0 "
                        style="line-height:1.2"
                    >Exclusive</p>
                    <p
                        class="fs-28 mb-0 "
                        style="line-height:1.2"
                    >Boutique</p>
                    <p
                        class="fs-28 mb-0 "
                        style="line-height:1.2"
                    >Hotel</p>
                    <p class="my-4 fs-10">Luxury Boutique Hotel</p>
                </div>
                <div class="d-flex my-5">
                    <svg-icon
                        name="Image_FB"
                        :width="48"
                        :height="48"
                    ></svg-icon>
                    <svg-icon
                        class="mx-2"
                        name="image_twitter"
                        :width="48"
                        :height="48"
                    ></svg-icon>
                    <svg-icon
                        name="Image_ig"
                        :width="48"
                        :height="48"
                    ></svg-icon>
                </div>
                <div
                    class="card w-100"
                    style="background-color:#2C4664;max-width:calc(100vw - 20px)"
                >
                    <div class="position-relative d-flex flex-column flex-md-row  flex-wrap">
                        <!-- 抵達/離開 -->
                        <section
                            v-for="ts in timeSet"
                            :key="ts"
                            class="py-2 px-4 text-white col-md-6 col-lg-3 border-custom"
                        >
                            <p class="text-secondary">{{ ts.title }}</p>
                            <div class="d-flex align-items-center">
                                <div class="fs-28">{{ $global.moment(ts.date).date() }}</div>
                                <div class="ms-4 me-2 fs-9">
                                    <div>{{ $global.moment(ts.date).format('MMM, YYYY') }}</div>
                                    <small class="text-secondary">{{ $global.moment(ts.date).format('dddd') }}</small>
                                </div>
                                <svg-icon
                                    name="button_onlyDropDown"
                                    :width="9"
                                    :height="6"
                                ></svg-icon>
                            </div>
                        </section>
                        <!-- 成人/小孩 -->
                        <section class="d-flex text-white col-md-6 col-lg-3">
                            <div
                                class="w-50 d-flex flex-column border-custom py-2"
                                v-for="g in group"
                                :key="g"
                                style="border-right:1px solid #21364E"
                            >
                                <p class="text-secondary mx-auto ">{{ g.title }}</p>
                                <div class="mx-auto d-flex align-items-center">
                                    <svg-icon
                                        name="button_minus"
                                        :width="14"
                                        :height="14"
                                    ></svg-icon>
                                    <span class="fs-28 mx-2">
                                        {{ g.count }}
                                    </span>
                                    <svg-icon
                                        name="button_plus"
                                        :width="14"
                                        :height="14"
                                    ></svg-icon>
                                </div>
                            </div>
                        </section>
                        <!-- 確認按鈕 -->
                        <section class="w-md-100  d-flex py-5 col-md-6 col-lg-3">
                            <outlineBtn
                                text="CHECK AVAILABILITY"
                                class=" light-green-btn mx-auto"
                            ></outlineBtn>
                        </section>
                        <!-- 下箭頭 -->
                        <svg-icon
                            class="drop-custom"
                            name="button_dropDown"
                            :width="48"
                            :height="48"
                        ></svg-icon>
                    </div>

                </div>
            </section>

            <section
                class=" px-2  paly-card-section d-flex flex-column flex-md-row align-items-center justify-content-between flex-wrap"
                style="max-width:100vw"
            >
                <div class="col-12 col-md-4">
                    <p
                        class="fs-20 mb-4 "
                        style="line-height:1.2"
                    >Luxury Plaza<br />Hotel for You</p>

                    <p class="fs-9 mb-4 text-secondary">Distant orb has power to raise and purify our thoughts like a
                        strain
                        of
                    </p>
                    <outlineBtn text="ABOUT US"></outlineBtn>

                </div>
                <section
                    class="px-2 mt-5 col-auto"
                    style="padding-bottom:125px;z-index:10"
                >
                    <div
                        class="card"
                        style="border-radius:18px;box-shadow:10px 10px 20 #0000001A;border-radius:30px "
                    >
                        <div class="card-image">
                        </div>
                        <div class="card-body mt-2 d-flex align-items-center">
                            <svg-icon
                                class="ms-4"
                                name="button_player"
                                :width="80"
                                :height="80"
                            ></svg-icon>
                            <div class="ms-3">
                                <h5 class="card-title">Play video</h5>
                                <p class="text-secondary m-0">2:34</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div>
    </div>
</template>
<style
    lang="scss"
    scoped
>
.light-green-btn {
    background-color: #c8ff8c;
}

.bg-image {
    z-index: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 880px;
    background-image: url('../assets/icons/image_background.svg');
    background-position: 52% 60%;
    background-size: cover;

    @media screen and (min-width:1200px) {
        left: 0;
    }
}

.border-custom {
    border-bottom: 1px solid #21364E;

    @media screen and (min-width:768px) {
        border-right: 1px solid #21364E;
    }
}

.drop-custom {
    position: absolute;
    bottom: -5%;
    right: 45%;

    filter: drop-shadow(10px 10px 20px #0000001A);

    @media screen and (min-width:768px) {
        bottom: -10%;
        right: 47%;
    }

    @media screen and (min-width:992px) {
        bottom: -20%;
        right: 49%;
    }
}

.paly-card-section {
    margin-top: 300px;

    @media screen and (min-width:768px) {
        margin-top: 3rem;
    }

    .card{
        width:346px;
        @media screen and (min-width:992px) {
            width:576px;
            
        }
    }

    .card-image {
        border-radius: 30px 30px 0 0 !important;
        height: 416px;
        background-image: url('@/assets/icons/image_item.svg');
        background-size: cover;
        background-position: center;;
    }
}
</style>