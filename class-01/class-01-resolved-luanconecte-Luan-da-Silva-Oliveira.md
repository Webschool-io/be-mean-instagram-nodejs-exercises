# NodeJS - Aula 01 - Exercício
**Autor:** Luan da Silva Oliveira
**User:** luanconecte

# 1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

A beleza do NodeJs está em sua assincronicidade. Esse processo faz com que ao executarmos um evento de entrada ou saída (I/O) no sistema, o mesmo não fique bloqueado, aguardando o término da operação, para só então executar uma nova atividade.
No processo síncrono acontece uma fila de processos na qual o evento sucessor depende do termino do evento antecessor para ser executado.

Para os exemplos criei um arquivo itens.txt para ser lido com File System.

itens.txt
```
item 1
item 2
item 3
```

Exemplo de processo síncrono

```js
var fs = require('fs');

console.log( fs.readFileSync("itens.txt").toString() );

console.log("item 4");

/*
result:
item 1
item 2
item 3
item 4
*/
```

Exemplo de processo assíncrono
```js
var fs = require('fs');

fs.readFile("itens.txt", [], function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});

console.log("item 4");

/*
result:
item 4
item 1
item 2
item 3
*/
```

Como podemos perceber nos exemplos a cima, no processo síncrono o File System leu o arquivo itens.txt para só depois mostrar o item 4. No processo assíncrono o node comunicou que o arquivo itens.txt precisa ser lido, mostrou o item 4 e quando obteve a resposta do File System mostrou o conteúdo do arquivo itens.txt. Por isso a ordem da lista é diferente nas duas abordagens.

# 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O Node usa o JavaScript V8 VM (Virtual Machine) que é a engine criada pela equipe do google para ser utilizada em seu navegador Google Chrome. O V8 é um projeto open source de alta performace escrito em C++, ele funciona compilando o código JavaScript e manipulando a alocação de memória de objetos que já não são mais necessários.

<img src="http://www.haneycodes.net/wp-content/uploads/2014/03/node-processing-model.png" width="100%" />


# 3. Qual a diferença entre um sistema single para um multi-thread?

Um sistema single thread é executado utilizando uma unica thread para todo o seu funcionamento, através do event-loop que gerencia as execuções. Já um sistema multi-thread, para cada nova requisição é criado um novo processo, que por conseguinte aumenta o uso de memória e processamento da máquina.


<img src="http://softwareengineeringdaily.com/wp-content/uploads/2015/07/event-loop.jpg" width="100%">


# 4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

A quinta requisição ficará aguardando que uma das requisições anteriores saia do Thread Poll, para só então seja executada.


# 5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Primeiramente desenvolveria algum produto simples e eficaz, que atendesse algum tipo de demanda da empresa com maior escabilidade ou performasse do que as linguagens que utilizamos atualmente (PHP, Ruby on Rails). Depois que ganhei a atenção com o novo produto, demonstro alguns cases de sucesso de outras empresas com a mesma tecnologia (LinkedIn, Wallmart, Groupon, Microsoft e Paypal). Para concluir e quem sabe ganhar a aprovação de todos demonstro alguns dos pontos fortes da linguagem:

+ Non-Blocking IO
+ Comunidade Ativa
+ Ready for real-time

É claro que surgirão questionamentos e se bem conheço meu ambiente de trabalho o que mais impactaria seria o fato de ter que aprender uma nova tecnologia, o que é um argumento válido para uma empresa onde o objetivo principal é produzir, produzir e produzir... Mas felizmente o NodeJs utiliza o JavaScript para tudo, então além de não ter que aprender uma nova linguagem vamos utilizar a mesma no client, server-side e banco de dados.


# 6. Qual a versão do seu `node`?

```
luanoliveira@luanoliveira ~/www/be-mean-instagram-nodejs-exercises/class-01 $ node -v
v5.3.0
```


# 7. Qual a versão do seu `npm`?

```
luanoliveira@luanoliveira ~/www/be-mean-instagram-nodejs-exercises/class-01 $ npm -v
3.3.12
```