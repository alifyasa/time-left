<script setup lang="ts">
import { format, getUnixTime, formatRFC3339 } from 'date-fns'
const now = ref(new Date())

let nowInterval: NodeJS.Timeout
onMounted(() => {
    nowInterval = setInterval(() => {
        now.value = new Date()
    }, 1000)
})
onUnmounted(
    () => {
        clearInterval(nowInterval)
    }
)

function copyToClipboard(mode: "UNIX" | "RFC 3339", e: MouseEvent) {
    const clickedElement = e.target as HTMLButtonElement
    switch (mode) {
        case 'UNIX':
            navigator.clipboard.writeText(getUnixTime(now.value).toString())
            break;
        case 'RFC 3339':
            navigator.clipboard.writeText(formatRFC3339(now.value).toString())
            break;
        default:
            break;
    }
}

</script>
<template>
    <BaseBackground :now="now">
        <div class="min-h-screen flex flex-col">
            <div class="m-auto">
                <div
                    class="mb-4 font-mono flex w-full px-8 py-4 backdrop-blur rounded-2xl border border-white border-opacity-20 shadow-xl">
                    <span class="mr-auto my-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        Current Time: {{ format(now, 'yyyy/MM/dd HH:mm:ss OOOO') }}
                    </span>
                    <button class="ml-16 mr-2 border border-white py-1 px-2 rounded active:bg-white active:bg-opacity-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]"
                        @click="(e) => copyToClipboard('UNIX', e)">
                        as UNIX time
                    </button>
                    <button class="border border-white py-1 px-2 rounded active:bg-white active:bg-opacity-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]"
                        @click="(e) => copyToClipboard('RFC 3339', e)">
                        as RFC 3339
                    </button>
                </div>
                <div
                    class="font-mono flex flex-col w-full p-24 backdrop-blur rounded-2xl border border-white border-opacity-20 shadow-xl">
                    <BaseTimeLeft :now="now" />
                </div>
            </div>

        </div>
        <UnsplashCredit>
            Photo by Foo from Bar
        </UnsplashCredit>
    </BaseBackground>
</template>