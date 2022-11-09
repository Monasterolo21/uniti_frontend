<template>
  <div class="panel">
    <HeaderComponent
      title="Home"
      subtitle="Guarda quello che le persone pubblicano su UNITI"
    />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: { HeaderComponent },
  name: "HomeView",
};
</script>
