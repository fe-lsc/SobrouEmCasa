import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';

import {store, key} from './store';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';

/*Components*/ 
import ToolBarLayout from '@/components/ToolBar.vue'
import ToolBarLayoutWithArrow from '@/components/ToolBarWithArrow.vue'
import ToolBarLayoutOnlyLogo from '@/components/ToolBarOnlyLogo.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store, key);
  
  app.component('toolbar-layout',ToolBarLayout) 
  app.component('toolbar-layout-arrow',ToolBarLayoutWithArrow) 
  app.component('toolbar-layout-logo',ToolBarLayoutOnlyLogo) 
  app.component('project-footer',ProjectFooter) 
  
router.isReady().then(() => {
  app.mount('#app');
});