<template>
  <div class="soiree">
    <h2>{{ soiree.nom }}</h2>
    <p>Soirée dans la salle <router-link :to="{name: 'getSalle', params: {id: soiree.salle.id_salle}}">n°{{soiree.salle.id_salle }}</router-link></p>
    <p>concert de la soiree:</p>
    <ul v-for="concert in soiree.listConcert" :key="concert.id_concert">
      <li><router-link :to="{name: 'getConcert', params: {id: concert.id_concert}}">{{concert.heureDebut}} -> {{concert.heureFin}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    soiree: Object,
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
