<template>

    <div class="container px-4 py-5 my-4 bg-dark rounded">
      <div class="container">

        <div class="row">

          <div class="col-10">
              <h1 class="display-2 text-light">SOLICITUD #{{$route.params.id}}</h1>
          </div>

          <div class="col-2 align-self-center">

            <router-link class="btn btn-lg rounded border border-1 border-light text-light" to="/">
               <i class="bi bi-house-fill"> Regresar</i>
            </router-link>

          </div>

        </div>

      </div>
      <hr class="bg-light mb-5">
    <div class="row py-5">
      <div class="col text-center text-lg-start text-light">
        <h1 class="display-6 mb-3 text-center">Asunto: <span class="bg-SmoothWarning text-dark px-3 rounded">{{ dataSelect[0].titleUser }}</span></h1>
        <hr class="bg-light mb-5">
        <p class="container">{{ dataSelect[0].descriptionUser }}</p>
        <hr class="bg-light mb-5">
        <h6 class="container text-light">
          <span class="border border-light p-3 rounded mx-1">{{dataSelect[0].nameUser+" "+dataSelect[0].lastnameUser}}</span>
          <span class="border border-light p-3 rounded mx-1">{{dataSelect[0].mailUser}}</span>
          <span class="border border-light p-3 rounded mx-1">{{dataSelect[0].dateUser}}</span>
        </h6>
      </div>
      <div class="col">
        <form class="p-4 border rounded-3" @submit.prevent="">
          <h1 class="display-6 text-light">Responder</h1>
          <div class="form-floating mb-3">
            <select class="form-select" id="selectApprobe" v-model="selectValue">
              <option value="Pendiente">Pendiente</option>
              <option value="Aprobado">Aprobado</option>
              <option value="Rechazado">Rechazado</option>
            </select>
            <label for="selectApprobe">Seleccione una Respuesta</label>
          </div>

          <div class="form-floating mb-3">
            <textarea class="form-control" id="floatingTextarea2" style="height: 150px" v-model="textAreaValue"></textarea>
            <label for="floatingTextarea2">Cuerpo de Respuesta</label>
          </div>

          <button class="w-100 btn btn-lg btn-success rounded" data-bs-toggle="modal" data-bs-target="#modalAppl" :disabled="valFields" type="submit" @click="cleanSub">RESPONDER</button>
        </form>

      </div>
    </div>
  </div>

<Modal
  idModal="modalAppl"
  titleModal="Perfecto!"
  textModal="La Respuesta de la solicitud se ha enviado con éxito"
 />

</template>

<script>
import { mapState, /*mapMutations,*/ mapActions } from "vuex";
import Modal from '../components/Modal.vue';
export default {
  name:"Application",
  components:{

    Modal,

  },
    

  data(){

    return{

      dataUserApplication: [],
      dataSelect: [],
      param : `${this.$route.params.id}`,
      selectValue:"Pendiente",
      textAreaValue:"",

    }

  },

  methods:{

  cleanSub(){

    this.selectValue = "";
    this.textAreaValue ="";

  },

  getData() {

        this.dataUserApplication = this.infoUser;
        for (var i = 0; i < this.dataUserApplication.length; i++) {
          for (var j = 0; j < this.dataUserApplication[i].topic.length; j++) {
              if (this.dataUserApplication[i].topic[j].status == "Pendiente" && this.dataUserApplication[i].topic[j].id == this.param) {
                  this.dataSelect.push({
                    "nameUser": this.dataUserApplication[i].name,
                    "lastnameUser": this.dataUserApplication[i].lastname,
                    "mailUser": this.dataUserApplication[i].email,
                    "dateUser": this.dataUserApplication[i].topic[j].date,
                    "descriptionUser": this.dataUserApplication[i].topic[j].description,
                    "titleUser": this.dataUserApplication[i].topic[j].title,
                  });
              }
            }
        }
    },

  },

  computed:{    
    ...mapState(["infoUser"]),
    valFields(){

        if(this.selectValue === "" || this.textAreaValue === "" || this.selectValue === "Pendiente"){

          return true

        }else{

          return false

        }


    }
  },

  created(){

    this.getData();

  },
}
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