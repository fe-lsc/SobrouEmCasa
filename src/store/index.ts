// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'


// define your typings for the store state
export interface State {
  doacoes: { 
    id: number; 
    title: string; 
    description: string; 
    dataDoacao: string;
    status: string;
    ONG: string;
    source: string; }[]
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    doacoes: [
      {
        id: 1, 
        title: 'Dog 1', 
        description: 'doacao 1 para teste',
        dataDoacao: '',
        status: 'NOK',
        ONG: '',
        source: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453'
      },
      {
        id: 2,  
        title: 'Dog 2', 
        description: 'doacao 2 para teste',
        dataDoacao: '13/01/2022',
        status: 'OK',
        ONG: 'Amigos do Bem',
        source: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp'
      },
      {
        id: 3, 
        title: 'Dog 3', 
        description: 'doacao 3 para teste',
        dataDoacao: '30/03/2021',
        status: 'OK',
        ONG: 'Santa Casa',
        source: 'https://www.petz.com.br/blog/wp-content/uploads/2021/12/porque-cachorro-lambe-tudo.webp'
      }
  
    ]
  }
  ,
  mutations: {     
    setDoacoes: (state, value) => {
      state.doacoes = value;
    },
  },
  actions: {
    setDoacoes: (context, values) => {
      context.commit('setDoacoes', values);
    }
  },
  getters: {
    doacoes(state) {
      return state.doacoes;
    },
  },
})
