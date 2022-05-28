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

            <h1>Cadastro do Produto</h1>

            <div>
              <div id="nomeProduto">
                <ion-item class="ion-margin">
                <ion-input placeholder="Nome do Produto"></ion-input>
                </ion-item>
              </div>
            </div>

            <div>
              <div id="descricaoProduto">
                <ion-item class="ion-margin">
                <ion-input placeholder="Descrição do produto (tente colocar no máximo 200 caracteres)"></ion-input>
                </ion-item>
              </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegistrarDoacao',
  components: {
    IonContent,
    IonPage,
    IonItem, 
    IonLabel, 
    IonSelect, 
    IonSelectOption,
    IonInput
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

h1{ 
  display: flex;
  justify-content: center;
  font-family: 'Pacifico-Medium';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
}

#descricaoProduto {
  height: 80px;
}

</style>