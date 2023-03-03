<template>
  <h1>Groupes</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">N°</th>
        <th scope="col">Artistes</th>
        <th scope="col">articles et images</th>
      </tr>
    </thead>
    <tbody v-for="g in propsGroupes">
      <tr>
        <th scope="row">{{g.idGroupe}}</th>
        <td v-for="a in g.listArtiste" class="artiste">
          <p>{{a.pseudo}}</p>
        </td>
        <td>
          <ul v-for="art in this.listArticle">
            <li v-if="art.soiree === g.idGroupe">{{art.nom}} de {{art.auteurPrenom}} {{art.auteurNom}} ({{art.url}})</li>
          </ul>
          <ul v-for="img in this.listImage">
            <li v-if="img.soiree === g.idGroupe">{{img.nom}} de {{img.auteurPrenom}} {{img.auteurNom}} ({{img.url}})</li>
          </ul>
        </td>
        <td v-if="modeAdmin"><a href="#" @click="this.handleDelGroupe(g.idGroupe)">del</a></td>
      </tr>
    </tbody>
  </table>
  <p v-if="modeAdmin"><a href="#" @click="this.handleAddGroupe()">add</a></p>
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
        propsGroupes: Array,
        propsModeConnecte: Boolean,
        propsUser: Object,
        modeAdmin: Boolean,
      },
      methods: {
        handleDelGroupe(id) {
          fetch ("http://localhost:8080/concert_site_war_exploded/groupe-artiste-api/groupes/"+id, {
            method: 'DELETE',
          })
        },
        handleAddGroupe() {
          fetch ("http://localhost:8080/concert_site_war_exploded/groupe-artiste-api/groupes", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
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

<style scoped>

.artiste {
  display: flex;
}
</style>
