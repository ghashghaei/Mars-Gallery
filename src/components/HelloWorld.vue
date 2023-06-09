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
    await this.getData();
  },
  props: {
    msg: String,
  },
  methods: {
    async handleChange() {
      this.currentPage = 1;
      this.nasaData = [];
      await this.getData();
    },
    async getData() {
      const cachedData = await this.$store.dispatch('getCachedData', { key: this.selectedItem, page: this.currentPage });
      if (cachedData) {
        this.nasaData = cachedData;
      } else {
        let res = await NasaApi.getNasaMarchData(this.selectedItem, this.currentPage);
        let tosave = res.photos.map((c) => ({ id: c.id, earth_date: c.earth_date, img_src: c.img_src }));
        this.$store.commit('setCachedData', { key: this.selectedItem, page: this.currentPage, data: this.tosave });
        this.nasaData = [...this.nasaData, ...tosave]
      }
    }
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