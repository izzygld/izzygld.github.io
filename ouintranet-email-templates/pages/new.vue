<template>
  <main class="capsule">
    <div class="saleimg">
      <app-masthead title="New" bkcolor="#1ba079"/>
    </div>
    <div class="contain">
      <app-sidebar :usedamounts.sync="highusage" :new="true"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in sProducts"
          key="item"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue';
import AppMasthead from './../components/AppMasthead.vue';
import AppItem from './../components/AppItem.vue';

export default {
  components: {
    AppSidebar,
    AppMasthead,
    AppItem
  },
  data() {
    return {
      highusage: 300
    };
  },
  computed: {
    sProducts() {
      return this.$store.getters.new.filter(el => el.usage < this.highusage);
    }
  }
};
</script>

<style>
.saleimg .ppl-banner {
  height: 105%;
}
</style>
