<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div class="w-full max-w-[1024px] min-w-[360px] mx-auto min-h-screen">
    <SidebarProvider>
      <SidebarTrigger
        class="fixed top-4 left-4 z-50 md:hidden bg-background border border-border rounded-md shadow-sm hover:bg-accent"
      />
      <AppSidebar />

      <main class="flex flex-1 flex-col min-h-screen">
        <div
          class="flex flex-1 flex-col gap-4 p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8"
        >
          <slot />
        </div>
      </main>
    </SidebarProvider>
  </div>
</template>
