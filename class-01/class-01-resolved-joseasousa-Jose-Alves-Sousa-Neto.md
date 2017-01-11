# Node.js - Aula 01 - Exercício

**user:** [joseasousa](https://github.com/joseasousa/)  
**autor:** Jose Alves De Sousa Neto

## 1- Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Processos síncronos são processos que executam um passo por vez, um processo só ira começar assim que o anterior for terminado

```js
    
    for(int i = 0; i<1000; i++){
        console.log(i);
    }
```   

Processos assíncronos não dependem do termino do processo anterior, então eles seguem executando, e quando
 uma requisição é terminada ela volta e executa uma fução de resposta(callback)
```js
    
     Contatos.find().exec()
      .then(
        function (contatos) {
          res.json(contatos);
        },
        function (erro) {          
          res.status(500).json(erro);
        }
    );
```  

## 2- Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.


V8 que é o motor de JavaScript da Google e que roda no seu Chrome, além disso ele conta
 com outras bibliotecas que o auxiliam no gerenciamento dos processos.
 
 Ele é nada menos que o interpretador de JavaScript, tipo uma máquina virtual,
 desenvolvido pelo Google e usado no Chrome. Feito em C++ e open-source.

O trabalho dele é basicamente compilar o código de JavaScript para o código nativo de 
máquina para depois executá-lo. 

Ele levou a velocidade dos códigos compilados para o JavaScript.

 ![node](https://pbs.twimg.com/media/Bt5ywJrIEAAKJQt.jpg)
 

## 3- Qual a diferença entre um sistema single para um multi-thread?

Um Sistema single thread possui apenas um processo (Thread) rodando por vez.

Em Sistemas multi-threads a 2 ou mais threads rodando em paralelo  

## 4- Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Executaram 4 e uma ira ficar experando pelomenos uma delas terminar, para assim poder executar

## 5- Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Mostrando users cases como o do [PayPal](https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/), demonstrando os ganhos de perfomace e produtividade 

## 6- Qual a versão do seu `node`?
v7.2.0
## 7- Qual a versão do seu `npm`?
3.10.9

