<template>
  <h1>Artistes</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Pseudo</th>
        <th scope="col">Ville d'origine</th>
        <th scope="col">Age</th>
      </tr>
    </thead>
    <tbody v-for="a in propsArtistes">
      <tr>
        <td>{{a.pseudo}}</td>
        <td>{{a.villeOrigine}}</td>
        <td>{{a.age}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        props: {
          propsArtistes: Array,
          propsModeConnecte: Boolean,
          propsUser: Object
        },

    }
</script>

<style>
.artiste {
  display: flex;
}

.artiste div {
  display: flex;
}
</style>
