// TODO: Fabio la fai tu?
<template>
  <nav class="main-menu">
    <div class="logo-section">
      <img src="@/assets/img/logo.png" alt="logo" />
      <h1>UNITI</h1>
    </div>
    <ul>
      <li>
        <router-link to="/">
          <img src="@/assets/img/homepage.png" />
          <span class="nav-text"> Home </span>
        </router-link>
      </li>
      <li>
        <router-link to="/subscription">
          <img src="@/assets/img/subscription.png" />
          <span class="nav-text"> Iscrizioni </span>
        </router-link>
      </li>
      <li>
        <router-link to="/balon">
          <img src="@/assets/img/store.png" />
          <span class="nav-text"> Balon </span>
        </router-link>
      </li>
      <li>
        <router-link to="/friends">
          <img src="@/assets/img/friends.png" />
          <span class="nav-text"> Amici </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},

  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  background: var(--red-ice);
  z-index: 1;
}

@media screen and (max-width: 1000px) {
  .main-menu {
    display: none;
  }
}

.logo-section {
  width: 100%;
  height: 6%;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 0.5em 1em;
}

.logo-section img {
  width: 3em;
  height: 3em;
  margin-right: 1em;
}

.logo-section h1 {
  font-size: 2.6em;
  color: var(--primary-color);
  font-weight: bold;
}
.main-menu ul {
  list-style: none;
  padding: 2em 2em;
  margin: auto;
  float: left;
  width: 100%;
  text-align: left;
}

.main-menu ul li {
  position: relative;
  display: block;
  width: 100%;
  height: 3em;
  margin: 1em 0;
  cursor: pointer;
}

.main-menu ul li img {
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  margin-right: 1em;
}

.main-menu ul li span {
  vertical-align: middle;
  font-size: 1.5em;
  font-weight: 500;
}

.nav-text {
  color: var(--text-color);
}
</style>
