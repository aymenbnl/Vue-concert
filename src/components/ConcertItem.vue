<template>
  <div>
    <h2>le concert a lieu le {{ concert.date }}</h2>
    <p>il debute a {{ concert.heureDebut }}</p>
    <p>et finis a{{ concert.heureFin }}</p>
    <p>il est jouer par le groupe {{ concert.id_groupe }}</p>
    <p>dans la soiree {{ concert.soiree.id_soiree }}</p>
  </div>
</template>

<script>
export default {
  props: {
    concert: Object,
  },
};
</script>
