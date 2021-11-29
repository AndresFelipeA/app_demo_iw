<template>
  <div class="card border border-4" style="width: 18rem;">
  <img :src="urlImage" class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title display-5 text-center">{{userText}}</h5>
    <hr class="border border-3 border-dark">
    <div class="container">
      <div class="row">
        <div class="col">
          <button class="btn border border-1 border-primary text-primary"><strong>PERFIL<i class="bi bi-person-circle"></i></strong></button>
        </div>
        <div class="col">
          <button class="btn border border-1 border-danger text-danger"><strong>CERRAR <i class="bi bi-box-arrow-left"></i></strong></button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    props:{

        urlImage: String,
        userText: String,

    }
}
</script>

<style>

</style>