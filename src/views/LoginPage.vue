<template>
  <div class="login-page">
    <div class="login-page__container">
      <div class="login-page__container__logo">
        <img src="@/assets/img/logo.png" alt="logo" />
      </div>
      <button @click="login">Login Using Google</button>
    </div>
  </div>
</template>

<script setup>
// https://yobaji.github.io/vue3-google-login/#custom-login-button-1
import { googleAuthCodeLogin } from "vue3-google-login";
const login = () => {
  googleAuthCodeLogin().then((response) => {
    console.log("Handle the response", response);
  });
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
