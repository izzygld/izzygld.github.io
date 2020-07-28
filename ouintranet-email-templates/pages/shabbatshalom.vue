<template>
  <main class="capsule">
    <app-masthead img="logo-email" title="shabbatshalom" bkcolor="#e82319"/>
    <div class="contain">
      <app-sidebar :usedamounts.sync="highusage"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in wProducts"
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
    wProducts() {
      return this.$store.getters.shabbatshalom.filter(el =>
        this.$store.state.new
          ? el.usage < this.highusage && el.new
          : el.usage < this.highusage
      );
    }
  }
};
</script>
