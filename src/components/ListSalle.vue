<template>
  <div>
    <h1>Liste des Salles</h1>
    <div v-for="salle in salles" :key="salle.id_salle">
      <salle-item :salle="salle" />
    </div>
  </div>
</template>

<script>

import SalleItem from "@/components/SalleItem.vue";

export default {
  name : "listSalle",
  components: {
    SalleItem,
  },
  data() {
    return {
      salles : {} // sportif courant initialisé comme vide avec une adresse vide
    }
  },
  created()  {
    fetch('http://localhost:3001/salles', {
      headers: {
        Accept: 'application/json',
      }
    })
        .then((response) => response.json())
        .then((json) => {this.salles = json})
        .catch((e) => console.error("fecth error: " + e));
  }
};
</script>
