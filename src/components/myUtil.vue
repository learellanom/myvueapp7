<script>
/* eslint-disable */ 
import datos from '../assets/json/data00.json'
var myDataRes

function myData () {
  let myResponse = JSON.parse(ajax1())
  // return datos.map((item) => {
  //   return item
  // })  
  return myResponse.map((item) => {
    return item
  })  
}

function ajax1(){
  let myRes = null;

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   myRes = this.responseText;
   
  }
  xhttp.open("GET", "http://localhost:3000/getdata", false);
  xhttp.send();  
  return myRes
}

function myDataById2 (Id) {
  //   let myId = datos.find( (x) => {
  //       return x.id == Id;
  //   })
  // return myId
}

function myDataById(id){
  let myRes = null;

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   myRes = this.responseText;
   
  }
  xhttp.open("GET", "http://localhost:3000/dataById/" + id, false);
  xhttp.send();  
  return JSON.parse(myRes)
}

function myDataInsert (empleado) {

    let myResponse2 = JSON.parse(ajax1())
    let myId = myResponse2.length + 1
 

    let myResponse = false

    if (!empleado) { return myResponse}
    if (empleado == null) { return myResponse}
    if (empleado == undefined) { return myResponse}
     
    empleado.id = myId

    ajax3(empleado)

    // datos.push(empleado)
    
    myResponse = true
    
    return myResponse
}

function ajax3(empleado){
  let myRes = null;
  empleado.id = 999
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   myRes = this.responseText;
   
  }
  xhttp.open("POST", "http://localhost:3000/dataInsert", false);
  xhttp.setRequestHeader("Content-type", "application/json");  
  xhttp.send(JSON.stringify(empleado));  
  return myRes
}

function myDataUpdate (empleado) {
    let myResponse = false

    myResponse = ajax4(empleado);

    let myId = datos.findIndex( (x) => {
        return x.id == empleado.id;
    })

    if (myId = -1) return myResponse

    // datos[myId].id = empleado.id
    datos[myId].papellido = empleado.papellido
    datos[myId].sapellido = empleado.sapellido
    datos[myId].pnombre = empleado.pnombre
    datos[myId].onombres = empleado.onombres
    datos[myId].ppais = empleado.ppais
    datos[myId].tidentificacion = empleado.tidentificacion
    datos[myId].nidentificacion = empleado.nidentificacion
    datos[myId].celectronico = empleado.celectronico
    datos[myId].fingreso = empleado.fingreso
    datos[myId].narea = empleado.narea

    return myResponse
}


function ajax4(empleado){
  let myRes = null;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myRes = JSON.parse(this.responseText); 
  }
  xhttp.open("PUT", "http://localhost:3000/dataUpdate/" + Number(empleado.id), false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(empleado));  
   myRes.error = (myRes.error == false) ? true : false
  return myRes
}

function myDataDelete(id) {
    let myAnswer = null
    myAnswer = ajax5(id)
    return true

    // let myId = datos.findIndex( (x) => {
    //     return x.id == id;
    // })
    // if (myId == -1) return false
    // datos[myId].dstatus = "Inactivo"    
    // return true
}

function ajax5(id){
  let myRes = null;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myRes = JSON.parse(this.responseText); 
  }
  xhttp.open("DELETE", "http://localhost:3000/dataDelete/" + Number(id), false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();  
   myRes.error = (myRes.error == false) ? true : false
  return myRes
}

export default {
  computed: {
    items2 () {
    //   return datos.map((item) => {
    //     return item
    //   })
      return datos.map((item) => {
        return item
      })      
    }
  },
  methods: {
    getAll () {
      return datos.map((item) => {
        return item
      })
    }
  },
  myData,
  myDataById,
  myDataInsert,
  myDataUpdate,
  myDataDelete
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
