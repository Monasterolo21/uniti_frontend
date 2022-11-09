<template>
  <div class="search-box">
    <input
      type="text"
      placeholder="Cerca tra i tuoi amici"
      v-model="search"
      @keyup.enter="sendMessage"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--grey);
  opacity: 0.9; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--grey);
  opacity: 0.9; /* Firefox */
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--grey);
  opacity: 0.9; /* Firefox */
}

.search-box {
  width: 80%;
  height: 2.5em;
  border-radius: 10px;
  margin: 20px auto;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  vertical-align: middle;
  text-align: middle;
  padding: 0 1em;
}

@media screen and (max-width: 400px) {
  .search-box {
    max-width: 70%;
  }
}

.search-box p {
  font-size: 1.2em;
  font-weight: 300;
  color: var(--grey);
  margin: auto;
  padding: 0;
  line-height: 2em;
  vertical-align: middle;
  text-align: center;
  vertical-align: middle;
}

.search-box input {
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--grey);
  font-size: 1.2em;
  font-weight: 300;
  vertical-align: middle;
  border-bottom: 1px solid var(--grey);
  text-align: center;
}
</style>
