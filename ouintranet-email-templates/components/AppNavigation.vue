<template>
  <div>
    <nav>
      <div class="capsule">
        <NuxtLink to="/">
          <img src="https://res.cloudinary.com/ouinternal/image/upload/c_scale,f_auto,q_auto,w_50/v1512569395/email-icon_rcepty.png">
        </NuxtLink>
        <ul>
          <NuxtLink to="/Yachad"><li>Yachad</li></NuxtLink>
          <NuxtLink to="/NCSY"><li>NCSY</li></NuxtLink> 
          <NuxtLink to="/Kosher"><li>Kosher</li></NuxtLink>
          <NuxtLink to="/new"><li>New</li></NuxtLink>
          <NuxtLink to="/all"><li>All</li></NuxtLink>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMainStore } from '~/stores/main'

const store = useMainStore()

const cartTotal = computed(() => {
  return store.cartTotal
})
</script>

<style scoped>
.capsule {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  width: 100vw;
  height: 60px;
  background: white;
}

ul {
  padding-left: 0;
  display: flex;
  list-style: none outside none;
  justify-content: center;
  align-items: center;
}

li {
  padding: 0 50px;
}

a,
a:visited,
a:active {
  text-decoration: none;
  color: black;
}

.cartitem {
  position: relative;
  float: right;
}

.cartcount {
  font-family: 'Barlow', sans-serif;
  position: absolute;
  background: #ff2211;
  color: white;
  text-align: center;
  padding-top: 4px;
  width: 20px;
  height: 20px;
  font-size: 10px;
  margin: -5px 0 0 20px;
  border-radius: 1000px;
  font-weight: 700;
}
</style>