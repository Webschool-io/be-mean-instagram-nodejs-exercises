# NodeJS - Aula 04 - Exercícios

**user:** [Geriel](https://github.com/geriel)

**autor:** Geriel Castro


## 1. Criar uma função com **uma entrada** para nome e **imprimir** está entrada em uma outra função, como continuação da execução da mesma.

```js

    function getNome(name, callback) {
        if (typeof name === 'string') {
            callback(null, name);
        }else{
            var err = new Error('Infelizmente deu Erro, reveja seu codigo.');
            callback(err, null);
        }
    };

    getNome('João Ubaldo', function(err, name) {
        if (err) {
            console.log('Erro: ' + err);
        } else {
            console.log('Resultado = ' + name);
        }
    });

Resultado = João Ubaldo

```
## 2. Criar uma função que **calcula a soma** de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
```js

	function calculaSoma( num1, num2, callback){
        if(typeof num1 == "number" && typeof num2 == "number"){
            var result = num1 + num2;
            callback(null, result);
        }else{
            var err = new Error("Por favor, passe um número válido!");
            callback(err, null);
        }
    }
    calculaSoma(12, 14, function(err, result){
        if(err){
            console.log("Erro: " + err);
        }else{
            console.log("Resultado = " + result);
        }
    });

Resultado = 26

```
## 3. Criar uma função que **calcula a média** de dois valores e imprima essa média em uma outra função, como continuação da execução da mesma.

```js

    function calculaMedia(num1, num2, callback){
        setTimeout(function(){
            if(typeof num1 == "number" && typeof num2 == "number"){
                var result = (num1 + num2)/2;
                callback(null, result);
            }else{
                var err = new Error("Por favor, passe um número válido");
                callback(err, null);
            }
        })
    }

    calculaMedia(140, 60, function(err, result){
        if(err){
            console.log("Erro: "+ err);
        }else{
            console.log("Resultado = " + result);
        }
    })

    Resultado = 100

```
## 4. Explicar a definição de **continuação de uma função**.

Podemos dizer que é uma função executada que recebe outra função como parametro retornando valores.
