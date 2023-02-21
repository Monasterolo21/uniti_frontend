<template>
    <!-- <div class="message" :class="{ telegram: message.telegram }" :style="{backgroundColor : color}"> -->
    <div class="message" :style="{'background-color' : this.color()}">
        <div class="message-header">
            <div class="message-info">
                <h4>{{ message.owneremail }}</h4>
            </div>
            <div class="avatar">
                <img :src="messageAvatar"/>
            </div>
        </div>
        <div class="message-title">
            <h2>{{ message.title }}</h2>
        </div>
        <div class="message-content">
            <p>{{ message.description }}</p>
        </div>
        <div class="message-footer">
            <h4>{{ msgDate }}</h4>
        </div>
    </div>
</template>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */


<script>
export default {
    props: {
        message: {
            type: Object,
            required: true,
        },
        index : {
            type: Number
        }
    },


    mounted() {
    },



    computed: {
        msgDate() {
            let d = new Date(this.message.dateTime);
            return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes();
        },

        messageAvatar() {
        return require('@/assets/img/person' + this.getRandomInt(8).toString() + '.png');
        },
    },

    methods : {
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
        color() {
            return this.index % 2 === 0 ? '#FFEFEF' : '#f3f3f3';
        }
    },

};
</script>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */

<style>
.message {
    max-width: 90%;
    margin: auto;
    margin-top: 1em;
    background: var(--red-ice);
    border-radius: 1.5em 1.5em 1.5em 0.4em;
    padding: 1em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.telegram {
    background: var(--telegram);
}

.message-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
}

.message-info {
    float: right;
    margin: auto 0.5em;
}

.message-info h4 {
    font-weight: 400;
}

.message-title {
    margin: 0;
    padding: 0;
}

.message-title h2 {
    margin: 0;
    padding: 0;
}

.message-content {
    margin: 0;
    padding: 0;
}

.message-footer {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
</style>
