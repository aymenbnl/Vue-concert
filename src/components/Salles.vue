<template>
  <h1>Soiree</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">nom</th>
        <th scope="col">adresse</th>
        <th scope="col">capacite</th>
        <th scope="col">prenom gestionnaire</th>
        <th scope="col">nom gestionnaire</th>
        <th scope="col">association</th>
      </tr>
    </thead>
    <tbody v-for="s in propsSalles">
      <tr>
        <td>{{s.id_salle}}</td>
        <td>{{s.nom}}</td>
        <td>{{s.adresse}}</td>
        <td>{{s.capacite}}</td>
        <td>{{s.prenom_gest}}</td>
        <td>{{s.nom_gest}}</td>
        <td>{{s.association}}</td>
        <td v-for="soiree in s.listSoiree">
          <p>{{soiree.nom}}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        props: {
          propsSalles: Array,
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
