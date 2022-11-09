<template>
  <div class="input-bar">
    <input
      type="text"
      placeholder="Scrivi un messaggio..."
      v-model="message"
      @keyup.enter="sendMessage"
    />
    <div class="send-button">
      <img src="@/assets/img/send.png" />
    </div>
  </div>
</template>

<script>
export default {};
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
  height: 3.5em;
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
}

@media screen and (min-width: 1000px) {
  .input-bar {
    width: 60%;
    left: 25%;
  }
}

.input-bar input {
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-color);
  font-size: 1.2em;
  font-weight: 300;
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
