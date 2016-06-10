# Node.js - Aula 05 - Exercício
**user:** [xereda](https://github.com/xereda)
**autor:** Jackson Ricardo Schroeder

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

```

nvm install 6.2.1
Downloading https://nodejs.org/dist/v6.2.1/node-v6.2.1-darwin-x64.tar.gz...
######################################################################## 100,0%
Now using node v6.2.1 (npm v3.9.3)

node -v
v6.2.1

npm -v
3.9.3

```

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:

```

npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (npm) exercicio05-nodejs
version: (1.0.0) 0.0.1
description: Exercício da aula 05 de NodeJS
entry point: (index.js)
test command:
git repository:
keywords: nodejs node aulas aula05 javascript bemean
author: Jackson Ricardo Schroeder
license: (ISC)
About to write to /Users/xereda/Sites/bemean/nodejs/aula05/npm/package.json:

{
  "name": "exercicio05-nodejs",
  "version": "0.0.1",
  "description": "Exercício da aula 05 de NodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "node",
    "aulas",
    "aula05",
    "javascript",
    "bemean"
  ],
  "author": "Jackson Ricardo Schroeder",
  "license": "ISC"
}


Is this ok? (yes) yes

```

- 1 dependência local

```

npm install --save mongoose

```
- 1 dependência local de desenvolvimento

```

npm install --save-dev jasmine

```
- 1 dependência local opcional

```

npm install --save-optional color

```

- Arquivo package.json atualizado

```js

cat package.json
{
  "name": "exercicio05-nodejs",
  "version": "0.0.1",
  "description": "Exercício da aula 05 de NodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "node",
    "aulas",
    "aula05",
    "javascript",
    "bemean"
  ],
  "author": "Jackson Ricardo Schroeder",
  "license": "ISC",
  "dependencies": {
    "mongoose": "^4.4.20"
  },
  "devDependencies": {
    "jasmine": "^2.4.1"
  },
  "optionalDependencies": {
    "color": "^0.11.1"
  }
}

```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

```js

// script.js
console.log("Diretório atual: " + __dirname);

// package.json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "aula": "node script.js"
}

> exercicio05-nodejs@0.0.1 aula /Users/xereda/Sites/bemean/nodejs/aula05/npm
> node script.js

Diretório atual: /Users/xereda/Sites/bemean/nodejs/aula05/npm

```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

```js

//interacao com o console do nodejs (console)
console.log(__dirname);   // __dirname outra global que apresenta o caminho do diretorio atual
console.log(__filename);  // __filename outra global que apresenta o caminho e o nome do módulo atual
require("http");          // require é uma global que requere e incorpora um módulo

// setInterval e setTimeout são exemplos de funcoes globais
// no exemplo abaixo, estamos executando uma rotina a cada dois segundos
const rotina2sec = setInterval(() => {
   console.log("Vai executar a cada 2 segundos: " + Date.now());
}, 2000);

// abaixo a funcao global setTimeout() vai encerrar a execucao
// da rotina acima apos 8 segundos, para isso usamos clearInterval() como parametro
setTimeout(() => {

  console.log("vai encerrar a rotina...");
  clearInterval(rotina2sec);

}, 9000);

```

## Explique como funciona e de um exemplo de `process`.

É um objeto global que pode ser acessado de qualquer lugar e é uma instância de EventEmitter. Alguns eventos suportados pelo process EventEmitter:

- **exit**
- **beforeExit**
- **uncaughtException**
- **Signal Events**

```js

//process.js
"use strict";

const http = require("http");

process.nextTick(() => console.log("Eu sou uma async"));

console.log(process.execPath);
console.log(process.cwd());
console.log(process.pid);


const server = http.createServer((req, res) => {

  res.write("vai sair no browser");
  res.end();

});

server.listen(3000, () => console.log("Servidor rodando na porta 3000"));

process.on("SIGINT", () => {

  console.log("finalizando o servidor");
  process.exit(0);

});

// executando o process.js
node process.js
/usr/local/bin/node
/Users/xereda/Sites/bemean/nodejs/aula05/npm
1819
Eu sou uma async
Servidor rodando na porta 3000
^Cfinalizando o servidor

```

## File System

### Criar um arquivo.

```js

// criar.js
var fs = require('fs')
var write = fs.writeFileSync("ola.txt","Olá mundo!");

$> node criar.js
$> ls
criar.js ola.txt

```

### Ler um arquivo.

```js

// ler.js
var fs = require('fs');

fs.readFile('ola.txt', 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data);
});

$> node ler.js
Olá mundo!

```

### Editar conteúdo desse arquivo.

```js

// file: editar.js
"use strict";

var fs = require('fs');

fs.readFile('ola.txt', 'utf-8', (err, data) => {

	if (err) throw err;

  var update = data + "\nNovo conteúdo no arquivo!";

  fs.writeFile('ola.txt', update, 'utf-8',  err => {

		if (err) throw err;

    console.log(update);

  });
});

$> node editar.js
Olá mundo!
Novo conteúdo no arquivo!

$> more ola.txt
Olá mundo!
Novo conteúdo no arquivo!

```

### Renomear o arquivo.

```js

// renomear.js
var fs = require('fs');

fs.rename('ola.txt', 'ola_renomeado.txt', err => {
	if (err) throw err;
})

$> ls
criar.js editar.js ler.js ola.txt renomear.js

$> node renomear.js

$> ls
criar.js editar.js ler.js ola_renomeado.txt renomear.js

```

### Deletar arquivo.

```js

// file: excluir.js
var fs = require('fs');

fs.unlink('ola_renomeado.txt', err => {
  if (err) throw err;
});

$> ls
criar.js editar.js excluir.js ler.js ola_renomeado.txt renomear.js

$> node excluir.js

$> ls
criar.js editar.js excluir.js ler.js renomear.js

```

## Desafio: Criar um servidor web de arquivos estáticos.

```js

"use strict";

const http 		= require("http");
const url 		= require("url");
const path 		= require("path");
const fs 			= require("fs");
const port 		= process.argv[2] || 8888;

http.createServer((request, response) => {

  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);

  fs.exists(filename, (exists) => {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
      response.write("404 = Arquivo não encontrado\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", (err, file) => {
      if(err) {
        response.writeHead(500, {"Content-Type": "text/html; charset=utf-8"});
        response.write(err + "\n");
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log("Static file server rodando em \n  => http://localhost:" + port + "/\nCTRL + C to parar execução do servidor");

```
