<script setup lang="ts">
interface Props {
  strDrink: string
  strCategory: string
  strAlcoholic: string
  strGlass: string
}

defineProps<Props>()
</script>

<template>
  <div class="space-y-2">
    <div>
      <span class="font-medium text-sm sm:text-base">Drink:</span>
      <span class="text-muted-foreground text-sm sm:text-base">{{
        strDrink
      }}</span>
    </div>
    <div>
      <span class="font-medium text-sm sm:text-base">Category:</span>
      <span class="text-muted-foreground text-sm sm:text-base">{{
        strCategory
      }}</span>
    </div>
    <div>
      <span class="font-medium text-sm sm:text-base">Alcoholic:</span>
      <span class="text-muted-foreground text-sm sm:text-base">{{
        strAlcoholic
      }}</span>
    </div>
    <div>
      <span class="font-medium text-sm sm:text-base">Glass:</span>
      <span class="text-muted-foreground text-sm sm:text-base">{{
        strGlass
      }}</span>
    </div>
  </div>
</template>
