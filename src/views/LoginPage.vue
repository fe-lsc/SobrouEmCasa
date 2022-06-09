<template>
  <ion-page >
    <div id="container" >
      <ion-content :fullscreen="true">      
      <div>
        <ion-img id="logo" :src="Logo"></ion-img>
      </div>
      
      <form class="ion-padding">
        <ion-list >
          <ion-item color="light" class="inputCadastro">
              <ion-label position="floating">Usuário (Email):</ion-label>
              <ion-input  type="email" required v-model="Usuario" />
          </ion-item>
          <ion-item  color="light" class="inputCadastro">
              <ion-label position="floating">Senha:</ion-label>
              <ion-input type="password" required v-model="Senha" />
          </ion-item>
        </ion-list>
        <ion-button  fill="solid" size="small"  type="submit" expand="full" @click="login">Entrar</ion-button> 
      </form>

    

      <p id="clique-cadastro">Não tem cadastro? <a href="cadastro">Cadastre-se aqui!</a></p>

      </ion-content>
    </div>    
  </ion-page>
</template>

<script lang="ts"> 
import { IonContent, IonPage, IonImg, IonInput, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';
import UserService from '../services/User.Service'
import axios from 'axios'


export default defineComponent({
  name: 'LoginPage',
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonInput,
    IonItem
  }, data(){
      return{
          Usuario: "",
          Senha: ""
      };
  }
  , setup() {
    return {
      Logo : "../../assets/images/Logo.png",
    }
  },
    methods:{
        login(){
            // const teste = async() => {this.axios.get('https://cat-fact.herokuapp.com/facts')
            // .then(function (response) {
            // console.log(response.data) ;
            // window.prompt("1")
            // })
            // .catch(function (error) {
            // console.log(error) ;
            // window.prompt("2")
            // }); }

            // window.prompt("3")
            let body = { email: this.Usuario, senha: this.Senha };
            UserService.login(body).then((response) => { 
              // window.prompt("PASSOU LOGIN");
              // console.log("Usuario " + this.Usuario + " logado")
              // console.log(response)
              this.$router.push("/HomePageDoador")
            }) 
            .catch((error) => {
              // window.prompt("CATCH ERRO LOGIN");
              console.log("ERRO : " + error.STATUS); //Logs a string: Error: Request failed with status code 404
            });
            
        }
    } 
}); 
</script>

<style>
ion-input{
  --background: var(--ion-item-background);
  --color: var(--ion-background-color);
}

ion-item{
  --border-radius: 20px;
  --height: 10px;
}

#container {
  --background: var(--ion-background-color);
}


#logo{
  margin-top: 320px;
  height: 40px;
}

.login{
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  border-radius: 5px;
  align-items: center;
  flex-flow: column;
}

#clique-cadastro {
  text-align: center;
  margin-top: 90px;
}
</style>
