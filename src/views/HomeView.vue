<template>
    <div class="panel">
        <header-component
            title="Home"
            subtitle="Guarda quello che le persone pubblicano su UNITI"
            background="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <switch-category-component @changeCategory="metodo"/>
        <messages-component v-if="homeContent && content_index === 1" :messages="homeContent" />
        <messages-component-t-g v-if="tgContents && content_index === 2" :messages="tgContents" />
        <!-- <messages-component v-if="homeContent" :messages="messages" /> -->
        <input-bar-component v-if="content_index === 1" text="Scrivi nella home" />
    </div>
</template>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MessagesComponent from "@/components/MessagesComponent.vue";
import MessagesComponentTG from "@/components/MessagesComponentTG.vue";
import InputBarComponent from "@/components/InputBarComponent.vue";
import SwitchCategoryComponent from "@/components/SwitchCategoryComponent.vue";
import store from "@/store";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
    components: {
        HeaderComponent,
        MessagesComponent,
        MessagesComponentTG,
        InputBarComponent,
        SwitchCategoryComponent,
    },
    
    name: "HomeView",

    data() {
        return {
            messages: [
                {
                id: 1,
                name: "Mario Rossi",
                avatar:
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                dateTime: "20/11/2022 - 15:10",
                title: "Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti \n" +
                "Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti \n" +
                "Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti \n" + 
                "Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti \n" +
                "Ciao a tutti Ciao a tutti Ciao a tutti Ciao a tutti \n"  
                ,
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc." +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc." + 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc." + 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc." + 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc."

                },
                {
                id: 3,
                name: "Mario Rossi",
                avatar:
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                dateTime: "20/11/2022 - 15:10",
                title: "Ciao a tutti",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc.\n" + 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc.",
                },
                {
                id: 3,
                name: "Mario Rossi",
                avatar:
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                dateTime: "20/11/2022 - 15:10",
                title: "Ciao a tutti",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc.",
                },
            ],
            content_index : 1,
        };
  },

    computed: {
        ...mapGetters({
            user: "getUser",
            homeContent: "getHomeContent",
            tgContents : 'getTelegramContents',
        }),
    },

    methods: {
        metodo(index) {
            this.content_index = index;
        }
    },

    mounted() {
        if (this.user) {   
            store.dispatch('getContentsByBoard');
            store.dispatch('getTGContents');
            store.dispatch('getBalonCategories');
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
