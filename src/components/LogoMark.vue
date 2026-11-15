<script setup lang="ts">
withDefaults(defineProps<{ size?: number; tile?: boolean }>(), { size: 32, tile: true })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 64 64" aria-hidden="true">
    <rect v-if="tile" width="64" height="64" rx="15" fill="#12153a" />
    <g fill="none" stroke="#e9b44c" stroke-width="6.5">
      <circle cx="23" cy="17.5" r="7.25" />
      <path d="M23 24.5V55" />
      <path d="M46.5 27 23 44.5" />
      <path d="M32.5 37.5 46.5 55" />
    </g>
  </svg>
</template>
