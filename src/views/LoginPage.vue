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
// https://stackoverflow.com/questions/359472/how-can-i-verify-a-google-authentication-api-access-token
import { googleTokenLogin } from "vue3-google-login";
import router from "@/router";

const login = () => {
  googleTokenLogin().then(async (response) => {
    // console.log("Handle the response", response);
    const res = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" +
        response.access_token,
      {
        method: "GET",
      }
    );
    const user = await res.json();
    console.log(user);
    if (user.hd === "edu.unito.it") {
      alert("Benvenuto " + user.name);
      router.push("/");
    } else {
      alert("Non sei autorizzato a accedere a questa applicazione");
    }
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
