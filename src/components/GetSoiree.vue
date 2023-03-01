<template>
  <div>
    <h1>Soirees n°{{$route.params.id}}</h1>
    <soiree-item :soiree="soiree" />
  </div>
</template>

<script>

import SoireeItem from "@/components/SoireeItem.vue";

export default {
  name : "listSoiree",
  computed: {
    link() {
      return "http://localhost:3001/soirees/" + this.$route.params.id;
    }
  },
  components: {
    SoireeItem,
  },
  data() {
    return {
      soiree : {} // sportif courant initialisé comme vide avec une adresse vide
    }
  },
  created()  {
    fetch(this.link, {
      headers: {
        Accept: 'application/json',
      }
    })
        .then((response) => response.json())
        .then((json) => {this.soiree = json})
        .catch((e) => console.error("fecth error: " + e));
  }
};
</script>
