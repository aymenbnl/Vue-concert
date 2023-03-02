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
			}
		},

		methods: {
			handleMenuClick(nomOnglet) {
				this.onglet = nomOnglet
			}
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
			</ul>
		</div>


		<div id="droite">
			<div id="menuConnexion">
				<div v-if="modeConnecte">
					<p v-if="user==={}">Administrateur</p>
					<p v-else>{{user.identifiant}}</p>
				</div>
				<div v-else>
					<button id="bt-co">Se connecter</button>
					<button>S'inscrire</button>
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