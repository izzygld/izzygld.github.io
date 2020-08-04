<template>
  <div class="item">
    <p>{{ item.name }}</p>
    <span class="new" v-if="item.new">New</span>
<!--     <img :src="`/${item.img}`" :alt="`Image of ${item.name}`">
 -->    <div class="item__bgImage" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
    <!-- <p>{{ item.usage | usdollar }}</p> -->
    <button class="add" @click="showModal">View Email</button>
    <!-- <a :href="item.img" target="_blank" class="button">View Email New Page</a> -->
    <!-- <button class="add" @click="viewItem">View Email</button> -->
   <!--  <button class="quick-view" @click="">Quick View
    </button> -->
        <AppModal
      v-show="isModalVisible"
      @close="closeModal"
      :image="item.img"
      :name="item.name"
    />
  </div>
</template>

<script>
import AppModal from './AppModal.vue';


export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isModalVisible: false
    };
  },  
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', this.item);
    },
    viewItem() {
      this.showModal = true
    },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }    
  },
    components: {
    AppModal
  }
};
</script>

<style scoped>
.item {
  border-radius: 5px;
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.item__bgImage{
    width: 200px;
    height: 200px;
    margin: 15px auto;
    background-size: cover;
    background-position: center;
}
.new {
  background: rgb(232, 35, 25);
  color: white;
  font-family: 'Barlow', sans-serif;
  position: absolute;
  right: 30px;
  top: 60px;
  padding: 2px 10px 4px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  border-radius: 1000px;
}

p {
  font-size: 18px;
  text-align: center;
}
.quick-view{
  color: #c5182d;
  border-color: #c5182d;
}
svg {
    color: #000;
}
a.button{
  padding: 10px 30px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 1000px;
    cursor: pointer;
    background: #fff;
    color: #3e64ea;
    border: 1px solid #3e64ea;
    text-decoration: none;
    font-family: Barlow,sans-serif;
    text-transform: uppercase;
    margin: 10px;
    -webkit-transition: all .15s ease-out;
    transition: all .15s ease-out;
}
a.button:hover{
      background: #3e64ea;
    color: #fff;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
}
</style>