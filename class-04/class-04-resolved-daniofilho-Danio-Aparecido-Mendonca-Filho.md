# Node.js - Aula 04 - Exercício
**User:** [daniofilho](https://github.com/daniofilho)

**Autor:** Dânio Filho

**Date:** 1452804479379

# 1. Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

~~~ js

function nome(name, cb){
   if(typeof name === 'string'){
      return cb(null, name);
   } else {
      var err = new Error('Por favor, insira uma string.');
      return cb(err, null);
   }
}

nome('Dânio', function(err, result){
   if(err){
      console.log(err);
   } else {
      console.log(result);
   }
});

~~~

# 2. Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

~~~ js

function soma(v1, v2, cb){
   if(typeof v1 === 'number' && typeof v2 === 'number'){
      return cb(null, v1 + v2);
   } else {
      var err = new Error('Por favor, utilize números.');
      return cb(err, null);
   }
}

soma(2, 3, function(err, result){
   if(err){
      console.log(err);
   } else {
      console.log(result);
   }
});


~~~

# 3. Criar uma função que calcula a média de dois valores e imprima essa média numa outra função, como continuação da execução da mesma.

~~~ js
function media(v1, v2, cb){
   if(typeof v1 === 'number' && typeof v2 === 'number'){
      return cb(null, (v1 + v2)/2);
   } else {
      var err = new Error('Por favor, utilize números.');
      return cb(err, null);
   }
}

media(10, 3, function(err, result){
   if(err){
      console.log(err);
   } else {
      console.log(result);
   }
});
~~~

# 4. Explicar a definição de continuação de uma função.

Usar a técnica de continuação de uma função garante que você consiga executar as funções e processar sua saída de forma contínua, ou seja, em sequência, como se fossem síncronas, mesmo que as funções sejam assíncronas.
