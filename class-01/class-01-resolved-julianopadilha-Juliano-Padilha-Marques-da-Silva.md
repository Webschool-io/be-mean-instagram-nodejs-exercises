# Node.js - Aula 01 - Exercício
Autor: Juliano Padilha | julianopadilha
Data: Date.now()

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

- Processo Síncrono: O processo síncrono se caracteriza pela necessidade de se aguardar o término
de um processo para que outro se inicie, podendo ser descrito como uma fila, onde os processos subsequentes se manterão em espera até que o processo corrente seja finalizado. Um exemplo de um processo síncrono é um lavajato de carros, onde formasse uma fila e um novo carro só começa a ser lavado após o atual ter finalizado. 
```
function dataAtual() {
	var date = new Date();
	console.log(date);
}

function meuNome() {
	var nome = 'Juliano Padilha' 
	console.log(nome);
}

dataAtual();
meuNome();
```

- Processo Assíncrono: O processo assíncrono se caracteriza pela execução de um Callback após a finalização do processo. Em um processo assíncrono os processos ocorrem de forma independentes, não sendo necessário que um processo seja finalizado para que outro comece a ser executado. Um exemplo de um processo assíncrono é 
```
function confirmacaoPagamento(){
    console.log("Sua operadora de cartão confirmou o pagamento da sua compra.");
}
function compra(){
    setTimeout(confirmacaoPagamento, 0);
    console.log("Obrigado por comprar com a gente!");
    console.log("Volte sempre!");
}
compra();
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

- o V8 executa Javascript através da sua interpretação, similar à JVM do Java. O trabalho dele é basicamente compilar o código de Javascript para o código nativo de máquina para depois executá-lo.

```
![V8 Example](https://camo.githubusercontent.com/58b3ea90dd5b39f11bd500444070defdfe9dc7cd/687474703a2f2f72756e74696d656a732e6f72672f6a73636f6e662f696d672f72756e74696d656a732d617263682e706e67)
```

## Qual a diferença entre um sistema single para um multi-thread?

- Uma das características do Node é a forma como trabalha com threads, sendo apenas um, mas podendo ser criadas outras. Um sistema single thread tem como vantagem o consumo de mémoria e a não necessida de criar uma nova thread para um novo processo. O Node controla tudo com apenas uma thread utilizando o Event Loop.

	* Um sistema Single Thread é capaz de executar apenas uma tarefa por vez. Enquanto a tarefa é executada, todo o sistema aguarda que a thread finalize para que possa seguir adiante.

	* Um sistema Multi Thread consegue executar várias tarefas simultaneamente. Cada solicitação vira uma thread e o servidor consegue trabalhar com ela isoladamente, sem intereferir nas outras

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

- Neste caso, a quinta requisição ficara no Idle Thread aguardando a liberação de uma das quatro primeiras. Na sequência, ela é jogada para a Thread Pool para ser executada. @geriel

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

- Acredito que primeiramente eu iria atrás de adquirir uma boa base em Node.js para mostrar para meu chefe que não iniciaríamos do zero no quesito conhecimento. Eu também levaria comparações do Node com a tecnologia atual da empresa para compararmos juntos os pros e contras. Eu também iria me dispor a facilitar a inclusão dos outros desenvolvedores em Node por meio de treinamentos. 

## Qual a versão do seu node?

```
Julianos-MacBook-Pro:~ julianopadilha$ node -v
v6.2.2
```

## Qual a versão do seu npm?
```
Julianos-MacBook-Pro:~ julianopadilha$ npm -v
3.9.5
```
