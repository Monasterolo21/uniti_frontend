<template>
  <div class="panel">
    <h1 class="friend-text">Questa sezione sarà presto disponibile su UNIT-I</h1>
    <h2 class="friend-text2">Prossimamente qui troverai:</h2>
    <h2 class="friend-text2">- I tuoi AMICI</h2>
    <h3 class="friend-text2">La lista dei tuoi amici, con la possibilità di vedere le loro informazioni, coma la bio, la mail, ecc...</h3>
    <h2 class="friend-text2">- La chat</h2>
    <h3 class="friend-text2">Chat con la quale potrai scambiare messaggi con la tua cerchia di amici</h3>

    <!-- <header-component
      title="Amici"
      subtitle="Aggiungi persone alla tua lista di amici per chattare con loro"
      background="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    />
    <friends-search-component />
    <div class="friends-cards">
      <friend-card-component v-for="f in friends" :key="f.id" :person="f" />
    </div> -->
  
  </div>
</template>

<script>


export default {
  
  name: "FriendsView",

  data() {
    return {
      
    };
  },
};
</script>

<style>
.friend-text {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 10%;
  color: gray;
}
.friend-text2 {
  padding-left: 10%;
  padding-right: 10%;
  
  color: gray;
}
.friends-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: flex-start;
  padding: 2em;
  overflow-x: scroll;
  justify-content: center;
}
</style>
