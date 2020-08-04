<template>
  <main class="capsule">
    <app-masthead img="logo-email" title="All" bkcolor="#474598"/>
    <div class="contain">
      <app-sidebar :usedamounts.sync="highusage"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in mProducts"
          :key="item.img"
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
    mProducts() {
      return this.$store.getters.all.filter(el =>
        this.$store.state.new
          ? el.usage < this.highusage && el.new
          : el.usage < this.highusage
      );
    }
  }
};
</script>