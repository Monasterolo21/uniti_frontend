<template>
    <!-- <div class="message" :class="{ telegram: message.telegram }" :style="{backgroundColor : color}"> -->
    <div class="message">
        <div class="message-header">
            <div class="message-info">
                <h4>Annuncio Telegram</h4>
                <h4>UniTo Avvisi</h4>
            </div>
            <div class="avatar">
                <img :src="messageAvatar"/>
            </div>
        </div>
        <!-- <div class="message-title">
            <h2>{{ message.title }}</h2>
        </div> -->
        <div class="message-content">
            <p class="tg_text">{{ message.message }}</p>
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

    data() {
        return {
    
        }
    },


    mounted() {
    },



    computed: {


        msgDate() {
            var unix_timestamp = this.message.dateOrder;
            var date = new Date(unix_timestamp * 1000);
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();
            return d + '-' + m + '-' + y + ' - ' +hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        },

        messageAvatar() {
        return require('@/assets/img/telegram.png');
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
    background-color: var(--telegram);
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
.message-content .tg_text {
    white-space: pre;
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
