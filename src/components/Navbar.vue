<template>
  <nav class="navbar navbar-dark bg-dark shadow-lg text-light align-self-center">
  <div class="container-fluid">
       <div class="container-fluid ">
          <div class="row">
              <div class="col-2 bg-brandXYZ text-center text-dark rounded border border-light border-3 align-self-center">
                <h1 class="display-5"><i class="bi bi-building">  XYZ <small>Ltda.</small></i></h1>
              </div>
              <div class="col-9 text-center  p-3">
                <h1 class="display-4">SISTEMA DE GESTIÓN</h1> 
                <small>Solicitudes de permisos y vacaciones</small> 
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
    background-color: rgb(132, 147, 155);
  }
</style>