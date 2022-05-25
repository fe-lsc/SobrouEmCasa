<template>
    <ion-page>
        <toolbar-layout>

        </toolbar-layout>

        <ion-content :fullscreen="true">
            TESTE
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegistrarDoacao',
  components: {
    IonContent,
    IonPage
  }, setup() {
    return {
    }
  }
});
</script>

<style>

</style>