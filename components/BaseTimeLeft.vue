<template>
    {{ timeLeftDay }}
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