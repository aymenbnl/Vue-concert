<template>
  <div class="artiste">
    <h2>{{ pseudo }}</h2>
    <p>Âge : {{ age }}</p>
    <p>Ville d'origine : {{ ville_origine }}</p>
    <p>Membre du groupe n°{{ id_groupe }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id_artiste: {
      type: Number,
      required: true,
    },
    pseudo: {
      type: String,
      required: true,
    },
    ville_origine: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    id_groupe: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.artiste {
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
