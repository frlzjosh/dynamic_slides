<template>
  <div>
    <h1 >{{ current_slide(slide_number).header }}</h1>
    <p>{{ current_slide(slide_number).content.paragraph }}</p>
    <button v-on:click="decrement_slides()">back</button>
    <button v-on:click="increment_slides()">next</button>
  </div>
</template>
<script>
import slides from "./../json/alc.js";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      alc: slides,
      slide_number: 0
    };
  },
  created() {
    if (slides) {
      this.getSlideInfo(slides);
    }
  },
  computed: {
    ...mapGetters(
      [
        'current_slide'
      ]
    )
  },
  methods: {
    ...mapActions(["getSlideInfo"]),
    increment_slides: function() {
      this.slide_number++;
      console.log(this.current_slide(0))
      console.log(this.slide_number);
      return this.slide_number;
    },
    decrement_slides: function() {
      this.slide_number--;
      console.log(this.slide_number);
      return this.slide_number;
    }
  },
  mounted() {
    this.slide_number;
  }
};
</script>
