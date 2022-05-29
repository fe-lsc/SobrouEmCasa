<template>
  <ion-page>
    <ion-content>
      <toolbar-layout-arrow>
        
      </toolbar-layout-arrow>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
    IonPage,
    IonContent
    } from '@ionic/vue';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage,
    IonContent
  }, 
  
  
});
</script>

