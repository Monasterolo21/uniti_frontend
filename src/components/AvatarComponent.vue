<template>
  <div class="avatar" @click="gotoProfile()">
    <img :src="this.image"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AvatarComponent",
  methods: {
    gotoProfile() {
      this.$router.push("/profile");
    },
  },

  mounted() {
    //console.log(this.user)
  },

  computed: {
    ...mapGetters({
      user: "getUser",
    }),
    image() {
      return this.user === null || this.user.urlPicture === null ? 
        require('@/assets/img/person0.png') : this.user.urlPicture;
    }
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
