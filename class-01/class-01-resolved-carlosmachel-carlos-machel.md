# Node.js - Aula 01 - Exercício
**user:** [carlosmachel](https://github.com/carlosmachel) 
**autor:** Carlos Machel 
**date:** 1457839126351

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Um processo `assíncrono` no Nodejs é baseado em eventos. a função é chamada junto com um parâmetro de callback (uma função de retorno). Esse processo entra no ciclo do event loop que por sua vez repassa o método para o Thread Pool. E o event loop continua o seu ciclo. Quando o processamento do método asincrono for finalizado a função de callback vai lidar com a informação e retornar para a pilha, sem paralizar o sistema.

O processo `síncrono` vai paralizar o sistema inteiro até ser executado. Seria como as pessoas subindo num carrossel, cada um por vez. E o carrossel tem que parar cada vez. 

### Asincrono

- Código 

```js
var fs = require('fs');

console.log("Rodando readFile..."); 

fs.readFile("index.txt", (error,resultado) => {
            console.log("Conteudo : " + resultado);
});
 
console.log("Se o método readFile é sincrono eu só vou rodar depois ops! parece que eu rodo antes...");
```

- Resultado

```js
(aula-01) ➜ () ➜ node fsAsync.js
Rodando readFile...
Se o método readFile é sincrono eu só vou rodar depois ops! parece que eu rodo antes...
Conteudo : BE MEAN!
```

### Sincrono

- Código 

```js
var fs = require('fs');

console.log("Rodando readFileSync..."); 

var resultado = fs.readFileSync("index.txt");
console.log("Conteudo : " + resultado);
 
console.log("Se o método readFileSync é sincrono eu só vou rodar depois... entendeu?");
```

- Resultado

```js
(aula-01) ➜ () ➜ node fsSync.js
Rodando readFileSync...
Conteudo : BE MEAN!
Se o método readFileSync é sincrono eu só vou rodar depois... entendeu?
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

0 V8 é uma engine Javascript escrita em C++. Ele vai compilar o código de JavaScript para o código nativo de máquina implementando um compilador Just-In-Time.
Por baixo dos panos o V8 recebe o código JavaScript e tenta otimizá-lo. A maioria dos compiladores cria uma estrutura tipo dicionario que armazena as propriedades dos objetos e faz uma pesquisa dinamica para resolver a localização da propriedade. Isso acaba sendo lento. No caso do V8 ele cria "hidden classes" em runtime gerando assim uma representação do tipo que aquele objeto representa. 

Assim se você cria dois objetos com as mesmas propriedades e com os mesmos nomes, ele vai ser representado pelo V8 como objetos pertencentes a uma classe apenas.

Ai você diz: 

- Mas em JavaScript o objeto pode receber propriedades ou deixar de ter propriedades dinamicamente.

Sim o V8 armazena todos os processos de mudanças seguindo uma sequencia. Imaginando uma orientação a objetos seria como se o V8 fizesse uma classe genérica e fosse criando classes filhas dessa com mais especializações. 

O V8 tem dois tipos de compiladores, um que compila rapidamente, mas que não gera códigos muito eficientes e um outro que é lento, mas gera códigos eficientes. A engine gera o código não muito eficiente e fica verificando se em algum ponto ocorre um prejuizo, ele coleta a informação daquele ponto e gera uma versão otimizada daquele ponto. 

Código em JavaScript: 

```js
function g () { return 1; }
function f () { 
  var ret = 0;
  for (var i = 1; i < 10000000; i++) {
    ret += g ();
  }
  return ret;
}
```

Um pedaço do código gerado em assembly referente a execução do código acima: 

```
133  movq rdx,[rdx+0x27] ;; Another redundant load.
137  cmpl rbx,0x989680   ;; 10000000, you see.
143  jge 178             ;; If i >= 10000000, break.
149  movq rdx,rax        ;; tmp = ret
152  addl rdx,0x1        ;; tmp += 1
155  jo 384              ;; On overflow, deoptimize.
161  addl rbx,0x1        ;; i++
164  movq rax,rdx        ;; ret = tmp
167  cmpq rsp,[r13+0x0]  ;; Reload stack limit.
171  jnc 137             ;; Loop if no interrupt,
173  jmp 306             ;; Otherwise bail out.
178  shlq rax,32         ;; Tag rax as a small integer.
182  movq rsp,rbp        ;; Restore stack pointer.
185  pop rbp             ;; Restore frame pointer.
186  ret 0x8             ;; Return, popping receiver.
```

O.o Assembly.  Mas a ideia aqui é que simplesmente ele está rodando o loop da função f. E está sempre checando pra ver se a função deve ser otimizada ou não. Taggear a função com int32 é uma maneira de identificar qual o tipo pra otimizar.  

Esse exemplo foi retirado do texto [what does v8 do with that loop?](http://wingolog.org/archives/2011/06/08/what-does-v8-do-with-that-loop). E sobre tag [value representation in javascript implementations](http://wingolog.org/archives/2011/05/18/value-representation-in-javascript-implementations)

![img](http://www.cs.cmu.edu/~ishafer/compilers/figs/fig_crankshaft.png)

Essa imagem é de um artigo chamado [Instrumenting V8 to Measure the Efficacy of Dynamic Optimizations on Production Code](http://www.cs.cmu.edu/~ishafer/compilers/) que analisou essa otimização do código em runtime.

### Referência

[thibaultlaurens](http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/)

## Qual a diferença entre um sistema single para um multi-thread?

Um sistema single-thread utiliza apenas uma thread para a aplicação toda, as tarefas são executadas uma por vez. Um sistema multi-thread utiliza várias threads para distribuir as tarefas, executando mais de uma tarefa por vez. 
 
Imaginando um cenário onde você tenha uso intensivo de I/O. Um sistema de uma thread por requisicao (multi-thread) a requisição vai passar a maior parte do tempo esperando esse evento de I/O ser completado. E os recursos do computador associados aquela thread ficam presos. Além de ter o cuidado de sincronizar as threads de maneira que não gere problemas como deadlocks.   

Numa estratégia `single thread`  o event loop vai gerenciar e direcionar os eventos. A thread vai receber a requisição e repassar para o thread pool que vai executar a função e depois retornar o `callback` para o ciclo do event loop. Ou seja o Node é single thread, mas possui `worker thread` que vai receber os eventos, esperar a resposta e depois devolver a função de callback dessa forma a thread não fica parada esperando a tarefa terminar. 

### Referência

[Codingeek](http://www.codingeek.com/tutorials/nodejs/is-nodejs-single-threaded/)

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Além de poder alterar o tamanho padrão alterando a variável de ambiente `UV_THREADPOOL_SIZE` para até o máximo de 128. As requisições vão sendo enviadas para cada Thread. Se todas as threads estão ocupadas, as requisições seguintes vão para o `Task Queue` até liberar threads. 

### Referência

[How Nodejs's internal threadpool works exactly?](http://stackoverflow.com/questions/29404784/how-nodejss-internal-threadpool-works-exactly)
[libuv](http://docs.libuv.org/en/latest/threadpool.html)


## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Eu geralmente uso casos de sucesso como o do walmart que colocaram na Black Friday todo o seu trafico de mobile  pelo Nodejs que não teve mais que 1% da utilização da CPU com mais de 200 milhoes de usuários online.

E o paypal que dobrou o seu números de requisicoes por segundo e reduziu a resposta em 35%.   

Além de que utiliza JavaScript. Utilizar apenas uma linguagem tanto no Frontend quando no Backend é um aumento absurdo de produtividade para a equipe e facilita o trabalho do desenvolvedor.

### Referência

[NodeCrunch](http://www.nearform.com/nodecrunch/node-js-becoming-go-technology-enterprise/)

## Qual a versão do seu `node`?

```
(aula-01) ➜ () ➜ node -v
v5.8.0
```
## Qual a versão do seu `npm`?

```
(aula-01) ➜ () ➜ npm -v
3.7.3
```
