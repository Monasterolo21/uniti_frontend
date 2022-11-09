<template>
  <div class="panel">
    <header-component
      title="Amici"
      subtitle="Aggiungi persone alla tua lista di amici per chattare con loro"
      background="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    />
    <friends-search-component />
    <div class="friends-cards">
      <friend-card-component
        v-for="f in friends"
        :key="f.id"
        :name="f.name"
        :avatar="f.avatar"
      />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FriendsSearchComponent from "@/components/FriendsSearchComponent.vue";
import FriendCardComponent from "@/components/FriendCardComponent.vue";

export default {
  components: { HeaderComponent, FriendsSearchComponent, FriendCardComponent },
  name: "FriendsView",

  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Chiara Paolucci",
          avatar:
            "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 2,
          name: "Giovanna Rossi",
          avatar:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 3,
          name: "Mario Rossi",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
      ],
    };
  },
};
</script>

<style>
.friends-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-flow: row;
  justify-content: flex-start;
  padding: 2em;
}
</style>
