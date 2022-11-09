<template>
  <div class="panel">
    <header-component
      title="Home"
      subtitle="Guarda quello che le persone pubblicano su UNITI"
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
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc.",
        },
        {
          id: 2,
          name: "Mario Rossi",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          date: "20/11/2022 - 15:10",
          title: "Ciao a tutti",
          telegram: true,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc.",
        },
        {
          id: 3,
          name: "Mario Rossi",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          date: "20/11/2022 - 15:10",
          title: "Ciao a tutti",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl lorem quis nunc.",
        },
      ],
    };
  },
};
</script>
