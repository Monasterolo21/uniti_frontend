<template>
    <div class="avatar-container" @click="gotoProfile()">
        <div class="avatar">
            <img :src="this.image"/>
        </div>
        <div>
            <p class="name-avatar" v-if="user">{{ userFullName }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AvatarComponent",
  methods: {
    gotoProfile() {
      this.$router.push("/profile");
      console.log('profile')
    },
  },

  mounted() {
    //console.log(this.user)
  },

  computed: {
    ...mapGetters({
      user: "getUser",
    }),
    userFullName() {
      return !this.user ? undefined : this.user.name;
    },
    image() {
      return this.user === null || this.user.urlPicture === null ? 
        require('@/assets/img/person0.png') : this.user.urlPicture;
    }
  },

  
};
</script>

<style>
.avatar-container:hover {
  cursor: pointer;
}
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

.name-avatar {
  color: white;
  z-index: 1 !important;
  text-decoration: underline;
}
</style>
