<template>
<div>
    <h1>Olá VUE!</h1>
    <p> Meu nome é {{nome}} tenho {{idade}} e trabalho como {{profissão}}</p>
    <MultiplosEventos/>
</div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
    export default{
       name:'PrimeiroComponentS',
       components:{
        MultiplosEventos
       },
       data(){
        return{
            nome: 'Gabriel',
            idade: 22,
            profissão: 'Vg'
        }
       }
    }    
</script>