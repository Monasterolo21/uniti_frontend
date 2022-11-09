<template>
  <div class="content-panel">
    <div class="messages">
      <message-component
        v-for="message in messages"
        :message="message"
        :key="message.id"
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
  margin: auto;
  max-width: 90%;
  padding: 2% 0 5% 0;
}
</style>
