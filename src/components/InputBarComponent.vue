<template>
  <div class="input-bar">
    <!-- <input
      type="text"
      placeholder="Scrivi un messaggio..."
      v-model="message"
      @keyup.enter="sendMessage"
    /> -->
    <textarea type="text" v-model="message" placeholder="Scrivi un messaggio...">

    </textarea>
    <div class="send-button" @click="send">
      <img src="@/assets/img/send.png" />
    </div>
  </div>
</template>

<script>
// import store from "@/store";
import { mapGetters } from "vuex";

export default {
  methods : {
    send() {
      console.log(this.message);
  
    }
  },


  computed: {
    ...mapGetters({
      user: "getUser",
      homeContent: "getHomeContent",
    }),
  },
};
</script>

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--text-color);
  opacity: 0.9; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--text-color);
  opacity: 0.9; /* Firefox */
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--text-color);
  opacity: 0.9; /* Firefox */
}

.input-bar {
  position: fixed;
  bottom: 2%;
  left: 5%;
  width: 80%;
  height: 4.5em;
  margin: auto;
  background: var(--red-ice-low-opacity);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  border: solid;
  border-width: 1px;
}

@media screen and (min-width: 1000px) {
  .input-bar {
    width: 60%;
    left: 25%;
  }
}

/* .input-bar input { */
.input-bar textarea {
  width: 80%;
  height: 70%;
  /* max-width: 80%;
  min-width: 80%;
  min-height: 70%;
  max-height: 70%; */
  resize: none;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-color);
  font-size: 1.2em;
  font-weight: 300;
  font-family: 'Raleway', sans-serif;
}

.input-bar .send-button {
  width: 1.5em;
  height: 1.5em;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}

.input-bar .send-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
