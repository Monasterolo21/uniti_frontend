<template>
  <div class="subclass-list">
    <div
      class="subclass-horizontal-cards">
      <h1>{{ categories.name }}</h1>

      <div class="card-group">
        <CardComponentSale
          v-for="pr in products"
          :key="pr.id"
          :title="pr.title"
          :available="pr.active"
          :subtitle="pr.price.toString()"
          :owner="pr.owneremail"
          @click="goToProduct(pr)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponentSale from "@/components/CardComponentSale.vue";
import store from "@/store";

export default {
  components: { CardComponentSale },
  props: {
    categories: {
      // type: Array,
      // required: true,
    },
    products: {
      type: Array,
      // required: true,
    },
  },
  methods: {

    goToProduct(pr) {
      store.commit('setSelectedBalonAds',pr);
      this.$router.push({ name: "products", params: { id: pr.id } });
    },
  },
};
</script>

<style>
.subclass-list {
  margin: auto;
  max-width: 100%;
  /* padding: 2% 0 25% 0; */
}
.subclass-horizontal-cards {
  padding: 1em 0 1em 3%;
  overflow: hidden;
}
.subclass-horizontal-cards h1 {
  margin: 0;
  padding: 0;
  font-size: 2.3em;
  float: left;
  width: 100%;
  text-align: left;
}
.card-group {
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
}
element::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}
</style>
