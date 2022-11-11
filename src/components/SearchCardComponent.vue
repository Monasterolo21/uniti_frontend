<template>
  <div class="search-card">
    <div class="search-card_image" v-if="result.image">
      <img :src="result.image" />
    </div>
    <div class="search-card_image" v-if="!result.image">
      <div class="empty-primary-color-box"></div>
    </div>
    <div class="search-card_content">
      <h3>{{ result.name }}</h3>
      <p>{{ result.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.search-card {
  border-radius: 1.5em;
  padding: 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0.5em;
  min-width: max(60%, 200px);
  max-width: 80%;
  height: auto;
  color: var(--white);
  text-align: left;
}
.search-card_image {
  width: 25%;
  max-width: 100px;
  height: auto;
  height: auto;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 20px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 2em;
}
.search-card_image img,
.empty-primary-color-box {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: inline-block;
}

.empty-primary-color-box:nth-child(odd) {
  background-color: var(--primary-color);
}
.empty-primary-color-box:nth-child(even) {
  background-color: var(--secondary-color);
}
.search-card_content {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin: auto;
  padding: 0;
  width: 60%;
}
.search-card_content h3 {
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}
</style>
