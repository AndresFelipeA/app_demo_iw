<template>

  <div class="card text-white bg-dark mb-3 shadow-lg" style="max-width: 18rem;">
  <div class="card-header">
    <h5><i class="bi bi-person-fill">{{"  "+userText}}</i></h5>
  </div>
  <div class="card-body">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <button class="btn btn-large border border-light bg-ProfileButton px-4"  data-bs-toggle="modal" data-bs-target="#modalProfile">
              <h6>
                <i class="bi bi-person-circle  text-light"> Perfil</i>
              </h6>
          </button>
        </div>
        <div class="col-6">
          <button class="btn btn-large border border-light bg-CloseButton px-4" data-bs-toggle="modal" data-bs-target="#modalClose">
             <h6>
               <i class="bi bi-box-arrow-left  text-light"> Cerrar</i>
            </h6> 
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<Modal 
  idModal="modalClose"
  titleModal="Cuidado!"
  textModal="Está a punto de Cerrar su Sesión"
 />
<Modal 
  idModal="modalProfile"
  titleModal="Su Perfil"
  textModal="Aquí encontrará mas información sobre su perfil"
 />
</template>

<script>
import Modal from '@/components/Modal';
export default {
  
  name:"CardUser",
  components:{

    Modal,

  },
    props:{

        urlImage: String,
        userText: String,

    }
}
</script>

<style scoped>

  .bg-ProfileButton{
    /* background-color: rgb(84, 145, 214); */
    background-color: rgb(20, 50, 85);
  }
  .bg-CloseButton{
    /* background-color: rgb(228, 135, 139); */
    background-color: rgb(131, 46, 50);
  }
  .bg-brandXYZ{
    background-color: rgb(132, 147, 155);
  }

</style>