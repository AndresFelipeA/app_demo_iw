<template>
  <div>
    <Navbar/>
  </div>
  <router-view/>
</template>

<script>
  import Navbar from '@/components/Navbar';
export default {
  components:{
    Navbar
  },
}
</script>

<style>
.bg-general{

  background-color: salmon;

}
</style>
