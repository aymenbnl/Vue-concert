<template>
  <h1>Concert</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Date</th>
        <th scope="col">Heure de debut</th>
        <th scope="col">Heure de fin</th>
      </tr>
    </thead>
    <tbody v-for="c in propsConcerts">
      <tr>
        <td>{{c.id_concert}}</td>
        <td>{{c.date}}</td>
        <td>{{c.heureDebut}}</td>
        <td>{{c.heureFin}}</td>
        <td><a href="#" @click="this.handleDelConcert(c.id_concert)">del</a></td>
      </tr>
    </tbody>
  </table>
  <p><a href="#" @click="this.handleAddConcert()">add</a></p>
</template>

<script>
    export default {
        props: {
          propsConcerts: Array,
          propsModeConnecte: Boolean,
          propsUser: Object
        },
        methods: {
          handleDelConcert(id) {
            fetch ("http://localhost:3001/concerts/"+id, {
              method: 'DELETE',
            })
          },
          handleAddConcert() {
            fetch ("http://localhost:3001/concerts", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "date": "2023-03-02T23:00:00.000+00:00",
                "heureDebut": "13:00:00",
                "heureFin": "14:30:00",
                "id_groupe": 1,
                "soiree": {
                  "id_soiree": 1
                }
              })
            })
          }
        }
    }
</script>

<style>
.artiste div {
  display: flex;
}
</style>
