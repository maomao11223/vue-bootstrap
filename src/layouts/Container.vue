<script setup>
import HeaderBar from "@/layouts/HeaderBar.vue";
import Footer from '@/layouts/Footer.vue';
import { onMounted, inject, ref } from "vue";
onMounted(() => {
    console.log(window.innerHeight)
    windowHeight.value = window.innerHeight;
});

const $global = inject("$global");
const isMobile = $global.tools.isMobile(); // 手機板 
const windowHeight = ref(0);

</script>
<template>
    <div class="">
        <!-- 手機板 -->
        <template v-if="isMobile">
            <!-- Header bar -->
            <div class="d-flex h-100 position-relative">
                <div
                    class="w-100"
                    :style="{ height: windowHeight + 'px' }"
                >
                    <!-- Header bar -->
                    <HeaderBar />
                    <!-- View -->
                    <div class="mx-auto">
                        <router-view></router-view>
                    </div>
                    <Footer class=""></Footer>
                </div>
            </div>
        </template>

        <!-- 桌機板 -->
        <template v-else>
            <div class="d-flex vh-100">
                <div class="h-100 w-100">
                    <!-- Header bar -->
                    <HeaderBar />
                    <!-- View -->
                    <div
                        style="height: calc(100vh - 58px); width: 1640px;"
                        class="mx-auto "
                    >
                        <router-view></router-view>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </template>
    </div>
</template>
