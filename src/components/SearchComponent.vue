<template>
  <div class="search-box">
    <!-- <div class="search-icon">
      <img src="@/assets/img/search.svg" />
    </div> -->
    <p>Cerca su UNITI</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search-box {
  width: 70%;
  height: 2em;
  background-color: var(--red-ice-low-opacity);
  border-radius: 10px;
  margin: 10px 0;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  vertical-align: middle;
  text-align: left;
  padding: 0 2em;
}

@media screen and (max-width: 400px) {
  .search-box {
    max-width: 150px;
  }
}

.search-icon {
  width: 1.5em;
  height: 1.5em;
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
  font-size: 1em;
  color: var(--white);
  margin: auto;
  padding: 0;
  line-height: 2em;
  vertical-align: middle;
  text-align: left;
  vertical-align: middle;
}
</style>
