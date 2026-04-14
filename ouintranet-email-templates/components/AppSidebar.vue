<template>
  <aside>
    <div class="sidearea">
      <label for="usedamounts">Most used: <span>{{ modelValue }}</span></label>
      <input 
        class="slider" 
        id="usedamounts" 
        type="range"
        :value="modelValue"  
        :min="min" 
        :max="max" 
        step="0.1" 
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span class="min">{{ min }}</span>
      <span class="max">{{ max }}</span>
    </div>
    <app-switch v-if="!newtype" />
    <div class="sidearea callout">
      <h4>Special !</h4>
      <p>New interactiveiframe coming to GMAIL Email Templates.</p>
      <p>
      <em>Coming soon..... Live mobile view portal.</em></p>
    </div>
    <div class="sidearea callout">
     <ul class="sidebar-list">
          <NuxtLink to="/all"><li>All</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>OU Torah</li></NuxtLink>
          <NuxtLink to="/shabbatshalom"><li>Shabbat Shalom</li></NuxtLink> 
          <NuxtLink to="/OuPress"><li>OU Press</li></NuxtLink>
          <NuxtLink to="/OuJob"><li>Job Board</li></NuxtLink>
          <NuxtLink to="/Community"><li>Community Engagement</li></NuxtLink>
          <NuxtLink to="/Yachad"><li>Yachad</li></NuxtLink>
          <NuxtLink to="/NCSY"><li>NCSY</li></NuxtLink>
          <NuxtLink to="/Kosher"><li>Kosher</li></NuxtLink>
          <NuxtLink to="/IPA"><li>IPA</li></NuxtLink>
          <NuxtLink to="/JewishAction"><li>Jewish Action</li></NuxtLink>
          <NuxtLink to="/ifs"><li>Israel Free Spirit</li></NuxtLink>
          <NuxtLink to="/BoardAlerts"><li>Board Newsletters</li></NuxtLink>
          <NuxtLink to="/OUIsrael"><li>OU Israel</li></NuxtLink>
          <NuxtLink to="/RabbiWienrebs"><li>Rabbi Weinrebs</li></NuxtLink>
          <NuxtLink to="/OUGeneral"><li>OU General</li></NuxtLink>
          <NuxtLink to="/TeamYachad"><li>Team Yachad</li></NuxtLink>
          <NuxtLink to="/ArnoldGerson"><li>Arnold Gerson</li></NuxtLink>
          <NuxtLink to="/NextGen"><li>NextGen</li></NuxtLink>

<!-- 
          
          
          <NuxtLink to="/OUTorah"><li>Alumni</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>IPA</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>Jewish Action</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>IFS</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>Staff Education</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>Board Newsletter</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>OU Israel</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>Rabbi Weinreb</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>OU General</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>Team Yachad</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>Arnold Gerson</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>NextGen</li></NuxtLink>
          <NuxtLink to="/OUTorah"><li>Bring Israel Home</li></NuxtLink>  -->

          <NuxtLink to="/new"><li>New</li></NuxtLink>
     </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import AppSwitch from './AppSwitch.vue'

defineProps({
  newtype: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [Number, String],
    default: 300
  }
})

defineEmits(['update:modelValue'])

const min = ref(0)
const max = ref(400)
</script>

<style lang="scss" scoped>
aside {
  background: white;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border: none;
  }
}

.callout {
  padding: 20px 0;
  h4 {
    padding-bottom: 10px;
  }
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

/*--input range--*/
.sidearea:first-of-type {
  padding-bottom: 40px;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

span {
  font-family: 'Barlow', sans-serif;
}

.max {
  font-size: 12px;
  float: right;
  color: #565656;
}

.min {
  float: left;
  font-size: 12px;
  color: #565656;
}

ul.sidebar-list a {
    text-decoration: none;
    padding-bottom: 10px;
    display: block;
}
</style>