<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalahndo no momento.</p>
        <p v-else>Estou em busca de oportunidade</p>
        
        <p>Ultilizo as seguintes Tecnologia:</p>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JAVASCRIPT</li>
            <li>VUE.JS</li>
        </ul>
        <div>
            <button @click="showEmail">Mostra e-mail</button>
        </div>
        <p>para acessar meu github: <a :href="meu_link" target="blank">Clique aqui</a></p>
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
                mostar_email: false,
                email: 'gabriel@gmail.com',
                meu_link: 'https://github.com/Gabrielperes12',
               
            
                
            }
        },
        methods:{
            showEmail(){
               this.mostar_email = !this.mostar_email
            }
        }
    }
</script>