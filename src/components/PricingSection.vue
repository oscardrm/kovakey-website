<script setup lang="ts">
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'
import { useContent } from '../i18n'

const t = useContent().pricing
const annual = ref(true)
</script>

<template>
  <section id="pricing" class="band pricing">
    <div class="wrap">
      <div class="band-head">
        <h2>{{ t.title }}</h2>
        <p>{{ t.lead }}</p>
      </div>

      <div class="plans">
        <article class="plan">
          <h3>{{ t.free.name }}</h3>
          <p class="price"><b>{{ t.free.price }}</b> {{ t.free.period }}</p>
          <p class="about">{{ t.free.text }}</p>
          <ul>
            <li v-for="item in t.free.items" :key="item"><Check :size="18" /> {{ item }}</li>
          </ul>
        </article>

        <article class="plan premium">
          <div class="plan-top">
            <h3>{{ t.premium.name }}</h3>
            <div class="billing" role="group" :aria-label="t.billingLabel">
              <button type="button" :aria-pressed="!annual" @click="annual = false">{{ t.monthly }}</button>
              <button type="button" :aria-pressed="annual" @click="annual = true">{{ t.annual }}</button>
            </div>
          </div>
          <p class="price" aria-live="polite">
            <b>{{ annual ? t.premium.annualPrice : t.premium.monthlyPrice }}</b>
            {{ annual ? t.premium.annualPeriod : t.premium.monthlyPeriod }}
          </p>
          <p class="saving">{{ annual ? t.premium.annualNote : t.premium.monthlyNote }}</p>
          <p class="about">{{ t.premium.text }}</p>
          <ul>
            <li v-for="item in t.premium.items" :key="item"><Check :size="18" /> {{ item }}</li>
          </ul>
        </article>

        <article class="plan lifetime">
          <h3>{{ t.lifetime.name }}</h3>
          <p class="price"><b>{{ t.lifetime.price }}</b> {{ t.lifetime.period }}</p>
          <p class="about">{{ t.lifetime.text }}</p>
          <ul>
            <li v-for="item in t.lifetime.items" :key="item"><Check :size="18" /> {{ item }}</li>
          </ul>
          <div class="founder">
            <p class="founder-head">
              <span>{{ t.lifetime.founderTag }}</span>
              <b>{{ t.lifetime.founderPrice }}</b>
            </p>
            <p>{{ t.lifetime.founderNote }}</p>
          </div>
        </article>
      </div>

      <ul class="notes">
        <li v-for="note in t.notes" :key="note">{{ note }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  background: var(--card);
}
.plans {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 20px;
  align-items: stretch;
}
.plan {
  display: flex;
  flex-direction: column;
  padding: clamp(24px, 3vw, 34px);
  border: 1px solid var(--line-light);
  border-radius: 22px;
  background: var(--paper);
}
.plan h3 {
  font-size: 1.35rem;
}
.price {
  margin-top: 18px;
  color: var(--text-soft);
}
.price b {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(2.3rem, 4vw, 3rem);
  font-variation-settings: 'wdth' 88;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text);
}
.about {
  margin-top: 16px;
  font-weight: 600;
}
.plan ul {
  display: grid;
  gap: 10px;
  margin-top: 18px;
  font-size: 0.98rem;
}
.plan li {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 10px;
  color: var(--text-soft);
}
.plan li svg {
  margin-top: 4px;
  color: var(--brass-ink);
}
.premium {
  background: var(--navy);
  border-color: var(--navy);
  color: var(--on-dark);
}
.premium .price,
.premium li {
  color: var(--on-dark-soft);
}
.premium .price b {
  color: var(--on-dark);
}
.premium li svg {
  color: var(--brass);
}
.plan-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.billing {
  display: inline-flex;
  padding: 3px;
  border-radius: 999px;
  background: var(--ink);
  border: 1px solid var(--line-dark);
}
.billing button {
  min-height: 34px;
  padding: 0 14px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--on-dark-soft);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
}
.billing button[aria-pressed='true'] {
  background: var(--brass);
  color: #1a1304;
}
.saving {
  margin-top: 8px;
  min-height: 3em;
  font-size: 0.93rem;
  color: var(--brass);
}
.founder {
  margin-top: auto;
  padding: 16px 18px;
  border-radius: 14px;
  background: var(--brass);
  color: #1a1304;
  font-size: 0.93rem;
  line-height: 1.45;
}
.lifetime ul {
  margin-bottom: 24px;
}
.founder-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
  font-weight: 700;
}
.founder-head b {
  white-space: nowrap;
  font-family: var(--font-display);
  font-size: 1.5rem;
  letter-spacing: -0.02em;
}
.notes {
  display: grid;
  gap: 4px;
  margin-top: 28px;
  font-size: 0.95rem;
  color: var(--text-soft);
}
@media (max-width: 920px) {
  .plans {
    grid-template-columns: 1fr;
  }
}
</style>
