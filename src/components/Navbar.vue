<template>
  <nav class="navbar navbar-dark bg-dark shadow-lg text-light ">
  <div class="container-fluid">
       <div class="container">
          <div class="row">
              <div class="col-2 bg-info text-center rounded">
                <a class="navbar-brand p-1 text-dark"><h1>XYZ <small>ltda</small></h1></a>
              </div>
              <div class="col text-center">
                <h1 class="display-4 p-3">Sistema de Gestión</h1> 
              </div>
              <div class="col-2 p-4">
                <button class="btn btn-info btn-lg w-100 p-3">
                <h4><i class="bi bi-person-circle"></i> {{textoUser}}</h4> 
                </button>
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

    background-color: rgb(78, 140, 168);

  }

</style>