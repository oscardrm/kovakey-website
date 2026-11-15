<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { LockKeyhole } from 'lucide-vue-next'
import { useContent } from '../i18n'

const t = useContent()
const password = ref(t.demo.passwordValue)
// Static placeholder so the prerendered page shows bytes before the browser encrypts for real.
const hex = ref(
  '8f3a c41d 07e2 b95c 6a10 f3d8 2e77 91bc 4d05 a8e6 3c9f 12b4 e07a 5d31 c8f6 0b92 7e4d a15c 39f0 86d2 b74e 1c63 f5a9 08d7 42eb 9c30 6f1a d584 e3b7 205c 9a6e f148 73d0 bc25 1e89 a46f',
)
const size = ref(96)
let key: CryptoKey | undefined

async function encrypt() {
  if (!key) return
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const plain = new TextEncoder().encode(
    JSON.stringify({ site: 'github.com', user: t.demo.userValue, password: password.value }),
  )
  const sealed = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plain))
  const all = new Uint8Array(iv.length + sealed.length)
  all.set(iv)
  all.set(sealed, iv.length)
  size.value = all.length
  const pairs: string[] = []
  for (let i = 0; i < Math.min(all.length, 96); i += 2) {
    pairs.push(all[i].toString(16).padStart(2, '0') + (all[i + 1] ?? 0).toString(16).padStart(2, '0'))
  }
  hex.value = pairs.join(' ')
}

onMounted(async () => {
  if (!globalThis.crypto?.subtle) return
  key = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['encrypt'])
  await encrypt()
})
watch(password, encrypt)
</script>

<template>
  <div class="demo">
    <div class="layer device">
      <p class="layer-label">{{ t.demo.deviceLabel }}</p>
      <dl class="item">
        <div><dt>{{ t.demo.site }}</dt><dd>github.com</dd></div>
        <div><dt>{{ t.demo.user }}</dt><dd>{{ t.demo.userValue }}</dd></div>
        <div class="editable">
          <dt><label for="demo-password">{{ t.demo.password }}</label></dt>
          <dd>
            <input
              id="demo-password"
              v-model="password"
              type="text"
              autocomplete="off"
              autocapitalize="off"
              spellcheck="false"
              maxlength="48"
              :aria-describedby="'demo-hint'"
            />
          </dd>
        </div>
      </dl>
      <p id="demo-hint" class="hint">{{ t.demo.passwordHint }}</p>
    </div>

    <div class="seal">
      <span class="seal-icon"><LockKeyhole :size="18" /></span>
      <span>{{ t.demo.step }}</span>
    </div>

    <div class="layer cloud">
      <p class="layer-label">
        {{ t.demo.cloudLabel }}
        <span class="file">personal.vault, {{ size }} {{ t.demo.bytes }}</span>
      </p>
      <p class="hex" aria-live="off">{{ hex }}</p>
    </div>
    <p class="caption">{{ t.demo.caption }}</p>
  </div>
</template>

<style scoped>
.demo {
  position: relative;
}
.layer {
  border-radius: 18px;
  padding: 20px 22px;
}
.layer-label {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px 12px;
  margin-bottom: 14px;
  font-size: 0.9rem;
  font-weight: 600;
}
.device {
  background: var(--card);
  color: var(--text);
  box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.8);
}
.device .layer-label {
  color: var(--text-soft);
}
.item > div {
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 0;
  border-top: 1px solid var(--line-light);
}
.item dt {
  font-size: 0.9rem;
  color: var(--text-soft);
}
.item dd {
  font-weight: 600;
  min-width: 0;
  overflow-wrap: anywhere;
}
.item input {
  width: 100%;
  padding: 9px 12px;
  border: 1.5px solid var(--brass);
  border-radius: 10px;
  background: #fffaf0;
  font-family: var(--font-mono);
  font-size: 0.95rem;
  font-weight: 500;
}
.item input:focus-visible {
  outline-offset: 1px;
}
.hint {
  margin-top: 6px;
  padding-left: calc(6.5rem + 12px);
  font-size: 0.85rem;
  color: var(--brass-ink);
}
.seal {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 0 28px;
  padding: 14px 0 14px 22px;
  border-left: 2px dashed var(--brass);
  color: var(--brass);
  font-size: 0.92rem;
  font-weight: 600;
}
.seal-icon {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-left: -40px;
  border-radius: 50%;
  background: var(--brass);
  color: #1a1304;
}
.cloud {
  background: var(--navy);
  border: 1px solid var(--line-dark);
}
.cloud .layer-label {
  color: var(--on-dark);
}
.file {
  font-weight: 400;
  color: var(--on-dark-soft);
}
.hex {
  font-family: var(--font-mono);
  font-size: 0.86rem;
  line-height: 1.75;
  color: var(--peri);
  word-spacing: 0.3em;
  min-height: 7em;
}
.caption {
  margin-top: 14px;
  font-size: 0.87rem;
  line-height: 1.5;
  color: var(--on-dark-soft);
}
@media (max-width: 480px) {
  .item > div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
  .hint {
    padding-left: 0;
  }
}
</style>
