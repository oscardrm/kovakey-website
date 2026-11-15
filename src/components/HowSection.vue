<script setup lang="ts">
import { useContent } from '../i18n'

const t = useContent()
</script>

<template>
  <section id="how" class="band">
    <div class="wrap">
      <div class="band-head">
        <h2>{{ t.how.title }}</h2>
      </div>
      <ol class="steps">
        <li v-for="(step, i) in t.how.steps" :key="step.title">
          <span class="num" aria-hidden="true">{{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(28px, 4vw, 56px);
}
li {
  position: relative;
}
.num {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 1;
  color: var(--navy);
  font-variation-settings: 'wdth' 80;
}
li::after {
  content: '';
  position: absolute;
  top: 2.25rem;
  left: 3.6rem;
  right: calc(clamp(28px, 4vw, 56px) * -1 + 12px);
  border-top: 2px dashed var(--line-light);
}
li:last-child::after {
  right: 0;
}
h3 {
  margin-top: 18px;
  font-size: 1.4rem;
}
p {
  margin-top: 10px;
  color: var(--text-soft);
}
@media (max-width: 820px) {
  .steps {
    grid-template-columns: 1fr;
  }
  li::after {
    display: none;
  }
}
</style>
