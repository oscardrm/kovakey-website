<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import LogoMark from './LogoMark.vue'
import { useContent } from '../i18n'
import { notifyHref } from '../site'

const t = useContent()
const open = ref(false)
const links = [
  { href: '#how', label: t.nav.how },
  { href: '#features', label: t.nav.features },
  { href: '#security', label: t.nav.security },
  { href: '#pricing', label: t.nav.pricing },
  { href: '#faq', label: t.nav.faq },
]
</script>

<template>
  <header class="nav">
    <div class="wrap nav-row">
      <a class="brand" href="#top" aria-label="KovaKey">
        <LogoMark :size="34" />
        <span>KovaKey</span>
      </a>
      <nav class="links" :class="{ open }" :aria-label="t.nav.menu">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
        <RouterLink class="lang" :to="t.nav.switchTo" @click="open = false">{{ t.nav.switchLabel }}</RouterLink>
      </nav>
      <a class="btn btn-brass nav-cta" :href="notifyHref(t.nav.cta)">{{ t.nav.cta }}</a>
      <button class="toggle" type="button" :aria-expanded="open" :aria-label="t.nav.menu" @click="open = !open">
        <X v-if="open" :size="22" /><Menu v-else :size="22" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(9, 10, 23, 0.86);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line-dark);
  color: var(--on-dark);
}
.nav-row {
  display: flex;
  align-items: center;
  gap: 28px;
  min-height: 68px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: -0.02em;
  text-decoration: none;
}
.links {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-left: auto;
}
.links a {
  white-space: nowrap;
  color: var(--on-dark-soft);
  font-size: 0.97rem;
  text-decoration: none;
}
.links a:hover {
  color: var(--on-dark);
}
.links .lang {
  padding: 5px 12px;
  border: 1px solid var(--line-dark);
  border-radius: 999px;
  color: var(--on-dark);
}
.nav-cta {
  white-space: nowrap;
  min-height: 40px;
  padding: 0 16px;
  font-size: 0.95rem;
}
.toggle {
  display: none;
  margin-left: auto;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0;
  cursor: pointer;
}
@media (max-width: 1120px) {
  .nav-cta {
    display: none;
  }
  .toggle {
    display: inline-flex;
  }
  .links {
    display: none;
    position: absolute;
    inset: 68px 0 auto 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: 12px var(--gutter) 20px;
    background: var(--ink);
    border-bottom: 1px solid var(--line-dark);
  }
  .links.open {
    display: flex;
  }
  .links a {
    padding: 10px 0;
    font-size: 1.05rem;
  }
  .links .lang {
    margin-top: 8px;
    padding: 8px 16px;
  }
}
</style>
