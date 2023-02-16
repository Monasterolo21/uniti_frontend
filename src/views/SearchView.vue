<template>
    <div class="search-background panel">

        <div class="search-box">
            <input
            type="text"
            placeholder="Cerca su UNITI"
            v-model="search"
            @keyup.enter="sendMessage"
            />
        </div>

        <!-- <global-search-component /> -->
            <div class="category-cards">
                <div
                class="category-card"
                v-for="c in categories"
                :key="c.id"
                :class="{ active: isActive(c.id) }"
                @click="setActive(c.id)"
                >
                <h3>{{ c.name }}</h3>
                </div>
            </div>

        <div class="search-cards">
            <search-card-component
            v-for="i in itemsToShow"
            :key="i.id"
            :result="i"
            @click="goToItemPage(i)"
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
// import GlobalSearchComponent from "@/components/GlobalSearchComponent.vue";
import SearchCardComponent from "@/components/SearchCardComponent.vue";
import { mapGetters } from "vuex";
import router from "@/router";
import store from "@/store";

export default {
    components: { /*GlobalSearchComponent, */SearchCardComponent },

    data() {
        return {
            search : '',
            activeId: 1,
            categories: [
                {
                    id: 1,
                    name: "Bacheche",
                },
                {
                    id: 2,
                    name: "prodotti",
                },            
            ],

            // searchResults: [
            // {
            // id: 1,
            // name: "Libro di Matematica",
            // description: "Libro di matematica per la scuola superiore",
            // price: 10,
            // category: "Libri",
            // user: {
            //     name: "Mario Rossi",
            //     avatar:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // image:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // {
            // id: 1,
            // name: "Libro di Matematica",
            // description: "Libro di matematica per la scuola superiore",
            // price: 10,
            // category: "Libri",
            // user: {
            //     name: "Mario Rossi",
            //     avatar:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // image:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // {
            // id: 1,
            // name: "Libro di Matematica",
            // description: "Libro di matematica per la scuola superiore",
            // price: 10,
            // category: "Libri",
            // user: {
            //     name: "Mario Rossi",
            //     avatar:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // image:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // {
            // id: 1,
            // name: "Libro di Matematica",
            // description: "Libro di matematica per la scuola superiore",
            // price: 10,
            // category: "Libri",
            // user: {
            //     name: "Mario Rossi",
            //     avatar:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // image:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // {
            // id: 2,
            // name: "Libro di Fisica",
            // description: "Libro di fisica per la scuola superiore",
            // price: 10,
            // category: "Libri",
            // user: {
            //     name: "Mario Rossi",
            //     avatar:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // image:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // {
            // id: 3,
            // name: "Libro di Chimica",
            // description: "Libro di fisica per la scuola superiore",
            // price: 10,
            // category: "Libri",
            // user: {
            //     name: "Mario Rossi",
            //     avatar:
            //     "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // },
            // },
            // ],
        };
    },

    computed : {
        ...mapGetters({
            boards : 'getUnitoBoards',
            ads : 'getBalonSaleAds',
            user: "getUser",
        }),

        itemsToShow() {
            if(this.search.length <= 3)
                return [];
            switch (this.activeId) {
                case 1: {                    
                    return this.boards.filter((b) => b.name.toLowerCase().includes(this.search.toLowerCase()))
                }
                case 2:
                    return this.ads.filter((b) => b.description.toLowerCase().includes(this.search.toLowerCase()))
                default:
                    return null;
            }
        }
    },

    methods: {

        goToItemPage(item) {
            let id = item.id;
            if(this.activeId === 1)
                router.push({ name: 'group', params: {id} });
            if(this.activeId === 2) {
                store.commit('setSelectedBalonAds',item);
                router.push({ name: 'products', params: {id} });
            }
                
        },

        isActive(id) {
            if (this.activeId == id) {
                return true;
            } else {
                return false;
            }
        },
        setActive(id) {
            this.activeId = id;
        },
    },

    mounted() {
        if (this.user) {  
            if(this.ads.length <= 0)
                store.dispatch('getBalonSaleAds');
            if(this.boards.length <= 0)
                store.dispatch("getAllUnitoBoards"); 
        } 
        else {
            router.replace('/error')
        }
    },
};
</script>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */

<style scoped>
.search-background {
  background: var(--search-background);
  z-index: -1;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  height: 100vh;
  padding-top: 2%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.category-cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 2em auto;
  margin-left: 5%;
}
.search-background .category-cards .category-card {
  margin: 0 0.5em;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  padding: 0.6em 1.5em;
  border-radius: 20px;
  cursor: pointer;
}
.search-background .category-cards .category-card.active {
  background: var(--primary-color);
}

.search-background .category-cards .category-card h3 {
  font-size: 1.2em;
  font-weight: 500;
  color: var(--white);
  text-transform: capitalize;
}

.search-background .search-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  overflow-x: scroll;
  
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 2em auto;
}

/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 */

 ::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--grey);
  opacity: 0.9; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--grey);
  opacity: 0.9; /* Firefox */
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--grey);
  opacity: 0.9; /* Firefox */
}

.search-box {
  width: 80%;
  height: 2.5em;
  border-radius: 10px;
  margin: auto;
  vertical-align: middle;
  text-align: middle;
  padding: 0 1em;
  background: transparent;
}

@media screen and (max-width: 400px) {
  .search-box {
    max-width: 70%;
  }
}

.search-box p {
  font-size: 1.2em;
  font-weight: 300;
  color: var(--grey);
  margin: auto;
  padding: 0;
  line-height: 2em;
  vertical-align: middle;
  text-align: center;
  vertical-align: middle;
}

.search-box input {
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--grey);
  font-size: 1.2em;
  font-weight: 300;
  vertical-align: middle;
  border-bottom: 1px solid var(--grey);
  text-align: center;
}
</style>
