<script setup lang="ts">
import { EyeOff, MailX, ServerOff } from 'lucide-vue-next'
import { useContent } from '../i18n'

const t = useContent()
const icons = [ServerOff, MailX, EyeOff]
</script>

<template>
  <section class="absent">
    <div class="wrap">
      <h2>{{ t.absent.title }}</h2>
      <ul class="cols">
        <li v-for="(item, i) in t.absent.items" :key="item.title">
          <component :is="icons[i]" :size="26" :stroke-width="1.75" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.absent {
  background: var(--brass);
  color: #1a1304;
  padding-block: clamp(48px, 6vw, 80px);
}
h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
}
.cols {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(24px, 4vw, 56px);
  margin-top: 32px;
}
li {
  padding-top: 20px;
  border-top: 2px solid #1a1304;
}
h3 {
  margin-top: 12px;
  font-size: 1.3rem;
  text-decoration: line-through;
  text-decoration-thickness: 2px;
}
p {
  margin-top: 8px;
  color: #3b2b08;
}
@media (max-width: 760px) {
  .cols {
    grid-template-columns: 1fr;
  }
}
</style>
