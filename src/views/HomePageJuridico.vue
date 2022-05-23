<template>
    <ion-page>
        <toolbar-layout>
           <ion-img id="EditarInformacoes" src="../../assets/images/EditarInformacoes.png"></ion-img>
            <ion-img id="ProcurarDoacao" src="../../assets/images/ProcurarDoacao.png"></ion-img>
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

#ProcurarDoacao{ 
  height: 450px;
}
#EditarInformacoes{ 
  height: 40px;
}
</style>
