<template>
  <div class="error-page">
    <div class="error-page__container">
      <div class="error-page__container__logo">
        <img src="@/assets/img/logo.png" alt="logo" />
      </div>
      <div class="error-page__container__text">
        <h3>Ops! Qualcosa è andato storto</h3>
        <p>Ricorda che devi autenticati prima di utilizzare UNIT-I</p>
      </div>
      <button-component text="Torna alla home" @primaryClick="this.goToHome" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.error-page {
  background-color: var(--white);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.error-page__container {
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.error-page__container__logo {
  width: 100%;
  max-width: 200px;
  margin-bottom: 2rem;
}
.error-page__container__logo img {
  width: 100%;
}
.error-page__container__text {
  margin-bottom: 2rem;
}
</style>
