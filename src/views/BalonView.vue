<template>
    <div class="panel">
        <header-component
            title="Balon"
            subtitle="In questa sezione puoi acquistare prodotti da altri studenti"
            background="https://images.unsplash.com/photo-1555876484-a71a693b161b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        <!-- <category-component :categories="balon_categories" /> -->

        <div v-if="ads">
            <category-component v-for="(cat,index) in balon_categories" 
            :categories="cat" :key="index" :products="ads.filter((p) => p.category.name === cat.name)" >
            </category-component>
        </div>
        <!-- Commented for the demo -->

        <add-button-component @click="newSale"/>
    </div>
</template>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CategoryComponent from "@/components/CategoryComponent.vue";
import AddButtonComponent from "@/components/AddButtonComponent.vue";
import router from '@/router';
import store from "@/store";
import { mapGetters } from "vuex";

export default {
    components: { HeaderComponent, CategoryComponent, AddButtonComponent },
    name: "BalonView",

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
        ]
        }
    },

    methods : {
        newSale() {
            router.push('/createads');            
        }
    },

    computed: {
        ...mapGetters({
            balon_categories: "getBalonCategories",
            ads: 'getBalonSaleAds',
        }),
    },

    mounted() {
        store.dispatch('getBalonSaleAds');
    }
};
</script>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */

<style>
.messages {
  margin: auto;
  max-width: 90%;
  padding: 2% 0 25% 0;
}
</style>
