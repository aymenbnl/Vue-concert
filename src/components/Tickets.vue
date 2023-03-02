<template>
  <h1>Tickets</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">utilsateur</th>
        <th scope="col">concert</th>
      </tr>
    </thead>
    <tbody v-for="t in propsTickets">
      <tr v-if="t.idUtilisateur === this.propsUser.idUtilisateur">
        <td>{{t.idTicket}}</td>
        <td>{{t.idUtilisateur}}</td>
        <td>{{t.idConcert}}</td>
        <td><a @click="this.handleDelTicket(t.id_ticket)">del</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        props: {
          propsTickets: Array,
          propsModeConnecte: {
            type: Boolean,
            default: true,
          },
          propsUser: Object
        },
        methods: {
          handleDelTicket(id) {
            fetch ("http://localhost:8080/concert_site_war_exploded/ticket-api/tickets/"+id, {
              method: 'DELETE',
              mode: 'no-cors',
            })
          },
        }
    }
</script>

<style>
.artiste div {
  display: flex;
}
</style>
