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
            <th>Primer Nombre</th>

            <th>Primer Apellido</th>

            <th>Pais</th>
            <th>Nro Identificación</th>

            <th>Fch Ingreso</th>
            <th>Area</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody height="100">
          <tr v-for="item in items" v-bind:key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.pnombre }}</td>

            <td>{{ item.papellido }}</td>

            <td>{{ item.ppais }}</td>
            <td>{{ item.nidentificacion }}</td>

            <td>{{ item.fingreso }}</td>
            <td>{{ item.narea }}</td>
            <td>{{ item.dstatus }}</td>
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
            <br><strong>Nombre :</strong> {{ item.pnombre }}
            <br><strong>Apellido :</strong> {{ item.papellido }}
            <br><strong>Pais :</strong> {{ item.ppais }}
            <br><strong>Identificacion :</strong> {{ item.nidentificacion }}
            <br><strong>Ingreso :</strong> {{ item.fingreso }}
            <br><strong>Area :</strong> {{ item.narea }}
            <br><strong>Estado :</strong> {{ item.dstatus }}
              <p>
                <br><router-link :to="{path: 'registro', query: {p_id: item.id  }}">Editar </router-link>
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
import myConsulta from "./myRegistro.vue";
import myUtil from '../components/myUtil.vue';
export default {
  components: {
    myConsulta,
  },
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
      return myUtil.myDataInsert(this.empleado);
    },
    elimina: function(idx){
      let myConfirm = confirm("Eliminar Empleado?")
      if (myConfirm) {
        if (myUtil.myDataDelete(idx)) {
          alert("Empleado Eliminado Satisfactoriamente");
        }else{
          alert("Error al Eliminar Empleado");
        }
      }
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
