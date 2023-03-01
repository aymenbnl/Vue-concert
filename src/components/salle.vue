<template>
  <div class="salle">
    <h2>{{ nom }}</h2>
    <p>{{ adresse }}</p>
    <p>Capacité : {{ capacite }}</p>
    <p>Gérant : {{ prenom_gest }} {{ nom_gest }}</p>
    <p>Association : {{ association }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id_salle: {
      type: Number,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
    capacite: {
      type: Number,
      required: true,
    },
    nom_gest: {
      type: String,
      required: true,
    },
    prenom_gest: {
      type: String,
      required: true,
    },
    association: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.salle {
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
