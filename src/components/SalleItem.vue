<template>
  <div class="salle">
    <h2>{{ salle.nom }}</h2>
    <p>est a l'adresse {{ salle.adresse }}</p>
    <p>Capacité : {{ salle.capacite }}</p>
    <p>Gérant : {{ salle.prenom_gest }} {{ salle.nom_gest }}</p>
    <p>Association : {{ salle.association }}</p>
    <p>liste des soirees:</p>
    <ul v-for="soiree in salle.listSoiree" :key="soiree.id_soiree">
      <li><router-link :to="{name: 'getSoiree', params: {id: soiree.id_soiree}}">{{soiree.nom}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    salle: Object,
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
