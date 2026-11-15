<script setup lang="ts">
import CipherDemo from './CipherDemo.vue'
import { useContent } from '../i18n'
import { notifyHref } from '../site'

const t = useContent()
</script>

<template>
  <section id="top" class="hero">
    <div class="wrap hero-grid">
      <div class="pitch">
        <h1>{{ t.hero.title }}</h1>
        <p class="lead">{{ t.hero.lead }}</p>
        <div class="actions">
          <a class="btn btn-brass" :href="notifyHref(t.hero.primary)">{{ t.hero.primary }}</a>
          <a class="btn btn-ghost" href="#how">{{ t.hero.secondary }}</a>
        </div>
        <p class="note">{{ t.hero.note }}</p>
      </div>
      <CipherDemo />
    </div>
  </section>
</template>

<style scoped>
.hero {
  background:
    radial-gradient(900px 520px at 82% 18%, rgba(46, 52, 140, 0.55), transparent 70%),
    var(--ink);
  color: var(--on-dark);
  padding-block: clamp(56px, 8vw, 104px) clamp(64px, 9vw, 120px);
}
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
}
h1 {
  font-size: clamp(2.6rem, 6.2vw, 4.6rem);
  font-variation-settings: 'wdth' 88;
  line-height: 1;
  letter-spacing: -0.03em;
}
.lead {
  margin-top: 26px;
  max-width: 34rem;
  font-size: clamp(1.1rem, 1.5vw, 1.28rem);
  color: var(--on-dark-soft);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}
.note {
  margin-top: 18px;
  font-size: 0.95rem;
  color: var(--on-dark-soft);
}
@media (max-width: 920px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}
</style>
