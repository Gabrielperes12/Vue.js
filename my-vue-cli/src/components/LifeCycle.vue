<template>
    <div>
        <h1>Meu nome: {{nome}}</h1>
    </div>
</template>

<script>
    export default{
        name:'LifeCycle',
        data() {
            return {
                nome: 'Ainda não sei'
            }
        },
        created(){
            setTimeout(() => {
                this.nome = 'Matheus'
            }, 1000  );

          
        },
        mounted(){
            setTimeout(() => {
                this.nome = 'Renan'
            }, 2000);
        }
    }
</script>