<script setup>
import { ref, inject, onMounted } from 'vue'

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
        <div class="position-relative">
            <section
                class="text-white px-2"
                style="padding-top:120px;z-index:10"
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
                    class="card"
                    style="background-color:#2C4664"
                >
                    <div class="position-relative">
                        <!-- 抵達/離開 -->
                        <section
                            v-for="ts in timeSet"
                            :key="ts"
                            class="py-2 px-4 text-white "
                            style="border-bottom:1px solid #21364E;"
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
                        <section
                            class="d-flex text-white"
                            style=" border-bottom: 1px solid #21364E; "
                        >
                            <div
                                class="w-50 d-flex flex-column"
                                v-for="(g, index) in group"
                                :key="g"
                                :style="{ 'border-right': index == 0 ? '1px solid #21364E;' : '' }"
                            >
                                <p class="text-secondary mx-auto mb-0">{{ g.title }}</p>
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
                        <section class="w-100 d-flex py-5">
                            <button class="mx-auto btn rounded-pill light-green-btn">CHECK AVAILABILITY</button>
                        </section>

                        <!-- 下箭頭 -->
                        <svg-icon
                            class="position-absolute   "
                            style="bottom:-5%;right:45%;"
                            name="button_dropDown"
                            :width="48"
                            :height="48"
                        ></svg-icon>
                    </div>

                </div>
            </section>

            <section
                style="background-color:#EDF1F5"
                class=" px-2"
            >
                <p
                    class="fs-20 mb-4 "
                    style="line-height:1.2"
                >Luxury Plaza<br />Hotel for You</p>

                <p class="fs-9 mb-4 text-secondary">Distant orb has power to raise and purify our thoughts like a strain
                    of
                </p>
                <button class="btn btn-outline-secondary rounded-pill px-4 py-3">ABOUT US</button>
            </section>
            <section
                class="px-2 mt-5"
                style="padding-bottom:125px"
            >
                <div
                    class="card"
                    style="border-radius:18px;box-shadow:10px 10px 20 #0000001A "
                >
                    <img
                        src="../assets/icons/image_item.svg"
                        class="card-img-top"
                    >
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
    background-size:cover;
}
</style>