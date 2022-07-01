<script>
/* eslint-disable */ 
import datos from '../assets/json/data00.json'
var myDataRes

function myData () {
  //
  // desde el API
  let myResponse = JSON.parse(ajax1())
  //

  // desde el Data json
  // return datos.map((item) => {
  //   return item
  // })   
  //
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
/*
*
*
*
*
*/
function myDataById2 (Id) {
    let myId = datos.find( (x) => {
         return x.id == Id;
     })
   return myId
}

function myDataById (id){
  let myRes = null;

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   myRes = this.responseText;
  }
  xhttp.open("GET", "http://localhost:3000/dataById/" + id, false);
  xhttp.send();  

  if (myRes === undefined){
    return null;
  }
  return JSON.parse(myRes)
}

function myDataByMail (email){
  let myRes = null;

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   myRes = this.responseText;
   
  }
  xhttp.open("GET", "http://localhost:3000/dataByMail/" + email, false);
  xhttp.send();  
  return JSON.parse(myRes)
}

/*
*
* 
* Inserta 
*
*/
function myDataInsert (usuario) {

    let myResponse2 = JSON.parse(ajax1())
    let myId = myResponse2.length + 1
 

    let myResponse = false

    if (!usuario) { return myResponse}
    if (usuario == null) { return myResponse}
    if (usuario == undefined) { return myResponse}
     
    usuario.id = myId

     ajax3(usuario)

    // datos.push(usuario)
    
    myResponse = true
    
    return myResponse
}

function ajax3(usuario){
  let myRes = null;
  usuario.id = 999
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   myRes = this.responseText;
   
  }
  xhttp.open("POST", "http://localhost:3000/dataInsert", false);
  xhttp.setRequestHeader("Content-type", "application/json");  
  xhttp.send(JSON.stringify(usuario));  
  return myRes
}
/*
*
*
* Update
*
*
*/
function myDataUpdate (usuario) {
    let myResponse = false

    myResponse = ajax4(usuario);
    /*
    let myId = datos.findIndex( (x) => {
        return x.id == user.id;
    })

    if (myId = -1) return myResponse

    // datos[myId].id = usuario.id
    datos[myId].nombre = usuario.nombre
    datos[myId].celectronico = usuario.celectronico
    datos[myId].clave = usuario.clave
    */
    return myResponse
}


function ajax4(usuario){
  let myRes = null;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myRes = JSON.parse(this.responseText); 
  }
  xhttp.open("PUT", "http://localhost:3000/dataUpdate/" + Number(usuario.id), false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(usuario));  
   myRes.error = (myRes.error == false) ? true : false
  return myRes
}
/*
*
*
* Delete
*
*
*/
function myDataDelete(id) {
     let myAnswer = null
     myAnswer = ajax5(id)
     return true
    /*
    let myId = datos.findIndex( (x) => {
      return x.id == id;
    })
    if (myId == -1) return false
    // datos[myId].dstatus = "Inactivo"    
    return true
    */
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
  myDataDelete,
  myDataByMail
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
