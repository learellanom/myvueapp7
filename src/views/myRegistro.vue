<template>
  <div class="container">
    <br />
    <h2> {{ myTitle }}</h2>
    <span sytle="text-align: right">{{myTitleId}}</span>
    <hr />
    <form>
      <div class="form-group">
        <label for="pApellido">Primer Apellido:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ingrese Primer Apellido"
          id="pApellido"
          v-model= "this.empleado.papellido"
          length="20"
          v-on:change="cambio"
        />
      </div>
      <br />

      <div class="form-group">
        <label for="sApellido">Segundo Apellido:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ingrese Segundo Apellido"
          id="sApellido"
          v-model="this.empleado.sapellido"
          maxlength="20"
        />
      </div>

      <br />

      <div class="form-group">
        <label for="pNombre">Primer Nombre:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ingrese Primer Nombre"
          id="pNombre"
          v-model="this.empleado.pnombre"
          maxlength="20"
          v-on:change="cambio"
        />
      </div>
      <br />

      <div class="form-group">
        <label for="oNombres">Otros Nombres:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ingrese Otros Nombres"
          id="oNombres"
          v-model="this.empleado.onombres"
          maxlength="50"
        />
      </div>
      <br />

      <div class="form-group">
        <label for="pPais">Pais:</label>
        <select class="form-control" id="pPais" v-model="this.empleado.ppais" v-on:change="cambio">
          <option value="Colombia">Colombia</option>
          <option value="EEUU">EEUU</option>
        </select>
      </div>
      <br />

      <div class="form-group">
        <label for="tIdentificacion">Tipo de Identificación:</label>
        <select
          class="form-control"
          id="tIdentificacion"
          v-model="this.empleado.tidentificacion"
        >
          <option value="Cedula Ciudadana">Cedula Ciudadana</option>
          <option value="Cedula de Extranjeria">Cedula de Extranjeria</option>
          <option value="Pasaporte">Pasaporte</option>
          <option value="Permiso Especial">Permiso Especial</option>
        </select>
      </div>
      <br />

      <div class="form-group">
        <label for="nIdentificacion">Numero de Identificacion:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Numero de Identificación"
          id="nIdentificacion"
          v-model="this.empleado.nidentificacion"
          maxlength="20"
        />
      </div>
      <br />

      <div class="form-group">
        <label for="cElectronico">Correo Electronico:</label>
        <input
          type="email"
          class="form-control"
          placeholder="Correo Electronico"
          id="cElectronico"
          v-model="this.empleado.celectronico"
          maxlength="300"
          :disabled="this.myDisabled"
        />
      </div>
      <br />

      <div class="form-group">
        <label for="fIngreso">Fecha de Ingreso:</label>
        <input
          type="date"
          class="form-control"
          placeholder="Date"
          id="fIngreso"
          v-model="this.empleado.fingreso"
        />
      </div>
      <br />

      <div class="form-group">
        <label for="nArea">Area:</label>
        <select class="form-control" id="nArea" v-model="this.empleado.narea">
          <option>Administracion</option>
          <option>Financiera</option>
          <option>Compras</option>
          <option>Infraestructura</option>
          <option>Operación</option>
          <option>Talento Humano</option>
          <option>Servicios varios</option>
        </select>
      </div>
      <br />

      <label for="dStatus">Estado:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Estado"
        id="dStatus"
        v-model="this.empleado.dstatus"
        disabled
      />

      <br />

      <label for="fRegistro">Fecha de Registro:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Estado"
        id="fRegistro"
        v-model="this.empleado.fregistro"
        disabled
      />

      <br />

      <div class="btn-group">
        <button
          type="submit"
          class="btn btn-primary"
          style="margin: 0 10px"
          v-on:click="Valida"
        >
          Guardar
        </button>
        <span> </span>
        <button type="button" class="btn btn-primary">Cancelar</button>
      </div>
    </form>
      <br>
      <br>
  </div>
</template>

<script>
/* eslint-disable */
import myUtil from '../components/myUtil.vue';

