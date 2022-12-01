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
        <p v-show="mostar_email">email: {{email}}</p>
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
                mostar_email: true,
                email: 'gabriel@gmail.com',
                meu_link: 'https://github.com/Gabrielperes12',
               
            
                
            }
        },
    }
</script>