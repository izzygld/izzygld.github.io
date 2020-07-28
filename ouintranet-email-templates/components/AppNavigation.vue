<template>
  <div>
    <nav>
      <div class="capsule">
        <nuxt-link exact to="/">
        <img src="https://res.cloudinary.com/ouinternal/image/upload/c_scale,f_auto,q_auto,w_50/v1512569395/email-icon_rcepty.png">
        </nuxt-link>
        <ul>
          <nuxt-link to="/Yachad"><li>Yachad</li></nuxt-link>
          <nuxt-link to="/NCSY"><li>NCSY</li></nuxt-link> 
          <nuxt-link to="/Kosher"><li>Kosher</li></nuxt-link>
          <nuxt-link to="/new"><li>New</li></nuxt-link>
          <nuxt-link to="/all"><li>All</li></nuxt-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    }
  }
};
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