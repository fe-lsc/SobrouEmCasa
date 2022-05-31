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
    categoria: string;
    source: string; }[]
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    doacoes: [
      {
        id: 1, 
        title: 'Pasta de dente, 5 unidades', 
        description: '5 unidades de pasta de dente fechadas.',
        dataDoacao: '',
        status: 'Disponível',
        ONG: '',
        categoria: 'Higiene Pessoal',
        source: 'https://img.olx.com.br/images/16/167246760824578.jpg'
      },
      {
        id: 2,  
        title: 'Pop It!', 
        description: 'Brinquedo Pop It, ótimo para crianças. Brinquedo em perfeitas condições',
        dataDoacao: '13/01/2022',
        status: 'Doado',
        ONG: 'Amigos do Bem',
        categoria: 'Brinquedos e Jogos',
        source: 'https://frankfurt.apollo.olxcdn.com/v1/files/py8lqbzx8ku41-RO/image;s=644x461'
      },
      {
        id: 3, 
        title: 'Livro: Tudo o que nunca contei - Usado', 
        description: 'Livro usado e muito bem conservado. Ótima leitura!',
        dataDoacao: '',
        status: 'Disponível',
        ONG: '',
        categoria: 'Livros e Revistas',
        source: 'https://img.olx.com.br/images/68/681215383550502.jpg'
      },
      {
        id: 4, 
        title: 'Jaqueta Usada', 
        description: 'Jaqueta usada porém em ótimo estado',
        dataDoacao: '',
        status: 'Disponível',
        ONG: '',
        categoria: 'Roupas e acessórios',
        source: 'https://img.olx.com.br/images/87/878206275860987.jpg'
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
