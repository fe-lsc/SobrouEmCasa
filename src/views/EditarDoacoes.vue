<template>
  <ion-page>
    <ion-content>
      <toolbar-layout-arrow>
        <h1 id="TitleEditarDoacao">Editar doação</h1>


        <h2>{{doacao.categoria}}</h2>
        <ion-img id="ImagemDoacaoDetalhe" :src="doacao.source" :alt="doacao.title"></ion-img>
        <h2>{{doacao.title}}</h2>
        <h2>{{doacao.description}}</h2>
        <h2>{{doacao.status}}</h2>
        
      </toolbar-layout-arrow>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { useStore } from 'vuex'
import { key } from '../store'

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
  data(){
    return{
      IdDoacao: this.$route.params.id
    }
  },
  computed:{
    doacao(): {
    id: string;
    title: string;
    description: string;
    dataDoacao: string;
    status: string;
    ONG: string;
    categoria: string;
    source: string;
    }{
      const store = useStore(key)
      return store.getters.doacao(this.IdDoacao); 
    }
  }
  ,
  watch:{
    '$route'(currentRoute){
      this.IdDoacao = currentRoute.params.id;
    }
  }
  
  
});
</script>

<style>
#ImagemDoacaoDetalhe{ 
    height: 300px;
}
#TitleEditarDoacao{ 
   /* Mudar fonte pra pacifico (Não entendi como mudar)*/
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

</style>