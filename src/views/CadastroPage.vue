<template>
  <ion-page>
    <div id="container">
      <ion-content :fullscreen="true">      
      <div>
        <ion-img id="logo" :src="Logo"></ion-img>
      </div>
      
      <div id="buttons">
        <ion-button id="pj">
          Pessoa Jurídica
          <img src="/../../assets/images/Predio.png">
        </ion-button>
        <ion-button id="pf"  @click="this.$router.push('/CadastroPF')">
          Pessoa Física
          <img src="/../../assets/images/user-alt.png">
        </ion-button>
      </div>

      </ion-content>
    </div>    
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CadastroPage',
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonButton
  }, setup() {
    return {
      Logo : "../../assets/images/Logo.png",
    }
  }
});
</script>

<style>
ion-button {
  --padding-bottom: 30px;
  --padding-top: 30px;
  --padding-right: 50px;
  --padding-left: 50px;
}

#pj {
  display: flex;
  margin-top: 30px;
}

#pf {
  display: flex;
  margin-top: 30px;
}

#container {
  --background: var(--ion-background-color);
}

#logo {
  margin-top: 120px;
  height: 40px;
}

img {
  margin-left: 10px;
  width: 25px;
  height: 26px;
}
</style>
