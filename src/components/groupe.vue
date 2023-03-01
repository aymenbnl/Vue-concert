<template>
  <div class="groupe">
    <h2>Groupe n°{{ id_groupe }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    id_groupe: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.groupe {
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
