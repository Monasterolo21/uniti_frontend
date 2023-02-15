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
            <img class="edit-icon" src="@/assets/img/edit.png" @click="editUrlPicture" />
        </div>
        <div class="field">
            <div class="title">Nome:</div>
                <input
                    class="value"
                    contenteditable="true"
                    maxlength="20"
                    type="text"
                    v-model="nome"
            />
        </div>
        <div class="field">
            <div class="title">Cognome:</div>
            <input
                class="value"
                contenteditable="true"
                maxlength="25"
                type="text"
                v-model="cognome"
            />
        </div>

        <div style="width: 100%;">
            <div class="field">
                <div class="title">Bio:</div>
                <textarea class="value" contenteditable="true" type="text" v-model="bio" />
            </div>            
        </div>

        <div style="width: 100%;">
            <div class="field">
                <div class="title">Url Foto profilo:</div>
                <h3 class="value fbred" style="padding-right: 10px;">{{picUrl}}</h3>
                <!-- <input id="url" class="value" type="text" :placeholder="picUrl" readonly/> -->
            </div>            
        </div>
      
        <div style="width: 100%;">
            <div class="field">
            <div class="title">Email:</div>
            <div class="value" style="padding-right: 10px;">{{ this.user.email }}</div>      
            </div>
            <p>(Email <span class="fb">NON</span> modificabile)</p>
        </div>

    </div>
    <button-component text="Salva" @mainClick="save()" />
  </div>
</template>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */


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

        async editUrlPicture() {
            let newUrl = await this.$swal({
                position: 'center',
                input : 'url',
                inputLabel: 'URL address',
                showConfirmButton: true,
                showCancelButton: true,
                toast : false, 
                confirmButtonColor: '#E39A94',
            });
            console.log(newUrl);
            if(newUrl.isConfirmed) {
                this.urlPicture = newUrl.value;
                this.save();
            }
        },

        resetUserInfo() {
            this.nome = this.user.name;
            this.cognome = this.user.surname;
            this.bio = this.user.bio;
            this.urlPicture = this.user.urlPicture;
        },

        save() {
            if(!this.nome || !this.cognome) {
                this.errorHandler();
                return;
            }
            var newUser = Object.assign({}, this.user);
            newUser.name = this.nome;
            newUser.surname = this.cognome;
            newUser.bio = this.bio;
            newUser.urlPicture = this.urlPicture;
            let res = store.dispatch('editUser',newUser);
            res.then((user) => {
                if (user)
                    this.alertSuccess();
                else
                    this.errorHandler();
            })
        },

        errorHandler() {
            this.resetUserInfo();
            this.alertError();
        },

        alertSuccess() {
            this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'Complimenti! Hai modificato il tuo profilo!',
                showConfirmButton: false,
                timer: 2000,
                toast : false, 
            });
        },

        alertError() {
            this.$swal({
                position: 'top-end',
                icon: 'error',
                title: 'Qualcosa è andato storto! Ricorda che il nome ed il cognome sono obbligatori!',
                showConfirmButton: false,
                timer: 2000,
                toast : false, 
            });
        }
    },

    computed: {
        ...mapGetters({
            user: "getUser",
        }),

        picUrl() {
            return this.user.urlPicture === null ? 'Nessun URL' : 'La tua immagine è impostata';
            //return this.user.urlPicture === null ? 'Nessun URL' : this.user.urlPicture;
        },

        backgroundUrl() {
            return this.user.urlPicture !== null ? this.user.urlPicture : 
            'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
        },

        logoUrl() {
            return this.user.urlPicture === null ? require('@/assets/img/person0.png') : this.urlPicture;
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

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */


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


.edit-panel .field {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: min(100%, 900px);
  margin: 1em auto;
  width: 100%;
  padding-right: 5%;
}

.edit-panel .field input {
    border-radius: 0.5em;
    background-color: aliceblue;
    margin-right: 1%;
    padding-right: 10px;
}

.edit-panel .field textarea {
    resize: none;
    height: 100px;
    border-radius: 0.5em;
    background-color: aliceblue;
    padding-right: 10px;
    margin-right: 1%;
    font-family: 'Raleway', sans-serif;
}

.edit-panel .field select {
    border-radius: 0.5em;
    background-color: aliceblue;
    padding-right: 10px;
    margin-right: 1%;
    font-family: 'Raleway', sans-serif;
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
  width: 20%;
  color: var(--primary-color);
  text-align: left;
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

.edit-icon:hover {
    cursor: pointer;
}

.fb {
  font-weight: bold !important
}
.fbred {
    font-weight: bold !important;
    color: var(--primary-color) !important;
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

@media screen and (max-width: 1000px) {
    .edit-panel {
        margin-left: 1%;
    }

    .edit-panel .field {
        display: block;
    }
    .edit-panel .field .value {
        width: 90%;
        /* margin-left: 5%;
        margin-right: 5%; */
        float: left;
    }
}


/* .edit-panel {
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

.edit-panel .field textarea {
    resize: none;
    height: 100px;
    border-radius: 0.5em;
    background-color: aliceblue;
    padding-right: 10px;
    margin-right: 1%;
    font-family: 'Raleway', sans-serif;
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
} */
</style>
