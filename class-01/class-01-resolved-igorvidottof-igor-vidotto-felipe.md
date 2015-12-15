# Node.js - Aula 01 - Exercício
autor: Igor Vidotto Felipe

#### 1 - Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
###### Processo Síncrono
Os processos síncronos invocam chamadas de I/O bloqueante, isso significa que para cada operação de I/O o sistema ficará bloqueado executando este processo e não poderá executar outro até que este termine.

Um exemplo seria um forno pequeno, no qual poderíamos cozinhar apenas uma coisa por vez.

###### Processos Assíncronos
Os processos assíncronos invocam chamadas de I/O "não-bloqueantes", ou seja, enquanto este processo está executando o sistema não vai ter que esperar ele terminar para que possa iniciar o processamento de outro. No entanto essa abordagem não nos permite saber quando esse processo irá finalizar sua execução, por isso devemos usar funções de *callback*, que serão invocadas quando este processo efetivamente for finalizado.

Em contraste com o exemplo do processo síncrono, podemos citar aqui um forno maior, o que nos permitiria cozinhar várias coisas de uma só vez, todavia teríamos que colocar um dispositivo para informar quando cada prato ficasse pronto (*callback*).

#### 2 - Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O V8 compila e executa o código fonte JavaScript, manipula alocação de memória para objetos, e faz uma limpeza na memória de objetos que não são mais necessários. 

O JavaScript é mais comumente utilizado para script *client-side* num navegador, sendo usado para manipular os objetos do *Document Object Model (DOM)*, por exemplo. O DOM, no entanto não é fornecido pelo motor do JavaScript, mas sim por um navegador. O mesmo acontece com o V8 - O Google Chrome que fornece o DOM. Porém o V8 fornece todos os tipos de dados, operadores, objetos e funções especificados no padrão ECMA.

O V8 ainda permite que qualquer aplicação `C++` exiba seus próprios objetos e funções para o código JavaScript. 

Podemos encontrar exemplos de como o V8 trabalha com JavaScript no site [Google Developers](https://developers.google.com/v8/). Eis um [código](http://v8-io12.appspot.com/#30) utilizado no evento Google I/O "Breaking the JavaScript Speed Limit with V8" para exemplificar as atuações desse motor.

#### 3 - Qual a diferença entre um sistema single para um multi-thread?
Um sistema **single-thread** pode ter a instância de um único processo por vez ao passo que o **multi-thread** pode conter vários processos com seus subcomponentes ou threads em paralelo, sendo que quando uma thread está fazendo uma operação de I/O as tarefas restantes podem fazer uso da CPU. 

A princípio isso pode parecer uma grande desvantagem para o Node.js, porém um sistema multi-thread corre o risco de sofrer um [*deadlock*](http://www.devmedia.com.br/introducao-ao-deadlock/24794), algo que uma aplicação em Node.js não precisa se preocupar, e ainda mais, há a possibilidade de implementar a programação concorrente no Node.js por meio do [*cluster*](https://nodejs.org/dist/latest-v5.x/docs/api/cluster.html), que é um módulo nativo dele.

#### 4 - Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
As 4 threads dessa *Thread Pool* tratarão do processamento de 4 requisições. Pelo fato dessas requisições serem **I/O bloqueante** (síncronas) a requisição que não foi atribuída à uma thread terá que esperar a liberação de alguma das 4 para que somente então possa ser processada.

#### 5 - Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Primeiro eu mostraria as vantagens que existem no modelo *Single-Threaded* com *Event-Loop* do Node.js em relação ao *Multi-Threaded* de outras plataformas, baseando-se na forma em que servidor responde às requisições dos *clients*, evitando gargalos comuns que existem em outras plataformas, como consumo excessivo de memória e risco do sistema sofrer um *deadlock*. Mostrando ainda que também é possível trabalhar de forma concorrente com o módulo *cluster* nativo do Node.js.

Numa arquitetura comum, ficaria muito custoso montar um servidor para suportar várias requisições simultâneas, todavia o Node.js faz o uso máximo do poder de processamento de um servidor e utiliza pouca memória, o que quer dizer que o hardware do servidor não precisa ser excelente para suportar um alto número de requisições e proporcionar uma resposta rápida a elas.

#### 6 - Qual a versão do seu `node`?

```
node -v
v5.2.0
```

#### 7 - Qual a versão do seu `npm`?

```
npm -v
3.3.12
```
