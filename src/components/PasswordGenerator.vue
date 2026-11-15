<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { Check, Copy, RefreshCw } from 'lucide-vue-next'
import { useContent } from '../i18n'

const t = useContent().features.generator
const length = ref(20)
const symbols = ref(true)
const numbers = ref(true)
const value = ref('k7#Vm2-qLx9!Tz4&bRw8')
const copied = ref(false)

const pool = computed(() => {
  let chars = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
  if (numbers.value) chars += '23456789'
  if (symbols.value) chars += '!#$%&*+-=?@'
  return chars
})
const bits = computed(() => Math.round(length.value * Math.log2(pool.value.length)))
const level = computed(() => {
  const b = bits.value
  return b < 45 ? 0 : b < 65 ? 1 : b < 90 ? 2 : b < 128 ? 3 : 4
})

function generate() {
  const chars = pool.value
  // Rejection sampling keeps every character equally likely.
  const limit = 256 - (256 % chars.length)
  let out = ''
  while (out.length < length.value) {
    for (const byte of crypto.getRandomValues(new Uint8Array(64))) {
      if (byte < limit && out.length < length.value) out += chars[byte % chars.length]
    }
  }
  value.value = out
  copied.value = false
}

async function copy() {
  try {
    await navigator.clipboard.writeText(value.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {
    copied.value = false
  }
}

onMounted(generate)
watch([length, symbols, numbers], generate)
</script>

<template>
  <div class="gen">
    <output class="value" for="gen-length">{{ value }}</output>
    <div class="meter" :data-level="level">
      <span v-for="n in 5" :key="n" :class="{ on: n <= level + 1 }" />
    </div>
    <p class="strength">{{ t.levels[level] }}, {{ bits }} {{ t.bits }}</p>
    <div class="controls">
      <label class="slider">
        <span>{{ t.length }}: {{ length }}</span>
        <input id="gen-length" v-model.number="length" type="range" min="8" max="128" />
      </label>
      <label class="check"><input v-model="numbers" type="checkbox" /> {{ t.numbers }}</label>
      <label class="check"><input v-model="symbols" type="checkbox" /> {{ t.symbols }}</label>
    </div>
    <div class="buttons">
      <button type="button" class="act" @click="generate"><RefreshCw :size="16" /> {{ t.regenerate }}</button>
      <button type="button" class="act" @click="copy">
        <Check v-if="copied" :size="16" /><Copy v-else :size="16" />
        <span aria-live="polite">{{ copied ? t.copied : t.copy }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.gen {
  margin-top: 24px;
}
.value {
  display: block;
  min-height: 4.6em;
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--ink);
  border: 1px solid var(--line-dark);
  font-family: var(--font-mono);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--brass);
  overflow-wrap: anywhere;
}
.meter {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-top: 14px;
}
.meter span {
  height: 6px;
  border-radius: 3px;
  background: rgba(160, 168, 255, 0.18);
}
.meter[data-level='0'] .on { background: #f0705f; }
.meter[data-level='1'] .on { background: #f09a4f; }
.meter[data-level='2'] .on { background: var(--brass); }
.meter[data-level='3'] .on { background: #8fd48a; }
.meter[data-level='4'] .on { background: #5fd3a6; }
.strength {
  margin-top: 8px;
  font-size: 0.92rem;
  color: var(--on-dark-soft);
}
.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 22px;
  margin-top: 18px;
  font-size: 0.95rem;
}
.slider {
  flex: 1 1 180px;
  display: grid;
  gap: 6px;
}
input[type='range'],
input[type='checkbox'] {
  accent-color: var(--brass);
}
input[type='range'] {
  width: 100%;
}
.check {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
}
.check input {
  width: 18px;
  height: 18px;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}
.act {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 14px;
  border: 1px solid var(--line-dark);
  border-radius: 10px;
  background: transparent;
  color: var(--on-dark);
  font-size: 0.93rem;
  font-weight: 600;
  cursor: pointer;
}
.act:hover {
  border-color: var(--peri);
}
</style>
