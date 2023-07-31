Esse é um projeto [Next.js](https://nextjs.org/) projetado com o comando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Observatory Galactic

O **Observatory Galactic** se trata de uma plataforma para usuários que buscam informações rápidas sobre planetas do sistema solar, comparativos entre eles por meio de gráficos, uma sessão para ler sobre curiosidades não apenas dos planetas como do universo como um todo, fornecido através de uma API da NASA. Além disso, é possível vislumbrar um vídeo de plano de fundo ao longo do site, que pode ser desativado sempre que o usuário desejar, assim como a exibição de animações de alguns planetas. O site ainda conta com uma sessão para ver datas dos eventos astronômicos que ainda irão ocorrer em 2023 e 2024, podendo inclusive receber um e-mail na data do evento bastando fazer um simples cadastro no site. Uma vez cadastro, é possível gerenciar não apenas os eventos cadastrados, como também o próprio perfil. Por fim, conta com uma página que fala um pouco sobre as tecnologias utilizadas ao longo do site: [Observatory Galactic - Sobre](https://observatory-galactic.vercel.app/sobre).

## Funcionalidades

* Informações rápidas sobre planetas do sistema solar
* Comparativos entre planetas em gráficos
* Seção de curiosidades sobre planetas e o universo, com dados da API da NASA
* Vídeo de plano de fundo, com opção de desativá-lo
* Animações de alguns planetas
* Datas de eventos astronômicos previstos para 2023 e 2024
* Cadastro para receber e-mails em eventos astronômicos
* Gerenciamento de eventos cadastrados e perfil do usuário

## Tecnologias Utilizadas

O projeto **Observatory Galactic** foi realizado para aprimorar conhecimentos, especialmente em Next.js. Foram utilizadas as seguintes dependências:

### Dependências
* **apexcharts**: Versão 3.41.0
* **axios**: Versão 1.4.0
* **date-fns**: Versão 2.30.0
* **dotenv**: Versão 16.3.1
* **email-validator**: Versão 2.0.4
* **emailjs-com**: Versão 3.2.0
* **firebase**: Versão 9.23.0
* **firebase-admin**: Versão 11.9.0
* **firebase-functions**: Versão 4.4.1
* **js-cookie**: Versão 3.0.5
* **next**: Versão 13.4.6
* **next-images**: Versão 1.8.5
* **nextjs-progressbar**: Versão 0.0.16
* **react**: Versão 18.2.0
* **react-apexcharts**: Versão 1.4.0
* **react-calendar**: Versão 4.3.0
* **react-dom**: Versão 18.2.0
* **react-icons**: Versão 4.9.0
* **react-responsive**: Versão 9.0.2
* **styled-components**: Versão 6.0.0-rc.3
* **three**: Versão 0.153.0
* **translate**: Versão 2.0.2
* **typescript**: Versão 5.1.3

### Dependências de Desenvolvimento
* **@types/cookie**: Versão 0.5.1
* **@types/js-cookie**: Versão 3.0.3
* **@types/nodemailer**: Versão 6.4.8
* **@types/three**: Versão 0.152.1

## Configuração do Projeto
Para criar o projeto, execute os seguintes comandos:

1. **npx create-next-app nome-do-seu-projeto**
2. Selecione o template com TypeScript e habilite o ESLint durante a criação do projeto.
3. **cd nome-do-seu-projeto**
4. **npm install** (instalará todas as dependências necessárias)

## Configuração de Variáveis de Ambiente
No diretório raiz do projeto, crie um arquivo chamado **.env.local** contendo três sessões de variáveis de ambiente:

### Configuração do Firebase
* **NEXT_PUBLIC_API_KEY_FIREBASE=(Insira sua API Key do Firebase)**
* **NEXT_PUBLIC_AUTH_DOMAIN_FIREBASE=(Insira o domínio de autenticação do Firebase)**
* **NEXT_PUBLIC_PROJECT_ID_FIREBASE=(Insira o ID do seu projeto no Firebase)**
Certifique-se de criar uma conta no Firebase, obter as credenciais necessárias e habilitar o Firestore criando as coleções "events" e "users". A seguir, adicione as seguintes regras no Firestore:
```rules_version = '2';  
service cloud.firestore {  
  match /databases/{database}/documents {  
    match /{document=**} {  
      allow read;  
    }  
    match /users/{userId} {  
      allow read, write: if request.auth != null;  
    }  
    match /events/{eventId} {  
      allow read, write: if request.auth != null;  
    }  
  }  
}
```  
 ### Configuração da API da NASA
* **NEXT_PUBLIC_API_KEY_NASA=(Insira sua API Key da NASA)**
Acesse o site da [API da NASA](https://api.nasa.gov/) para obter sua chave de API.

### Configuração do EmailJS
* **NEXT_PUBLIC_EMAIL_SERVICE_ID=(Insira o ID do serviço de e-mail no EmailJS)**
* **NEXT_PUBLIC_EMAIL_TEMPLATE_ID=(Insira o ID do template de e-mail no EmailJS)**
* **NEXT_PUBLIC_EMAIL_USER_ID=(Insira o ID do usuário no EmailJS)**
Realize o cadastro no serviço do [EmailJS](https://www.emailjs.com/) para obter os dados necessários.

## Cloud Function
O projeto também utiliza o Firebase Functions. Uma vez que você enviar a pasta "functions" para o Firebase e executar a função externamente pela cloud function, essa pasta não é mais necessária em seu projeto. Certifique-se de criar um arquivo **env** dentro da pasta "functions", com as seguintes variáveis:
* **USER_EMAIL=(Seu e-mail para a cloud function)**
* **PASSWORD_APP=(Sua senha para a cloud function)**  
Mantenha a identação no arquivo **index.ts**, pois, do contrário, a cloud function não será enviada para o Firebase. Para enviar a function para a cloud, execute o comando: **firebase deploy --only functions**.  
  
Não esqueça de adicionar o domínio do seu site nos domínios permitidos do Firebase para que seja possível efetuar login do usuário utilizando o Firebase e Firestore.
