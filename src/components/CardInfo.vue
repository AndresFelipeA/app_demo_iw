<template>
  <div class="card border border-4 mt-4" style="width: 18rem;">
  <div class="card-header bg-brandXYZ text-center text-light">
    <h6 class="display-6"> Total <i class="bi bi-info-circle-fill"></i></h6>
      <small>Solicitudes</small>
  </div>
  <ul class="list-group list-group-flush text-center">
    <li class="list-group-item">
    <div class="container">
        <div class="row">
            <div class="col-2 bg-SmoothWarning rounded-circle border border-dark">
            </div>
            <div class="col-10">
                <h4>En Proceso: {{inProcess}}</h4>
            </div>
        </div>
    </div>
    </li>
    <li class="list-group-item ">
     <div class="container">
        <div class="row">
            <div class="col-2 bg-SmoothSuccess rounded-circle border border-dark">
            </div>
            <div class="col-10">
              <h4>Aprobadas: {{approved}}</h4> 
            </div>
        </div>
    </div>
    </li>
    <li class="list-group-item">
           <div class="container">
        <div class="row">
            <div class="col-2 bg-SmoothDanger rounded-circle border border-dark">
            </div>
            <div class="col-10">
               <h4>Rechazadas: {{denied}}</h4>
            </div>
        </div>
    </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {

    props:{

        inProcess: Number,
        approved: Number,
        denied: Number,


    },
    data(){
        return{
        }
    }

}
</script>

<style scoped>

.bg-SmoothWarning{

    background-color: rgb(226, 226, 108);

}
.bg-SmoothSuccess{

    background-color: rgb(126, 235, 126);

}
.bg-SmoothDanger{

    background-color: rgb(245, 135, 135);

}

.bg-brandXYZ{
    background-color: rgb(84, 104, 114);
  }

</style>