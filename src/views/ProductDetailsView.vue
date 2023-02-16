// TODO: complete this component
<template>
    <div
        class="product-background panel"
        v-bind:style="
            'background-image: var(--product-gradient), url(' +
            this.product.image +
            '); ' ">
            
        <div class="product-content" v-if="selectedAds">
            <h1 class="spanbold">{{ selectedAds.title }}</h1>
            <h3 class="subtitle spanbold">{{ selectedAds.description }}</h3>
            
            <h2 class="subtitle">{{ selectedAds.price }}€</h2>
            
            <div class="user-info">
                <h3 class="subtitle">
                    <span class="spanbold">Venduto da:</span>
                    {{ selectedAds.owneremail }}
                </h3>
            </div>

            <div class="uim">
                <div
                    class="user-image"
                    v-bind:style="
                    'background-image: url(' + this.product.user.avatar + '); '
                    ">
                </div>
            </div>

            <div class="ownAds">
                <h3 class="subtitle spanbold">
                    Sei il proprietario di questo annuncio!
                </h3>
                <input type="checkbox" id="checkbox" v-model="selectedAds.active" />
                <br>
                <label for="checkbox">
                    <h3 class="spanbold">ANNUNCIO ATTIVO : {{ adsActiveStr }}</h3>                
                </label>
                <button-component
                    text="Salva"
                    @mainClick="this.saveActive"
                />
            </div>

            <h3 class="subtitle">
                Per contattare il venditore puoi scrivere una mail all'indirizzo qui sopra!
            </h3>
        
            
            <button-component
                text="Torna al Balon"
                @mainClick="this.goBack"
                />
        </div>
    </div>
</template>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */


<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import store from "@/store";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
    components: { ButtonComponent },

    data() {
        return {
            product: {
            id: 1,
            name: "Libro di Matematica",
            description: "Libro di matematica per la scuola superiore",
            price: 10,
            category: "Libri",
            user: {
                name: "Mario Rossi",
                avatar:
                require('@/assets/img/person0.png')
                // "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            },
            image:
                "https://images.unsplash.com/photo-1525972385596-02ad3049150b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            },
        };
    },

    computed: {
        ...mapGetters({
            user: "getUser",
            selectedAds: "getSelectedBalonAds",
        }),

        adsActiveStr() {
            return this.selectedAds.active ? 'SI' : 'NO';
        }
    },

    methods: {

        alertSuccess() {
            this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'Complimenti, il tuo annuncio è stato modificato correttamente',
                showConfirmButton: false,
                timer: 2000,
                toast : false, 
            });
        },

        alertError() {
            this.$swal({
                position: 'top-end',
                icon: 'error',
                title: 'Qualcosa è andato storto! Riprova',
                showConfirmButton: false,
                timer: 2000,
                toast : false, 
            });
        },

        buyProduct() {
            alert("Acquistato!");
        },

        goBack() {
            this.$router.go(-1);
        },

        saveActive() {
            //console.log(this.selectedAds.active)
            let id = this.selectedAds.id;
            let active = this.selectedAds.active;
            let x = store.dispatch('changeActiveAds', {id, active});
            x.then((res) => {
                if(res) {
                    this.alertSuccess();
                } else {
                    this.alertError();
                }
            })
            
        }
    },
    mounted() {
        if (this.user) {   
            //console.log(this.user)
        } 
        else {
            router.replace('/error')
        }
    }
};
</script>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */

 

<style>
.product-background {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    height: 100vh;
    /* width: 100%; */
    /* position: absolute; */
    /* top: 100px; */

    /* left: 0;
    z-index: -1;
    text-align: center; */
}

#checkbox {
    width: 30px;
    height: 30px;
}

.product-content {
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 5%;
    padding-right: 5%;
  /* background-color: var(--product-background);
  border-radius: 1rem;
  position: relative;
  top: 50%; */
  /* transform: translateY(-50%); */
  /* width: 100%; */
  /* margin: auto;
  padding-left: 2%;
  padding-right: 2%; */
}

/* .product-content h1,
h3,
h2 {
  padding: 0.6em 0;
  background-color: aqua;
} */

.product-content h2 {
  font-size: 3em;
  font-weight: 700;
  color: var(--primary-color);
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

/* .user-info h3 {
  margin-right: 1rem;
} */
.uim {
    margin-top: 2%;
    margin-bottom: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ownAds {
    padding-top: 2%;
    border-radius: 2em;
    background-color: rgba(196, 196, 196, 0.74);
}

.user-image {
  width: 3rem;
  height: 3rem;
  
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.spanbold {
    font-weight: bold;
}
</style>
