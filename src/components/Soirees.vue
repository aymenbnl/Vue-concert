<template>
  <h1>Soiree</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">nom</th>
        <th scope="col">concerts</th>
      </tr>
    </thead>
    <tbody v-for="s in propsSoirees">
      <tr>
        <td>{{s.id_soiree}}</td>
        <td>{{s.nom}}</td>
        <td v-for="c in s.listConcert">
          <p>{{c.id_concert}}</p>
        </td>
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
