# Node.js - Aula 01 - Exercício
**user:** [Pauloxt1](https://github.com/Pauloxt1)<br>
**autor:** Paulo Roberto<br>
**date:** 1452734591897

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
<b>Síncrono:</b> Supondo que uma pessoa fez uma requisição via htttp, em um processo sícrono o Node teria que esperar essa 
requisão ser completada para ai sim atender outras requisições.<br>
<b>Assíncrono:</b> É o oposto do síncrono, pegando o mesmo exemplo da requisão http, nesse caso o Node pode atender outras
requisições, mesmo que uma não esteja completa. Ele iria atender as requisições e devolver as respostas de acordo com que
ficassem prontas tudo isso assíncronicamente.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
!['Explicação V8 Javascript'](http://blog.gopivotal.com/wp-content/uploads/2012/04/NodeJS-EventedIOAsyncIO_latest.png "Optional title")
Como você pode ver o motor V8 é responsável pela parte de Event Loop, que é responsável por redirecionar todas as requisições e respostas
pro seus devidos lugares, de forma assíncrona, sendo assim simultaneamente uma requisição não precisa esperar outra ser completada
até ser levada a seu devido lugar ou receber sua resposta.

## Qual a diferença entre um sistema single para um multi-thread?
<b>Single:</b> Coloca todas requisições em uma única thread, diminuindo gastos de processamento.<br>
<b>Multi:</b> Gera uma thread para cada requisição no servidor, tendo assim uma maior gasto de processamento.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
A quinta só será executada, quando 1 das 4 forem executadas. Liberando espaço para próxima.<br>
<b>Lembrando que o limite é 4 por default, porém pode ser expandido até 128 requisições.</b>

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Simplesmente mostrando dados de empresas que migraram de outras técnologias para o nodeJS, o ganho de perfomace que eles
obtiveram e também a diminuição de tempo gasto em produção.

## Qual a versão do seu `node`?
```
paulo@Paulo:~/Documentos/testando$ node -v
v5.4.1
```
## Qual a versão do seu `npm`?
```shell
paulo@Paulo:~/Documentos/testando$ npm -v
3.3.12
```
