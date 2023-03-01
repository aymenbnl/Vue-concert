<template>
  <div>
    <h1>concert n°{{$route.params.id}}</h1>
    <concert-item :concert="concert" />
  </div>
</template>

<script>
import ConcertItem from "./ConcertItem.vue";
export default {
  name : "listConcert",
  computed: {
    link() {
      return "http://localhost:3001/concerts/" + this.$route.params.id;
    }
  },
  components: {
    ConcertItem,
  },
  data() {
    return {
      concert : {} // sportif courant initialisé comme vide avec une adresse vide
    }
  },
  created()  {
    fetch(this.link, {
      headers: {
        Accept: 'application/json',
      }
    })
        .then((response) => response.json())
        .then((json) => {this.concert = json;})
        .catch((e) => console.error("fecth error: " + e));
  }
};
</script>
