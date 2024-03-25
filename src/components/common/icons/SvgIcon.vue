<template>
    <svg
        :class="svgClass"
        aria-hidden="true"
        :width="width"
        :height="height"
    >
        <title v-if="altTitle">{{ altTitle }}</title>
        <use
            :xlink:href="iconName"
            :fill="color"
            :color="color"
        />
    </svg>
</template>
   
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
    props: {
        alt: {
            type: String,
        },
        name: {
            type: String,
            Boolean,
            required: true
        },
        className: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: "#707883"
        },
        width: {
            type: [Number, String],
            default: 20
        },
        height: {
            type: [Number, String],
            default: 20
        }
    },
    setup(props) {
        return {
            altTitle: props.alt,
            iconName: computed(() => `#icon-${props.name}`),
            svgClass: computed(() => {
                if (props.className) {
                    return `svg-icon ${props.className}`;
                }
                return "svg-icon";
            })
        };
    }
});
</script>
   
<style scoped>.svg-icon {
    fill: currentColor;
    vertical-align: middle;
    color: inherit;
    outline: none;
}
</style>
