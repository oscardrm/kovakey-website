<script setup lang="ts">
import { provide } from 'vue'
import { useHead } from '@unhead/vue'
import { contentKey, contents, type Lang } from '../i18n'
import SiteNav from '../components/SiteNav.vue'
import HeroSection from '../components/HeroSection.vue'
import AbsentSection from '../components/AbsentSection.vue'
import HowSection from '../components/HowSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import SecuritySection from '../components/SecuritySection.vue'
import CompareSection from '../components/CompareSection.vue'
import PricingSection from '../components/PricingSection.vue'
import PlatformsSection from '../components/PlatformsSection.vue'
import FaqSection from '../components/FaqSection.vue'
import SiteFooter from '../components/SiteFooter.vue'

const props = defineProps<{ lang: Lang }>()
const t = contents[props.lang]
provide(contentKey, t)

useHead({
  title: t.meta.title,
  htmlAttrs: { lang: t.lang },
  meta: [
    { name: 'description', content: t.meta.description },
    { property: 'og:title', content: t.meta.title },
    { property: 'og:description', content: t.meta.description },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'alternate', hreflang: 'en', href: '/' },
    { rel: 'alternate', hreflang: 'es', href: '/es' },
  ],
})
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <AbsentSection />
    <HowSection />
    <FeaturesSection />
    <SecuritySection />
    <CompareSection />
    <PricingSection />
    <PlatformsSection />
    <FaqSection />
  </main>
  <SiteFooter />
</template>
