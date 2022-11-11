<template>
  <div class="avatar" @click="gotoProfile()">
    <img
      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    />
  </div>
</template>

<script>
export default {
  name: "AvatarComponent",
  methods: {
    gotoProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style>
.avatar {
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  overflow: hidden;
  float: right;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
