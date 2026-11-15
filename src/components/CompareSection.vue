<script setup lang="ts">
import { useContent } from '../i18n'

const t = useContent()
</script>

<template>
  <section class="band">
    <div class="wrap">
      <div class="band-head">
        <h2>{{ t.compare.title }}</h2>
      </div>
      <div class="scroll">
        <table>
          <thead>
            <tr>
              <th scope="col"><span class="sr-only">{{ t.compare.colTopic }}</span></th>
              <th scope="col" class="kova">{{ t.compare.colKova }}</th>
              <th scope="col">{{ t.compare.colOther }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in t.compare.rows" :key="row.topic">
              <th scope="row">{{ row.topic }}</th>
              <td class="kova">{{ row.kova }}</td>
              <td>{{ row.other }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll {
  overflow-x: auto;
}
table {
  width: 100%;
  min-width: 620px;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
}
th,
td {
  padding: 18px 22px;
  border-bottom: 1px solid var(--line-light);
  vertical-align: top;
}
thead th {
  font-family: var(--font-display);
  font-size: 1.15rem;
  border-bottom: 0;
}
tbody th {
  width: 30%;
  font-weight: 600;
}
td {
  color: var(--text-soft);
}
.kova {
  width: 36%;
  background: var(--navy);
  color: var(--on-dark);
  border-bottom-color: var(--line-dark);
  font-weight: 600;
}
thead .kova {
  border-radius: 18px 18px 0 0;
  color: var(--brass);
}
tbody tr:last-child .kova {
  border-radius: 0 0 18px 18px;
  border-bottom: 0;
}
tbody tr:last-child th,
tbody tr:last-child td {
  border-bottom: 0;
}
</style>
