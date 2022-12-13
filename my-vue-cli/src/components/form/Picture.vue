<template>
    <div>
        <img :src="avatar" alt="gabriel">
        <MudarImagem @mudar-imagem="trocarImagem" />
    </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue';
    export default{
  components: { MudarImagem },
        name:'PicturE',
            data(){
                return{
                avatar: '/img/avatar.png',
                descrição: 'gabriel'}
            },
            methods:{
                trocarImagem(){
                    this.avatar = '/img/avatar2.png'
                }
            }
    }
</script>