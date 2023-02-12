// TODO: solve click not working problem
<template>
  <div class="buttons">
    <div class="button" @click="mainClick()">
      <p>{{ text }}</p>
    </div>
    <div
      class="button alternative"
      @click="secondaryClick()"
      v-if="secondaryText"
    >
      <p>{{ secondaryText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    secondaryText: {
      type: String,
      required: false,
    },
  },

  methods: {
    mainClick() {
      alert("ciao");
      this.$emit("mainClick");
    },
    secondaryClick() {
      this.$emit("secondary");
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1em auto;
  width: 100%;
  max-width: 600px;
}

.button {
  text-align: center;
  border: none;
  border-radius: 40px;
  padding: 0.5em 4em;
  background-color: var(--primary-color);
  max-width: 200px;
  max-height: 50px;
  margin-bottom: 10%;
  vertical-align: middle;
  margin: 1em auto;
}
.button p {
  color: var(--white);
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4em;
  font-weight: 500;
  text-transform: uppercase;
}

.alternative {
  background-color: transparent;
  margin: 0 auto;
  border: 1px solid var(--primary-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
