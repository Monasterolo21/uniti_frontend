<template>
  <div
    class="header"
    v-bind:style="
      'background-image: var(--header-gradient), url(' + background + '); '
    "
  >
    <div class="top-position">
      <SearchComponent />
      <AvatarComponent class="av-com"/>
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

@media screen and (max-width: 800px) {
  .header-content h1 {
    font-size: 1.5em;
  }
}


@media screen and (min-width: 400px) {


  .header {
    height: 40%;
    max-height: max(350px, 35vh);
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

@media screen and (max-width: 1000px) {
  .top-position {
    margin-left: 12%;
    width: 80%;
  }
}

.header-content {
  position: relative;
  top: 0;
  left: 0;
  padding: 0 5%;
}

.subtitle {
  color: var(--white);
}
.av-com { 
  margin-left: 5%;
  margin-right: 5%;
}
</style>
