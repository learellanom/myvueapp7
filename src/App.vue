<template>
  <div id="container">
    <!-- <nav class="navbar navbar-expand-sm bg-dark navbar-dark" >
      <ul class="navbar-nav">
        <li class="nav-item navbar-brand">
             <router-link class="navbar-brand" to="/">Cidenet Empleados </router-link>
        </li>
          <li class="nav-item">
                <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/registro">Registro </router-link>
          </li>
          <li class="nav-item">
                <router-link to="/consulta">Consulta</router-link>
          </li>
      </ul>
    </nav> -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark" >
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item navbar-brand">
                <router-link class="navbar-brand" to="/">Cidenet Empleados </router-link>
            </li>
              <li class="nav-item">
                    <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/registro">Registro </router-link>
                  <!-- <router-link :to="{path: 'registro', query: {p_Apellido: 'ñame'}}">Registro </router-link> -->
              </li>
              <li class="nav-item">
                    <router-link to="/consulta">Consulta</router-link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: beige;
}

nav a.router-link-exact-active {
  color: #42b983;
}

li {
  margin: 10px
}
</style>
