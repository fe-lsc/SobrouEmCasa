<template>
<ion-page>
    <toolbar-layout-arrow>
        <p> <a href="HomePageDoador">quale</a></p>
    </toolbar-layout-arrow>
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

#ArrowBack{ 
  height: 25px;
  margin-left: 5px;
}
</style>
