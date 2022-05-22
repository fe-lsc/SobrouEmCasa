<template>
  <ion-page>
    <div id="container">
      <ion-content :fullscreen="true">      
      <div>
        <ion-img id="logo" :src="Logo"></ion-img>
      </div>
    
    <div>
      <div class="login">
        <h5>Usuário (Email):</h5>
        <ion-item>
         <ion-input></ion-input>
        </ion-item>
      </div>
    </div>
    
    <div>
      <div class="login">
        <h5>Senha:</h5>
        <ion-item>
         <ion-input></ion-input>
        </ion-item>
      </div>
    </div>

     </ion-content>
    </div>    
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg, IonInput, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonInput,
    IonItem
  }, setup() {
    return {
      Logo : "../../assets/images/Logo.png",
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
  --border-radius: 5px;
  --height: 10px;
}

#container {
  --background: var(--ion-background-color);
}

#logo{
  margin-top: 150px;
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
 

</style>
