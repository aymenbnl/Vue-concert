<template>
  <div>
    <h1>Liste des Soirees</h1>
    <div v-for="soiree in soirees" :key="soiree.id_soiree">
      <soiree-item :soiree="soiree" />
    </div>
  </div>
</template>

<script>

import SoireeItem from "@/components/SoireeItem.vue";

export default {
  name : "listSoiree",
  components: {
    SoireeItem,
  },
  data() {
    return {
      soirees : {} // sportif courant initialisé comme vide avec une adresse vide
    }
  },
  created()  {
    fetch('http://localhost:3001/soirees', {
      headers: {
        Accept: 'application/json',
      }
    })
        .then((response) => response.json())
        .then((json) => {this.soirees = json})
        .catch((e) => console.error("fecth error: " + e));
  }
};
</script>
