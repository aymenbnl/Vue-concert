<template>
  <div class="soiree">
    <h2>{{ nom }}</h2>
    <p>Soirée dans la salle n°{{ id_salle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id_soiree: {
      type: Number,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    id_salle: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.soiree {
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
