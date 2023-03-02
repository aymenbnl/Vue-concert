<template>
  <h1>Concert</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Heure de debut</th>
        <th scope="col">Heure de fin</th>
      </tr>
    </thead>
    <tbody v-for="c in propsConcerts">
      <tr>
        <td>{{c.date}}</td>
        <td>{{c.heureDebut}}</td>
        <td>{{c.heureFin}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        props: {
          propsConcerts: Array,
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
