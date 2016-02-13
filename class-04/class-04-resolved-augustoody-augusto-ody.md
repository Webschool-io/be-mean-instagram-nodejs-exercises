# Node.js - Aula 04 - Exercício
**user:** [augustoody](https://github.com/AugustoOdy)
**autor:** Augusto Ody
**date:** 1455192903275

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma
```js
'use strict';

function sayMyName(name, callback){
  if(typeof name == 'string'){
    callback(null, name);
  }else{
    var err = new Error('O name não é uma string')
    callback(err, null);
  }
}

sayMyName('Augusto', function(err, name){
  if(err){
    console.log(err);
  }else{
    console.log(name);
  }
});
```

Resposta:
```
Augusto
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula
```js
'use strict';

function sum(n1, n2, callback){
  if(typeof n1 == 'number' && typeof n2 == 'number'){
    callback(null, n1+n2);
  }else{
    var err = new Error('O primeiro ou o segundo valor não é/são números.')
    callback(err, null);
  }
}

sum(1, 2, function(err, result){
  if(err){
    console.log(err);
  }else{
    console.log(`Resultado: ${result}`);
  }
});
```

Resposta:
```
Resultado: 3
```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma
```js
'use strict';

function sum(n1, n2, callback){
    setTimeout(function() {
       if(typeof n1 == 'number' && typeof n2 == 'number'){
            callback(null, (n1+n2)/2);
        }else{
            var err = new Error('O primeiro ou o segundo valor não é/são números.')
            callback(err, null);
        }
    }, 30);
}

sum(1, 2, function(err, result){
  if(err){
    console.log(err);
  }else{
    console.log(`Resultado: ${result}`);
  }
});
```

Resposta:
```
Resultado: 1.5
```

## Explicar a definição de continuação de uma função

Denominado continuation-passing style, um dos argumentos da função é uma outra função que trata da continuação de sua execução. Como exemplificado nos exercícios acima.
