# SobrouEmCasa :iphone: :house_with_garden:
## Descrição:
### Aplicativo mobile com intuito de tornar as doações mais fáceis e acessíveis  para todos.
#### Visamos ajudar ONG’s e instituições de caridade por meio de doações. O objetivo principal é facilitar aos doadores a realizar doações de qualquer categoria de produto, seja itens de higiene, roupas e acessórios, brinquedos e alimentos. Sendo assim, as ONG'S poderão ver todas as doações em aberto (podem até filtrar na categoria que mais está precisando) e então ver o contato do doador, para agendar a retirada.

## Desenvolvido pelos alunos:
### Rodrigo Abdalla Ramos da Silva    190214 - CP110TIN2 PA038TIN3  
### João Victor Timo Angelotti Pinto  190826 - CP110TIN2 PA038TIN3  
### Pedro Paulo Menezes Sasso         190217 - CP110TIN2 PA038TIN3  
### Felipe Lima de Souza Carvalho     190190 - CP110TIN2 PA038TIN3  
### Mateus da Silva do Prado          190477 - CP110TIN2 PA038TIN3   


## Backend ⚙️

### Montagem da API sendo realizada em repositorio externo
https://github.com/M4teusPrado/SobrouEmCasa.API.git
#### O passo a passo e manual dessa API se encontram no repositório da mesma.

## Passo a Passo instalação
#### 1 - Instale o NodeJs

#### 2 - Para testar se já está instalado, digite no terminal "node -v".
######    2.1 - Caso a instalação do NodeJs tenha sido concluída com sucesso, irá aparecer a versão atual.
  
#### 3 - Instalação do Ionic
######    3.1 - Digite "npm install -g @ionic/cli" no terminal
######    3.2 - Para testar se deu certo, digite no terminal "ionic -v".
######    3.3 - Em caso de suceso, irá aparecer a versão do Ionic.
  
#### 4 - Instale o Ionic na sua IDE
######    4.1 - No caso do Visual Studio Code, baixe a extensão "Ionic Extension Pack".

#### 5 - Baixe este projeto
######    5.1 - Abra o terminal na pasta em que você instalou.
######    5.2 - Digite o comando npm install --save vuex@next
######    5.2 - Digite o comando npm install axios
######    5.3 - Digite o comando "Ionic serve"
######    5.4 - Irá abrir o app.

## TELAS DO APLICATIVO
### 1 - Login 
Nessa tela o usuário poderá colocar as suas credenciais para fazer login na aplicação. Caso o mesmo não haja cadastro, é só clicar em: "Cadastre-se aqui!"

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/Login.png)

### 2 - Tela Cadastro
Nessa tela o usuário poderá escolher o tipo de cadastro que irá fazer, o de pessoa física ou jurídica.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/Cadastro.png)

### 3 - Cadastro Pessoa Física
Nessa tela o usuário de pessoa física irá preencher todos os campos e em seguida clicar no botão "CRIAR".

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/CadastroPF-Parte1.png)
![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/CadastroPF-Parte2.png)

### 4 - Cadastro Pessoa Jurídica
Nessa tela o usuário de pessoa jurídica irá preencher todos os campos e em seguida clicar no botão "CRIAR".

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/CadastroPJ-Parte1.png)
![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/CadastroPJ-Parte2.png)

### 5 - Home Page Doador
Nessa tela o doador poderá visualizar as suas informações, editá-las e realizar uma nova doação.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/HomePageDoador.png)

### 6 - Home Page Jurídico
Nessa tela o doador poderá visualizar as suas informações, editá-las e procurar por doações disponíveis.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/HomePageJuridico.png)

### 7 - Tela Registrar Doação
Nessa tela, o doador irá colocar todas as informações referente ao produto a ser doado.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/RegistrarDoacao.png)

### 8 - Menu Lateral
No menu, localizado no canto superior esquerdo, possibilitará que usuário possa ter alguns atalhos na sua navegação.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/Menu.png)

### 9 - Sobre Nós
Nessa tela o usuário poderá saber mais sobre os fundadores do aplicativo SobrouEmCasa.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/SobreNos.png)

### 10 - Detalhes da Doação
Nessa tela o usuário poderá visualizar todas as informações referentes ao(s) produto(os) a ser(em) doado(s). E também poderá visualizar a localização no mapa através do Google Maps (próxima tela).

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/DetalheDoacao-Slide1.png)
![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/DetalheDoacao-Slide2.png)

### 11 - Mapa (Doação)
Nessa tela o usuário poderá visualizar no mapa onde reside o doador.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/TelaMapa.png)

### 12 - Editar Doação
Nessa tela o usuário poderá editar ou excluir todas as informações referente ao produto que será doado.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/EditarDoacoes(SuasDoacoes)-Produto.png)

### 13 - Suas Doações
Nessa tela o usuário poderá visualizar todos os produtos cadastrados para a doação.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/EditarDoacoes(SuasDoacoes).png)

### 14 - Editar Perfil Pessoa Física
Nessa tela o usuário poderá editar ou apagar todas as suas informações de conta.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/EditarPerfilFisico-Parte1.png)
![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/EditarPerfilFisico-Parte2.png)

### 15 - Editar Perfil Pessoa Jurídica
Nessa tela o usuário poderá editar ou apagar todas as suas informações de conta.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/EditarPerfilJuridico-Parte1.png)
![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/EditarPerfilJuridico-Parte2.png)

### 16 - Alterar Senha
Nessa tela o usuário poderá alterar a sua senha atual por uma nova.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/AlterarSenha.png)

### 17 - Procurar Doação
Nessa tela o usuário poderá visualizar todas as doações feitas por outros usuários (pessoa física), e também será possível filtrar as informações por categoria e por distância.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/ProcurarDoacao.png)
![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/ProcurarDoacao-FiltrarPorCategoria.png)
![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/ProcurarDoacao-FiltrarPorDistancia.png)

### 18 - Registrar Doação
Nessa tela o usuário poderá cadastrar o produto que será doado, colocando todas as suas informações.

![alt text](https://github.com/fe-lsc/SobrouEmCasa/blob/main/public/assets/TelasDoApp/RegistrarDoacao.png)
