<template>
  <div class="header">
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
  },
  components: { SearchComponent, AvatarComponent },
};
</script>

<style>
.header {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.07) 32.29%, #000000 100%),
    radial-gradient(
      34.38% 216.65% at 51.79% 51.62%,
      rgba(0, 0, 0, 0.88) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url("https://images.unsplash.com/photo-1506508618093-6fe5ce3def4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80");
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
