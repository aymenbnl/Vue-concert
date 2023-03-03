<template>
  <h1>Soiree</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">nom</th>
        <th scope="col">concerts</th>
        <th scope="col">salle</th>
        <th scope="col">articles</th>
      </tr>
    </thead>
    <tbody v-for="s in propsSoirees">
      <tr>
        <td>{{s.id_soiree}}</td>
        <td>{{s.nom}}</td>
        <td><ul v-for="c in s.listConcert">
          <li>{{c.id_concert}}</li>
        </ul></td>
        <td>{{s.salle.id_salle}}</td>
        <td>
          <ul v-for="art in this.listArticle">
            <li v-if="art.soiree === s.id_soiree">{{art.nom}} de {{art.auteurPrenom}} {{art.auteurNom}} ({{art.url}})</li>
          </ul>
          <ul v-for="img in this.listImage">
            <li v-if="img.soiree === s.id_soiree">{{img.nom}} de {{img.auteurPrenom}} {{img.auteurNom}} ({{img.url}})</li>
          </ul>
        </td>
        <td v-if="modeAdmin"><a href="#" @click="this.handleDelSoiree(s.id_soiree)">del</a></td>
      </tr>
    </tbody>
  </table>
  <div v-if="modeAdmin">
    <input type="text" id="nom" placeholder="nom de la soiree" v-model="nom"/><br/>
    <input type="text" id="salle" placeholder="identifiant de la salle" v-model="salle"/><br/>
    <p><a href="#" @click="this.handleAddSoiree()">add</a></p>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          listArticle: [],
          listImage: [],
        }
      },
      props: {
        propsSoirees: Array,
        propsModeConnecte: Boolean,
        propsUser: Object,
        modeAdmin: Boolean,
      },
      methods: {
        handleDelSoiree(id) {
          fetch ("http://localhost:3001/soirees/"+id, {
            method: 'DELETE',
          })
        },
        handleAddSoiree() {
          fetch ("http://localhost:3001/soirees", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "nom": this.nom,
              "salle": {
                "id_salle": this.salle,
              }
            })
          })
        },
        getData() {
          fetch ("http://localhost:3001/articles")
              .then((response => response.json()))
              .then((articles) => {
                console.log(articles)
                this.listArticle = articles
              })
          fetch ("http://localhost:3001/images")
              .then((response => response.json()))
              .then((images) => {
                console.log(images)
                this.listImage = images
              })
        }
      },
      created() {
        this.getData();
      }
    }
</script>

<style>
.artiste div {
  display: flex;
}
</style>
