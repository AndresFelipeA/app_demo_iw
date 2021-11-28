<template>
  <Navbar :textoUser="user"/>
  <div class="container mt-4">
    <div class="row">
      <div class="col-3">
        <CardUser :urlImage="urlImage" :userText="user"/>
        
        <CardInfo />

      </div>
      <div class="col">
        <div class="container bg-primary p-3 rounded">
          <div class="row">
            <div class="col p-3 text-light">
              <h1 class="display-5">SOLICITUDES</h1>
            </div>
            <div class="col p-3">
              <div class="bg-primary text-center">
                <small class="text-light">Filtrar por Meses</small>
              </div>
              <select class="form-select text-dark" v-model="valorMes" @change="test"> 
                  <option selected>Todo</option>
                  <option :value="index" v-for="(mes, index) in meses" :key="index" >{{mes}}</option>
              </select>

            </div>
          </div>
        </div>
        <div class="list-group tamSolicitudes border border-3 border-primary">
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">Test</a>
          <a href="#" class="list-group-item list-group-item-action">A second link item</a>
          <a href="#" class="list-group-item list-group-item-action">A third link item</a>
          <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
        
        </div>

      </div>

    </div>

  </div>
  <div class="container mt-4">
    asdasdsa
  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
import { mapState, /*mapMutations,*/ mapActions } from "vuex";
import Navbar from '@/components/Navbar';
import CardUser from '@/components/CardUser';
import CardInfo from '@/components/CardInfo';

export default {
  name: 'Home',
  components: {
    Navbar,
    CardUser,
    CardInfo
  },
  data(){

    return{

      user: "user-1".toUpperCase(),
      urlImage: "https://via.placeholder.com/150",
      meses:[

        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',

      ],

      valorMes: '',
      datosCarga: []

    }

  },
  methods:{

    test(){

        this.datosCarga = this.infoUser;
        var contPen = 0;
        var contAprob = 0;
        var contRech = 0;
        //console.log(this.datosCarga.length);
        for(var i = 0; i < this.datosCarga.length; i++){
          for (var j = 0; j < this.datosCarga[i].topic.length; j++){
            if(this.datosCarga[i].topic[j].status == "Pendiente"){
              console.log("**************************************");
              console.log("Id:"+ this.datosCarga[i].id);
              console.log("Nombre:" + this.datosCarga[i].name +" "+ this.datosCarga[i].lastname);
              console.log("Correo:" +  this.datosCarga[i].email);
              console.log("-----------------------------------");
              console.log( this.datosCarga[i].topic[j].title);
              console.log( this.datosCarga[i].topic[j].date);
              console.log( this.datosCarga[i].topic[j].status);
              console.log("-----------------------------------");
              contPen = contPen + 1;
              console.log(contPen);
              console.log("**************************************");

            }else if (this.datosCarga[i].topic[j].status == "Aprobado"){

              contAprob = contAprob + 1;

            }else{

              contRech = contRech + 1;

            }
          }
          
        }
      console.log("Pendientes: " + contPen);
      console.log("Aprobados: " + contAprob);
      console.log("Rechazados: " + contRech);


   },

  },
  computed:{

    ...mapState(['infoUser']),

  },

}
</script>

<style scoped>
.tamSolicitudes {
  height: 500px;
  overflow-y: scroll;
}
</style>