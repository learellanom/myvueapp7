<template>
  <div class="register">
    <h1 class="title">Actualiza </h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="this.usuario.celectronico"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
        disabled
      >
      <label class="form-label" for="#nombre">Nombres:</label>
      <input
        v-model="this.usuario.nombre"
        class="form-input"
        type="text"
        id="nombre"
        required
        placeholder="Nombres"
      >
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="this.usuario.clave"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <label class="form-label" for="#password-repeat">Repite la contraeña:</label>
      <input
        v-model="passwordRepeat"
        class="form-input"
        type="password"
        id="password-repeat"
        placeholder="Password"
      >
      <input class="form-submit" type="submit" value="Actualiza">
    </form>
  </div>
</template>

<script>

/* eslint-disable */ 
import myUtil from '../components/myUtil.vue';
export default {
  data: () => ({
    p_id: '',
    email: '',
    password: '',
    passwordRepeat: '',
    usuario : {
      id : null,
      nombre: "",
      celectronico: "",
      clave: ""
    },  
    myTitle: "Registro",
    myTitleId : "",
    myDisabled : true,
    myUpdate: false    
  }),
  methods: {
    async register () {
      try {
      let myResponse = null;
      if (!this.myUpdate){
          myResponse = this.inserta();
          alert('Usuario Registrado Satisfactoriamente' + this.usuario.id)          
      }
      else{
        myResponse = this.actualiza()
        if (myResponse){
          alert('Usuario Actualizado Satisfactoriamente ID : ' + this.usuario.id)}
       else{
         alert('Error Actualizando Usuario ID : ' + this.usuario.id)
        }
       
      }
        // await auth.register(this.email, this.password);
        // myUtil.myDataInsert(this.usuario);        
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    busca : function () {
      return myUtil.myDataById(this.p_id);
    },
    inserta: function(){
      return myUtil.myDataInsert(this.usuario);
    },
    actualiza: function(){
      return myUtil.myDataUpdate(this.usuario);
    },    
  },
  mounted () { 
    this.p_id = this.$route.query.p_id 
    if (this.p_id != '') { 
      let myUsuario = this.busca()
      if (myUsuario) { 
        this.usuario = myUsuario
      }
      this.myTitle = "Edición"
      this.myTitleId = "Usuario ID : " + this.p_id
      this.myUpdate = true
    }
  }
}
</script>

<style scoped>
.register {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
