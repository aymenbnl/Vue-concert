<template>
  <div>
    <h1>Liste des concerts</h1>
    <div v-for="concert in concerts" :key="concert.id_concert">
      <concert-item :concert="concert" />
    </div>
  </div>
</template>

<script>
import ConcertItem from "./ConcertItem.vue";

export default {
  name : "listConcert",
  components: {
    ConcertItem,
  },
  data() {
    return {
      concerts : {} // sportif courant initialisé comme vide avec une adresse vide
    }
  },
  created()  {
    fetch('http://localhost:3001/concerts', {
      headers: {
        Accept: 'application/json',
      }
    })
        .then((response) => response.json())
        .then((json) => {this.concerts = json})
        .catch((e) => console.error("fecth error: " + e));
  }
};
</script>
