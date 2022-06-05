<template>
    <ion-page>
        <ion-content :fullscreen="true" color="tertiary">
            <toolbar-layout-logo>

                

                <div class="login">
                    <p>Nome Completo:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>E-Mail:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>CPF:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>Data Nascimento:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>Sexo:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>Celular:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>Telefone:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>Senha:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>Estado:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>Cidade:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>Rua:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <div class="login">
                    <p>Número:</p>
                    <ion-item> <ion-input></ion-input> </ion-item>
                </div>
                <ion-button id="Criar" @click="this.$router.push('/HomePageDoador')">
                Criar
                </ion-button>
            </toolbar-layout-logo>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage,
        IonButton
    } from '@ionic/vue';

export default defineComponent({
  name: 'HomePage',
  components: {
      IonPage,
      IonButton
  }, setup() {
    return {
    }
  }
});
</script>



<style>

ion-button {
    --margin-right:auto;
    --margin-left:auto;
}

#Criar{ 
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  display: flex;
}
</style>

