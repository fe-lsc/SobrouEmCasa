<template>
    <ion-page>
        <ion-header>
            <ion-toolbar >
                <ion-buttons @click="goBack()" slot="end">
                <ion-img id="ArrowBackToolbar" slot="end" src="../../assets/icon/ArrowBack.png"></ion-img>
                ion-back
                </ion-buttons>

                <ion-buttons @click="openMenu()" slot="start">
                    <ion-icon :icon="menu" id="menuToolbar" slot="start"></ion-icon>
                </ion-buttons>

                <ion-img id="logoToolbar" src="../../assets/images/Logo.png"></ion-img>

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


</style>
