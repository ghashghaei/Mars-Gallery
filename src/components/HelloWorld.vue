<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <select v-model="selectedItem" v-on:change="handleChange">
      <option v-for="item in items" :value="item" :key="item">{{ item }}</option>
    </select>
 
  </div>
</template>

<script>
import { NasaApi } from './../services/NasaApi'

export default {
  name: "HelloWorld",
  data() {
    return {
      items: ['Curiosity', 'Opportunity', 'Spirit'],
      selectedItem: null,
      currentPage: 1,
      nasaData: [],
    }
  },
  async mounted() {
    this.selectedItem = this.items[0];
    this.currentPage = 1;
   },
  props: {
    msg: String,
  },
  methods: {
 
    async handleChange() {
      this.currentPage = 1;
      this.nasaData = [];
     },
 
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.row {
  margin: 10px;
}

img {
  width: 100%;
}
</style>