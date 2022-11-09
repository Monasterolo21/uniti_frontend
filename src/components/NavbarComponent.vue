// TODO: Fabio la fai tu?
<template>
  <nav class="main-menu">
    <ul>
      <li>
        <a href="http://justinfarrow.com">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text"> Fabio è tutta tua! </span>
        </a>
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
.main-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.main-menu ul li {
  position: relative;
  display: block;
  width: 100%;
  line-height: 45px;
  border-bottom: 1px solid #232f3e;
}

.nav-text {
  color: var(--text-color);
}
</style>
