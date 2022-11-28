const myNameApp = {
    data (){
      return{
        name: 'Gabriel', 
        idade: 22
      }  
    }
}
 Vue.createApp(myNameApp).mount('#app')