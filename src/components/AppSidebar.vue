<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  type SidebarProps
} from '@/components/ui/sidebar'
import { COCKTAIL_MENU_ITEMS } from '@/types/menu'

const props = defineProps<SidebarProps>()
const route = useRoute()

const isActiveMenuItem = computed(() => (menuItemCode: string) => {
  return route.params.id === menuItemCode
})
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <h1>Cocktails App</h1>
    </SidebarHeader>

    <SidebarContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarGroup class="space-y-2">
            <SidebarMenuButton
              v-for="menuItem in COCKTAIL_MENU_ITEMS"
              :key="menuItem.code"
              as-child
              :class="[
                'rounded-lg border justify-between h-auto p-3 hover:bg-accent cursor-pointer transition-colors',
                isActiveMenuItem(menuItem.code)
                  ? 'border-primary bg-accent text-accent-foreground shadow-sm'
                  : 'border-gray-200'
              ]"
              variant="outline"
            >
              <RouterLink :to="`/cocktail/${menuItem.code}`">
                <div class="flex items-center justify-between w-full">
                  <div class="space-y-1 text-left">
                    <p
                      :class="[
                        'text-sm font-medium',
                        isActiveMenuItem(menuItem.code) ? 'text-primary' : ''
                      ]"
                    >
                      {{ menuItem.name }}
                    </p>
                  </div>
                  <div class="text-2xl ml-4">
                    {{ menuItem.emoji }}
                  </div>
                </div>
              </RouterLink>
            </SidebarMenuButton>
          </SidebarGroup>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
  </Sidebar>
</template>
