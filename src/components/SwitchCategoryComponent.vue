<template>
  <div class="switch-category">
    <div
      class="category left"
      @click="changeCategory(1)"
      :class="{ active: activeCategory == 1 }"
    >
      Post
    </div>
    <div
      class="category right"
      @click="changeCategory(2)"
      :class="{ active: activeCategory == 2 }"
    >
      Avvisi
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: 1,
    };
  },
  methods: {
    changeCategory(category) {
      if (category === this.activeCategory) return;
      this.activeCategory = category;
      this.$emit("changeCategory", category);
    },
  },
};
</script>

<style>
.switch-category {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: auto;
  padding: 0.5em 0;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  margin: 0.5em auto;
  /* background: ; */
}
.switch-category .category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  color: var(--secondary-color);
  cursor: pointer;
}
.switch-category .category.active {
  color: var(--primary-color);
  text-decoration: underline;
}
</style>
