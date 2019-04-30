<template>
  <div>
    <p v-for="(a, key) in alc" :key="key">{{ a }}</p>
    <button :click="decrement_slides()">back</button>
    <button :click="increment_slides()">next</button>
  </div>
</template>
<script>
import slides from "./../json/alc.js";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      alc: slides,
      slide_number: 0 
    };
  },
  created() {},
  methods: {
    ...mapActions(["getSlideInfo"]),
    increment_slides: function() {
      console.log(this.slide_number++); 
      return this.slide_number
    },  
    decrement_slides: function() {
      this.slide_number = this.slide_number--
      return this.slide_number;
    }
  }
};
</script>
