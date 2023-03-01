<template>
  <div class="utilisateur">
    <h2>{{ identifiant }}</h2>
    <p>ID utilisateur : {{ id_utilisateur }}</p>
    <p>Mot de passe : {{ mot_de_passe }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id_utilisateur: {
      type: Number,
      required: true,
    },
    identifiant: {
      type: String,
      required: true,
    },
    mot_de_passe: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.utilisateur {
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
