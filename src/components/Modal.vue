<template>
<!-- Modal -->
<div class="modal fade" :id="idModal" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabel2">{{ titleModal }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {{ textModal }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
  <!--modal-->
</template>

<script>

export default {

    props:{

        idModal: String,
        titleModal: String,
        textModal: String,
        

    }

}
</script>

<style>

</style>