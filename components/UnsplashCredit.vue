<template>
    <div>
        <div :on-mouseenter="() => isHovering = true" :on-mouseleave="() => isHovering = false"
            :class="`px-4 py-2 backdrop-blur shadow-xl border border-white border-opacity-20 absolute bottom-4 right-4 w-fit rounded text-white font-mono font-light ${isVisible ? 'opacity-60' : 'opacity-0'} transition-all duration-200`">
            <slot></slot>
        </div>

    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';


const isVisible = ref(false);
const isHovering = ref(false);
let timeout: ReturnType<typeof setTimeout> | null = null;

const handleMouseMove = () => {
    isVisible.value = true;
    if (timeout) {
        clearTimeout(timeout);
    }

    if (!isHovering.value) {
        timeout = setTimeout(() => {
            isVisible.value = false;
        }, 1250);
    }
};

onMounted(() => window.addEventListener('mousemove', handleMouseMove))
onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))
</script>  