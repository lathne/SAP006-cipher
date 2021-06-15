# Meu Diário

## Índice

* [1. Introdução](#1-introdução)
* [2. Usuários](#2-usuários)
* [3. Produto](#3-produto)
* [4. Design](#4-design)
* [5. Instalação](#5-instalação)
*
***

## 1. Introdução

Códigos secretos têm sido usados ​​por um longo período de tempo. 

Desde que a linguagem e a comunicação foram inventadas, ficamos fascinados em obscurecê-la. Códigos e cifras foram desenvolvidos para ocultar mensagens. 

Um método famoso é a Cifra de César.

A Cifra de César é uma cifra de substituição de letras com um algoritmo muito simples, substituindo cada letra por uma diferente em um número fixo de casas no alfabeto. Por exemplo, um deslocamento para a direita (ou rotação) de 1 transforma todos os A's em B's, B's em C's e assim por diante.

## 2. Produto

A idéia de manter um diário é algo tão antigo quanto os códigos secretos. 

O objetivo deste projeto é oferecer uma ferramenta para criar textos criptografados e tornar o diário pessoal seguro utilizando a Cifra de César.

## 3. Usuários

O usuário é alguem que mantém o hábito escrever em um diário pessoal tudo o que pensa e sente, mas também se importa com privacidade e não quer que ninguém leia seu diário.

Essa pessoa poderá encriptar seus textos, guardar a chave de deslocamento e futuramente descriptografar e ler seu diário novamente. 

## 4. Design

Primeiramente, foi definido que o layout da página principal de encriptação e desencriptaçao contaria com duas caixas de textos:

O design da pagina foi definido pensando nas funcionalidades Criptografar e Descriptografar.

Para isso foi implementado:

 - Um input para receber a chave de deslocamento (número);
 - Um input para receber um texto;
 - Um botão para Criptografar o texto;
 - Um botão para Descriptografar o texto;
 - Um campo onde mostra o resultado independente da funcionalidade escolhida;
  
Foi implementada uma barra de navegação para organizar e facilitar a escolha do conteúdo, e também um modal que traz informações mais detalhadas sobre a Cifra de Cesar, bem como instruções para o uso da aplicação.

## 5. Instalação 

Para instalar e executar a aplicação:

  - Faça o fork do repositório para salvar os arquivos e salve no seu computador
  - Utilize um editor de texto como Atom ou Visual Studio Code
  - Instale o Node.js
  - Instale o NPM e no terminal rode um npm install e npm start.
  
Para fazer o deploy: 

Basta rodar no terminal (de dentro do diretório): npm run deploy

## Projeto realizado durante o Bootcamp da Laboratoria SAP006 <3