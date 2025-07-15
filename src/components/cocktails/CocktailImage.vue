<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton } from '@/components/ui/skeleton'

interface Props {
  src?: string
  alt: string
  shouldLoad?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  src: undefined,
  shouldLoad: true
})

const isLoaded = ref(false)
const hasError = ref(false)

const handleLoad = () => {
  isLoaded.value = true
}

const handleError = () => {
  hasError.value = true
  isLoaded.value = true
}
</script>

<template>
  <div
    class="w-full max-w-xs mx-auto md:mx-0 md:w-48 h-48 sm:h-56 md:h-48 border rounded-lg flex items-center justify-center bg-muted overflow-hidden flex-shrink-0 relative"
  >
    <Skeleton v-if="props.src && props.shouldLoad && !isLoaded" />

    <img
      v-if="props.src && props.shouldLoad && !hasError"
      :src="props.src"
      :alt="props.alt"
      class="w-full h-full object-cover transition-opacity duration-300"
      :class="{ 'opacity-0': !isLoaded, 'opacity-100': isLoaded }"
      loading="lazy"
      @load="handleLoad"
      @error="handleError"
    >

    <span
      v-if="!props.src || hasError || !props.shouldLoad"
      class="text-muted-foreground text-sm"
    >
      {{
        hasError ? 'Failed to load' : !props.shouldLoad ? 'Image' : 'No Image'
      }}
    </span>
  </div>
</template>
