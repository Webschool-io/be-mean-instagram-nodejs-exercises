# Node.js - Aula 01 - Exercício  
**Autor:** Ednilson Amaral  
**Data:** 15/12/2015 às 18:15


## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.  

### Síncrono  

Em um processo síncrono é executado apenas uma função por vez, não mais que isso. Um exemplo simples para entendermos, digamos que tenhamos que baixar 20 imagens de um servidor, no processo síncrono ele vai fazer a requisição para o servidor e baixar uma imagem, e, enquanto não terminar de baixar essa imagem, ele não vai fazer outra requisição para baixar a próxima imagem. Ou seja, vai demorar séculos para baixar todas as 20 imagens do servidor.

### Assíncrono  

Já em um processo assíncrono, é possível executar várias funções por vez. Não possui uma ordem definida e não sabemos qual irá terminar primeiro ou por último.  

Seguindo o mesmo exemplo do download das 20 imagens de um servidor, no processo assíncrono, é enviado ao servidor várias requisições ao mesmo tempo, para baixar as 20 imagens. Então, será baixado as 20 imagens ao mesmo tempo. Porém, não sabemos qual terminará por primeiro ou por último, e não terá uma ordem para baixar as imagens.


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.  

Ele compila o código JavaScript para o formato nativa de máquina, assim, permitindo que rode na velocidade de um código binário compilado.  

O V8 compila e executa o código JavaScript, manipulando a alocação de memória para objetos e coletando os que não é necessário nos objetos. Essa coleta de objetos descenessários é uma das chaves para o desempenho do V8. O V8 também oferece todos os tipos de dados, operadores, objetos e funções escificadas no padrão ECMA.

![Exemplo de como funciona o engine do JS com V8](https://raw.githubusercontent.com/ednilsonamaral/be-mean-instagram-nodejs/master/img/exemplo-v8.png)


## Qual a diferença entre um sistema single para um multi-thread?  

Single-thread quer dizer que será executado apenas uma tarefa por vez. Então o sistema espera até que essa tarefa seja conclúida antes de iniciar outra tarefa. Cada tarefa será executado dentro de um processo, ou seja, se temos três tarefas, teremos três processos.  

Nas multi-thread são executadas múltiplas tarefas de uma só vez, em um único processo.


## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?  

Caso tenha 5 requisições ao banco, ele aguarda até que uma thread seja liberada, e então, a execute.

> Its default size is 4, but it can be changed at startup time by setting the UV_THREADPOOL_SIZE environment variable to any value (the absolute maximum is 128).  
>  
> [Thread pool work scheduling](http://docs.libuv.org/en/v1.x/threadpool.html?highlight=uv_threadpool_size)


## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?  

### PHP vs Node.js  

Caro chefinho, você nos solicitou um sistema imobiliário para termos uma base de apartamentos para solteiros na região metropolitana de SP, correto? Nós estudamos como faríamos e gostariamos de apresentar os motivos para que seja optado seu desenvolvimento com Node.js.  

Imagine conosco:  

* Milhões de solteirões na região metropolitana de SP;  
* Com o marketing digital eficaz, esperamos inúmeros acessos simultâneos no site, principalmente durante à noite e madrugada;
* Queremos esse sistema funcionando o mais rápido possível, em menos de três meses;  
* Não temos dinheiro para contratar muita mão-de-obra;  
* Não temos tempo para entrevistar novos colaboradores;  
* Etc 1;  
* Etc 2;  
* Etc 3;  
* Etc (...);

Então, resolveremos da seguinte maneira esses impasses:  

1. Se desenvolvermos com PHP:  
* Teremos um certo limite, caso atinjamos um número muito alto de acessos simultâneos, e a cada nova requisição no nosso servidor, vai começar a dar BO, vai travar;  
* Precisaremos contratar um backend foda em PHP, pois nós só manjamos de JavaScript. E o senhor já nos disse que não tempo e nem dinheiro pra isso;  
* Se formos parar tudo pra aprender PHP pra poder desenvolver esse sistema, levaremos mais de três meses apenas para aprender esse paranaue.


2. Se desenvolvermos com Node.js:  
* Nós já manjamos de JavaScript, então, podemos utilizar uma stack MEAN, por exemplo, totalmente em JavaScript para desenvolver o sistema;  
* Será desenvolvido pela metade do tempo ou menos do que seria em PHP;  
* Poderemos aguentar um número gigantérrimo de usuários simultâneos em nosso site, com um número gigantérrimo de requisições em nosso servidor, que ele vai aguentar, danadinho;  
* Não gastará mais do que o planejado, pois já manjamos de JavaScript e Node.js é JavaScript!


Conseguiu perceber chefinho? Podemos utilizar Node.js em nosso sistema, sairá mais barato e mais rápido, e ainda, bem melhor do que seria em PHP! =D

Além de fazer essa jabazinho malandro, poderia também, lá no inicio, mostrar casos reais, como foi mostrado em aula, do PayPal, para ver exemplos reais de utilização do Node.js e seus inúmeros benefícios e vantagens.


## Qual a versão do seu `node`?  

```  
ednilson@EDNILSON-NB:~$ node -v  
v5.2.0  
```


## Qual a versão do seu `npm`?  

```  
ednilson@EDNILSON-NB:~$ npm -v  
3.3.12  
```