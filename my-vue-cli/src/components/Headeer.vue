<template>
    <div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projeto</a></li>
            <li><a href="#">Contato</a></li>

        </ul>
    </div>
</template>

<script>
    export default{
        name: 'HeadeR',
       }
</script>

<style scoped>
ul{
    list-style: none;
    display: flex;
    background-color: black;
    padding: 30px;
    margin: -10px -10px -10px -10px;

}
li{
    margin-right: 10px;
}
a{
    color: #ddd;
    text-decoration: none;
    transition: 0.5;
}
a:hover{
    color: red ;
}
</style>