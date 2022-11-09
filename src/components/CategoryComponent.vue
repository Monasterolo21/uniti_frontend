<template>
  <div class="subclass-list">
    <div
      class="subclass-horizontal-cards"
      v-for="cat in categories"
      :key="cat.id"
    >
      <h1>{{ cat.name }}</h1>
      <div class="card-group">
        <CardComponent
          v-for="pr in products"
          :key="pr.id"
          :title="pr.name"
          :subtitle="pr.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  components: { CardComponent },
  props: {
    categories: {
      type: Array,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    filteredProducts(cat) {
      return this.products.filter((product) => product.category === cat.id);
    },
  },
};
</script>

<style>
.subclass-list {
  margin: auto;
  max-width: 100%;
  padding: 2% 0 25% 0;
}
.subclass-horizontal-cards {
  padding: 1em 0 0.5em 0.5em;
  overflow: hidden;
}
.subclass-horizontal-cards h1 {
  margin: 0;
  padding: 0;
  font-size: 2em;
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
</style>
