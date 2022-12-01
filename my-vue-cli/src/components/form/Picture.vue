<template>
    <div>
        <img :src="avatar" alt="gabriel">
    </div>
</template>

<script>
    export default{
        name:'PicturE',
            data(){
                return{
                avatar: '/img/avatar.png',
                descrição: 'gabriel'}
            }
    }
</script>