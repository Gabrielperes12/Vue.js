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

          this.lifecycle()
        },
        mounted(){
            setTimeout(() => {
                this.nome = 'Renan'
            }, 2000);
            this.lifecycle()
        },
        methods: {
            lifecycle(){
                console.log('execotou')
            }
        }
    }
</script>