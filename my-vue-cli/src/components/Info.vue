<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalahndo no momento.</p>
        <p v-else>Estou em busca de oportunidade</p>
        
        <p>Ultilizo as seguintes Tecnologia para Front-end:</p>
        <ul>
            <li v-for="(tencnologia, index) in frontend" v-bind:key="index">{{tencnologia}}</li>   
        </ul>
        <p>Ultilizo as seguintes Tecnologia para Back-end</p>
        <ul>
            <li v-for="tencnologia in backend" :key="tencnologia.id">{{tencnologia.lin}}</li>
        </ul>
        <div>
            <button @click="showEmail">{{textobotao}}</button>
        </div>
        <p v-show="mostrar_email" class="email">gabriel@gmail.com </p>
        <p class="tes">para acessar meu github: <a :href="meu_link" target="blank">Clique aqui</a></p>
        <Picture/>
    </div>
</template>

<script>
import Picture from './form/Picture.vue';

    export default{
     
        name: 'InfO',
        components:{Picture},
        data() {
            return {
                esta_trabalhando: true,
                mostrar_email: false,
                meu_link: 'https://github.com/Gabrielperes12',
                textobotao: 'Mostrar e-mail',
                frontend:['HTML','CSS3','JAVASCRIPT', 'VUE.JS'],
                backend:[
                    {id:1, lin:'Python' },
                    {id:2, lin:'Java' },
                    {id:3, lin:'node' }
                ]
               
            
                
            }
        },
        //aula 11//
       methods:{
            showEmail(){
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email){
                    this.textobotao = 'Mostrar e-mail'
                }else{
                    this.textobotao = 'esconder e-mail'
                }
            }
       }
    }
</script>

<style scoped>
.email{
    background-color: black;
    color: red;
    text-align: center;
}

</style>