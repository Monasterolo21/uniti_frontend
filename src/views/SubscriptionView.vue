<template>
    <div class="panel">
        <header-component
        title="LE MIE BACHECHE"
        subtitle="Qui trovi tutte le bacheche che segui al momento"
        background="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
        />
        <div class="subclass-horizontal-cards">
            <h1>BACHECHE</h1>
                <div class="board-group">
        

                    <CardComponent 
                        v-for="b in boards"
                        :key="b.id"
                        :title="b.name"
                        :subtitle="b.description"
                        @click="goToGroup(b)"
                    />

                </div>
        </div>
        <div class="subclass-horizontal-cards">
            <h1 class="todoTitle">GRUPPI</h1>
            <h3 class="todoTitle">Presto su UNIT-I</h3>
                <div class="board-group">
                    <CardComponent
                        v-for="gr in groups"
                        :key="gr.id"
                        :title="gr.name"
                        :subtitle="gr.tag"
                        :toDo="true"
                    />
        </div>
    </div>
    
  </div>
</template>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */


<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import store from "@/store";
import router from '@/router';
import { mapGetters } from "vuex";

export default {
    components: { HeaderComponent, CardComponent },
  
    name: "SubscriptionView",

    data() {
        return {
            board: [
                {
                id: 1,
                name: "Bacheca Dipartimentale Informatica ufficiale Piero della francesca 12",
                tag: "Bacheca dipartimentale ufficiale di Matematica",
                },
                {
                id: 2,
                name: "Bacheca Dipartimentale Informatica",
                tag: "Bacheca dipartimentale ufficiale di Matematica",
                },
                {
                id: 3,
                name: "Bacheca\nDipartimentale\nInformatica",
                tag: "Bacheca dipartimentale ufficiale di Matematica",
                },
            ],

            groups: [
                {
                id: 1,
                name: "Ping-Pong",
                tag: "#ping-pong",
                },
                {
                id: 2,
                name: "Calcio",
                tag: "#calcio",
                },
                {
                id: 3,
                name: "Basket",
                tag: "#basket",
                },
            ],
        };
    },

    methods: {
        goToGroup(board) {
            let id = board.id.toString();
            router.push({ name: 'group', params: {id} })
            
        },
    },

    mounted() {
        if (this.user) {   
            store.dispatch("getAllUnitoBoards");
        } 
        else {
            router.replace('/error')
        }
        
    },

    computed: {
        ...mapGetters({
            user: "getUser",
            boards: "getUnitoBoards",
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
.board-group {
    display: flex;
    flex-wrap: wrap;
    flex-flow: row;
    justify-content: flex-start;
    width: 100%;
    overflow-x: scroll;
}
.subclass-horizontal-cards {
    padding: 1em 0 1em 3%;
    overflow: hidden;
}
.subclass-horizontal-cards h1 {
    margin: 0;
    padding: 0;
    font-size: 2em;
    float: left;
    width: 100%;
    text-align: left;
}
.subclass-horizontal-cards .todoTitle {
    margin: 0;
    padding: 0;
    font-size: 2em;
    float: left;
    width: 100%;
    text-align: left;
    color: gray; 
}
</style>
