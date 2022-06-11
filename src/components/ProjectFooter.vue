<template>
  <ion-page>
    <ion-footer>
          
          <ion-toolbar>

              <ion-buttons @click="openSite(LinkTwitter)"  slot="start" id="logoTwitterFooter">
                <img slot="start" src="https://seeklogo.com/images/T/twitter-logo-1DEF94C339-seeklogo.com.png" />
              </ion-buttons>

              <ion-buttons @click="openSite(LinkInsta)" id="logoInstaFooter"   >
                <img  src="https://cdn-icons-png.flaticon.com/512/87/87390.png" />
              </ion-buttons>

              <ion-buttons @click="openSite(LinkFacebook)" slot="end" id="logoFacebookFooter">
                <img slot="end" src="https://iconape.com/wp-content/png_logo_vector/cib-facebook.png" />
              </ion-buttons>
          </ion-toolbar>
          
        </ion-footer>
  </ion-page>
</template>


<script lang="ts">
import {  IonToolbar, IonFooter } from '@ionic/vue';
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'RegistrarDoacao',
  components: {
     IonFooter, IonToolbar
  }, 
  data(){
    return{
      LinkInsta: "https://www.instagram.com/sobrouemcasa/",
      LinkTwitter: "http://www.twitter.com",
      LinkFacebook: "http://www.facebook.com"
    }
  } 
  ,
  /*Tentativa de mudar o nome do campo para ficar apenas a categoria escolhida, mas ainda nao esta funcionando*/ 
    methods:{
        
        openSite(link: string){
          /* NAO TA FUNFANDO, TA ABRINDO DENTRO DO LOCAL HOST, TENTEI HREF MAS AINDA SIM NAO FOI */
          window.open(link, '_blank')
          
        }
    }
  
});
</script>
