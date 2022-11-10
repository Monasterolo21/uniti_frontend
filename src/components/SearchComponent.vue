<template>
  <div class="search-box">
    <input
      type="text"
      placeholder="Cerca su UNITI"
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
  color: var(--white);
  opacity: 0.9; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--white);
  opacity: 0.9; /* Firefox */
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--white);
  opacity: 0.9; /* Firefox */
}

.search-box {
  width: 80%;
  height: 2.5em;
  background-color: var(--red-ice-low-opacity);
  border-radius: 10px;
  margin: 10px 0;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  vertical-align: middle;
  text-align: left;
  padding: 0 1em;
}

@media screen and (max-width: 400px) {
  .search-box {
    max-width: 60%;
  }
}

.search-icon {
  width: 1em;
  height: 1em;
  float: left;
  margin: auto 2%;
  vertical-align: middle;
}

.search-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.search-box p {
  font-size: 1.2em;
  font-weight: 300;
  color: var(--white);
  margin: auto;
  padding: 0;
  line-height: 2em;
  vertical-align: middle;
  text-align: left;
  vertical-align: middle;
}

.search-box input {
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--white);
  font-size: 1.2em;
  font-weight: 300;
  vertical-align: middle;
}
</style>
