<script setup lang="ts">
const now = ref(new Date())

let nowInterval: NodeJS.Timeout
onMounted(() => {
    nowInterval = setInterval(() => {
        // console.log("NOW Tick")
        now.value = new Date()
    }, 1000)
})
onUnmounted(
    () => {
        // console.log("Clear Interval")
        clearInterval(nowInterval)
    }
)
</script>
<template>
    <BlurredBackground :now="now">
        <div class="min-h-screen flex flex-col">
            <div
                class="m-auto font-mono flex flex-col w-fit p-24 backdrop-blur rounded-2xl border border-white border-opacity-20 shadow-xl">
                <BaseTimeLeft :now="now" />
                <p class="text-3xl w-fit mx-auto">left today</p>
            </div>
        </div>
    </BlurredBackground>
</template>