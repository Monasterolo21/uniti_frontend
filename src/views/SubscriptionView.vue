<template>
  <div class="panel">
    <header-component
      title="LE MIE BACHECHE"
      subtitle="Qui trovi tutte le bacheche che segui al momento"
      background="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
    />
    <div class="subclass-horizontal-cards">
      <h1>BACHECHE</h1>
      <div class="board-group">
        <CardComponent
          v-for="ba in board"
          :key="ba.id"
          :title="ba.name"
          :subtitle="ba.tag"
          @click="goToGroup(ba.id)"
        />
      </div>
    </div>
    <div class="subclass-horizontal-cards">
      <h1>GRUPPI</h1>
      <div class="board-group">
        <CardComponent
          v-for="gr in groups"
          :key="gr.id"
          :title="gr.name"
          :subtitle="gr.tag"
          @click="goToGroup(gr)"
        />
      </div>
    </div>
    <add-button-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import AddButtonComponent from "@/components/AddButtonComponent.vue";

export default {
  components: { HeaderComponent, CardComponent, AddButtonComponent },
  name: "BalonView",

  data() {
    return {
      board: [
        {
          id: 1,
          name: "Matematica",
          tag: "#matematica",
        },
        {
          id: 2,
          name: "Fisica",
          tag: "#fisica",
        },
        {
          id: 3,
          name: "Informatica",
          tag: "#informatica",
        },
      ],

      groups: [
        {
          id: 1,
          name: "Ping-Pong",
          tag: "#ping-pong",
        },
        {
          id: 2,
          name: "Calcio",
          tag: "#calcio",
        },
        {
          id: 3,
          name: "Basket",
          tag: "#basket",
        },
      ],
    };
  },
  methods: {
    goToGroup() {
      this.$route.params.group = this.group;
      this.$router.push("/group");
    },
  },
};
</script>

<style>
.board-group {
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
}
.subclass-horizontal-cards {
  padding: 1em 0 1em 3%;
  overflow: hidden;
}
.subclass-horizontal-cards h1 {
  margin: 0;
  padding: 0;
  font-size: 2em;
  float: left;
  width: 100%;
  text-align: left;
}
</style>
