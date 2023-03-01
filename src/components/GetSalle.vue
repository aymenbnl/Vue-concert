<template>
  <div>
    <h1>Salles n°{{$route.params.id}}</h1>
    <salle-item :salle="salle" />
  </div>
</template>

<script>
import SalleItem from "@/components/SalleItem.vue";
export default {
  name : "listSalle",
  computed: {
    link() {
      return "http://localhost:3001/salles/" + this.$route.params.id;
    }
  },
  components: {
    SalleItem,
  },
  data() {
    return {
      salle : {} // sportif courant initialisé comme vide avec une adresse vide
    }
  },
  created()  {
    fetch(this.link, {
      headers: {
        Accept: 'application/json',
      }
    })
        .then((response) => response.json())
        .then((json) => {this.salle = json})
        .catch((e) => console.error("fecth error: " + e));
  }
};
</script>
