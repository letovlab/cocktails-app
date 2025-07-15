<script setup lang="ts">
interface Props {
  strInstructions: string
  ingredients: Array<{
    ingredient: string
    measure?: string
  }>
}

defineProps<Props>()
</script>

<template>
  <div class="space-y-3 sm:space-y-4">
    <div class="space-y-2">
      <div class="font-medium text-sm sm:text-base">
        Instructions:
      </div>
      <div class="text-muted-foreground text-sm sm:text-base leading-relaxed">
        {{ strInstructions }}
      </div>
    </div>

    <div class="space-y-2">
      <div class="font-medium text-sm sm:text-base">
        List of ingredients:
      </div>
      <div class="space-y-1">
        <div
          v-for="(ingredient, index) in ingredients"
          :key="index"
          class="flex gap-2 sm:gap-4"
        >
          <span
            class="text-muted-foreground min-w-16 sm:min-w-20 text-sm sm:text-base"
          >{{ ingredient.measure || '-' }}</span>
          <span class="text-muted-foreground text-sm sm:text-base">{{
            ingredient.ingredient
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
