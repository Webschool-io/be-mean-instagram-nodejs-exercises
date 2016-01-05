#NodeJS - Aula 04 - Exercícios
autor: Dariano Soares

##1. Criar uma função com **uma entrada** para nome e **imprimir** está entrada em uma outra função, como continuação da execução da mesma.
```js

	function imprimirNome(nome, callback) {
		if (typeof nome === 'string') {
			callback(null, nome);
		} else {
			var err = new Error('Opa, deu erro');

			callback(err, null);
		}
	};

	imprimirNome('Dariano', (err, nome) => {
		if(err) {
			console.log('erro', err);
		}else
		{
			console.log('nome = ', nome);
		}

	});

nome = Dariano

```
##2. Criar uma função que **calcula a soma** de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
```js

	function soma (num1, num2, callback) {
		if(typeof num1 === 'number' && typeof num2 === 'number'){
			var result = num1 + num2;

			callback(null, result);
		} else{
			var error = new Error('Passe o número valido');

			callback(error, null);
		}
	};

	soma(5, 5, (err, result) => {
		if(err){
			console.log('error', err);
		}
		else{
			console.log('soma = ', result);
		}
	});

soma = 10

```
##3. Criar uma função que **calcula a média** de dois valores e imprima essa média em uma outra função, como continuação da execução da mesma.
```js

	function media(num1, num2, callback) {
		setTimeout(() => {
			if (typeof num1 === 'number' && typeof num2 === 'number') {
				var result = (num1 + num2) / 2;

				callback(null, result);
			} else {
				var error = new Error('Passe o número valido');

				callback(error, null);
			}
		}, 1000);
	};

	media(30, 20, (err, result) => {
		if (err) {
			console.log('error', err);
		} else {
			console.log('media', result);
		}
	});

media 25

```
##4. Explicar a definição de **continuação de uma função**.
**Continuação de uma função** é a execução de uma função que pode receber outra função por parâmetro e logo após executar um procedimento e invocar a função passada por parâmentro. Ou pode ser uma função que executa um procedimento e logo após essa execução invoca outra função que pode executar seu fluxo e chamar outra função e assim sucessivamente. Isso também pode se chamadar de **funções aninhadas** ou **callback hell**.
