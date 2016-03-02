# Node.js - Aula 04 - Exercício
**user:** [felipelopesrita](https://github.com/felipelopesrita)
**autor:** Felipe José Lopes Rita

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma
```js
'use strict';
function showName( name, callback ) {
	if( typeof name === "string" )
		return callback(null, name);
	else {
		var error = new Error("Tipo de dados inesperado, insira uma string");
		return callback(error, null);
	}
}

showName("Felipe", (err, resul)=>{
	if(err)
		console.log(err);
	else
		console.log(resul);
});
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula
```js
'use strict';
function sum( x, y, callback ) {
	if( typeof x === "number" && typeof y == "number" )
		return callback(null, x+y);
	else {
		var error = new Error("Tipo de dados inesperado, insira números");
		return callback(error, null);
	}
}

sum(14, 6, (err, resul)=>{
	if(err)
		console.log(err);
	else
		console.log(resul);
});
```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma
```js
'use strict';
function average( x, y, callback ) {
	if( typeof x === "number" && typeof y == "number" )
		return callback(null, (x+y)/2);
	else {
		var error = new Error("Tipo de dados inesperado, insira números");
		return callback(error, null);
	}
}

average(10, 6, (err, resul)=>{
	if(err)
		console.log(err);
	else
		console.log(resul);
});

```

## Explicar a definição de continuação de uma função
É o conceito de funções que recebem funções como parametro (First-class citizen). A função então retorna a execução da função que foi passada como parametro. Dessa forma, ocorre uma continuidade da execução através das funções.