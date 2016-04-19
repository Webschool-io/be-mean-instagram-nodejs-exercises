# Node.js - Aula 01 - Exercício
**user:** [Cerezini](https://github.com/Cerezini)
**autor:** Mateus Cerezini Gomes
**date:** 1457365864582

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Um processo síncrono é executado comando a comando, logo o comando 2 só pode ser executado quando o comando 1 for concluído. Ex:

```js
function init() {
    var html = getHTML();
    var css = getCSS();     //Só executará quando getHTML() finalizar
    var js = getJS();       //Só executará quando getCSS() finalizar
}
```

Um processo assíncrono é executado sem que um comando possa bloquear outro, logo o comando 2 pode ser executado sem que o comando 1 tenha concluído. Ex:

```js
function init() {
    getHTML(setHTML());
    getCSS(setCSS());     //Executará após getHTML() independente se ele finalizou
    getJS(setJS());       //Executará após getCSS() independente se ele finalizou
}
```

Em geral, uma função assíncrona recebe como parâmetro uma função chamada de callback, que será executada quando a função assíncrona for concluída.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 é um motor JavaScript escrito em C++ que compila e executa códigos JavaScript, gerando códigos de máquina mais eficientes que um interpretador. Ele compila o código 
Javascript durante a execução, não produzindo qualquer código intermediário.

O Javascript é uma linguagem de tipagem dinâmica e não existem classes, logo o V8 cria **hidden classes** para representar os tipos e ter uma forma eficiente de acesso às 
propriedades, diferente de outras engines que criam uma estrutura semelhante a um dicionário. Se o layout dessa **hidden class** for semelhante em diferentes objetos, o V8
pode agrupar estes objetos e reutilizar o código. Caso uma propriedade seja adicionada ao objeto depois que ele já foi criado, o V8 criará uma nova **hidden class**.

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

var p1 = new Point(11, 22);
var p2 = new Point(33, 44);
// Neste ponto p1 e p2 compartilham a mesma hidden class
p2.z = 55;
// P1 e p2 possuem diferentes hidden classes
```

V8 também possui eficientes sistemas de geração de código de máquina dinâmico e coletor de lixo. O coletor de lixo interrompe a execução dos programas para sua execução, 
processa somente parte da *memória heap* dos objetos o que minimiza o impacto na execução da aplicação, e o V8 sempre tem conhecimento da localização em memória dos objetos
e ponteiros o que evita problemas de vazamento de memória.

Os objetos possuem a *memória heap* divida em duas partes, uma parte para criação de novos objetos, e a outra parte onde ficam os objetos que permanecem após a execução 
do coletor de lixo. Se o objeto criado sobrevive ao coletor de lixo, ele é promovido a outra parte da *heap* e o V8 atualiza todos os ponteiros que o referenciam.


## Qual a diferença entre um sistema single para um multi-thread?

Um sistema single thread é um processo que executa comando a comando de maneira síncrona. Um sistema multi-thread por sua vez é um processo que divide 
sua execução em diferentes threads que executam paralelamente, se o processador possuir mais de um núcleo.

Um sistema multi-thread permite um melhor uso do processador e uma computação mais rápida. Entretanto, o gerenciamento das threads e as trocas de contexto
exigem maior consumo de recursos de memória e computação.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

As requisições de acesso ao banco serão colocadas numa fila de espera. Como o tamanho da thread pool é 4, se todas estiverem disponíveis, as 4 primeiras requisições 
presentes na fila de espera receberão uma thread cada e serão executas, e a 5º aguardará até que uma das threads conclua e esteja novamente disponível.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Os sistemas web na sua maioria trabalham com multi-thread, criando uma nova thread para cada requisição, logo quando o número de requisições é maior que o
número de threads disponíveis, essas requisições ficarão numa fila de espera. A execução de uma thread pode levar um longo tempo caso ela tenha que esperar por 
algum recurso, como acessar o disco rígido ou a rede, logo maior será o tempo de espera das requisições aguardando pela liberação das threads. A criação e gerenciamento
das threads demanda consumo extra de processamento (CPU) e memória.

O NodeJS utiliza um sistema single thread com event loop, dessa forma consegue escalar de maneira eficiente com o aumento de requisições, consumindo menos recursos do
sistema. Esta eficiência combinada com outros benefícios da linguagem e arquitetura tem feito com que grandes sites/sistemas webs adotem o NodeJs, como: PayPal, Netflix, 
New York Times, Uber, Linkdin, além de muitas outras como pode ser checado [aqui](https://github.com/nodejs/node-v0.x-archive/wiki/Projects,-Applications,-and-Companies-Using-Node)

## Qual a versão do seu `node`?

```js
>node -v
v5.7.1
```

## Qual a versão do seu `npm`?

```js
>npm -v
3.6.0
```
