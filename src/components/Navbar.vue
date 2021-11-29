<template>
  <nav class="navbar navbar-dark bg-dark shadow-lg text-light align-self-center">
  <div class="container-fluid">
       <div class="container-fluid">
          <div class="row">
              <div class="col-3 bg-brandXYZ text-center rounded border border-light border-3">
                <a class="navbar-brand p-1"><h1 class="display-5"><i class="bi bi-building"></i> XYZ <small>Ltda.</small></h1></a>
              </div>
              <div class="col-8 text-center  p-3">
                <h1 class="display-5">Sistema de Gestión</h1> 
                <small>Solicitudes de permisos y vacaciones</small> 
              </div>
              <div class="col-1 p-4">
                <!-- <button class="btn btn-info btn-lg w-100 p-3">
                <h4><i class="bi bi-person-circle"></i> {{textoUser}}</h4> 
                </button> -->
              </div>
          </div>
        </div>
  </div>
</nav>
</template>

<script>
export default {
  props:{
    
    textoUser: String,

  }

}
</script>

<style scoped>

  .bg-brandXYZ{

    background-color: rgb(84, 104, 114);

  }

</style>