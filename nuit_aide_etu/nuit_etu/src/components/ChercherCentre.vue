<template>
  <div>
    <h2>Chercher un centre</h2>
    <p>Liste des centres dans le {{  numDep  }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChercherCentre',
  data () {
    return {}
  },
  props: ['numDep'],
  computed: {
    informationsRegion:
    function () {
      var req = 'https://etablissements-publics.api.gouv.fr/v3/departements/' + this.numDep + '/cij'
      this.$http.get(req)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
