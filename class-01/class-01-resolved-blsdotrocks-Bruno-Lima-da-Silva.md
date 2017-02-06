# Node.js - Aula 01 - Exercício

autor: Bruno Lima da Silva

## 1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
Quando um processo chega no Event Loop e é assíncrono, o mesmo é enviado para onde deve ser executado, por exemplo, uma requisição de leitura de arquivos no computador, e enquanto o sistema operacional trata essa requisição o Node.JS continua executando outros processos e tarefas. Quando a requisição termina é disparado uma trigger para o callback do processo assíncrono, e então esse processo retorna para a fila para ser executado no Event Loop. Ou seja, basicamente diz que qualquer leitura ou escrita de dados não espera seu processo finalizar para continuar o script, nesse caso os processos ocorrem paralelamente à execução.
Quando um processo chega no Event Loop e é síncrono, o mesmo é enviado para onde deve ser executado, por exemplo, uma requisição de leitura de arquivos no computador, porém, enquanto o sistema operacional trata essa requisição o Node.JS tem que aguardar o retorno sem executar outros processos ou tarefas, deixando a aplicação mais lenta e consumindo mais recursos do servidor/computador. Só após acontecer o retorno da requisição de leitura de arquivos o Node.JS executa o processo sínocrono e demais tarefas e processos que ele receba.

## 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O Moto V8 é um interpretador de JavaScript desenvolvido pelo Google e o trabalho dele é basicamnete compilar o código de JavaScript para o código nativo de máquina para depois executá-lo. Com isso ele levou a velocidade dos códigos compilados para o JavaScript.

## 3. Qual a diferença entre um sistema single para um multi-thread?
Em um sistema multi-thread, como por exemplo o Apache, você tem um processo novo para cada usuário conectado ou um procesos novo para cada requisição feita.
Em um sistema single-thread você possui apenas uma thread.

## 4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
A quinta requisição é pré-processada no Event Loop e quando as quatro primeiras requisição são retornadas pelo banco de dados a quinta requisição é enviada ao banco e quando for finalizada retornará para o Event Loop.

## 5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

## 6. Qual a versão do seu `node`?
node -v
v6.9.1

## 7. Qual a versão do seu `npm`?
npm -v
3.10.8
