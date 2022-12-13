<template>
    <div>
        <h2>Descrição da pessoa: {{nome}} </h2>
        <Info compEmail="marcia@email.com" />
        <Forme />

        
    </div>
</template>

<script>
import Info from './Info.vue';
import Forme from './Forme.vue';

    export default{
      name:'PessoA',
       components:{
        Info,
        Forme
       },
      
      data(){
            return{
                nome: 'Gabriel'
            }
        }
    }
</script>