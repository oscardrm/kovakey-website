<script setup lang="ts">
import { useContent } from '../i18n'

const t = useContent()
</script>

<template>
  <section id="platforms" class="band platforms">
    <div class="wrap">
      <div class="band-head">
        <h2>{{ t.platforms.title }}</h2>
        <p>{{ t.platforms.lead }}</p>
      </div>
      <ol class="road">
        <li v-for="(item, i) in t.platforms.items" :key="item.name" :class="{ current: i === 0 }">
          <span class="status">{{ item.status }}</span>
          <h3>{{ item.name }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ol>
      <p class="notes">{{ t.platforms.sync }}<br />{{ t.platforms.langs }}</p>
    </div>
  </section>
</template>

<style scoped>
.platforms {
  background: var(--paper);
}
.road {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.road li {
  position: relative;
  padding: 30px 28px 0 0;
  border-top: 2px solid var(--line-light);
}
.road li::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--paper);
  border: 2px solid var(--line-light);
}
.road .current {
  border-top-color: var(--brass);
}
.road .current::before {
  background: var(--brass);
  border-color: var(--brass);
}
.status {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-soft);
}
.current .status {
  color: var(--brass-ink);
}
.road h3 {
  margin-top: 6px;
  font-size: 1.5rem;
}
.road p {
  margin-top: 8px;
  color: var(--text-soft);
}
.notes {
  margin-top: 40px;
  color: var(--text-soft);
}
@media (max-width: 760px) {
  .road {
    grid-template-columns: 1fr;
  }
  .road li {
    padding: 0 0 28px 28px;
    border-top: 0;
    border-left: 2px solid var(--line-light);
  }
  .road li::before {
    top: 4px;
    left: -8px;
  }
  .road .current {
    border-left-color: var(--brass);
  }
}
</style>
