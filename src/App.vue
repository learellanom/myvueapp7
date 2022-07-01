<template>
  <div id="container">
    <!-- <nav class="navbar navbar-expand-sm bg-dark navbar-dark" >
      <ul class="navbar-nav">
        <li class="nav-item navbar-brand">
             <router-link class="navbar-brand" to="/">Login APP </router-link>
             <p v-if="this.p_logged && this.p_admin === true">Administrador</p>
        </li>
          <li class="nav-item">
                <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item" v-show="this.p_admin === false && this.p_logged === true">
              <router-link :to="{path: 'actualiza', query: {p_id: p_id }}">Actualiza</router-link>
          </li>
          <li class="nav-item" v-if="this.p_logged && this.p_admin === true">
                <router-link to="/consulta">Usuarios</router-link>
          </li>
          <li class="nav-item">
                <router-link to="/login">Login</router-link>
          </li>
          <li class="nav-item">
                <router-link to="/registrate">Registrate</router-link>
          </li>
          <li class="nav-item" v-if="this.p_logged === true" >
            <router-link to="/"
              @click="salir"
            >Logout</router-link>
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
                <router-link class="navbar-brand" to="/">Login APP</router-link>
                <p v-if="this.p_logged && this.p_admin === true">Administrador</p>
            </li>
              <li class="nav-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item" v-show="this.p_admin === false && this.p_logged === true">
                <router-link :to="{path: 'actualiza', query: {p_id: p_id }}">Actualiza</router-link>
              </li>
              <li class="nav-item" v-if="this.p_logged === true && this.p_admin === true">
                <router-link to="/consulta">Usuarios</router-link>
              </li>
              <li class="nav-item" v-if="this.p_logged === false">
                <router-link to="/login">Login</router-link>
              </li>
              <li class="nav-item" v-if="this.p_logged === false">
                <router-link to="/registrate">Registrate</router-link>
              </li>
              <li class="nav-item" v-if="this.p_logged === true" >
                <router-link to="/"
                  @click="salir"
                >Logout</router-link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  <router-view/>
</template>

<script>

export default {
  data () {
    return {
      p_logged: this.$route.query.p_logged,
      p_admin: false,
      p_id: ''
    }
  },
  methods: {
    salir () {
      this.$router.push({ path: '/', params: { p_logged: 'false' } })
      localStorage.setItem('p_logged', false)
      localStorage.setItem('admin', false)
      localStorage.setItem('id', '')
      location.replace(location.origin)
    }
  },
  mounted () {
    // ejecuta al cargar  componente
    if (!this.p_logged) {
      //
      const myVar = localStorage.getItem('p_logged')
      const myAdmin = localStorage.getItem('admin')
      this.p_id = localStorage.getItem('id')
      //
      if (myVar === 'false') {
        this.p_logged = false
      }
      if (myVar === 'true') {
        this.p_logged = true
      }
      if (myAdmin === 'false') {
        this.p_admin = false
      }
      if (myAdmin === 'true') {
        this.p_admin = true
      }
    }
  }
}
</script>

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
