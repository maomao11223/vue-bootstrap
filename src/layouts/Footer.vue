<script setup>
import { ref } from 'vue'

import { inject } from "vue";


const $global = inject("$global");
const isMobile = $global.tools.isMobile(); // 手機板
const content = ref([
    {
        iconName: 'Image_phone',
        content: '(4321)0987-654-320'
    },
    {
        iconName: 'Image_mail',
        content: 'support@hotel.com'
    },
    {
        iconName: 'Image_location',
        content: '33 Jaja Park Rd, Yellow, USA'
    }
])
</script>
<template>
    <section
        class=" text-white py-5 px-2 d-flex justify-content-center"
        style="background-color:#2C4664;"
    >
        <div
            class="d-flex flex-column flex-md-row justify-content-between align-items-md-end w-100 flex-wrap"
            style="max-width:1200px"
            
        >
            <div
                class="col-auto col-md-6 d-flex flex-column "
                :class="{ 'justify-content-between': !isMobile ? true : false,' h-100': !isMobile ? true : false}"
            >
                <p class="fs-28">HOTEL</p>
                <div class="d-flex flex-column flex-row">
                    <div
                        class="d-flex align-items-center mb-1 me-3"
                        v-for="c in content"
                        :key="c"
                    >
                        <svg-icon
                            :name="c.iconName"
                            :width="16"
                            :height="18"
                        ></svg-icon>
                        <div class="ms-2 text-nowrap">{{ c.content }}</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <p class="fs-12 mt-5 mt-md-0 fw-300">Subscribe</p>
                <input
                    type="text"
                    placeholder="Email"
                    class="w-100 py-3 px-2"
                >
                <small class="text-secondary mt-3 d-block">No spam. Only profit.</small>
            </div>
        </div>
    </section>
</template>
<style scoped></style>