<script setup lang="ts">
import type { HeroTextProps } from '../Home/HeroText.vue'

const { beforeName, name, afterName, beforeAdj, adjectives, afterAdj, vowelPrefix } = defineProps<HeroTextProps>()

const adjective = computed(() => adjectives[0]!)
const beforeAdjective = computed(() => beforeAdj + (isVowel(adjective.value?.text) ? vowelPrefix : ''))
</script>

<template>
  <div
    class="apply h-full w-full flex items-start justify-start bg-slate-950 text-slate-50 font-sans"
    style="background-image: url('/og/bg.png'); background-size: cover; background-position: center top; background-repeat: no-repeat;"
  >
    <div class="h-full w-full flex flex-col justify-between px-24 py-20">
      <h1
        class="flex flex-col text-left text-[80px] font-black leading-105%"
      >
        <span>
          👋
          {{ beforeName }}
          <span class="gap-0">
            <span class="text-theme">{{ name }}</span>
            <span>{{ afterName }}</span>
          </span>
        </span>
        <span>
          {{ beforeAdjective }}
          <span :style="{ color: adjective.color1 }">
            {{ adjective.text }}
          </span>
          {{ afterAdj }}
        </span>
      </h1>

      <div class="text-8 font-serif">
        leoboyer.dev
      </div>
    </div>
  </div>
</template>
