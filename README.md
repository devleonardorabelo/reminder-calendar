<h2 align="center">Calendário com lembrete e clima</h2>

## Descrição

Este é um calendário de lembretes onde o usuário pode adicionar suas tarefas diárias de acordo com a hora especifica. Para cada dia há uma previsão de tempo e para cada evento futuro também é previsto o clima baseado na hora do lembrete. 

#### Projeto

Este projeto foi criado utilizando Typescript, React JS, ContextAPI para tratamento de estados e biblioteca adicional de icone, o react-icons.

## Instalação

#### Pré-instalação 

Clone o repositório na pasta desejada:

    git clone https://github.com/devleonardorabelo/reminder-calendar.git

É necessário a instalação das dependências, então rode o seguinte comando:

    yarn || yarn install
    

#### Variáveis de Ambiente

<ul>
  <li>Acesse a WeatherAPI (https://www.weatherapi.com) e crie uma conta.</li>
  <li>No painel principal, copiar a API Key./li>
  <li>Crie um arquivo ".env" no root do projeto e inserir para a variavel REACT_APP_API_KEY</li>
  <li>Inserir para a variavel REACT_APP_API_KEY o valor "http://api.weatherapi.com/v1/forecast.json"
</ul>

Modelo exemplo:

    REACT_APP_API_KEY = a1443a284901119819845706202411
    REACT_APP_API_URL = http://api.weatherapi.com/v1/forecast.json

    
### Iniciar

Para iniciar, rodar o comando:

    yarn start