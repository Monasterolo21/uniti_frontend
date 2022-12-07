// TODO: complete this component
<template>
  <div
    class="product-background panel"
    v-bind:style="
      'background-image: var(--product-gradient), url(' +
      this.product.image +
      '); '
    "
  >
    <div class="product-content">
      <h1>{{ this.product.name }}</h1>
      <h3 class="subtitle">{{ this.product.description }}</h3>
      <h2 class="subtitle">{{ this.product.price }}€</h2>
      <div class="user-info">
        <h3 class="subtitle">Venduto da: {{ this.product.user.name }}</h3>
        <div
          class="user-image"
          v-bind:style="
            'background-image: url(' + this.product.user.avatar + '); '
          "
        ></div>
      </div>
      <button-component
        text="Acquista"
        @primaryClick="this.buyProduct"
        secondary-text="Cancella"
        @secondaryClick="this.goBack"
      />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  components: { ButtonComponent },
  // computed: {
  //   p() {
  //     return this.$store.getters.getProductById(this.$route.params.id);
  //   },
  // },
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
            "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        },
        image:
          "https://images.unsplash.com/photo-1525972385596-02ad3049150b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      },
    };
  },

  methods: {
    buyProduct() {
      alert("Acquistato!");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.product-background {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  text-align: center;
}
.product-content {
  background-color: var(--product-background);
  border-radius: 1rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  margin: auto;
}

.product-content h1,
h3,
h2 {
  padding: 0.6em 0;
}

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

.user-info h3 {
  margin-right: 1rem;
}
.user-info .user-image {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
