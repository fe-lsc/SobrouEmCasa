<template>
  <ion-page>
    <ion-content :fullscreen="true" color="tertianary">
      <toolbar-layout-arrow>
      <img class="Mapa" src="https://maps.googleapis.com/maps/api/staticmap?center=Alameda%20das%20Verbenas,343&size=365x850&markers=size:mid|Alameda%20das%20Verbenas,343&zoom=13&region=BR&key=AIzaSyBSPbsdPrzd9w6chbNpIXqQ4-cj29hHjk8" alt="Mapa">
      </toolbar-layout-arrow>
    </ion-content>
    <project-footer></project-footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import{
        IonPage
    } from '@ionic/vue';
export default defineComponent({
  name: 'TelaMapa',
  components: {
    IonPage
  }, setup() {
    return {
    }
  }
});
</script>

<style scoped>
.Mapa{
  justify-content: center;
  margin:12px;
  height: 90%;
  width:93%;
}
</style>