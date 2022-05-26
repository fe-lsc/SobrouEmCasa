<template>
    <ion-page>
        <toolbar-layout-arrow>

        </toolbar-layout-arrow>
        <ion-content :fullscreen="true">
            <ion-item class="ion-margin">
              <ion-label class="select-categ">Selecione a categoria</ion-label>
              <ion-select interface="action-sheet" :interface-options="options">
                <ion-select-option class="select-option" value="eletrodomesticos">Eletrodomésticos</ion-select-option>
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
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegistrarDoacao',
  components: {
    IonContent,
    IonPage,
    IonItem, 
    IonLabel, 
    IonSelect, 
    IonSelectOption
  }, setup() {
    const options: any = {
      cssClass: 'my-custom-interface'
    };
    
    return { options }
  }
});
</script>

<style>

.my-custom-interface .select-option {
  color: #000;
  font-style: normal;
  font-weight: 800;
  line-height: 6px;
}

.my-custom-interface .label {
  background-color: #82D2FF;
  margin-top: 50px;
}
</style>