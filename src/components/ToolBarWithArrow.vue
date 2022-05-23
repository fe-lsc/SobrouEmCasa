<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-buttons @click="goBack()" slot="start">
                <ion-img id="ArrowBack" slot="start" src="../../assets/icon/ArrowBack.png"></ion-img>
                </ion-buttons>

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
        },
        goBack(){
            const router = this.$router
            router.go(-1);  
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
#ArrowBack{ 
  height: 25px;
  margin-left: 5px;
}
</style>
