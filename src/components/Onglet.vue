<template>
  <concerts v-if="propsOnglet==='concerts'" :propsConcerts="concerts" :propsModeConnecte="propsConnecte" :propsUser="propsUser"></concerts>
  <salles v-if="propsOnglet==='salles'" :propsSalles="salles" :propsModeConnecte="propsConnecte" :propsUser="propsUser"></salles>
  <soirees v-if="propsOnglet==='soirees'" :propsSoirees="soirees" :propsModeConnecte="propsConnecte" :propsUser="propsUser"></soirees>
	<groupes v-if="propsOnglet==='groupes'" :propsGroupes="groupes" :propsModeConnecte="propsConnecte" :propsUser="propsUser"></groupes>
	<artistes v-if="propsOnglet==='artistes'" :propsArtistes="artistes" :propsModeConnecte="propsConnecte" :propsUser="propsUser"></artistes>
	<tickets v-if="propsOnglet==='tickets'" :propsTickets="tickets" :propsModeConnecte="propsConnecte" :propsUser="propsUser"></tickets>
</template>

<script>
  import Artistes from './Artistes.vue'
  import Groupes from './Groupes.vue'
  import Soirees from "@/components/Soirees.vue";
  import Salles from "@/components/Salles.vue";
  import Concerts from "@/components/Concerts.vue";
  import Tickets from "@/components/Tickets.vue";
    export default {
        name: 'Onglet',
        data() {
          return {
            salles: [],
            soirees: [],
            groupes: [],
            artistes: [],
            concerts: [],
            tickets: [],
            onglet: this.propsOnglet
          }
        },

        components: {
          Tickets,
          Artistes,
          Groupes,
          Soirees,
          Salles,
          Concerts
        },
        props: {
          propsOnglet: String,
          propsConnecte: {
            type: Boolean,
            default: false,
          },
          propsUser: Object
        },

        methods: {
          setData() {
            if(this.propsOnglet==="concerts") {
              fetch('http://localhost:3001/concerts')
                  .then((response) => response.json())
                  .then((json) => {this.concerts = json})
            } else if(this.propsOnglet==="salles") {
              fetch('http://localhost:3001/salles')
                  .then((response) => response.json())
                  .then((json) => {this.salles = json})
            } else if(this.propsOnglet==="soirees") {
              fetch('http://localhost:3001/soirees')
                  .then((response) => response.json())
                  .then((json) => {this.soirees = json})
            } else if(this.propsOnglet==="groupes") {

              fetch("http://localhost:8080/concert_site_war_exploded/groupe-artiste-api/groupes")
              .then((response) => response.json())
              .then((groupes) => {
                    this.groupes=groupes.filter(g => g.listArtiste.length>0)
                  });

            } else if(this.propsOnglet==="artistes") {
              this.artistes=[]
              fetch("http://localhost:8080/concert_site_war_exploded/groupe-artiste-api/artistes")
              .then((response) => response.json())
              .then((_artistes) => {

                fetch("http://localhost:8080/concert_site_war_exploded/groupe-artiste-api/groupes")
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
            } else if(this.propsOnglet==="tickets") {
              fetch("http://localhost:8080/concert_site_war_exploded/ticket-api/tickets")
                  .then((response) => response.json())
                  .then((tickets) => this.tickets = tickets);
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
