<template>
  <div class="login-page">
    <div class="login-page__container">
      <div class="login-page__container__logo">
        <img src="@/assets/img/logo.png" alt="logo" />
      </div>
      <button-component text="Accedi" @primaryClick="this.login" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  components: { ButtonComponent },
  data() {
    return {};
  },
  methods: {
    async login() {
      const res = await fetch("http://localhost:8080/login", {
        method: "GET",
      });
      const code = await res.json();
      console.log(code);
    },
  },
};
</script>

<style>
.login-page {
  background-color: var(--white);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-page__container {
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-page__container__logo {
  width: 100%;
  max-width: 200px;
  margin-bottom: 2rem;
}
.login-page__container__logo img {
  width: 100%;
}
</style>
