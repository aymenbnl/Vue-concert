<template>
  <div class="ticket">
    <h2>Ticket n°{{ id_ticket }}</h2>
    <p>ID utilisateur : {{ id_utilisateur }}</p>
    <p>ID concert : {{ id_concert }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id_ticket: {
      type: Number,
      required: true,
    },
    id_utilisateur: {
      type: Number,
      required: true,
    },
    id_concert: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.ticket {
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
