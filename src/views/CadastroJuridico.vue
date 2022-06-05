<template>
    <ion-page>
        <ion-content :fullscreen="true" color="tertiary">
            <toolbar-layout-logo>

                <form class="ion-padding">
                    <ion-list >
                        <ion-item color="light" class="inputCadastro">
                            <ion-label position="floating">Nome Responsável:</ion-label>
                            <ion-input  type="text" required v-model="NomeResponsavel" />
                        </ion-item>
                        <ion-item color="light" class="inputCadastro">
                            <ion-label position="floating">Nome Instituição:</ion-label>
                            <ion-input type="text" required v-model="NomeInstituicao" />
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
                            <ion-label position="floating">CNPJ:</ion-label>
                            <ion-input type="text" required v-model="CNPJ" />
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
                            <ion-label position="floating">Senha:</ion-label>
                            <ion-input type="password" required v-model="Senha" />
                        </ion-item>
                        <ion-item color="light"  class="inputCadastro">
                            <ion-label position="floating">Finalidade Instituição:</ion-label>
                            <ion-textarea rows="5" v-model="FinalidadeInstituicao"></ion-textarea>
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
                    <ion-button @click="this.$router.push('/HomePageJuridico')" type="submit" expand="block">Criar</ion-button>
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
        IonPage
    } from '@ionic/vue';

export default defineComponent({ 
  name: 'HomePage',
  components: {
      IonPage
  }, data(){
      return{
          NomeResponsavel: '',
          NomeInstituicao: '',
          Email: '',
          CPF: '',
          CNPJ: '',
          DataNascimento: '',
          Sexo: '',
          Senha: '',
          FinalidadeInstituicao: '',
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
</style>

