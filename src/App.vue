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
        messageErreur: "",
        messageOk: ""
			}
		},
		methods: {
			handleMenuClick(nomOnglet) {
				this.onglet = nomOnglet
			},
      handleIncription() {
        let user = {
          identifiant : this.ident,
          motDePasse : this.pwd
        }
        console.log(JSON.stringify(user))
        fetch ("http://localhost:8080/concert-site/ticket-api/utilisateurs", {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then((response) => {
          console.log(response.status);
          if(response.status===201) {
            this.messageOk="Inscription Ok, connectez-vous"
            this.messageErreur=""
          } else if(response.status===400) {
            this.messageErreur="Informations incorrectes"
            this.messageOk=""
          } else if(response.status===409) {
            this.messageErreur="Login déjà existant"
            this.messageOk=""
          }
          
        })
        .catch(() => {
          this.messageErreur="Problème interne"
            this.messageOk=""
            throw "erreur"
        })

      },

      handleConnection() {
        let user = {
          identifiant : this.ident,
          motDePasse : this.pwd
        }
        console.log(JSON.stringify(user))
        fetch ("http://localhost:8080/concert-site/ticket-api/utilisateurs/getByLoginAndPassword", {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then((response) => {
          console.log(response);
          console.log(response.status);
          if(response.status===200) {
            response.json()
          } else {
            this.messageErreur="Informations incorrectes"
            this.messageOk=""
          }
        })
        .then((data) => {
          if(data!==undefined) {
            this.user.identifiant=data.identifiant
            this.user.motDePasse=data.motDePasse
            this.modeConnecte = true;
          }
        })
        .catch(() => {
            this.messageErreur="Problème interne"
            this.messageOk=""
        })
      },
      handleCoAdmin() {
        let user = {
          login : this.ident,
          motDePasse : this.pwd
        }
        console.log(user)
        fetch ("http://localhost:8080/concert-site/admin-api/admins/1", {
          method: 'GET',
          mode: 'cors',
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
        fetch("http://localhost:8080/concert-site/ticket-api/utilisateurs")
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
          <p id="err" v-if="messageErreur!==''">{{ messageErreur }}</p>
          <p id="ok" v-if="messageOk!==''">{{ messageOk }}</p>
          <input type="text" id="ident" placeholder="Login" v-model="ident"/>
          <input type="password" id="pwd" placeholder="Mot de passe" v-model="pwd"/>
					<button id="bt_co" @click="handleConnection">Se connecter</button>
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

#err {
  display: inline-block;
  color: red;
  margin-right: 1em;
}

#ok {
  display: inline-block;
  color: green;
  margin-right: 1em;
}

#bt_co, #bt_ins, #ident, #pwd {
	margin-right: 1em;
}
</style>