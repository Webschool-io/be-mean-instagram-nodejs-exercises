# Node.js - Aula 04 - Exercício
**user:** [Pauloxt1](https://github.com/Pauloxt1)<br>
**autor:** Paulo Roberto


## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.  
```js
// file: name.js
function setName(name, callback){
	callback(name);
}

setName('paulo', function(name){
	console.log(name);
});
```
```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node name.js
paulo
```
## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
```js
// file: sum.js
function sum(num1, num2, callback){
	if(typeof num1 == "number" && typeof num2 == "number"){
		var resultado = num1+num2;
		callback(null, resultado);
	} else {
		callback("Passe um número por favor", null);
	}
}

sum(2,2,function(err, result){
	if(err){
		console.log(err);
	}else{
		console.log(result);
	}
});
```

```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node sum.js 
4
```

## Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.  
```js
// file: media.js
function media(num1, num2, callback){
	if(typeof num1 == "number" && typeof num2 == "number"){
		var resultado = (num1+num2)/2;
		callback(null, resultado);
	} else {
		callback("Passe um número por favor", null);
	}
}

media(2,2,function(err, result){
	if(err){
		console.log(err);
	}else{
		console.log(result);
	}
});
```
```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node media.js 
2
```
## Explicar a definição de continuação de uma função. 
Uma função que recebe como parâmetro outra função<b>(callback)</b>, e executa essa função recebida passando para ela
seu resultado como parâmetro.
