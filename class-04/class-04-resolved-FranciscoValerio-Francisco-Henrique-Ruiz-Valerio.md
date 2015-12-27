# Node.js - Aula 04 - Exercício
**user:** [FranciscoValerio](https://github.com/FranciscoValerio)
**autor:** Francisco Henrique Ruiz Valério

## 1. Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

var fileSytem = require('fs');

function sayName(name, callback){
   setTimeout(function(){
      if ( typeof name === 'string' ){
         return callback(null, name);
      } else {
         var error = new Error("O parâmetro passado não é do tipo string!");
         return callback( error, null);
      }
   }, 20 );
}

function printName(name){
   setTimeout(function(){
      if ( typeof name === 'string' ){
         console.log( name );
      }
   }, 10 );
}

sayName( "Francisco Valerio", function( error, result ){
   if ( error ){
      console.log( error );
   }
   printName(result);
});

## 2. Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

var fileSytem = require('fs');

function sum(numero1, numero2, callback){
   setTimeout(function(){
      if( typeof numero1 == "number" && typeof numero2 == "number" ){
         var result = numero1 + numero2;
         callback(null, result);
      } else {
         var error = new Error("Algum dos parâmetros passados não foi do tipo numérico.");
         return callback(error, null);
      }
   }, 20);
}

function printResult(result){
   setTimeout(function(){
      if ( typeof result === 'number' ){
         console.log( result );
      }
   }, 10 );
}

sum(4, 4, function( error, result ){
   if (error){
      console.log(error);
   }
   printResult(result);
});

## 3. Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.

var fileSytem = require('fs');

function average(numero1, numero2, callback){
   setTimeout(function(){
      if( typeof numero1 == "number" && typeof numero2 == "number" ){
         var media = ( numero1 + numero2 ) / 2;
         callback(null, media);
      } else {
         var error = new Error("Ops passe números.");
         return callback(error, null);
      }
   }, 20);
}

function printResult(result){
   setTimeout(function(){
      if ( typeof result === 'number' ){
         console.log( result );
      }
   }, 10 );
}

average(4, 4, function( error, result ){
   if (error){
      console.log(error);
   }
   printResult(result);
});

## 4. Explicar a definição de continuação de uma função.

Um forma simples de explicar essa definição é pensarmos em uma função que possa ser traçada em uma folha sem retirar a caneta do papel. Caso a função se interrompa e começe em outro local do papel, ocorre uma "descontinuidade". Ou seja, essa função não pode ser termina e iniciada em outra local "chamada".
