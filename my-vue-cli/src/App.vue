<template>
  <div>
    <PrimeiroComponents/>
    <LifeCycle/>
    <Pessoa/>
    

  </div>
  </template>

<script>
    import PrimeiroComponents from './components/PrimeiroComponents.vue'
    import LifeCycle from './components/LifeCycle.vue'
    import Pessoa from './components/Pessoa.vue';

   
    
    export default{
      name: 'app',
      components:{
        PrimeiroComponents,
        LifeCycle,
        Pessoa,
            
        
        
      }
    }
</script>