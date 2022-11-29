<template>
<div>
    <h1>Olá VUE!</h1>
    <p> Meu nome é {{nome}} tenho {{idade}} e trabalho como {{profissão}}</p>
</div>
</template>

<script>
    export default{
       name:'PrimeiroComponents',
       data(){
        return{
            nome: 'Gabriel',
            idade: 22,
            profissão: 'Vg'
        }
       }
    }    
</script>