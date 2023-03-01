<template>
  <div class="concert">
    <h2>le concert a lieu le {{ concert.date }}</h2>
    <p>il debute a {{ concert.heureDebut }}</p>
    <p>et finis a {{ concert.heureFin }}</p>
    <p>il est jouer par le groupe {{ concert.id_groupe }}</p>
    <p>dans la soiree <router-link :to="{name: 'getSoiree', params: {id: concert.soiree.id_soiree}}">{{ concert.soiree.nom }}</router-link></p>
  </div>
</template>

<script>
export default {
  props: {
    concert: Object,
  },
};
</script>

<style scoped>
.concert {
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
