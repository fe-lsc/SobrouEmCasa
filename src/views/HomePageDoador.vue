<template>
    <ion-page>
        <toolbar-layout>
            <ion-content :fullscreen="true" color="tertiary">
            <ion-img id="EditarInformacoes" src="../../assets/images/EditarInformacoes.png"></ion-img>
            <ion-img id="NovaDoacao" src="../../assets/images/NovaDoacao.png"></ion-img>
        
            </ion-content>
            </toolbar-layout>
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage
    } from '@ionic/vue';

export default defineComponent({
  name: 'HomePage',
  components: {
      IonPage
  }, setup() {
    return {
    }
  }
});
</script>


<style>

#NovaDoacao{ 
  height: 400px;
}
#EditarInformacoes{ 
  height: 40px;
}
</style>
