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
    </div>
</template>

<script>
    export default{
        name: 'InfO',
        data() {
            return {
                esta_trabalhando: true,
                mostar_email: true,
                email: 'gabriel@gmail.com'
            }
        },
    }
</script>