<template>
    <div>
        <h2>Meu formulário:</h2>
        <form action="" @submit="enviarFormulario($event)">
        <div>
           <input type="text" v-model="name" placeholder='Nome...'>
        </div> 

        <div>
            <input type="text" v-model="email" placeholder="Email...">
        </div> 

        <div>
            <Submit/>
        </div>
           
        </form>

    </div>
</template>

<script>

import Submit from './form/Submit.vue';

    export default{
        name:'FormE',
        components:{
            Submit
        },

        data(){
            return{
                name:'',
                email:''
            }
        },

        methods:{
            enviarFormulario(e){
                e.preventDefault();

                const name = this.name;
                const email = this.email

                
                console.log('Formulário enviado');
                
                console.log('O nome é:' + name);
                console.log('O email é:' + email)

            }
        }

    }
</script>
