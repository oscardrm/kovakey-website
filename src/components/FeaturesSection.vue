<script setup lang="ts">
import type { Component } from 'vue'
import {
  ArrowLeftRight, Copy, History, KeyRound, Layers, ShieldCheck, SquareTerminal, Tags, Timer, Users,
} from 'lucide-vue-next'
import LogoMark from './LogoMark.vue'
import PasswordGenerator from './PasswordGenerator.vue'
import { useContent } from '../i18n'

const t = useContent()
const icons: Record<string, Component> = {
  totp: Timer, audit: ShieldCheck, vaults: Layers, share: Users, dev: SquareTerminal,
  copy: Copy, categories: Tags, import: ArrowLeftRight, trash: History,
}
</script>

<template>
  <section id="features" class="band features">
    <div class="wrap">
      <div class="band-head">
        <h2>{{ t.features.title }}</h2>
        <p>{{ t.features.lead }}</p>
      </div>

      <div class="leads">
        <article class="lead-card autofill">
          <h3>{{ t.features.autofill.title }}</h3>
          <p>{{ t.features.autofill.text }}</p>
          <div class="form" aria-hidden="true">
            <div class="field"><span>{{ t.features.autofill.fieldUser }}</span><b>{{ t.demo.userValue }}</b></div>
            <div class="field"><span>{{ t.features.autofill.fieldPass }}</span><b>••••••••••••••</b></div>
            <div class="suggest">
              <LogoMark :size="30" />
              <span><b>{{ t.features.autofill.suggestion }}</b><small>github.com</small></span>
              <KeyRound :size="18" />
            </div>
          </div>
        </article>
        <article class="lead-card generator">
          <h3>{{ t.features.generator.title }}</h3>
          <p>{{ t.features.generator.text }}</p>
          <PasswordGenerator />
        </article>
      </div>

      <ul class="list">
        <li v-for="item in t.features.list" :key="item.title">
          <component :is="icons[item.icon]" :size="22" :stroke-width="1.75" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.features {
  background: var(--card);
}
.leads {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
.lead-card {
  border-radius: 22px;
  padding: clamp(24px, 3vw, 36px);
}
.lead-card h3 {
  font-size: 1.6rem;
}
.lead-card > p {
  margin-top: 10px;
  max-width: 32rem;
}
.autofill {
  background: var(--paper);
  border: 1px solid var(--line-light);
}
.autofill > p {
  color: var(--text-soft);
}
.generator {
  background: var(--navy);
  color: var(--on-dark);
}
.generator > p {
  color: var(--on-dark-soft);
}
.form {
  margin-top: 26px;
  display: grid;
  gap: 10px;
  max-width: 24rem;
}
.field {
  display: grid;
  gap: 2px;
  padding: 10px 14px;
  border: 1px solid var(--line-light);
  border-radius: 12px;
  background: var(--card);
}
.field span {
  font-size: 0.8rem;
  color: var(--text-soft);
}
.suggest {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 2px 0 0 18px;
  padding: 10px 14px;
  border-radius: 14px;
  background: var(--ink);
  color: var(--on-dark);
  box-shadow: 0 18px 30px -18px rgba(9, 10, 23, 0.7);
}
.suggest span {
  display: grid;
  flex: 1;
  line-height: 1.3;
}
.suggest small {
  color: var(--on-dark-soft);
}
.suggest > svg:last-child {
  color: var(--brass);
}
.list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: clamp(24px, 4vw, 48px);
  margin-top: clamp(32px, 5vw, 56px);
}
.list li {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 16px;
  padding: 22px 0;
  border-top: 1px solid var(--line-light);
}
.list svg {
  margin-top: 3px;
  color: var(--brass-ink);
}
.list p {
  margin-top: 6px;
  font-size: 0.98rem;
  color: var(--text-soft);
}
@media (max-width: 920px) {
  .leads {
    grid-template-columns: 1fr;
  }
  .list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .list {
    grid-template-columns: 1fr;
  }
}
</style>
