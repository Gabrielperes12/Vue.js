<template>
<div>
    
    <h1>Olá VUE!</h1>
    <p> Meu nome é {{nome}} tenho {{idade}} e trabalho como {{profissão}}</p>
    <MultiplosEventos/>
    <Reutilizacao/>
</div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue';
    export default{
       name:'PrimeiroComponentS',
       components:{
        MultiplosEventos,
        Reutilizacao
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