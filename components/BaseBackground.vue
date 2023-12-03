<template>
    <div :style="bg_image" :class="CURRENT_THEME.text_color">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    now: {
        type: Date,
        default: new Date()
    }
})

import sunrise from '~/assets/backgrounds/sunrise.jpg'
import noon from '~/assets/backgrounds/noon.jpg'
import sunset from '~/assets/backgrounds/sunset.jpg'
import night from '~/assets/backgrounds/night.jpg'

const ALL_THEME: {
    [key: string]: {
        background: string,
        text_color: string
    }
} = {
    SUNRISE: {
        background: sunrise,
        text_color: 'text-black'
    },
    NOON: {
        background: noon,
        text_color: 'text-black'
    },
    SUNSET: {
        background: sunset,
        text_color: 'text-white'
    },
    NIGHT: {
        background: night,
        text_color: 'text-gray-50'
    },
}

function getTheme(now: Date) {
    const hour = now.getHours();

    if (hour >= 6 && hour < 9) {
        return ALL_THEME.SUNRISE;
    } else if (hour >= 9 && hour < 17) {
        return ALL_THEME.NOON;
    } else if (hour >= 17 && hour < 19) {
        return ALL_THEME.SUNSET;
    } else {
        return ALL_THEME.NIGHT;
    }
}

const CURRENT_THEME = computed(() => getTheme(props.now))

const bg_image = computed(() => ({
    backgroundImage: `url(${CURRENT_THEME.value.background})`,
    backgroundSize: 'cover'
}))
</script>