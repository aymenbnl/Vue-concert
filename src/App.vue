<script setup>

</script>

<template>
  <main>
    <div class="wrapper">
      <h1>Gestion de Concert</h1>
      <router-link to="/concerts">concerts</router-link>
      <router-link to="/salles">salles</router-link>
      <router-link to="/soirees">soirees</router-link>
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
