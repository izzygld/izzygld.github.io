<template>
  <main class="capsule">
    <app-masthead img="logo-email" title="OUGeneral" bkcolor="#474598"/>
    <div class="contain">
      <app-sidebar v-model="highusage"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in filteredProducts"
          :key="item.img"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppSidebar from './../components/AppSidebar.vue'
import AppMasthead from './../components/AppMasthead.vue'
import AppItem from './../components/AppItem.vue'
import { useMainStore } from '~/stores/main'

const highusage = ref(300)
const store = useMainStore()

const filteredProducts = computed(() => {
  return store.OUGeneral.filter(el =>
    store.newFilter
      ? el.usage < highusage.value && el.new
      : el.usage < highusage.value
  )
})
</script>
