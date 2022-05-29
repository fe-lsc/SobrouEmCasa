<template>
  <ion-page>
    <ion-content>
      <toolbar-layout-arrow>
        <ion-list>
            <ion-item  button
              v-for="doacao in doacoes"
              @click="menuNavigation(`/SuasDoacoes/${doacao.id}`)"
              :key="doacao.id"
            >
              <ion-thumbnail slot="start">
                <ion-img :src="doacao.source" :alt="doacao.title"></ion-img>
              </ion-thumbnail>
              <ion-label > 
                {{doacao.title}}
              </ion-label>
            </ion-item>
        </ion-list> 
      </toolbar-layout-arrow>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
    IonPage,
    IonContent,
    IonThumbnail,
    IonLabel
    } from '@ionic/vue';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage,
    IonContent,
    IonThumbnail,
    IonLabel
  }, 
  data(){
    return{
      doacoes: [
      {
        id: 1, 
        title: 'doacao1', 
        description: 'doacao 1 para teste',
        source: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453'
      },
      {
        id: 2, 
        title: 'doacao2', 
        description: 'doacao 2 para teste',
        source: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp'
      },
      {
        id: 3, 
        title: 'doacao3', 
        description: 'doacao 3 para teste',
        source: 'https://www.petz.com.br/blog/wp-content/uploads/2021/12/porque-cachorro-lambe-tudo.webp'
      }

    ]
    };
  },
  setup() {
    return {
    }
  },
    methods:{
        menuNavigation(url){
            this.$router.push(url)
        }
    }
});
</script>

