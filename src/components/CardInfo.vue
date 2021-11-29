<template>
  <div class="card text-white bg-dark mb-3 shadow-lg" style="max-width: 18rem">
    <div class="card-header">
      <h5><i class="bi bi-info-circle-fill">  Total Solicitudes</i></h5> 
    </div>
        <div class="container p-2">
            <div class="container">
            <div class="row p-2">
                <div class="col-10">En Proceso: </div>
                <div class="col-2 bg-SmoothWarning rounded text-dark"><h5>{{ inProcess }}</h5></div>
            </div>
            </div>

            <div class="container">
            <div class="row p-2">
                <div class="col-10">Aprobadas: </div>
                <div class="col-2 bg-SmoothSuccess rounded text-dark"><h5>{{ approved }}</h5></div>
            </div>
            </div>
            <div class="container">
            <div class="row p-2">
                <div class="col-10">Rechazadas: </div>
                <div class="col-2 bg-SmoothDanger rounded text-dark"><h5>{{ denied }}</h5></div>
            </div>
            </div>
        </div>
  </div>

</template>

<script>
export default {
  props: {
    inProcess: Number,
    approved: Number,
    denied: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.bg-SmoothWarning {
  background-color: rgb(226, 226, 108);
}
.bg-SmoothSuccess {
  background-color: rgb(126, 235, 126);
}
.bg-SmoothDanger {
  background-color: rgb(245, 135, 135);
}
.bg-brandXYZ {
  background-color: rgb(84, 104, 114);
}
</style>