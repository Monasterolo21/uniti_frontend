<template>
  <div class="search-background panel">
    <global-search-component />
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
        v-for="s in searchResults"
        :key="s.id"
        :result="s"
      />
    </div>
  </div>
</template>

<script>
import GlobalSearchComponent from "@/components/GlobalSearchComponent.vue";
import SearchCardComponent from "@/components/SearchCardComponent.vue";

export default {
  components: { GlobalSearchComponent, SearchCardComponent },
  // computed: {
  //   p() {
  //     return this.$store.getters.getProductById(this.$route.params.id);
  //   },
  // },
  data() {
    return {
      activeId: 1,
      categories: [
        {
          id: 1,
          name: "Tutti",
        },
        {
          id: 2,
          name: "Bacheche",
        },
        {
          id: 3,
          name: "gruppi",
        },
        {
          id: 4,
          name: "prodotti",
        },
        {
          id: 5,
          name: "utenti",
        },
      ],

      searchResults: [
        {
          id: 1,
          name: "Libro di Matematica",
          description: "Libro di matematica per la scuola superiore",
          price: 10,
          category: "Libri",
          user: {
            name: "Mario Rossi",
            avatar:
              "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          },
          image:
            "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 2,
          name: "Libro di Fisica",
          description: "Libro di fisica per la scuola superiore",
          price: 10,
          category: "Libri",
          user: {
            name: "Mario Rossi",
            avatar:
              "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          },
          image:
            "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 3,
          name: "Libro di Chimica",
          description: "Libro di fisica per la scuola superiore",
          price: 10,
          category: "Libri",
          user: {
            name: "Mario Rossi",
            avatar:
              "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          },
        },
      ],
    };
  },

  methods: {
    buyProduct() {
      alert("Acquistato!");
    },
    goBack() {
      this.$router.go(-1);
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
};
</script>

<style scoped>
.search-background {
  background: var(--search-background);
  z-index: -1;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  height: 100vh;
  padding-top: 4em;
}
.category-cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  overflow-x: scroll;
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
  margin: 2em auto;
}
</style>
