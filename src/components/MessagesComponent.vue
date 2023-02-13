<template>
  <div class="content-panel">
    <div class="messages">
      <message-component
        v-for="(message,index) in messages"
        :message="message"
        :key="message.id"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import MessageComponent from "./MessageComponent.vue";
export default {
  components: { MessageComponent },
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.messages {
  margin: 0 auto;
  max-width: 90%;
  padding: 2% 0 8% 0;
}

@media screen and (max-width: 749px) {
  .messages {
    padding-bottom: 20%;
  }
}
</style>
