<template>
  <div class="panel">
    <header-component
      title="Profile"
      subtitle="Guarda quello che le persone pubblicano su UNITI"
      background="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    />
    <div class="edit-panel">
      <div class="field">
        <div class="title">Foto:</div>
        <div class="user-image">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
        <img class="edit-icon" src="@/assets/img/edit.png" />
      </div>
      <div class="field">
        <div class="title">Nome:</div>
        <input
          class="value"
          contenteditable="true"
          type="text"
          v-model="nome"
        />
      </div>
      <div class="field">
        <div class="title">Cognome:</div>
        <input
          class="value"
          contenteditable="true"
          type="text"
          v-model="cognome"
        />
      </div>
      <div class="field">
        <div class="title">Bio:</div>
        <input class="value" contenteditable="true" type="text" v-model="bio" />
      </div>
      <div class="field">
        <div class="title">Email:</div>
        <input
          class="value"
          contenteditable="true"
          type="text"
          v-model="email"
        />
      </div>
    </div>
    <button-component text="Salva" @primaryClick="save()" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: { HeaderComponent, ButtonComponent },

  data() {
    return {
      nome: "nome",
      cognome: "cognome",
      bio: "bio",
      email: "email",
    };
  },

  methods: {
    save() {
      alert(this.nome + " " + this.cognome + " " + this.bio + " " + this.email);
      // alert("save");
    },
  },

  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },

  mounted() {
    //console.log(this.user)
  },
};
</script>

<style>
.edit-panel {
  padding: 1em;
  background: #fff;
  border-radius: 0.5em;
  margin: 1em;
  display: flex;
  align-items: center;
  flex-flow: column;
  margin: 1em auto;
}
.edit-panel .user-image {
  width: 3em;
  height: 3em;
  border-radius: 5em;
  overflow: hidden;
  aspect-ratio: 1/1;
}

.edit-panel .user-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.edit-panel .field {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: min(80%, 400px);
  margin: 1em auto;
  width: 100%;
}
.edit-panel .field .title {
  font-size: 1.4em;
  font-weight: 600;
  color: var(--primary-color);
}
.edit-panel .field .value {
  font-size: 1.2em;
  font-weight: 400;
  color: var(--text-color);
  border: none;
  text-align: right;
  float: right;
}
.edit-panel .field .edit-icon {
  width: 1em;
  height: 1em;
}
</style>
