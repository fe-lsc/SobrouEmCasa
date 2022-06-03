<template>
    <ion-page>
         <ion-content :fullscreen="true" color="tertiary">
            <toolbar-layout-logo>
            
            <div class="login">
                <p>Nome Responsável:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>Nome Instituição:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>E-Mail:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div> 
            <div class="login">
                <p>CPF Responsável:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>CNPJ:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>Data Nascimento Responsável:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>Sexo Responsável:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>Senha:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>Finalidade Instituição:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>Telefone:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>Celular:</p>
                <ion-item> <ion-input></ion-input> </ion-item>
            </div>
            <div class="login">
                <p>Finalidade Instituição:</p>
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
            
            <ion-buttons id="Criar" @click="this.$router.push('/HomePageJuridico')">
                Criar
            </ion-buttons>
        </toolbar-layout-logo>
         </ion-content>
        
        <project-footer></project-footer>
      
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import{
        IonPage,
        IonButtons
    } from '@ionic/vue';

export default defineComponent({
  name: 'HomePage',
  components: {
      IonPage,
      IonButtons
  }, setup() {
    return {
    }
  }
});
</script>



<style>

#Criar{ 
  margin-left: 300px;
  height: 40px;
}
</style>

