# Node.js - Aula 05 - Exercício

**user:** [carloshenriqueribeiro](https://github.com/carloshenriqueribeiro)

**autor:** Carlos Henrique Ribeiro


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

> npm -v
4.1.2

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:

	* 1 dependência local
	* 1 dependência local de desenvolvimento
	* 1 dependência local opcional

´´´
> mkdir newproject
> cd newproject
> npm init
> cat package.json
{
  "name": "loveproject",
  "version": "1.0.1",
  "description": "love project transmit love!",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Carlos Henrique Ribeiro\u001b[1;6D\u001b[1;6D\u001b[1;6D\u001b[1;6D\u001b[1;6D\u001b[1;6D\u001b[C\u001b[C\u001b[C\u001b[C\u001b[C\u001b[itos",
  "license": "ISC"
}
´´´

´´´
> npm i -S bower
> npm i -S -D broserify
> npm i -S -O grunt-cli
´´´


## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

> mkdir global
> cd global
> npm init
* Editei o package.json, adicionando o global.js como script.

´´´js
global.js
'use strict';

console.log(__dirname);
´´´
> cat package.json
{
  "name": "global",
  "version": "1.0.0",
  "description": "Imprime a variavel Global de caminh absoluto da pasta raiz",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "global" : "node global.js"
  },
  "keywords": [
    "global",
    "webschool"
  ],
  "author": "Carlos Henrique Ribeiro",
  "license": "MIT"
}

> npm run global
/users/chori/be-mean/nodejs/npm/global


## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

__dirname
Retorna o diretório atual

console.log(__dirname);


__filename
Retorna o nome do arquivo (caminho absoluto) que iniciou esta execução

console.log(__filename);


clearInterval(t)
Finaliza um timer que foi criado com setInterval().

var interval = setInterval(function(){ timer()}, 1000);
clearInterval(interval);


clearTimeout(t)
Finaliza um timer que foi criado com setTimeOut().

var interval = setTimeOut(function(){ timer()}, 1000);
clearTimeout(interval);


setTimeOut()
Chama uma função ou valida uma expresão depois de um numero especificado de milisegundos.

setTimeout(function(){ alert("Hello"); }, 3000);


## Explique como funciona e de um exemplo de `process`.

Process é utilizado para manipular processos do sistema operacional. Por ser global, não necessita de require. Com ele podemos:

 * Matar (Kill) um processo do SO.
 * Descobrir o path de execução do Node.
 * Saber a memória utilizada pelo Node
 * ETC

## Criar um arquivo

'use strict';

var fs = require('fs');
var write = fs.writeFileSync("./teste.txt", "Eu foi criado com FS do Node.js");


## Ler um arquivo

'use strict';

var fs = require('fs');

fs.readFile('./teste.txt', 'utf8', function(err, data){
	if (err) throw err;
	console.log(data);
});

## Editar conteúdo desse arquivo

'use strict';

var fs = require('fs');

fs.appendFile('./teste.txt', '. Adicionando conteúdo via FS.', 'utf8', function(err, data){
	if (err) throw err;
	console.log(data);
});

## Deletar arquivo

'use strict';

var fs = require('fs');

fs.unlink('./teste.txt', function(err, data){
	if (err) throw err;
	console.log("Arquivo deletado");
});

## Renomear o arquivo

'use strict';

var fs = require('fs');

fs.rename('./teste.txt', './teste2.txt', function(err, result){
	if (err) throw err;
	console.log(result);
});
