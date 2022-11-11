<template>
  <div class="card">
    <div class="avatar">
      <img :src="person.avatar" />
    </div>
    <div class="name">
      <h2>{{ person.name }}</h2>
    </div>
    <div class="card-actions">
      <div class="card-button">
        <img src="@/assets/img/contact.png" />
      </div>
      <div class="card-button" @click="messagePerson">
        <img src="@/assets/img/message.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },

  methods: {
    messagePerson() {
      this.$route.params.person = this.person;
      this.$router.push("/chat");
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 1.5em;
  padding: 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0.5em;
  min-width: min(15%, 100px);
  max-width: 180px;
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
  height: 100%;
}

.avatar {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 100%;
  display: block;
}

.avatar img {
  width: 70%;
  height: 70%;
  border-radius: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
}
.name {
  padding: 0.8em;
  text-align: center;
  display: block;
}
.name h2 {
  font-size: 1.8em;
  font-weight: 400;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.card-actions .card-button {
  width: 40%;
  height: 40%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-actions .card-button img {
  width: 40%;
  height: 40%;
  object-fit: contain;
}
</style>
