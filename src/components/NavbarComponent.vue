<template>
  <transition name="fade">
    <nav
      class="main-menu"
      ref="sidebar"
      :class="{ mobile: mobileSidebar }"
      v-on-click-outside="closeSidebar"
    >
      <div class="logo-section">
        <img src="@/assets/img/logo.png" alt="logo" />
        <h1>UNITI</h1>
      </div>
      <ul>
        <li>
          <router-link to="/home">
            <img src="@/assets/img/homepage.png" />
            <span class="nav-text" :class="{ active: isActive('home') }">
              Home
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/subscription">
            <img src="@/assets/img/subscription.png" />
            <span
              class="nav-text"
              :class="{ active: isActive('subscription') || isActive('group') }"
            >
              Iscrizioni
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/balon">
            <img src="@/assets/img/store.png" />
            <span class="nav-text" :class="{ active: isActive('balon') }">
              Balon
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/friends">
            <img src="@/assets/img/friends.png" />
            <span class="nav-text" :class="{ active: isActive('friends') }">
              Amici
            </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </transition>
  <div class="outside-click" v-if="mobileSidebar" @click="closeSidebar()"></div>
  <nav class="hamburger" @click="showSidebarMobile()">
    <div class="hamburger-menu">
      <div class="hamburger-menu__line hamburger-menu__line--1"></div>
      <div class="hamburger-menu__line hamburger-menu__line--2"></div>
      <div class="hamburger-menu__line hamburger-menu__line--3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      mobileSidebar: false,
    };
  },

  computed: {},

  methods: {
    goto(path) {
      this.$router.push(path);
    },
    showSidebarMobile() {
      this.mobileSidebar = !this.mobileSidebar;
    },
    closeSidebar() {
      this.mobileSidebar = false;
    },
    isActive(name) {
      return this.$route.name === name;
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

.mobile {
  min-width: 200px;
  max-width: 300px;
  width: 70%;
  height: 100%;
  background: var(--red-ice);
  z-index: 100;
  display: block;
  backdrop-filter: blur(200px);
  -webkit-backdrop-filter: blur(20px);
  padding-top: 2em;
}

.hamburger-menu {
  position: absolute;
  top: 30px;
  left: 0;
  width: 2em;
  /* height: 100%; */
  z-index: 1;
  margin-left: 5%;
  padding: 1%;
  border-radius: 0.5em;
}

.hamburger-menu__line {
  width: 100%;
  height: 2px;
  background: var(--primary-color);
  margin: 6px 0;
}

@media screen and (max-width: 1000px) {
  .main-menu:not(.mobile) {
    display: none;
  }
  .hamburger {
    display: block;
  }
}

@media screen and (min-width: 1000px) {
  .main-menu {
    display: block;
  }
  .hamburger {
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
  width: 60%;
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

.nav-text.active {
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}
.outside-click {
  position: fixed;
  top: 0;
  left: 20%;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(103, 102, 102, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>
