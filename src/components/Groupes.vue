<template>
  <h1>Groupes</h1>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">N°</th>
      <th scope="col">Artistes</th>
    </tr>
  </thead>
  <tbody v-for="g in propsGroupes">
    <tr>
      <th scope="row">{{g.idGroupe}}</th>
      <td v-for="a in g.listArtiste" class="artiste">
        <p>{{a.pseudo}}</p>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
    export default {
        props: {
          propsGroupes: Array,
          propsModeConnecte: Boolean,
          propsUser: Object
        },
    }
</script>

<style scoped>

.artiste {
  display: flex;
}
</style>
