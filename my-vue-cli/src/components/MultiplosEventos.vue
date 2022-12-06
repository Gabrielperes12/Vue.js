<template>
    <div>
        <button @click="primeiro()">Ativar Multiplos Eventos</button>
        <p>{{multiplos_eventos}}</p>
    </div>
</template>

<script>
    export default{
        name:'MultiplosEventoS',
        components:{

        },
        data(){
            return{
                multiplos_eventos:''
            }
        },
        methods:{
           primeiro(){
            this.multiplos_eventos = 'Primeiro evento!'
           }
        }

    }
</script>

<style scoped>
    div{
        margin: 100px;
    }
</style>