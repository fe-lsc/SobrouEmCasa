<template>
    <ion-page>
        <ion-header>
            <ion-toolbar >

                <ion-buttons @click="goBack()" slot="end">
                    <ion-img id="ArrowBackToolbar" slot="end" src="../../assets/icon/ArrowBack.png"></ion-img>
                </ion-buttons>
                
                <ion-img id="logoToolbar" @click="goToHomePage()" src="../../assets/images/Logo.png"></ion-img>

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
        },
        goToHomePage(){
            if(this.$router.currentRoute.value.path.includes("Doador")){
                this.$router.push("/HomePageDoador")
            }
            else{
                this.$router.push("/HomePageDoador")
            } 
            

        }
    }
}
</script>


<style>

</style>
