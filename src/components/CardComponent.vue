<template>
  <div class="card">
    <div class="card-content">
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
    </div>
  </div>
</template>

<script>
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
  },
};
</script>

<style>
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
  height: 100%;
}

.card h2 {
  font-size: 1.6em;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
.card h3 {
  font-size: 1.2em;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
</style>
