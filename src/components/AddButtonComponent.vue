<template>
  <div class="action-button">
    <img src="@/assets/img/add.png" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.action-button {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  overflow: hidden;
  float: right;
  z-index: 10;
  margin: 0.5em;
  cursor: pointer;
  position: fixed;
  top: 92%;
  right: 2%;
  background: var(--primary-color);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.action-button img {
  width: 60%;
  height: 60%;
  margin: auto;
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
