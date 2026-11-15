<script setup lang="ts">
import LogoMark from './LogoMark.vue'
import { useContent } from '../i18n'
import { notifyHref } from '../site'

const t = useContent()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="band-dark">
    <div class="wrap closing">
      <LogoMark :size="72" />
      <h2>{{ t.closing.title }}</h2>
      <p>{{ t.closing.text }}</p>
      <a class="btn btn-brass" :href="notifyHref(t.closing.cta)">{{ t.closing.cta }}</a>
    </div>
    <div class="wrap base">
      <p><b>KovaKey</b> {{ t.footer.tagline }}</p>
      <p>{{ t.footer.noTracking }}</p>
      <p>© {{ year }} {{ t.footer.rights }}</p>
    </div>
  </footer>
</template>

<style scoped>
.closing {
  display: grid;
  justify-items: start;
  gap: 20px;
  padding-block: var(--section) clamp(56px, 8vw, 96px);
}
.closing h2 {
  font-size: clamp(2.6rem, 7vw, 5rem);
  font-variation-settings: 'wdth' 86;
  letter-spacing: -0.03em;
}
.closing p {
  max-width: 34rem;
  font-size: 1.2rem;
  color: var(--on-dark-soft);
}
.closing .btn {
  margin-top: 8px;
}
.base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 32px;
  padding-block: 26px;
  border-top: 1px solid var(--line-dark);
  font-size: 0.92rem;
  color: var(--on-dark-soft);
}
.base b {
  color: var(--on-dark);
  margin-right: 6px;
}
</style>
