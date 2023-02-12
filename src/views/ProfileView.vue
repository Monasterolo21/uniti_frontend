<template>
  <div class="panel">
    <header-component
      :title="'Profilo di ' + this.user.name"
      subtitle="Ecco le tue informazioni presenti su UNITI"
      :background="backgroundUrl"
    />
    <p>Puoi modificare le tue informazioni cliccandoci sopra, cambiandone il valore, e cliccando il pulsante
      <span class="fb">SALVA</span>
    </p>
    <div class="edit-panel">
        <div class="field">
        <div class="title">Foto:</div>
        <div class="user-image">
            <img :src="logoUrl"
            />
            <!-- <img v-if="!this.user.urlPicture" src="@/assets/img/person.png"/> -->
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

        <div style="width: 100%;">
            <div class="field">
                <div class="title">Bio:</div>
                <input class="value" contenteditable="true" type="text" v-model="bio" />
            </div>            
        </div>

        <div style="width: 100%;">
            <div class="field2">
                <div class="title">Url Foto profilo:</div>
                <input class="value" contenteditable="true" type="text" :placeholder="picUrl" v-model="urlPicture" />
            </div>            
        </div>
      
        <div style="width: 100%;">
            <div class="field">
            <div class="title">Email:</div>
            <div class="value">{{ this.user.email }}</div>      
            </div>
            <p>(Email <span class="fb">NON</span> modificabile)</p>
        </div>

    </div>
    <button-component text="Salva" @mainClick="save()" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { mapGetters } from "vuex";
import store from "@/store";

export default {
  name: "HomeView",
  components: { HeaderComponent, ButtonComponent },

  data() {
    return {
      nome: "nome",
      cognome: "cognome",
      bio: "bio",   
      urlPicture : "url",   
    };
  },

  methods: {
    save() {

      var newUser = Object.assign({}, this.user);
      newUser.name = this.nome;
      newUser.surname = this.cognome;
      newUser.bio = this.bio;
      newUser.urlPicture = this.urlPicture;
      console.log('------------')
      console.log(this.user)
      console.log(newUser)
      console.log('------------')
      store.dispatch('editUser',newUser);
    },
  },

  computed: {
    ...mapGetters({
      user: "getUser",
    }),

    picUrl() {
      return this.user.urlPicture === null ? 'Nessun URL' : this.user.urlPicture;
    },

    backgroundUrl() {
      return this.user.urlPicture !== null ? this.user.urlPicture : 
      'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
    },

    logoUrl() {
      return this.user.urlPicture === null ? require('@/assets/img/person0.png') : this.user.urlPicture;
    }
  },


  mounted() {
    this.nome = this.user.name;
    this.cognome = this.user.surname;
    this.bio = this.user.bio;
    this.urlPicture = this.user.urlPicture;
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
  max-width: min(100%, 900px);
  margin: 1em auto;
  width: 100%;
}
.edit-panel .field2 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
  max-width: min(100%, 900px);
  margin: 1em auto;
  width: 100%;
}
.edit-panel .field .title {
  font-size: 1.4em;
  font-weight: 600;
  color: var(--primary-color);
}
.edit-panel .field2 .title {
  font-size: 1.4em;
  font-weight: 600;
  color: var(--primary-color);
  text-align: left;
}
.edit-panel .field .value {
  font-size: 1.2em;
  font-weight: 400;
  width: 100%;
  color: var(--text-color);
  border: none;
  text-align: right;
  float: right;
}
.edit-panel .field2 .value {
  font-size: 1.2em;
  font-weight: 400;
  width: 100%;
  color: var(--text-color);
  border: none;
  text-align: right;
  float: right;
}
.edit-panel .field .edit-icon {
  width: 1em;
  height: 1em;
}
.edit-panel .field2 .edit-icon {
  width: 1em;
  height: 1em;
}
.fb {
  font-weight: bold;
}
</style>
