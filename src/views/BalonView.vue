<template>
    <div class="panel">
        <header-component
            title="Balon"
            subtitle="In questa sezione puoi acquistare prodotti da altri studenti"
            background="https://images.unsplash.com/photo-1555876484-a71a693b161b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />

        <div v-if="ads">
            <category-component v-for="(cat,index) in balon_categories" 
            :categories="cat" :key="index" :products="ads.filter((p) => p.category.name === cat.name)" >
            </category-component>
        </div>

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
            user: "getUser",
        }),
    },

    mounted() {
        if (this.user) {   
            store.dispatch('getBalonSaleAds');
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
.messages {
  margin: auto;
  max-width: 90%;
  padding: 2% 0 25% 0;
}
</style>
