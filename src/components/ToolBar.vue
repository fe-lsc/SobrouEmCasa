<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-buttons @click="openMenu()" slot="end">
                    <ion-icon :icon="menu" slot="end"></ion-icon>

                </ion-buttons>
                <ion-img id="logo" src="../../assets/images/Logo.png"></ion-img>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page>
</template>

<script>
    import{
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonButtons,
        IonIcon, 
        menuController
    } from '@ionic/vue';
import {menu} from 'ionicons/icons'

export default{
    Components:{
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonButtons,
        IonIcon,
        menuController
    },
    data(){
        return{
            menu
        }
    },
    methods:{
        openMenu(){
            menuController.open("app-menu")
        }
    }
}
</script>


<style>

#logo{ 
  margin-top: -4px;
  height: 40px;
}
ion-toolbar {
    height: 51px;
    
  }

</style>
