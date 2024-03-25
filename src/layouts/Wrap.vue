<script setup>
import { computed, getCurrentInstance } from "vue";
const instance = getCurrentInstance();

const hasFooterSlotContent = computed(() => {
    return !!instance.slots['footer'];
});
</script>

<template>
    <div class="wrap-layout">
        <header class="wrap-header">
            <slot name="header"></slot>
        </header>
        <main class="wrap-main">
            <slot name="main"></slot>
        </main>
        <footer
            class="wrap-footer"
            v-if="hasFooterSlotContent"
        >
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
