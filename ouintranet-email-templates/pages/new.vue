<template>
  <main class="capsule">
    <div class="saleimg">
      <app-masthead title="New" bkcolor="#1ba079"/>
    </div>
    <div class="contain">
      <app-sidebar v-model="highusage" :new="true"/>
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
  return store.newProducts.filter(el => el.usage < highusage.value)
})
</script>

<style>
.saleimg .ppl-banner {
  height: 105%;
}
</style>
