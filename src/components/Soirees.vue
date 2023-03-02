<template>
  <h1>Soiree</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">nom</th>
      </tr>
    </thead>
    <tbody v-for="s in propsSoirees">
      <tr>
        <td>{{s.nom}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        props: {
          propsSoirees: Array,
          propsModeConnecte: Boolean,
          propsUser: Object
        },

    }
</script>

<style>
.artiste div {
  display: flex;
}
</style>
