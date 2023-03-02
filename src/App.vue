<script>
  import Onglet from "./components/Onglet.vue"

	export default {
		name: 'App',
		components: {
			Onglet
		},
		
		data() {
			return {
				onglet: "groupes",
				modeConnecte: false,
				user: {},
        utilisateurs: [],
        admin: [],
			}
		},
		methods: {
			handleMenuClick(nomOnglet) {
				this.onglet = nomOnglet
			},
      handleIncription() {
        let user = {
          identifiant : this.ident,
          motPasse : this.pwd
        }
        console.log(JSON.stringify(user))
        fetch ("http://localhost:8080/concert_site_war_exploded/ticket-api/utilisateurs", {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        this.getData()
      },
      handleConnection() {
        console.log(this.ident)
        console.log(this.pwd)
        console.log(this.utilisateurs)
        this.utilisateurs.map((utilisateur) => {
          console.log(utilisateur)
          if (utilisateur.identifiant === this.ident && utilisateur.motPasse === this.pwd) {
            console.log("connection ok")
            this.user = utilisateur;
            this.modeConnecte = true;
          }
        })
      },
      handleCoAdmin() {
        let user = {
          login : this.ident,
          motDePasse : this.pwd
        }
        console.log(user)
        fetch ("http://localhost:8080/concert_site_war_exploded/admin-api/admins/1", {
          method: 'GET',
          mode: 'no-cors',
        })
            .then((response) => {
              console.log(response.status)
            })
            .catch(error => console.error("err fetch: $(error.message)"))
      },
      handleDeconnection() {
        this.user = {};
        this.modeConnecte = false;
      },
      getData() {
        fetch("http://localhost:8080/concert_site_war_exploded/ticket-api/utilisateurs")
            .then((response) => response.json())
            .then((utilisateurs) => {
              this.utilisateurs = utilisateurs;
            });
      }
		},
    created() {
      this.getData();
    }
	}

</script>

<template>
	<div id="main">
		<div id="gauche">
			<ul>
				<li><a href="#" @click="handleMenuClick('concerts')">Concerts</a></li>
				<li><a href="#" @click="handleMenuClick('salles')">Salles</a></li>
				<li><a href="#" @click="handleMenuClick('soirees')">Soirees</a></li>
				<li><a href="#" @click="handleMenuClick('groupes')">Groupes</a></li>
				<li><a href="#" @click="handleMenuClick('artistes')">Artistes</a></li>
        <li v-if="modeConnecte"><a href="#" @click="handleMenuClick('tickets')">tickets</a></li>
			</ul>
		</div>


		<div id="droite">
			<div id="menuConnexion">
				<div v-if="modeConnecte">
					<p v-if="user==={}">Administrateur</p>
					<p v-else>{{user.identifiant}}</p>
          <button id="bt_deco" @click="handleDeconnection">se deconnecter</button>
				</div>
				<div v-else>
          <input type="text" id="ident" v-model="ident"/>
          <input type="text" id="pwd" v-model="pwd"/>
					<button id="bt-co" @click="handleConnection">Se connecter</button>
					<button id="bt_ins" @click="handleIncription">S'inscrire</button>
          <button id="bt_co_admin" @click="handleCoAdmin">se connecter en administrateur</button>
				</div>
			</div>

			<div id="contenu">
				<onglet :propsOnglet="onglet" :propsModeConnecte="modeConnecte" :propsUser="user"></onglet>
			</div>

		</div>
	</div>
</template>

<style>
#main {
	display: flex;
}

#gauche {
	height: 100%;
	width: 15%;
	padding-top: 6em;
}

#droite {
	padding-left: 5em;
	height: 100%;
	width: 85%;
	margin: auto;
}

#menuConnexion {
	display: flex;
	justify-content: flex-end;
	padding-top: 2em;
	padding-right: 2em;
	
}

#contenu {
	margin-top: 2em;
}

#bt-co {
	margin-right: 1em;
}
</style>