<template>
    <div class="card" :class="{cardowner : isOwner}">
        <div class="card-content">
            <h2 class="titlecard">{{ title }}</h2>
            <h3>{{ subtitle }} €</h3>
            <h3 class="under">{{ availableStr }}</h3>
        </div>
    </div>
</template>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */

<script>
import { mapGetters } from "vuex";

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        available : {
            type : Boolean,
            required : true,
        },
        owner : {
            type: String,
            required : true,
        }
    },

    computed : {

        ...mapGetters({
            user: "getUser",
        }),

        availableStr() {
            return this.available ? 'Disponibile' : 'Venduto'
        },

        isOwner() {
            return this.user.email === this.owner;
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
.cardowner {
    border-width: 4px;
    background-color: #D9E7F9 !important;
    color: rgba(0, 0, 0, 0.848) !important
}
.card {
    border-radius: 1.5em;
    padding: 1em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0.5em;
    min-width: min(35%, 160px);
    max-width: 200px;
    aspect-ratio: 1/1;
    height: auto;
    color: var(--white);
}


.card:nth-child(odd) {
    background: var(--primary-color);
}
.card:nth-child(even) {
    background: var(--secondary-color);
}
.card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.card {
  /* word-wrap: break-word; */
    overflow-wrap: break-word;
}

.card h2 {
    width: 100%;
    max-width: 100%;
    font-size: 1.4em;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0;
    margin-top: 2%;
}
.card h3 {
    font-size: 1.2em;
    font-weight: 400;
    margin: 0;
    padding: 0;
}

.card:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.2s;
}

.under {
    text-decoration: underline;
}

@media screen and (max-width: 700px) {
    .card h2 {
        font-size: 1.1em;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0;
        margin: 0;
  }
  .card h3 {
    font-size: 0.8em;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
}
</style>
