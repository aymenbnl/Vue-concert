<template>
  <h1>Salle</h1>
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
        <td>
          <ul v-for="soiree in s.listSoiree">
            <li>{{soiree.nom}}</li>
          </ul>
          <ul v-for="img in this.listImage">
            <li v-if="img.salle === s.id_salle">{{img.nom}} de {{img.auteurPrenom}} {{img.auteurNom}} ({{img.url}})</li>
          </ul>
        </td>
        <td><ul v-for="art in this.listArticle">
          <li v-if="art.salle === s.id_salle">{{art.nom}} de {{art.auteurPrenom}} {{art.auteurNom}} ({{art.url}})</li>
        </ul></td>
        <td v-if="modeAdmin"><a href="#" @click="this.handleDelSalle(s.id_salle)">del</a></td>
      </tr>
    </tbody>
  </table>
  <div v-if="modeAdmin">
    <input type="text" id="nom" placeholder="nom de la soiree" v-model="nom"/><br/>
    <input type="text" id="adresse" placeholder="adresse" v-model="adresse"/><br/>
    <input type="text" id="capacite" placeholder="capacite" v-model="capacite"/><br/>
    <input type="text" id="prenomGest" placeholder="prenom du gestionnaire" v-model="prenomGest"/><br/>
    <input type="text" id="nomGest" placeholder="nom du gestionnaire" v-model="nomGest"/><br/>
    <input type="text" id="assoc" placeholder="nom de l'association(peut etre vide)" v-model="assoc"/><br/>
    <p><a href="#" @click="this.handleAddSalle()">add</a></p>
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
        propsSalles: Array,
        propsModeConnecte: Boolean,
        propsUser: Object,
        modeAdmin: Boolean,
      },
      methods: {
        handleDelSalle(id) {
          fetch ("http://localhost:3001/salles/"+id, {
            method: 'DELETE',
          })
        },
        handleAddSalle() {
          fetch ("http://localhost:3001/salles", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "nom": this.nom,
              "adresse": this.adresse,
              "capacite": this.capacite,
              "nom_gest": this.nomGest,
              "prenom_gest": this.prenomGest,
              "association": this.assoc
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
