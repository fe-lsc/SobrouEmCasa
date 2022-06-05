<template>
    <ion-page>
        <ion-header>
            <ion-toolbar >

                <ion-buttons @click="goBack()" slot="end">
                <ion-img id="ArrowBackToolbar" slot="end" src="../../assets/icon/ArrowBack.png"></ion-img>
                ion-back
                </ion-buttons>
                
                <ion-img id="logoToolbarOnlyLogo" src="../../assets/images/Logo.png"></ion-img>

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
        goBack(){
            const router = this.$router
            router.go(-1);  
        }
    }
}
</script>


<style>
#logoToolbarOnlyLogo{
    margin-top: 1px;
    height: 40px;
    color: white;
    margin-left: 10%;
}
</style>
