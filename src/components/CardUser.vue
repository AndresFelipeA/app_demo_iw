<template>
  <div class="card border border-4 border-primary" style="width: 18rem;">
  <img :src="urlImage" class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title display-5 text-center">{{userText}}</h5>   
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