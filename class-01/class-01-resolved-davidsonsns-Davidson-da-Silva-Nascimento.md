# Node.js - Aula 01 - Exercício
**user:** [davidsonsns](https://github.com/davidsonsns)

**autor:** Davidson da Silva Nascimento

**date:** 1453972359356

## 1. Explique como um processo síncrono e assíncrono roda no Nodejs, dê um exemplo para cada.
#### Síncrono
Uma operação ocorre após o término de outra, de forma **ordenada**. O processo é interrompido até que o procedimento em andamento seja finalizado.

> Cada passo é realizado após o término do passo anterior, ou seja, nenhuma operação é executada antes que a operação anterior seja finalizada

No exemplo abaixo é realizado o download de todas as imagens da API [HTTP Status Cats](https://http.cat/), onde é demonstrado através do tempo gasto como as requisições com processos síncronos podem vir a ser muito mais demorados.

Isso ocorre devido o fato de que cada imagem é "baixada", uma após a outra, e também neste caso se ocorrer algum tipo de problema é impossibilida a continuidade dos downloads.

```js
console.time('tempo gasto');

var fs = require('fs');
var request = require('request');

var URL = "https://http.cat/";

var statusCodes = [
  100, 101, 200, 201, 202, 204, 206, 207, 300, 301,
  302, 303, 304, 305, 307, 400, 401, 402, 403, 404,
  405, 406, 408, 409, 410, 411, 412, 413, 414, 415,
  416, 417, 418, 422, 423, 424, 425, 426, 429, 431,
  444, 450, 451, 500, 502, 503, 506, 507, 508, 509,
  599
]

function salvarImagem(error, response, body) {
  if (response.error) {
    console.log('Error: '+response.error);
  }
  if (!error && response.statusCode == 200) {

    fs.writeFileSync(response.request.href.slice(URL.length) + ".jpg", body);
    console.log("CAT Error: " + this.statusCodes[this.indice] + " SALVO");

    if ((this.indice + 1) < statusCodes.length) {
      var requisicao = {statusCodes: this.statusCodes, indice: this.indice + 1};
      request({uri: URL + this.statusCodes[requisicao.indice], encoding:null}, salvarImagem.bind(requisicao));
    }
  }
}

var requisicao = {statusCodes: statusCodes, indice: 0};
request({uri: URL + statusCodes[0], encoding:null}, salvarImagem.bind(requisicao));

process.on('exit', function () {
  console.timeEnd('tempo gasto');
});
```

#### Assíncrono
Não existe sincronismo, ou seja, podem ser realizados diversos procedimentos em paralelo. Cada resposta é retornada quando tiver sido concluído cada procedimento.

> Cada processo é tratado via [callback](http://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm), via tratamento de evento

O exemplo apresentado abaixo possui a mesma idéia que o anterior, porém implementado de forma assíncrona. Através dos registros do *LOG* pode ser visto que os downloads são realizados de forma não ordenada, ou seja, todas as imagens são disparadas e a medida que cada uma é finalizada **individualmente** é exibido apenas a mensagem de salvo.

```js
console.time('tempo gasto');

var fs = require('fs');
var request = require('request');

var URL = "https://http.cat/";

var statusCodes = [
  100, 101, 200, 201, 202, 204, 206, 207, 300, 301,
  302, 303, 304, 305, 307, 400, 401, 402, 403, 404,
  405, 406, 408, 409, 410, 411, 412, 413, 414, 415,
  416, 417, 418, 422, 423, 424, 425, 426, 429, 431,
  444, 450, 451, 500, 502, 503, 506, 507, 508, 509,
  599
]

function salvarImagem(error, response, body) {
  if (response.error) {
    console.log('Error: '+response.error);
  }
  if (!error && response.statusCode == 200) {
    nome_arq = response.request.href.slice(URL.length);
    fs.writeFile(nome_arq + ".jpg", body, function (err) {
      if (err) throw err;
      console.log("CAT Error: " + nome_arq + " SALVO");
    });
  }
}

for (var i=0; i < statusCodes.length; i++) {
  request({uri: URL + statusCodes[i], encoding: null}, salvarImagem);
}

process.on('exit', function () {
  console.timeEnd('tempo gasto');
});
```

> **Comparar** evento síncrono e assíncrono é **completamente desleal**, a diferença de tempo gasto é surreal entre os dois pra executar a mesma atividade. Porém cada aplicação possui sua **particularidade** e deve ser implementado o que lhe melhor atender

Foram utilizados alguns recursos do JS e do Node.js que são novos para mim, e pode ser para você também hihi, os links para melhor entendimento podem se encontrados clicando [AQUI](#referências).


## 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

A maioria dos motores de JavaScript usam uma estrutura de dados como dicionários, para o armazenamento para propriedades de objeto, ou seja, cada acesso a uma propriedade requer uma pesquisa dinâmica para resolver o estabelecimento na memória. Essa abordagem se faz acessando propriedades em JavaScript tipicamente muito mais lento do que acessar variáveis ​​de instância em linguagens de programação como Java e Smalltalk. Nestas linguagens, variáveis ​​de instância estão localizados em deslocamentos fixos determinados pelo compilador devido ao layout do objeto fixo definido pela classe do objeto. O acesso é simplesmente uma questão de uma carga de memória, muitas vezes necessitando de apenas uma única instrução.

Para reduzir o tempo necessário para acessar as propriedades de JavaScript, o V8 não usa pesquisa dinâmica para propriedades de acesso. Em vez disso, o V8 cria dinamicamente classes ocultas.

O V8 cria as classes ocultas em tempo de execução, a fim de ter uma representação interna do sistema de tipo e para melhorar o tempo de acesso da propriedade. E um objeto muda de classe oculta quando uma nova propriedade é adicionado.

Veja, por exemplo, uma função "Point" e a criação de dois objetos "point":

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

var p = new Point(11, 22);
var q = new Point(33, 44);
```

![img](http://thibaultlaurens.github.io/assets/themes/img/post/21-03-13-v8/hiddenclass.PNG)

Se o esquema são os mesmos, o que é o caso aqui, "p" e "q" pertencem à mesma classe oculta criada pelo V8.

Agora vamos supor que nós queremos adicionar uma propriedade "z" ao nosso objeto "q", logo após a sua declaração (o que é perfeitamente bem com uma linguagem de tipagem dinâmica).

Como V8 vai lidar com este cenário? Na verdade, V8 cria uma nova classe oculta toda vez que a função de construtor declara uma propriedade e mantém o controle do changement na classe oculta. Por quê? Porque se dois objetos são criados ("p" e "q") e se um membro é adicionado ao segundo objeto ("q") após a criação, V8 precisa manter a última classe oculta criado (para o primeiro objeto "p ") e criar um novo (para o segundo objeto" q ") com o novo membro.

Pode parecer ineficiente criar uma nova classe oculta sempre que uma propriedade é adicionada. No entanto, devido às transições das classes, as classes ocultas podem ser reutilizados. Toda vez que uma nova classe oculta é criada, a anterior é atualizado com uma transição de classe indicando que classe oculta tem de ser usado em vez disso.

Veja exemplo abaixo:

![two](http://thibaultlaurens.github.io/assets/themes/img/post/21-03-13-v8/transition.PNG)

Apesar do JavaScript ser mais dinâmico do que a maioria das linguagens orientadas a objeto, o comportamento de tempo de execução da maioria dos programas de JavaScript resulta em um alto grau de compartilhamento de estrutura utilizando a abordagem acima. Há duas vantagens para o uso de classes ocultas: acesso a propriedade não requer uma consulta do dicionário, e eles permitem o V8 usar a otimização baseada em classe clássico, inline caching.

## 3. Qual a diferença entre um sistema single para um multi-thread?
> Thread ... é uma forma de um processo dividir a si mesmo em duas ou mais tarefas que podem ser executadas concorrencialmente ([Wikipédia](https://goo.gl/aRBe6y))

##### Single-thread
O conceito de Single-thread(Thread única) é o processamento de um comando por vez, ou seja,  inicia na etapa 1 e continua sequencialmente (etapa 2, etapa 3, o passo 4) até atingir a etapa final.

Um exemplo poderia ser um servidor web servindo apenas um pedido de cliente de cada vez. O que pode tornar o período de espera de outros clientes ser muito longo.

##### Multi-thread
Permitem que você execute várias threads ao mesmo tempo, cada uma executando um passo por exemplo.

Nesta situação, um servidor web pode criar multíplas threads para atender a diversos clientes. O que aumenta a capacidade de resposta à solicitações de clientes.

## 4. Como a Thread Poll tem um tamanho padrão de 4, o que acontece se enviar 5 requisiçoes ao banco?
A última requisição aguarda na Task Queue(pilha de tarefas) até que alguma tarefa seja completada e sair da Thread Pool. Para assim tomar seu lugar e entrar na Thread Pool.

![Thread Pool](https://upload.wikimedia.org/wikipedia/commons/0/0c/Thread_pool.svg)

## 5. Como você venderia o peixe do Nodejs na sua empresa para tentar convencer seu chefe da sua adoção?
Man, é JavaScript no servidor, só isso já é maravilhoso. Não teremos que aprender nenhuma nova linguagem que o Google ou Facebook nem muito menos a Apple criou. É JavaScript, essa linguagem que é o Café com Leite para todos (pelo menos eu acho) os desenvolvedores Web. A comunidade é gigantescamente gigantesca.

A quantidade de módulos é enorme, o que nos possibilita trabalhar com infinitos recursos I/O no servidor. Com isso podemos, com uma grande facilidade,  trabalhas com protocolos como o HTTP, HTTPS, DNS, WebSockets sem nenhum problema e com poucas linhas de código. Além de manipulação de arquivo, criptografia, ou onde sua mente te levar.

A manipulação do JSON é mamata já que utilizaremos o JavaScript.

Alta escalabilidade já que possui uma característica marcante de Threads Não-Bloqueantes. Algo que não somos muito acostumados já que utilizamos .NET, JAVA e PHP.

Pra finalizar e não ter discurssão, nada mais nada menos do que LinkedIn, Wallmart, Groupon, Paypal, Netflix e até mesmo a Microsoft o utiliza.

Então o que me diz? Vamos viver de presente? De algo que de fato esta agitando a comunidade?

## 6. Qual a versão do seu `node`?
```js
davidson@davidson ~ $ node -v
v5.4.0
```
## 7. Qual a versão do seu `npm`?
```js
davidson@davidson ~ $ npm -v
3.3.12
```

## Referências
[Console module Node.js](https://nodejs.org/api/console.html)

[bind() function JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

[Node.js: síncrono versus assíncrono](https://www.youtube.com/watch?v=-43EEc3C3cA)

[V8 - Design Elements](https://github.com/v8/v8/wiki/Design%20Elements)

[How the V8 engine works?](http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/)
