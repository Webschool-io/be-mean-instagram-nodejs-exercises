# Node.js - Aula 01 - Exercício

**user:** https://github.com/paulosilva92

**autor:** Paulo Roberto da Silva

**date:** Fri Feb 26 2016 22:33:04 GMT-0300 (BRT)

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

#### Assíncrono
Processos assíncronos no NodeJS fazem com que o *Event Looper* da plataforma funcione como deve funcionar, ou seja, de modo não bloqueante. Ele irá pegará um processo e irá delegar ele para seu respectivo lugar mas não ficará esperando ele ser completado para que inicie outros processos. Depois de terminada este processo ele disparará a *trigger* para sua função de *callback*, voltando para a fila que será executada pelo *Event Looper*.

##### Exemplo Assíncrono: 
Utilizarei como exemplo a função assíncrona *readFile()* do módulo nativo do Node, o FS;

```js
const fs = require('fs'); //chamada do módulo

fs.readFile('./texto.html', 'utf-8', function(err, data){  //chamada da função passando o caminho do arquivo a ser lido, a codificação, e uma função de callback que será executada assim que o arquivo terminar de ser lido
    if (!err) console.log(data); //após a leitura do arquivo o seu conteúdo será mostrado na tela
});
console.log('lendo o arquivo...'); // como a função acima é assíncrona essa linha será executada antes do resultado da função readFile ser mostrada
```

#### Síncrono

Processos síncronas, por outro lado, funcionam de forma bloqueante, ou seja, farão o *Event Looper* ficar esperando sua resolução para que possa ir para outros processos. Isso diminui muito o desempenho da aplicação e não é o modo ideal de se trabalhar com NodeJS.

##### Exemplo Síncrono:

```js
const fs = require('fs'); //chamada do módulo

var texto = fs.readFileSync('./texto.html', 'utf-8'); //chamada da funão síncrona de leitura de arquivos, note que ela não possui uma função de callback sendo necessário armazenar seu retorno em uma variável para poder mostrar na tela
console.log(texto); //esta linha só será executada quando a função acima terminar, ou seja, caso o arquivo seja grande todo os processo ficarão parados
```



## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 compila o código javascript para o código nativo da máquina para depois executá-lo. Ele trabalha de forma semelhante ao compilador do Java, sendo o NodeJs semelhante a máquina virtual do Java.

!['Imagem V8'](http://blog.gopivotal.com/wp-content/uploads/2012/04/NodeJS-EventedIOAsyncIO_latest.png)


## Qual a diferença entre um sistema single para um multi-thread?

Um sistema single thread trabalha com apenas uma thread. Isso faz com que haja um ganho de performance e de consumo de recursos do computador pq não será necessário abrir variás threads para diversos processos, que é como os multi threads funcionam. Sistemas multi threads tendem a consumir mais memória RAM, como no caso do Apache, que aloca uma quantidade de RAM para cada usuário que conecta, fazendo com que haja uma limitação dos recursos de cada máquina.

O Node é um sistema single thread que se utiliza de muitas ferramentas para poder fazer igual ou mais que outras plataformas muitl thread em questão de desempenho, mas com menos recursos.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Quando é enviado um número de requisições que excedem o tamanho da Thread Pool as requisições excedentes ficam esperando para que possam uma "vaga" seja liberada.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Mostraria os diversos casos de usos de grandes empresas que migraram seu backend para Node, como a Netflix e o Paypal. Mostraria também o comparativo de velocidade e consumo de recursos entre o Node e outras linguagens usuais do mercado, como Java e PHP.

## Qual a versão do seu `node`?

```
➜  ~ node -v
v5.7.0
```

## Qual a versão do seu `npm`?

```
➜  ~ npm -v
3.6.0
```