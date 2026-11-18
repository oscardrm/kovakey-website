<script setup lang="ts">
import { provide } from 'vue'
import { useHead } from '@unhead/vue'
import LogoMark from '../components/LogoMark.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { contentKey, contents, type Lang } from '../i18n'
import { privacy, privacyContact } from '../i18n/privacy'

const props = defineProps<{ lang: Lang }>()
const p = privacy[props.lang]
provide(contentKey, contents[props.lang])

useHead({
  title: p.metaTitle,
  htmlAttrs: { lang: p.lang },
  meta: [{ name: 'description', content: p.metaDescription }],
  link: [
    { rel: 'alternate', hreflang: 'en', href: '/privacy' },
    { rel: 'alternate', hreflang: 'es', href: '/es/privacidad' },
  ],
})
</script>

<template>
  <header class="top">
    <div class="wrap top-row">
      <RouterLink class="brand" :to="p.homeHref" :aria-label="p.back">
        <LogoMark :size="34" />
        <span>KovaKey</span>
      </RouterLink>
      <RouterLink class="lang" :to="p.switchTo">{{ p.switchLabel }}</RouterLink>
    </div>
  </header>
  <main class="wrap policy">
    <h1>{{ p.title }}</h1>
    <p class="meta">
      {{ p.effective }} {{ p.contactLabel }}: <span class="mono">{{ privacyContact }}</span>
    </p>
    <section v-for="s in p.sections" :key="s.title">
      <h2>{{ s.title }}</h2>
      <p v-for="(text, i) in s.paragraphs ?? []" :key="i">{{ text }}</p>
      <ul v-if="s.list">
        <li v-for="item in s.list" :key="item">{{ item }}</li>
      </ul>
      <p v-if="s.link">
        <a :href="s.link.href" rel="noopener noreferrer" target="_blank">{{ s.link.label }}</a>
      </p>
    </section>
    <p class="back">
      <RouterLink :to="p.homeHref">{{ p.back }}</RouterLink>
    </p>
  </main>
  <SiteFooter />
</template>

<style scoped>
.top {
  background: var(--ink);
  color: var(--on-dark);
  border-bottom: 1px solid var(--line-dark);
}
.top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 68px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.3rem;
  color: inherit;
  text-decoration: none;
}
.lang {
  color: var(--on-dark-soft);
  text-decoration: none;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}
.lang:hover {
  color: var(--on-dark);
}
.policy {
  max-width: calc(44rem + var(--gutter) * 2);
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-block: clamp(48px, 8vw, 96px);
}
.policy h1 {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-variation-settings: 'wdth' 86;
  letter-spacing: -0.03em;
  line-height: 1.05;
  text-wrap: balance;
}
.meta {
  color: var(--text-soft);
  margin-top: -12px;
}
.mono {
  font-family: var(--font-mono);
  font-size: 0.95em;
  overflow-wrap: anywhere;
}
section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
section h2 {
  font-family: var(--font-display);
  font-size: 1.45rem;
  line-height: 1.25;
  text-wrap: balance;
}
section ul {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 1.2em;
  list-style: disc;
}
.policy a {
  color: var(--brass-ink);
  text-underline-offset: 3px;
}
.back {
  padding-top: 8px;
  border-top: 1px solid var(--line-light);
}
</style>
