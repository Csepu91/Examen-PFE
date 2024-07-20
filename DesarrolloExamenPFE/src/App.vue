<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="nav">
    <div class="ruts">
      <h4>Programación Front End</h4>
      <h5><router-link to="/">Cálculo de calificaciones</router-link></h5>
      <h5><router-link to="/Fregistro">Formulario de registro</router-link></h5>
      <h6>En construcción</h6>
    </div>
    <div class="access">
      <input class="form-control" placeholder="Search">
      <button type="button" class="btn btn-outline-success">Búsqueda</button>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(235, 235, 235);
  padding: 7px 10px;
}

h5,h6 {
  font-size: large;
}

h4 {
  padding-top: 5px;
  font-size: larger;
}

h5 {
  padding-top: 7px;
  color: rgba(18, 18, 18, 0.669);
}

h6 {
  padding-top: 7px;
  color: rgba(0, 0, 0, 0.361);
}

.ruts,
.access {
  display: flex;
  gap: 10px;
  align-items: center;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
