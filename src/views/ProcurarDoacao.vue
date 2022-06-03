<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <toolbar-layout-arrow>
              
              <ion-item class="ion-margin">
              <ion-label class="select-categ">{{NomeFiltroCategoria}}</ion-label>
              <ion-select interface="action-sheet" :interface-options="options">
                <ion-select-option class="select-option" value="eletrodomesticos" @click="ChangeNomeFiltroCategoria('Eletrodomésticos')">Eletrodomésticos</ion-select-option>
                <ion-select-option class="select-option" value="moveis">Móveis</ion-select-option>
                <ion-select-option class="select-option" value="utilidades-domesticas">Utilidades domésticas</ion-select-option>
                <ion-select-option class="select-option" value="livros-revistas">Livros e revistas</ion-select-option>
                <ion-select-option class="select-option" value="brinquedos-jogos">Brinquedos e jogos</ion-select-option>
                <ion-select-option class="select-option" value="roupas-acessorios">Roupas e acessórios</ion-select-option>
                <ion-select-option class="select-option" value="alimentos">Alimentos</ion-select-option>
                <ion-select-option class="select-option" value="higiene-pessoal">Higiene pessoal</ion-select-option>
                <ion-select-option class="select-option" value="produtos-limpeza">Produtos de limpeza</ion-select-option>
                <ion-select-option class="select-option" value="roupas-cama">Roupas de cama</ion-select-option>
                <ion-select-option class="select-option" value="calçados">Calçados</ion-select-option>
                <ion-select-option class="select-option" value="itens-tecnologia">Itens de tecnologia</ion-select-option>
                <ion-select-option class="select-option" value="outros">Outros</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item class="ion-margin">
              <ion-label class="select-categ">Filtrar por distância</ion-label>
              <ion-select interface="action-sheet" :interface-options="options">
                <ion-select-option class="select-option" value="1-kilometro">1 Kilômetro</ion-select-option>
                <ion-select-option class="select-option" value="3-kilometros">3 Kilômetros</ion-select-option>
                <ion-select-option class="select-option" value="5-kilometros">5 Kilômetros</ion-select-option>
                <ion-select-option class="select-option" value="10-kilometros">10 Kilômetros</ion-select-option>
                <ion-select-option class="select-option" value="15-kilometros">15 Kilômetros</ion-select-option>
                <ion-select-option class="select-option" value="25-kilometros">25 Kilômetros</ion-select-option>
                <ion-select-option class="select-option" value="35-kilometros">35 Kilômetros</ion-select-option>
                <ion-select-option class="select-option" value="50-kilometros">50 Kilômetros</ion-select-option>
                <ion-select-option class="select-option" value="100-kilometros">100 Kilômetros</ion-select-option>
                <ion-select-option class="select-option" value="200-kilometros">200 Kilômetros</ion-select-option>
                <ion-select-option class="select-option" value="300-kilometros">300 Kilômetros</ion-select-option>
              </ion-select>
            </ion-item>

            <h1 >Anúncios recentes</h1>

            <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-card class="cardsAnuncios">
                        
                        <ion-card-content>
                            <img class="ImagemCardsAnuncios" src="https://img.olx.com.br/images/68/681215383550502.jpg" />
                        </ion-card-content>
                        <ion-card-header>
                            <ion-card-subtitle>Livros e Revistas</ion-card-subtitle>
                            <ion-card-title class="TituloAnunciosCards">Livro: Tudo o que nunca contei - Usado</ion-card-title>
                        </ion-card-header>
                    </ion-card>
                </ion-col>
                <ion-col>
                    <ion-card class="cardsAnuncios">
                        <ion-card-content>
                            <img class="ImagemCardsAnuncios" src="https://img.olx.com.br/images/16/167246760824578.jpg" />
                        </ion-card-content>
                        <ion-card-header>
                            <ion-card-subtitle>Higiene Pessoal</ion-card-subtitle>
                            <ion-card-title class="TituloAnunciosCards">Pasta de dente, 5 unidades</ion-card-title>
                        </ion-card-header>
                    </ion-card>
                </ion-col>
            </ion-row>
            <ion-row>
            <ion-col>
              <ion-card class="cardsAnuncios">
                    <ion-card-content>
                            <img class="ImagemCardsAnuncios" src="https://frankfurt.apollo.olxcdn.com/v1/files/py8lqbzx8ku41-RO/image;s=644x461" />
                        </ion-card-content>
                        <ion-card-header>
                            <ion-card-subtitle>Brinquedos e Jogos</ion-card-subtitle>
                            <ion-card-title class="TituloAnunciosCards">Brinquedo Pop It</ion-card-title>
                        </ion-card-header>
                </ion-card>
            </ion-col>
            <ion-col>
                <ion-card class="cardsAnuncios">
                    <ion-card-content>
                            <img class="ImagemCardsAnuncios" src="https://img.olx.com.br/images/87/878206275860987.jpg" />
                        </ion-card-content>
                        <ion-card-header>
                            <ion-card-subtitle>Roupas e acessórios</ion-card-subtitle>
                            <ion-card-title class="TituloAnunciosCards">Jaqueta Usada</ion-card-title>
                        </ion-card-header>
                </ion-card>
            </ion-col>
          </ion-row>
            </ion-grid>
          
          </toolbar-layout-arrow>
          
        </ion-content>
        <project-footer></project-footer>
    </ion-page>
    
</template>

<script lang="ts">
import { IonContent, IonPage, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';


import { useStore } from 'vuex'
import { key } from '../store'

export default defineComponent({
  name: 'RegistrarDoacao',
  components: {
    IonContent,
    IonPage,
    IonItem, 
    IonLabel, 
    IonSelect, 
    IonSelectOption
  }, 
  data(){
    return{
      LinkInsta: "www.instagram.com",
      LinkTwitter: "www.twitter.com",
      LinkFacebook: "www.facebook.com",
      NomeFiltroCategoria: "Filtrar por categoria",
      NomeFiltroDistancia: "Filtrar por Distância"
    }
  }, 
  computed:{
    doacoes(){
      const store = useStore(key)
      return store.getters.doacoes
    }
  }
  ,
  /*Tentativa de mudar o nome do campo para ficar apenas a categoria escolhida, mas ainda nao esta funcionando*/ 
    methods:{
        ChangeNomeFiltroCategoria(nome){
            this.NomeFiltroCategoria = nome
        },
        openSite(link: string){
          /* NAO TA FUNFANDO, TA ABRINDO DENTRO DO LOCAL HOST, TENTEI HREF MAS AINDA SIM NAO FOI */
          window.open(link, '_system')
          
        }
    }
  , setup() {
    const options: any = {
      cssClass: 'my-custom-interface'
    };
    
    return { options }
  }
});
</script>
