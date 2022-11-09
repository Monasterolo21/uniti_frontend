<template>
  <div class="panel">
    <header-component
      title="Giovanna Rossi"
      subtitle="Mi piace il calcio"
      background="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    />
    <messages-component :messages="messages" />
    <input-bar-component text="Scrivi nella home" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MessagesComponent from "@/components/MessagesComponent.vue";
import InputBarComponent from "@/components/InputBarComponent.vue";

export default {
  components: { HeaderComponent, MessagesComponent, InputBarComponent },
  name: "HomeView",

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
};
</script>
