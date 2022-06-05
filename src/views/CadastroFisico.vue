<template>
    <ion-page>
        <ion-content :fullscreen="true" color="tertiary">
            <toolbar-layout-logo>

                <form class="ion-padding">
                    <ion-list >
                        <ion-item color="light" class="inputCadastro">
                            <ion-label position="floating">Nome Completo:</ion-label>
                            <ion-input  type="text" required v-model="NomeCompleto" />
                        </ion-item>
                        <ion-item  color="light" class="inputCadastro">
                            <ion-label position="floating">E-mail:</ion-label>
                            <ion-input type="email" required v-model="Email" />
                        </ion-item>
                        <ion-item  color="light" class="inputCadastro">
                            <ion-label position="floating">CPF:</ion-label>
                            <ion-input type="text" required v-model="CPF" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Data Nascimento:</ion-label>
                            <ion-input type="text" required v-model="DataNascimento" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Sexo:</ion-label>
                            <ion-input type="text" required v-model="Sexo" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Telefone:</ion-label>
                            <ion-input type="text" required v-model="Telefone" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Celular:</ion-label>
                            <ion-input type="text" required v-model="Celular" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Senha:</ion-label>
                            <ion-input type="password" required v-model="Senha" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Estado:</ion-label>
                            <ion-input type="text" required v-model="Estado" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Cidade:</ion-label>
                            <ion-input type="text" required v-model="Cidade" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Rua:</ion-label>
                            <ion-input type="text" required v-model="Rua" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Número:</ion-label>
                            <ion-input type="text" required v-model="Numero" />
                        </ion-item>
                    </ion-list>
                    <ion-button  type="submit" expand="block" @click="this.$router.push('/HomePageDoador')">Criar</ion-button> 
                </form>

                <!-- Divs para o botao de criar ficar na tela, unico jeito que eu achei -->
               <div>  .</div>
               <div> . </div>
               <div> . </div>
               <div>  .</div>

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
  }, data(){
      return{
          NomeCompleto: '',
          Email: '',
          CPF: '',
          DataNascimento: '',
          Sexo: '',
          Senha: '', 
          Telefone: '',
          Celular: '',
          Estado: '',
          Cidade: '',
          Rua: '',
          Numero: ''
      };
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

