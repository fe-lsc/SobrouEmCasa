<template>
    <ion-menu menu-id="app-menu" content-id="main-content" >
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Mais opções
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list v-for="item in pages" :key="item.title">
                <ion-item button @click="menuNavigation(item.url)">
                    <ion-label>{{item.title}}</ion-label>
                </ion-item> 
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script>
    import{
        IonMenu,
        IonHeader,
        IonContent,
        IonTitle,
        IonToolbar,
        IonList,
        IonLabel,
        menuController} from '@ionic/vue';

export default{
    Components:{
        IonMenu,
        IonHeader,
        IonContent,
        IonTitle,
        IonToolbar,
        IonList,
        IonLabel,
        menuController
    },
    data(){
        return{
            pages:[
                {
                    title: 'Suas Doações',
                    url: '/SuasDoacoes'
                },
                {
                    title: 'Sobre nós',
                    url: '/SobreNos' 
                }
            ]
        }
    },
    methods:{
        menuNavigation(url){
            menuController.close("app-menu")
            this.$router.push(url)
        }
    }
}
</script>