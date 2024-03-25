<script setup>
import { ref } from 'vue'
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
        class=" text-white py-5 px-2"
        style="background-color:#2C4664"
    >
        <p class="fs-28">HOTEL</p>
        <div
            class="d-flex align-items-center mb-1"
            v-for="c in content"
            :key="c"
        >
            <svg-icon
                :name="c.iconName"
                :width="16"
                :height="18"
            ></svg-icon>
            <div class="ms-3">{{ c.content }}</div>
        </div>
        <p class="fs-12 mt-5 fw-300">Subscribe</p>
        <input type="text" placeholder="Email" class="w-100 py-3 px-2">
        <small class="text-secondary mt-3 d-block">No spam. Only profit.</small>

    </section>
</template>
<style scoped></style>