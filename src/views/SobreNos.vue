<template>
<ion-page>
  <ion-content :fullscreen="true" color="tertianary">
    <toolbar-layout-arrow> 
        <ion-text id="SobreNos" color="dark">
          <h1>Sobre nós</h1>
          <p id="textoSobreNos">&nbsp;&nbsp;&nbsp;&nbsp;A SobrouEmCasa surgiu durante a faculdade, 
          quando 5 estudantes se juntaram e decidiram 
          revolucionar o jeito de doar e ajudar o próximo.
          </p>
          <p id="textoSobreNos">&nbsp;&nbsp;&nbsp;&nbsp;O objetivo do app é intermediar a relação do 
          doador com as ONG’S. Você pode doar aquele 
          seu item que não usa há muito tempo e quem 
          sabe mudar a vida de alguém que está precisando.
          </p>
          <p id="textoSobreNos">&nbsp;&nbsp;&nbsp;&nbsp;Este projeto é um projeto sem fins  lucrativos e 
          totalmente gratuito. Porém, se tiver o interesse 
          de nos apoiar e ajudar o app a continuar 
          crescendo e ajudando mais pessoas, você pode 
          nos mandar um pix! Ficaríamos muito gratos 
          e nos incentivaria ainda mais!
          </p>
        </ion-text>
        <ion-item lines="none">
            <ion-img  slot="start" src="/../../assets/images/PixLogo.png"></ion-img>
            <ion-text> CPF: 422.175.778-75</ion-text>
        </ion-item> 
        
        <div>.</div>
         <div>.</div>
          <div>.</div>
           <div>.</div>
    </toolbar-layout-arrow>
  </ion-content>
  <project-footer></project-footer>
</ion-page>
    
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage, IonItem
    } from '@ionic/vue';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage, 
    IonItem
  }, setup() {
    return {
    }
  }
});
</script>

<style>

#ArrowBack{ 
  height: 25px;
  margin-left: 5px;
}
#pix{ 
  display:inline;
}
#SobreNos {
  text-align: center;
}
#logoPix {
  margin-left: -220px;
   height: 50px;
}
#textoSobreNos{
  text-align: justify;
  line-height: 30px;
  margin: 20px;
}
</style>
