<template>
  <div>
    <Headeer/>
    <PrimeiroComponents/>
    <LifeCycle/>
    <Pessoa/>
    

  </div>
  </template>

<script>
    import PrimeiroComponents from './components/PrimeiroComponents.vue'
    import LifeCycle from './components/LifeCycle.vue'
    import Pessoa from './components/Pessoa.vue';
    import Headeer from './components/Headeer.vue';


   
    
    export default{
      name: 'app',
      components:{
        PrimeiroComponents,
        LifeCycle,
        Pessoa,
        Headeer
            
        
        
      }
    }
</script>

<style>
body{
  background-color: #333 ;
  color: white;
}
a{
  color: red;
}
.tes{
  background-color: black;
}
</style>