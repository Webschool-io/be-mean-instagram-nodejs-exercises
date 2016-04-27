# Node.js - Aula 05 - Exercício

**user:** [tuchedsf](https://github.com/tuchedsf)

**autor:** Diego Ferreira


## 1- Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
Já o gerenciador de versão foi o nvm.


```
diego@MacBook-Air-Diego ~> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
diego@MacBook-Air-Diego:~ diego$ nvm --version
0.31.0
node --version
v5.4.1
```


## 2- Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:
```
diego@MacBook-Air-Diego ~/Mean> cd sdm-control/
diego@MacBook-Air-Diego ~/M/sdm-control> ls
diego@MacBook-Air-Diego ~/M/sdm-control> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (sdm-control) 
version: (1.0.0) 
description: controle de chamados
entry point: (index.js) 
test command: 
git repository: 
keywords: controle, sdm, sla
author: Diego Ferreira
license: (ISC) 
About to write to /Users/diego/Mean/sdm-control/package.json:

{
  "name": "sdm-control",
  "version": "1.0.0",
  "description": "controle de chamados",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "controle",
    "sdm",
    "sla"
  ],
  "author": "Diego Ferreira",
  "license": "ISC"
}


Is this ok? (yes) y
```

###- 1 dependência local
```
diego@MacBook-Air-Diego ~/M/sdm-control> npm install --save mongoose

```

###- 1 dependência local de desenvolvimento
```
diego@MacBook-Air-Diego ~/M/sdm-control> npm install --dev jasmine
```
###- 1 dependência local opcional

```
diego@MacBook-Air-Diego ~/M/sdm-control> npm install --save morgan
```

###- Arquivo package.json após instalaçao das dependências
```
{
  "name": "sdm-control",
  "version": "1.0.0",
  "description": "controle de chamados",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "controle",
    "sdm",
    "sla"
  ],
  "author": "Diego Ferreira",
  "license": "ISC",
  "dependencies": {
    "mongoose": "^4.3.5"
  },
  "devDependencies": {
    "jasmine": "^2.4.1"
  },
  "optionalDependencies": {
    "morgan": "^1.7.0"
  }
}
```




## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
```
//Arquivo script.js
console.log( __dirname );

//Package.json
{
  "name": "sdm-control",
  ...
  "scripts" : {
    "roda" : "node script.js"
  }
}

//Execução
diego@MacBook-Air-Diego ~/M/sdm-control> npm run roda

> sdm-control@1.0.0 roda /Users/diego/Mean/nodejs/sdm-control
> node script.js

/Users/diego/Mean/nodejs/sdm-control

```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

1. `__dirname` retorna o nome do diretório que o script está sendo rodado.
```js
  console.log(__dirname); // /Users/diego/Mean/nodejs/sdm-control
``` 

2. `__filename` retorna o endereço absoluto do arquivo executado.
```js
  console.log(__dirname); // /Users/diego/Mean/nodejs/sdm-control/example.js
``` 

3. `console.log()` A classe console prove um debug simples. Uma utilização á funçao log, que imprime o conteúdo que estiver entre o parênteses.
```js
  console.log("Diego"); // Diego
``` 

4. `Buffer` - A classe buffer é responsável por ler e manipular streams binários. Um método existente nesta classe é o compare, que compara buffers. E retorna 0 (identico), 1(se 1 buffer diferente), -1 (se segundo buffer diferente).
```
const buf1 = new Buffer('ABC');
const buf2 = new Buffer('BCD');
console.log(buf1.compare(buf1));
// Prints: 0
console.log(buf1.compare(buf2));
// Prints: -1
console.log(buf2.compare(buf1));
// Prints: 1
```

5. `require` Responsável por carregar algum recurso ao diretório atual para ser utilizado por algum script.
```js
  const circle = require('./circle.js'); // Adiciona o conteudo do arquivo circle.js, no arquivo que o mesmo esta sendo requerido.
``` 


## Explique como funciona e de um exemplo de `process`.
Process é um objeto global do node que pode ser acessado de qualquer lugar. Ele é uma instancia do eventEmitter que é responsável por prover a arquitetura assíncrona ao nodejs.

ex.:  Evento ' uncaughtException ' é emitido quando uma exceção acontece e o node retorna ao processo padrao. Por padrão, o Node.js lida com essas exceções , imprimindo o rastreamento de pilha para stderr e sair . Adicionando um manipulador para o evento ' uncaughtException ' substitui esse comportamento padrão.

```
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');
```

##Aula5 - Parte2
##1 - Criar um arquivo
```
var fs = require('fs');
// Sincrona - para funcao sincrona basta adicionar o Sync no método.
var write = fs.writeFileSync("./Hello.txt", "Hello mother fucker");
// Assincrona omite-se o Sync e inclui um callback na função
fs.writeFile("./Hello.txt", "teste", function(err,result){
  if (err){
    throw err;
  }
  console.log(result);
});
```

##2 - Ler um arquivo
```
var fs = require('fs');
//assincrono
fs.readFile('./dirNode2/hiWorld.txt','utf8', function(err,result){
  if (err) throw err;
  console.log(result);
});
//sincrono
var readSync = fs.readFileSync('./dirNode2/helloWord.txt','utf8');
console.log(readSync);
```

##3 - Editar counteúdo desse arquivo
```
var fs = require('fs');
//Assincrono
fs.open('./Hello.txt','r', function(err,result){
  if (err){
    throw err;
  }
  var write = fs.writeFileSync("./Hello.txt", "Hello mother fucker");
  console.log(result);
});
```

##4 - Deletar um arquivo
```
var fs = require('fs');
fs.unlink('./Hello.txt', function(err){
  if(err) throw err;
  console.log('arquivo deletado!');
});
```

##5 - Renomear arquivo
```
var fs = require('fs');
//assincrono
fs.rename('./dirNode2/helloWord.txt', './dirNode2/helloWorld.txt', function(err){
  if (err) throw err;
  console.log("fui renomeado com node");
});
```

## Desafio:Criar um servidor web de arquivos estáticos: .css, .html, .js e etc...

```
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');


http.createServer (function(req,resp){

  let file = path.basename(req.url),
      ext = path.extname(file);

  switch (ext) {
  	case '.html':   
      readFile(file, 'text/html', resp);
  		break;

  	case '.css':
      readFile(file, 'text/css', resp);
   		break;

    case '.js':
      readFile(file, 'text/javascript', resp);
      break;

  	case '.jpg':
      readFile(file, 'image/jpeg', resp);
  		break;

  	default:
    error("404 - Nenhum arquivo encontrado", resp);
   }
  

}).listen(3000,function(){
  console.log("Servidor rodando na porta 3000!!!");
});

function readFile(file, contentType, resp){
  fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            error(err.toString(),resp);
        } else {
            sucesso(resp,contentType,data);
        }
    });
}

function cabecalho(requestCode, contentType,  resp){
  resp.writeHead(requestCode, {'Content-Type':contentType+';charset=utf-8'});
}

function error(err, resp){
  cabecalho(404, "text/html", resp);
  resp.end(err.toString());
}

function sucesso(resp, contentType, data){
  cabecalho(200, contentType, resp);
  resp.end(data);
}
```

## Bibliografia
http://nomadev.com.br/node-js-o-que-%C3%A9-nvm-e-como-gerenciar-vers%C3%B5es-do-node/
https://nodejs.org/dist/latest-v4.x/docs/api/globals.html
https://nodejs.org/dist/latest-v4.x/docs/api/console.html
https://nodejs.org/dist/latest-v4.x/docs/api/buffer.html
https://nodejs.org/dist/latest-v4.x/docs/api/modules.html#modules_modules
https://nodejs.org/dist/latest-v4.x/docs/api/process.html#process_process
https://github.com/creationix/nvm
