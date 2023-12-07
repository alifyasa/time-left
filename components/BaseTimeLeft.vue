<template>
    <p class="text-5xl font-medium leading-snug mb-2 w-fit mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] shadow-black">
        <span v-if="timeLeftDay" v-for="char, idx in timeLeftDay" :key="idx">
            {{ char }}
        </span>
        <span v-else>
            No Time
        </span>
    </p>
    <p class="text-3xl w-fit mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">left today</p>
</template>

<script setup lang="ts">
import { endOfDay, intervalToDuration, formatDuration } from 'date-fns'

const props = defineProps({
    now: {
        type: Date,
        required: true
    }
})

const timeLeftFromFunc = (endFunc: typeof endOfDay) => {
    return () => {
        const end = endFunc(props.now)
        const timeLeft = intervalToDuration({
            start: props.now,
            end
        })
        return formatDuration(timeLeft)
    }
}

const timeLeftDay = computed(timeLeftFromFunc(endOfDay))
</script>