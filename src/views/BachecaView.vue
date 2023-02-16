<template>
    <div class="panel">
        <header-component
            v-if="currentBoard"
            :title="currentBoard.name"
            :subtitle="currentBoard.description"
            background="https://images.unsplash.com/photo-1635070041409-e63e783ce3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1379&q=80"
        />
        <messages-component v-if="contents" :messages="contents" />
        <input-bar-component text="Scrivi un messaggio" />
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
import InputBarComponent from "@/components/InputBarComponent.vue";
import store from "@/store";
import { mapGetters } from "vuex";
import router from "@/router";

export default {
    components: { HeaderComponent, MessagesComponent, InputBarComponent },
    name: "BachecaView",

    data() {
        return {
            messages: [
            {
                id: 1,
                name: "Mario Rossi",
                avatar:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                date: "20/11/2022 - 15:10",
                title: "Ciao a tutti",
            },
            {
                id: 2,
                name: "Mario Rossi",
                avatar:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                date: "20/11/2022 - 15:10",
                title: "Ciao a tutti",
                telegram: true,
            },
            {
                id: 3,
                name: "Mario Rossi",
                avatar:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                date: "20/11/2022 - 15:10",
                title: "Ciao a tutti",
            },
            ],
        };
    },

    mounted() {
        if (this.user) {   
            //console.log(this.boards)
            let board = this.boards.find(el => el.id.toString() === this.$route.params.id);
            store.dispatch('getContentsByBoard',board.id);
            store.commit('setCurrentUnitoBoard', board)
        } 
        else {
            router.replace('/error')
        }
    },


    methods: {
        
    },

    computed : {
        ...mapGetters({
            contents: "getUnitoBoardContents",
            boards: "getUnitoBoards",
            currentBoard : 'getCurrentBoard',
            user: "getUser",
        }),
    }
};
</script>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */
