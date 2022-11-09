<template>
  <div
    class="header"
    v-bind:style="
      'background-image: var(--header-gradient), url(' + background + '); '
    "
  >
    <div class="top-position">
      <SearchComponent />
      <AvatarComponent />
    </div>
    <div class="header-content">
      <h1>{{ title }}</h1>
      <h3 class="subtitle">{{ subtitle }}</h3>
    </div>
  </div>
</template>

<script>
import AvatarComponent from "@/components/AvatarComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
  },
  components: { SearchComponent, AvatarComponent },
};
</script>

<style>
.header {
  width: 100%;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 35%;
  position: relative;
  top: 0;
  z-index: 0;
  text-align: center;
  left: 0;
}

@media screen and (min-width: 400px) {
  .header {
    height: 20%;
  }
}

.top-position {
  position: relative;
  top: 0;
  left: 0;
  width: 90%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: auto;
}

.header-content {
  position: relative;
  top: 0;
  left: 0;
}

.subtitle {
  color: var(--white);
}
</style>
