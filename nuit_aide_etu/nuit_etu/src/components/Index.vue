<template>
  <div>
    <h1>Page d'acceuil</h1>
    <li>
      <ul><router-link to="/Informations">Informations générales</router-link></ul>
      <ul><router-link to="/ChercherCentre">Rechercher des conseils</router-link></ul>
      <ul><router-link to="/About">A propos</router-link></ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
