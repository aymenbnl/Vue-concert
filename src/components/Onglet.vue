<template>
  <!--<salles v-if="onglet==='salles'" :salles="salles" :modeConnecte="modeConnecte" :estAdmin="estAdmin"></salles>-->
  <!-- <soirees v-if="onglet==='soirees'" :soirees="soirees" :modeConnecte="modeConnecte" :estAdmin="estAdmin"></soirees> -->
	<groupes v-if="propsOnglet==='groupes'" :propsGroupes="groupes" :propsModeConnecte="propsModeConnecte" :propsUser="propsUser"></groupes>
	<artistes v-if="propsOnglet==='artistes'" :propsArtistes="artistes" :propsModeConnecte="propsModeConnecte" :propsUser="propsUser"></artistes>
</template>

<script>
  import Artistes from './Artistes.vue'
  import Groupes from './Groupes.vue'
    export default {
        name: 'Onglet',
        data() {
          return {
            salles: [],
            soirees: [],
            groupes: [],
            artistes: [],
            onglet: this.propsOnglet
          }
        },

        components: {
          Artistes,
          Groupes
        },
        props: {
          propsOnglet: String,
          propsConnecte: Boolean,
          propsUser: Object
        },

        methods: {
          setData() {
            if(this.propsOnglet==="salles") {

            } else if(this.propsOnglet==="soirees") {

            } else if(this.propsOnglet==="groupes") {

              fetch("http://localhost:8080/concert-site/groupe-artiste-api/groupes")
              .then((response) => response.json())
              .then((groupes) => {
                    this.groupes=groupes.filter(g => g.listArtiste.length>1)
                  });

            } else if(this.propsOnglet==="artistes") {
              this.artistes=[]
              fetch("http://localhost:8080/concert-site/groupe-artiste-api/artistes")
              .then((response) => response.json())
              .then((_artistes) => {

                fetch("http://localhost:8080/concert-site/groupe-artiste-api/groupes")
                  .then((response) => response.json())
                  .then((groupes) => {
                    _artistes.forEach((a) => {
                      if (
                        groupes.filter(
                          (g) => g.idGroupe === a.idGroupe && (g.listArtiste.length === 0 || g.listArtiste.length === 1)
                        ).length === 1
                      ) {
                        this.artistes.push(a);
                      }
                    });
                  });
              })
            }
          }

        },

        created() {

          this.setData()
          
        },

        watch: {
          propsOnglet: function(nouv, anc) {
            this.setData()
          } 
        }
    }
</script>
