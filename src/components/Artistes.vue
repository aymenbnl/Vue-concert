<template>
  <h1>Artistes</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Pseudo</th>
        <th scope="col">Ville d'origine</th>
        <th scope="col">Age</th>
        <th scope="col">Groupe</th>
      </tr>
    </thead>
    <tbody v-for="a in propsArtistes">
      <tr>
        <td>{{a.pseudo}}</td>
        <td>{{a.villeOrigine}}</td>
        <td>{{a.age}}</td>
        <td>{{a.idGroupe}}</td>
        <td>
          <ul v-for="art in this.listArticle">
            <li v-if="art.soiree === a.idArtiste">{{art.nom}} de {{art.auteurPrenom}} {{art.auteurNom}} ({{art.url}})</li>
          </ul>
          <ul v-for="img in this.listImage">
            <li v-if="img.soiree === a.idArtiste">{{img.nom}} de {{img.auteurPrenom}} {{img.auteurNom}} ({{img.url}})</li>
          </ul>
        </td>
        <td v-if="modeAdmin"><a href="#" @click="this.handleDelArtiste(a.idArtiste)">del</a></td>
      </tr>
    </tbody>
  </table>
    <div v-if="modeAdmin">
    <input type="text" id="nom" placeholder="nom" v-model="nom"/><br/>
    <input type="text" id="ville" placeholder="ville d'origine" v-model="ville"/><br/>
    <input type="text" id="age" placeholder="age" v-model="age"/><br/>
    <input type="text" id="groupe" placeholder="identifiant du groupe" v-model="groupe"/><br/>
    <p><a href="#" @click="this.handleAddArtiste()">add</a></p>
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
        propsArtistes: Array,
        propsModeConnecte: Boolean,
        propsUser: Object,
        modeAdmin: Boolean,
      },
      methods: {
        handleDelArtiste(id) {
          fetch ("http://localhost:8080/concert_site_war_exploded/groupe-artiste-api/artistes/"+id, {
            method: 'DELETE',
          })
        },
        handleAddArtiste() {
          fetch ("http://localhost:8080/concert_site_war_exploded/groupe-artiste-api/artistes", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "pseudo": this.nom,
              "villeOrigine": this.ville,
              "age": this.age,
              "idGroupe": this.groupe,
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
.artiste {
  display: flex;
}

.artiste div {
  display: flex;
}
</style>
