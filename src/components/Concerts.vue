<template>
  <h1>Concert</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">groupe</th>
        <th scope="col">Date</th>
        <th scope="col">Heure de debut</th>
        <th scope="col">Heure de fin</th>
        <th scope="col">soiree</th>
      </tr>
    </thead>
    <tbody v-for="c in propsConcerts">
      <tr>
        <td>{{c.id_concert}}</td>
        <td>{{c.id_groupe}}</td>
        <td>{{c.date}}</td>
        <td>{{c.heureDebut}}</td>
        <td>{{c.heureFin}}</td>
        <td>{{c.soiree.id_soiree}}</td>
        <td v-if="modeAdmin"><a href="#" @click="this.handleDelConcert(c.id_concert)">del</a></td>
        <td v-if="propsUser !== {}"><a href="#" @click="this.handleResConcert(c.id_concert)">reserve</a></td>
      </tr>
    </tbody>
  </table>
  <div v-if="modeAdmin">
    <input type="text" id="groupe" placeholder="identifiant du groupe" v-model="groupe"/><br/>
    <input type="date" id="date" placeholder="date" v-model="date"/><br/>
    <input type="time" id="heureDebut" placeholder="heure de debut" v-model="heureDebut"/><br/>
    <input type="time" id="heureFin" placeholder="heure de fin" v-model="heureFin"/><br/>
    <input type="text" id="soiree" placeholder="identifiant de la soiree" v-model="soiree"/><br/>
    <p><a href="#" @click="this.handleAddConcert()">add</a></p>
  </div>
</template>

<script>
    export default {
        props: {
          propsConcerts: Array,
          propsModeConnecte: {
            type: Boolean,
            default: false,
          },
          propsUser: Object,
          modeAdmin: Boolean,
        },
        methods: {
          handleDelConcert(id) {
            fetch ("http://localhost:3001/concerts/"+id, {
              method: 'DELETE',
            })
          },
          handleAddConcert() {
            let concert = {
              "date": this.date + "T23:00:00.000+00:00",
              "heureDebut": this.heureDebut + ":00",
              "heureFin": this.heureFin + ":00",
              "id_groupe": this.groupe,
              "soiree": {
                "id_soiree": this.soiree
              }
            }
            console.log(concert)
            fetch ("http://localhost:3001/concerts", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "date": this.date + "T23:00:00.000+00:00",
                "heureDebut": this.heureDebut + ":00",
                "heureFin": this.heureFin + ":00",
                "id_groupe": this.groupe,
                "soiree": {
                  "id_soiree": this.soiree
                }
              })
            })
          },
          handleResConcert(id) {
            console.log("user: " + this.propsUser)
            console.log(this.propsModeConnecte)
            fetch ("http://localhost:8080/concert_site_war_exploded/ticket-api/tickets", {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                idUtilisateur: this.propsUser.idUtilisateur,
                idConcert: id,
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
