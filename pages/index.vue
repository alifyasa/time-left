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
            <div class="my-auto text-center font-mono">
                <p class="text-5xl font-medium leading-snug mb-2">
                    <BaseTimeLeft :now="now" />
                </p>
                <p class="text-3xl">left today</p>
            </div>
        </div>
    </BlurredBackground>
</template>