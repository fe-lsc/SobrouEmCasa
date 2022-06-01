<template>
    <ion-page>
      <ion-content :fullscreen="true" >
        <toolbar-layout>
            <div class="center">
              <h1>Editar Perfil</h1>
              <h2>Foto de Perfil</h2>
              <ion-img id="EditarInformacoes" src="../../assets/icon/Perfil.svg"></ion-img>
              <ion-button color="secondary" class="ion-margin">Selecionar outra foto de perfil</ion-button>
              
              <div>
                <h2>Nome Exibido</h2>
                <div id="nomePerfil">
                  <ion-item class="ion-margin">
                  <ion-input placeholder="Carlos Ferraz"></ion-input>
                  </ion-item>
                </div>
              </div>

              <div>
                <h2>Descrição</h2>
                <div id="descricaoPerfil">
                  <ion-item class="ion-margin">
                  <ion-input placeholder="Sou Carlos, tenho 25 anos, moro em São Paulo e quero fazer parte das doações!"></ion-input>
                  </ion-item>
                </div>
              </div>

              <div>
                <h2>Endereço</h2>
                <div id="endereçoPerfil">
                  <ion-item class="ion-margin">
                  <ion-input placeholder="Rua Eustácio Mendes Rodrigues, 65 - Sorocaba/SP"></ion-input>
                  </ion-item>
                </div>
              </div>

              <h2>Conta</h2>
              <ion-button class="ion-margin" color="danger">Alterar Senha</ion-button>
              <ion-button class="ion-margin" color="danger">Apagar Conta</ion-button>
            </div>
            </toolbar-layout>
      </ion-content>
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage
    } from '@ionic/vue';

export default defineComponent({
  name: 'EditarPerfil',
  components: {
      IonPage
  }, setup() {
    return {
    }
  }
});
</script>


<style>

.center {
  text-align: center;
}
</style>
