<script setup>
const props = defineProps({
    text: {
        type: String
    },
    class: {
        type: String,
        default: 'btn-outline btn-outline-secondary'
    }
})
</script>
<template>
    <button
        class="btn rounded-pill"
        :class="props.class"
        style="padding:16px 44px"
    >{{props.text}}</button>
</template>
<style scoped></style>