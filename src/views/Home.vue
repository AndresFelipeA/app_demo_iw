<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-3">
        <CardUser :urlImage="urlImage" :userText="user" />
        <CardInfo :inProcess="inProcess" :approved="approbed" :denied="denied"/>
      </div>
      <div class="col-1">
        <div class="d-flex" style="height: 700px;">
          <div class="vr"></div>
        </div>
      </div>
      <div class="col-8 shadow-lg">
        <div class="container bg-dark p-3 rounded">
          <div class="row">
            <div class="col p-3 text-light">
              <h1 class="display-5">SOLICITUDES</h1>
              <h1 class="display-6">Pendientes</h1>
            </div>
            <div class="col p-3">
              <div class="border border-2 p-1 border-light text-center">
                <h4 class="text-light">Filtrar por Meses</h4>
              </div>
              <select class="form-select text-dark" v-model="monthValue" @change="filter(monthValue)">
                <option value="Todo">Todo</option>
                <option :value="index+1" v-for="(mes, index) in months" :key="index">
                  {{ mes }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="list-group tamSolicitudes border border-4 border-dark bg-SmoothBlue" v-if="testV === 1">
          <router-link class="list-group-item list-group-item-action rounded border border-2 p-3 mb-2 bg-dark text-light"  v-for="item in dataSelect" :key="item.idLoad" :to="`/application/${item.idAppl}`">
              <div class="container">
                <div class="row">
                  <div class="col-1 align-self-center">
                      <h5 class="display-5">{{item.idCount}}</h5>
                  </div>
                  <div class="col-8 col align-self-center">
                    <span class="border border-1 border-light mx-1 p-1 rounded"> <i class="bi bi-person-fill"></i> {{ item.nameLoad+" "+item.lastnameLoad }} </span>
                    <span class="border border-1 border-dark mx-1 p-1 rounded text-dark bg-SmoothWarning"><i class="bi bi-file-earmark-ruled"></i> {{item.titleLoad}} </span>
                    <span class="border border-1 border-light mx-1 p-1 rounded"><i class="bi bi-calendar3"></i> {{ item.dateLoad }}</span>
                  </div>

                  <div class="col-3 align-self-center">
                      <h5 class="display-6">Ver <i class="bi bi-arrow-right-circle-fill"></i></h5>
                  </div>

                </div>
              </div>
          </router-link>
        </div>
        <div class="list-group tamSolicitudes border border-4 bg-SmoothBlue" v-else-if="testV == 2">
          <router-link class="list-group-item list-group-item-action border border-2 p-3 mb-2 bg-dark text-light"  v-for="item in dataSupport" :key="item.idLoad" :to="`/application/${item.idAppl}`">
              <div class="container">
                <div class="row">
                  <div class="col-1 align-self-center">
                      <h5 class="display-5">{{item.idCount}}</h5>
                  </div>
                  <div class="col-8 col align-self-center">
                    <span class="border border-1 border-light mx-1 p-1 rounded"> <i class="bi bi-person-fill"></i> {{ item.nameLoad+" "+item.lastnameLoad }} </span>
                    <span class="border border-1 border-dark mx-1 p-1 rounded text-dark bg-SmoothWarning"><i class="bi bi-file-earmark-ruled"></i> {{item.titleLoad}} </span>
                    <span class="border border-1 border-light mx-1 p-1 rounded"><i class="bi bi-calendar3"></i> {{ item.dateLoad }}</span>
                  </div>

                  <div class="col-3 align-self-center">
                      <h5 class="display-5">Ver <i class="bi bi-arrow-right-circle-fill"></i></h5>
                  </div>

                </div>
              </div>
          </router-link>
        </div>

        <div class="list-group tamSolicitudes border border-4 bg-SmoothBlue text-center bg-dark text-light" v-else-if="testV = 3">
               <li class="list-group-item list-group-item-action border border-2 p-3 mb-2"> 
                 <h4 class="display-6"> <i class="bi bi-info-square-fill text-dark">  No hay Solicitudes en este mes</i></h4>
               </li>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
import { mapState, /*mapMutations,*/ mapActions } from "vuex";
import CardUser from "@/components/CardUser";
import CardInfo from "@/components/CardInfo";

export default {
  name: "Home",
  components: {
    CardUser,
    CardInfo,
  },
  data() {
    return {
      user: "user-1".toUpperCase(),
      urlImage: "https://via.placeholder.com/150",
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      monthValue: "Todo",
      loadData: [],
      dataSelect: [],
      dataSupport:[],
      inProcess : 0,
      approbed : 0,
      denied : 0,
      testV : 1,
    };
  },
  methods: {

    filter(value){
      if(this.monthValue == "Todo"){
        this.testV = 1;
      }else{
          this.dataSupport = this.dataSelect.filter( function(fecha){
            return fecha.monthDateLoad === value;
          });
          console.log(this.dataSupport);
          this.dataSupport.length == 0? this.testV = 3 : this.testV = 2;
      }

    },


    getData() {
      var arrDateSplit = [];
      var dateSplit;
      var count = 0;
        this.loadData = this.infoUser;
        for (var i = 0; i < this.loadData.length; i++) {
          for (var j = 0; j < this.loadData[i].topic.length; j++) {
              if (this.loadData[i].topic[j].status == "Pendiente") {
                  dateSplit = this.loadData[i].topic[j].date;
                  arrDateSplit =  dateSplit.split("/");
                  this.dataSelect.push({
                    "idCount": count = count+1,
                    "idLoad": this.loadData[i].id,
                    "idAppl": this.loadData[i].topic[j].id,
                    "nameLoad": this.loadData[i].name,
                    "lastnameLoad": this.loadData[i].lastname,
                    "mailLoad": this.loadData[i].email,
                    "dateLoad": this.loadData[i].topic[j].date,
                    "monthDateLoad": parseInt(arrDateSplit[1]),
                    "titleLoad": this.loadData[i].topic[j].title,
                  });
                  this.inProcess = this.inProcess + 1;
              } else if (this.loadData[i].topic[j].status == "Aprobado") {
                this.approbed = this.approbed + 1;
              } else {
                this.denied = this.denied + 1;
              }
            }
        }
    },
  },
  computed: {
    ...mapState(["infoUser"]),
  },

  created(){

    this.getData();

  }

};
</script>

<style scoped>
.tamSolicitudes {
  height: 500px;
  overflow-y: scroll;
}

.bg-SmoothBlue {
  background-color: rgb(176, 185, 192);
}

.bg-SmoothWarning{

  background-color: rgb(240, 233, 137);

}

</style>