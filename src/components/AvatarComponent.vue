<template>
  <div class="avatar" @click="gotoProfile()">
    <!-- <img v-if="this.user.urlPicture"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            /> -->
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
    console.log(this.user)
  },

  computed: {
    ...mapGetters({
      user: "getUser",
    }),
    image() {
      if(this.user !== null) {
        if(this.user.urlPicture !== null)
          return "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        else
        return require("@/assets/img/person.png");
      }
      else {
        return require("@/assets/img/person.png");
      }
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
