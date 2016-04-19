# Node.js - Aula 01 - Exercício
**user:** [lucasduarte](https://github.com/lucasduarte/)
**autor:** Lucas Duarte Anício
**date:** 1457312116944

## **Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.**
No Node.js por padrão todos os processão são assíncronos. Quando ele depende de algum processo externo, como por exemplo ler um arquivo no disco, ele "chama" a execução do processo e continua a executar outras requisições enquanto o arquivo é lido no disco. Somente quando a leitura é finalizada é executado um callback de retorno para o Node.js.

**Processo Síncrono**
```js
function foo(){
    console.log("foo");
}
function bar(){
    console.log("bar");
}
function baz(){
    console.log("baz");
}
foo();
bar();
baz();
```

**Processo Assíncrono**
```js
function foo(){
    console.log("Executando algo assíncrono aqui");
}
function bar(){
    setTimeout(foo, 0);
    console.log("Alguma coisa por aqui");
    console.log("...");
}
bar();
```
## **Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.**
O trabalho desse motor é o de compilar código JavaScript para código nativo de máquina e posteriormente executá-lo.

![enter image description here](http://thibaultlaurens.github.io/assets/themes/img/post/21-03-13-v8/hiddenclass.PNG)

## **Qual a diferença entre um sistema single para um multi-thread?**
Em um sistema multi-thread são executados vários processos diferentes, o que muita das vezes requer uma maior quantidade de memória e processamento, já um sistema single-thread é executado em apenas um processo, diminuindo assim a necessidade de recursos.
## **Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?**
Caso isso aconteça uma das threads ficará aguardando na `Task Queue` aguardando até que uma das outras 4 threads sejam finalizadas e liberem espaço na `Thread Pool`
## **Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?**
Utilizaria como exemplo algum estudo de caso de alguma empresa que trocou recentemente por Node.js. E dessa forma demonstrar para o chefe as melhorias que tiveram com diminuição de recursos do servidor, melhoria no tempo de respostas a requisições e diminuição na carga de trabalho e linhas de código para o desenvolvimento.
## **Qual a versão do seu `node`?**
```
lucas@lucas-pc:~/Dropbox/price_bot$ node -v
v5.6.0
```
## **Qual a versão do seu `npm`?**
```
lucas@lucas-pc:~/Dropbox/price_bot$ npm -v
3.6.0
```
