<template>
    <div class="panel">
        <header-component
            title="Balon"
            subtitle="Crea un nuovo annuncio!"
            background="https://images.unsplash.com/photo-1555876484-a71a693b161b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        <div class="edit-panel">

            <div class="field">
                <div class="title">Titolo:</div>
                <input
                    class="value"
                    contenteditable="true"
                    placeholder="Titolo" 
                    type="text"
                    maxlength="30"
                    v-model="title"                    
                />
            </div>

            <div class="field">
                <div class="title">Descrizione:</div>
                <textarea
                    class="value"
                    contenteditable="true"
                    placeholder="Descrizione" 
                    type="text"   
                    v-model="description"                 
                />
            </div>

            <div class="field">
                <div class="title">Prezzo:</div>
                <input
                    class="value"
                    contenteditable="true"
                    placeholder="Prezzo" 
                    type="text"
                    maxlength="6"    
                    v-model="price"                
                />
            </div>

            <div class="field">
                <div class="title">Categoria:</div>
                <select
                    v-model="category"
                    class="value"
                    placeholder="cat"           
                >
                    <option v-for="(c,index) in balon_categories" :key="index">{{ c.name }}</option>
                    <!-- <option>A</option>
                    <option>B</option>
                    <option>C</option> -->
                </select>
            </div>
    </div>
    <button-component text="Pubblica" @mainClick="publish()" />
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
import store from "@/store";
import { mapGetters } from "vuex";

export default {
    components: { HeaderComponent, ButtonComponent },
    name: "BalonCreateView",

    data() {
        return {
            categories: [
            {
            id: 1,
            name: "Libri",
            },
            {
            id: 2,
            name: "Tecnologia",
            },
            ],

            products: [
            {
            id: 1,
            name: "Libro di fisica",
            price: 10,
            category: "Libri",
            image:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Libro di fisica per la scuola superiore",
            user: "Mario Rossi",
            },
            {
            id: 2,
            name: "Libro di fisica",
            price: 10,
            category: "Libri",
            image:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Libro di fisica per la scuola superiore",
            user: "Mario Rossi",
            },
            {
            id: 3,
            name: "Libro di fisica",
            price: 10,
            category: "Libri",
            image:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Libro di fisica per la scuola superiore",
            user: "Mario Rossi",
            },
            {
            id: 4,
            name: "Libro di fisica",
            price: 10,
            category: "Libri",
            image:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Libro di fisica per la scuola superiore",
            user: "Mario Rossi",
            },
            ],

            categoriess : [
            "Cat1", "Cat2","Cat3"
            ],

            title : '',
            description : '',
            price : '',
            category : 'Altro',
        }
    },

    methods : {

        resetValues() {
            this.title = '',
            this.description = '',
            this.price = '',
            this.category = 'Altro'
        },

        publish() {
            const priceNumber = parseFloat(this.price)
            if(!this.title || !this.description || !priceNumber) {
                this.alertError();
                return;
            }        
            const ads = {
                owneremail : this.user.email,
                title : this.title,
                description : this.description,
                price : priceNumber,                
            }
            const category = this.category;    
            //alert(this.title + '\n' + this.description + '\n' + this.price + '\n' + this.category);
            const x = store.dispatch('createNewAds', { ads, category })
            x.then((r) => {
                if(r) {
                    this.alertSuccess();
                    this.resetValues();
                }
                else
                    this.alertError();
            })
        },

        alertSuccess() {
            this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'Complimenti! Il tuo Post ora è pubblico!',
                showConfirmButton: false,
                timer: 2000,
                toast : false, 
            });
        },

        alertError() {
            this.$swal({
                position: 'top-end',
                icon: 'error',
                title: 'Qualcosa è andato storto! Ricorda che ogni campo deve essere inserito!',
                showConfirmButton: false,
                timer: 2000,
                toast : false, 
            });
        }
    },

    computed: {
        ...mapGetters({
            user: "getUser",
            balon_categories: "getBalonCategories",
        }),
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
.edit-panel .field2 .edit-icon {
  width: 1em;
  height: 1em;
}
.fb {
  font-weight: bold;
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
</style>