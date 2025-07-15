<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted, watch } from 'vue'
import CocktailCollapsable from '@/components/cocktails/CocktailCollapsable.vue'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle } from 'lucide-vue-next'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { useCocktailsStore } from '@/stores/cocktails'

const route = useRoute()
const cocktailsStore = useCocktailsStore()

const cocktailName = computed(() => route.params.id as string)

const сocktails = computed(() => cocktailsStore.cocktails)

const loadCocktails = async (name: string) => {
  if (name) {
    await cocktailsStore.searchCocktailsByName(name)
  }
}

onMounted(() => {
  loadCocktails(cocktailName.value)
})

watch(cocktailName, newName => {
  loadCocktails(newName)
})
</script>

<template>
  <Skeleton
    v-if="cocktailsStore.loading"
    class="w-full h-150"
  />
  <Alert
    v-else-if="cocktailsStore.error"
    variant="destructive"
  >
    <AlertCircle class="w-4 h-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      {{ cocktailsStore.error }}
    </AlertDescription>
  </Alert>

  <div
    v-else-if="сocktails.length"
    class="space-y-6"
  >
    <div class="space-y-4">
      <CocktailCollapsable
        v-for="(cocktail, index) in сocktails"
        :key="cocktail.id"
        :cocktail="cocktail"
        :is-open-by-default="index === 0"
      />
    </div>
  </div>
</template>
