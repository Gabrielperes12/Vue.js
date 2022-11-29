<template>
  <div>
  <PrimeiroComponents/>
  <LifeCycle/>
  </div>

</template>

<script>
    import PrimeiroComponents from './components/PrimeiroComponents.vue'
    import LifeCycle from './components/LifeCycle.vue'
    
    export default{
      components:{
        PrimeiroComponents,
        LifeCycle
      }
    }
</script>