<template>
    <ion-page>
        <toolbar-layout>
            JURIDICO
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
