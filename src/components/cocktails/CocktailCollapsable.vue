<script setup lang="ts">
import { ref, toRefs } from 'vue'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@components/ui/collapsible'
import { ChevronsUpDown } from 'lucide-vue-next'
import type { Cocktail } from '@/types/cocktails'
import CocktailMainInfo from './CocktailMainInfo.vue'
import CocktailAdditionalInfo from './CocktailAdditionalInfo.vue'
import CocktailImage from './CocktailImage.vue'

interface Props {
  cocktail: Cocktail
  isOpenByDefault?: boolean
}

const { cocktail, isOpenByDefault = false } = defineProps<Props>()

const {
  strDrink,
  strCategory,
  strAlcoholic,
  strGlass,
  strInstructions,
  strDrinkThumb
} = toRefs(cocktail)

const isOpen = ref(isOpenByDefault)
</script>

<template>
  <Collapsible
    v-model:open="isOpen"
    :default-open="isOpenByDefault"
    class="rounded-xl border bg-card text-card-foreground shadow p-4 sm:p-6"
  >
    <CollapsibleTrigger class="w-full mb-4 cursor-pointer">
      <div class="flex items-center justify-between">
        <span class="font-semibold text-sm sm:text-base">{{
          strDrink || 'Cocktail'
        }}</span>
        <ChevronsUpDown class="h-4 w-4" />
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <template v-if="cocktail">
        <div class="flex flex-col md:flex-row gap-4 sm:gap-6">
          <div class="flex-1 space-y-3 sm:space-y-4">
            <CocktailMainInfo
              :str-drink="strDrink"
              :str-category="strCategory"
              :str-alcoholic="strAlcoholic"
              :str-glass="strGlass"
            />

            <CocktailAdditionalInfo
              :str-instructions="strInstructions"
              :ingredients="cocktail.ingredients"
            />
          </div>

          <CocktailImage
            :src="strDrinkThumb"
            :alt="strDrink || 'Cocktail'"
            :should-load="isOpen"
          />
        </div>
      </template>
    </CollapsibleContent>
  </Collapsible>
</template>
