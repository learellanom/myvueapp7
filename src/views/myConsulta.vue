<template>
  <div class="container">
    <br />
    <h2>Consulta  </h2>
    <hr>
    <div class="table-responsive">
      <table class="table table-hover d-sm-none d-md-block d-none d-sm-block" style="border-style: solid; border: 1px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>

            <th>Correo Electronico</th>

            <th>Clave</th>
          </tr>
        </thead>
        <tbody height="100">
          <tr v-for="item in items" v-bind:key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.nombre }}</td>

            <td>{{ item.celectronico }}</td>

            <td>{{ item.clave }}</td>
            <td>
              <p>
                <router-link :to="{path: 'registro', query: {p_id: item.id  }}">Editar </router-link>
                <!-- <router-link to="/registro">Delete</router-link> -->
                <router-link to=""><span @click="elimina(item.id)">Eliminar</span></router-link>

              </p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <td></td>
        </tfoot>
      </table>

      <table class="table table-hover
        d-md-none d-lg-block
        d-lg-none d-xl-block
        d-xl-none
      " style="border-style: solid; border: 1px">
        <thead>
        </thead>
        <tbody height="100">
          <tr v-for="item in items" v-bind:key="item.id">
            <td>
            <br><strong>ID :</strong> {{ item.id }}
            <br><strong>Nombre :</strong> {{ item.nombre }}
            <br><strong>Correo :</strong> {{ item.celectronico }}
            <br><strong>Clave :</strong> {{ item.clave }}
              <p>
                <br><router-link :to="{path: 'actualiza', query: {p_id: item.id  }}">Editar </router-link>
                <!-- <router-link to="/registro">Delete</router-link> -->
                <br><router-link to=""><span @click="elimina(item.id)">Eliminar</span></router-link>
              </p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <td></td>
        </tfoot>
      </table>

    </div>
    <!-- my new table -->
  </div>
</template>

<script>
/* eslint-disable */
// import myConsulta from "./myRegistro.vue";
import myUtil from '../components/myUtil.vue';
export default {
  data() {
    return {
      myData: null,
    };
  },
  computed: {
   items() {
      return myUtil.myData();
    },
    itemsById () {
      return myUtil.myDataById(4);
    }
  },
  methods: {
    busca : function () {
       return myUtil.myDataById(this.p_id);
    },
    inserta: function(){
      return myUtil.myDataInsert(this.usuario);
    },
    elimina: function(idx){
      let myConfirm = confirm("Eliminar usuario?")
      if (myConfirm) {
        if (myUtil.myDataDelete(idx)) {
          alert("Usuario Eliminado Satisfactoriamente");
        }else{
          alert("Error al Eliminar Usuario");
        }
      }
      location.reload();
      return;
    },
  },
  mounted() {
    // ejecuta los metodos l cargar el componente
  },
};
</script>

<style>
table {
  /* font-size: 12px; */

  /* limita el tamaño vertical y le coloca scroll */
  max-height: 450px;
  overflow: auto;
  display: inline-block;
}

tbody {
  height: 10px;
  overflow-y: auto;
  width: 100%;
}

thead {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
}
</style>