export default {
  data () {
    return {
      p_id: this.$route.query.p_id,
      // empleado : {
      //         id : 99,
      //         papellido: "MiPrimerApellido99",
      //         sapellido: "MiSegundoApellido99",
      //         pnombre: "MiPrimerNombre99",
      //         onombres: "MiOtroNombre99",
      //         ppais : "Colombia",
      //         tidentificacion : "Cedula Ciudadana",
      //         nidentificacion : "1234567890",
      //         celectronico :"MiPrimerNombre1.MiPrimerApellido1.99@cidenet.com.co",
      //         fingreso : "2021-01-01",
      //         narea: "Administracion",
      //         dstatus : "Activo",
      //         fregistro: "2022-01-01"  
      // },
      empleado : {
              id : null,
              papellido: "",
              sapellido: "",
              pnombre: "",
              onombres: "",
              ppais : "",
              tidentificacion : "",
              nidentificacion : "",
              celectronico :"",
              fingreso : "",
              narea: "",
              dstatus : "",
              fregistro: ""  
      },
      myTitle: "Registro",
      myTitleId : "",
      myDisabled : true,
      myUpdate: false
    }
  },
  props: {
  },
  computed: {
  },  
  methods: {
    Valida: function (e) {
      let myValidData = false
      /*
      if(!((/^[A-Z ]+$/g).test(this.pApellido))){
          e.preventDefault();
          alert("El Primer Apellido solo debe contener letras mayusculas sin acentos ni ñ" + this.pApellido);
          return myValidData
      }

      if(!((/^[A-Z ]+$/g).test(this.sApellido))){
          e.preventDefault();
          alert("El Segundo Apellido solo debe contener letras mayusculas sin acentos ni ñ" + this.pApellido);
          return myValidData
      }

      if(!((/^[A-Z ]+$/g).test(this.pNombre))){
          e.preventDefault();
          alert("El nombre solo debe contener letras mayusculas sin acentos ni ñ" + this.pApellido);
          return myValidData
      }

      if(!((/^[A-Z ]+$/g).test(this.oNombres))){
          e.preventDefault();
          alert("Otros nombres solo debe contener letras mayusculas sin acentos ni ñ" + this.pApellido);
          return myValidData
      }

      if(!((/^[a-zA-Z0-9 ]+$/g).test(this.nIdentificacion))){
          e.preventDefault();
          alert("Numero de indentificación solo debe contener letras mayusculas sin acentos ni ñ y numeros" + this.pApellido);
          return myValidData
      }
    */
      // let myVar = this.pPais
      // return true;
      if (!this.empleado.ppais) {
        e.preventDefault()
        alert('Debe seleccionar un pais de asignación ' + this.pPais)
          return myValidData
      }

      if (!this.empleado.tidentificacion) {
        e.preventDefault()
        alert('Debe seleccionar el tipo de indentificación')
          return myValidData
      }

      if (!this.empleado.narea) {
        e.preventDefault()
        alert('Debe seleccionar el area de asignación')
          return myValidData
      }

      if (!this.empleado.fingreso) {
        e.preventDefault()
        alert('Debe ingresar la fecha de ingreso ')
          return myValidData
      }
      e.preventDefault()
      let myResponse = null;
      if (!this.myUpdate){
          myResponse = this.inserta();
          alert('Empleado Registrado Satisfactoriamente' + this.empleado.id + " Asi inserta : " + myResponse )          
      }
      else{
        myResponse = this.actualiza()
        if (myResponse){
          alert('Empleado Actualizado Satisfactoriamente ID : ' + this.empleado.id)}
       else{
         alert('Error Actualizando Empleado ID : ' + this.empleado.id)
        }
       
      }
    },
    busca : function () {
       return myUtil.myDataById(this.p_id);
    },
    inserta: function(){
      return myUtil.myDataInsert(this.empleado);
    },
    actualiza: function(){
      return myUtil.myDataUpdate(this.empleado);
    },
    cambio: function() {
      let myCorreo = 
      this.empleado.pnombre 
      + "." 
      + this.empleado.papellido 
      + "@"
      + "cidenet"
      + "."
      + ((this.empleado.ppais == "Colombia") ? "co" : "us")

      alert("cambio " + myCorreo);
      this.empleado.celectronico = myCorreo;
    }
  },
    mounted () {
    // ejecuta al cargar  componente

    if (this.p_id) { 
    let myEmpleado = this.busca()
    if (myEmpleado) { this.empleado = myEmpleado}       
      this.myTitle = "Edición"
      this.myTitleId = "Empleado ID : " + this.p_id
      this.myUpdate = true
    }
  }
}
</script>
<style scoped>
  label {
      text-align: left;
  }
</style>
