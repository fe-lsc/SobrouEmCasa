<template>
    <ion-page>
      <ion-content :fullscreen="true" color="tertiary">
        <toolbar-layout-arrow>
          <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
              <ion-img id="ImagemDetalheDoacao" src="https://img.olx.com.br/images/87/878206275860987.jpg"></ion-img>
            </ion-slide>
            <ion-slide>
              <ion-img id="ImagemDetalheDoacao" src="https://cf.shopee.com.br/file/ea797822b6c7559a509b4e17243a168c"></ion-img>
            </ion-slide>
            <ion-slide>
              <ion-img id="ImagemDetalheDoacao" src="https://i.pinimg.com/736x/5e/2d/cf/5e2dcf488c20d875068be066dc6aade5.jpg"></ion-img>
            </ion-slide>
          </ion-slides>

          <h2 class="ion-text-center"><strong>Jaqueta Usada</strong></h2>
          <div id="texto">
            <span class="title-produto">Categoria: </span>
            <p>Roupas e acessórios</p>
            <span class="title-produto">Descrição: </span>
            <p>Jaqueta usada e muito bem conservada</p>
            <span class="title-produto">Endereço: </span>
            <p>Alameda das Verbenas, 343</p>
          </div>          
          <ion-img id="VerNoMapaButton" src="../../assets/images/VerNoMapa.svg"></ion-img>

          <div>
            .
          </div>
          <div>
            .
          </div>
          <div>
            .
          </div>
          <div>
            .
          </div>
        </toolbar-layout-arrow>
      </ion-content>
      <project-footer></project-footer>
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage, IonContent, IonImg
    } from '@ionic/vue';

export default defineComponent({
  name: 'HomePageJuridico',
  components: {
      IonPage, IonContent, IonImg
  }, setup() {
    return {
    }
  }
});
</script>

<style>
#ImagemDetalheDoacao{ 
   height: 300px;
   width: 100%;
   max-height: 300px;
   margin: 0%;
}
#VerNoMapaButton{
  margin-left: 0;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 35px;
  width: auto;
}

.title-produto {
  font-family: 'Pacifico';
}

#texto {
  font-size: 24px;
  margin: 30px;
}

</style>
