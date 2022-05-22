<template>
  <ion-page>
    <div id="container">
      <ion-content :fullscreen="true">      
      <div>
        <ion-img id="logo" :src="Logo"></ion-img>
      </div>
      
      </ion-content>
    </div>    
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg, IonInput, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cadastro',
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
ion-input {
  --background: var(--ion-item-background);
  --color: var(--ion-background-color);
}

ion-item {
  --border-radius: 5px;
  --height: 10px;
}

#container {
  --background: var(--ion-background-color);
}

#logo {
  margin-top: 120px;
  height: 40px;
}

</style>
