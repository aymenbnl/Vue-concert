<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Mot de passe:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Appel à l'API pour l'authentification
      axios
        .post("/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // Si l'authentification réussit, rediriger vers la page d'accueil
          this.$router.push("/");
        })
        .catch((error) => {
          // Si l'authentification échoue, afficher une erreur
          console.error(error);
        });
    },
  },
};
</script>
