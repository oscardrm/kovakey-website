<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { useContent } from '../i18n'

const t = useContent()
</script>

<template>
  <section id="faq" class="band" style="background: var(--card)">
    <div class="wrap faq">
      <h2>{{ t.faq.title }}</h2>
      <div class="items">
        <details v-for="item in t.faq.items" :key="item.q">
          <summary>{{ item.q }} <Plus :size="20" /></summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.7fr);
  gap: clamp(28px, 6vw, 80px);
  align-items: start;
}
details {
  border-top: 1px solid var(--line-light);
}
details:last-child {
  border-bottom: 1px solid var(--line-light);
}
summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  cursor: pointer;
  list-style: none;
}
summary::-webkit-details-marker {
  display: none;
}
summary svg {
  flex: none;
  color: var(--brass-ink);
  transition: transform 0.2s;
}
details[open] summary svg {
  transform: rotate(45deg);
}
details p {
  max-width: 40rem;
  padding-bottom: 22px;
  color: var(--text-soft);
}
@media (max-width: 820px) {
  .faq {
    grid-template-columns: 1fr;
  }
}
</style>
