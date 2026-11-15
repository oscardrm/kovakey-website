<script setup lang="ts">
import { TriangleAlert } from 'lucide-vue-next'
import { useContent } from '../i18n'

const t = useContent()
</script>

<template>
  <section id="security" class="band band-dark">
    <div class="wrap">
      <div class="band-head">
        <h2>{{ t.security.title }}</h2>
        <p>{{ t.security.lead }}</p>
      </div>

      <figure class="chain">
        <figcaption>{{ t.security.chainLabel }}</figcaption>
        <ol>
          <li v-for="link in t.security.chain" :key="link.name">
            <b>{{ link.name }}</b>
            <span>{{ link.note }}</span>
          </li>
        </ol>
      </figure>

      <div class="cols">
        <ul class="facts">
          <li v-for="fact in t.security.facts" :key="fact.title">
            <h3>{{ fact.title }}</h3>
            <p>{{ fact.text }}</p>
          </li>
        </ul>
        <aside class="limits">
          <h3><TriangleAlert :size="20" /> {{ t.security.limitsTitle }}</h3>
          <ul>
            <li v-for="limit in t.security.limits" :key="limit">{{ limit }}</li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chain figcaption {
  margin-bottom: 14px;
  font-size: 0.95rem;
  color: var(--on-dark-soft);
}
.chain ol {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 26px;
}
.chain li {
  position: relative;
  display: grid;
  gap: 6px;
  align-content: start;
  padding: 20px;
  border: 1px solid var(--line-dark);
  border-radius: 16px;
  background: var(--navy);
}
.chain li:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -21px;
  width: 10px;
  height: 10px;
  border-top: 2px solid var(--brass);
  border-right: 2px solid var(--brass);
  transform: translateY(-50%) rotate(45deg);
}
.chain li:last-child {
  border-color: var(--brass);
}
.chain b {
  font-family: var(--font-display);
  font-size: 1.2rem;
  letter-spacing: -0.01em;
}
.chain span {
  font-size: 0.93rem;
  line-height: 1.45;
  color: var(--on-dark-soft);
}
.cols {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 72px);
  margin-top: clamp(40px, 6vw, 72px);
  align-items: start;
}
.facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px clamp(24px, 3vw, 40px);
}
.facts p {
  margin-top: 8px;
  font-size: 0.98rem;
  color: var(--on-dark-soft);
}
.limits {
  padding: 26px;
  border-radius: 18px;
  background: rgba(233, 180, 76, 0.09);
  border: 1px solid rgba(233, 180, 76, 0.4);
}
.limits h3 {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: var(--brass);
}
.limits h3 svg {
  flex: none;
  margin-top: 3px;
}
.limits ul {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}
.limits li {
  padding-top: 14px;
  border-top: 1px solid rgba(233, 180, 76, 0.25);
  font-size: 0.98rem;
}
@media (max-width: 920px) {
  .chain ol {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .chain li:not(:last-child)::after {
    top: auto;
    right: auto;
    bottom: -17px;
    left: 28px;
    transform: rotate(135deg);
  }
  .cols {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .facts {
    grid-template-columns: 1fr;
  }
}
</style>
