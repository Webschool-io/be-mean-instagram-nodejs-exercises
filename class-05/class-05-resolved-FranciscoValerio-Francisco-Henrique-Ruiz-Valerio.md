# Node.js - Aula 05 - Exercício

**user:** [FranciscoValerio](https://github.com/FranciscoValerio)

**autor:** Francisco Henrique Ruiz Valério

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

PS C:\Users\franc> npm -v
3.3.12
PS C:\Users\franc> node -v
v5.4.1

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:

   * 1 dependência local
   * 1 dependência local de desenvolvimento
   * 1 dependência local opcional

PS C:\Be-Mean\NodeJS\arquivos-api> npm i --save mongoose
PS C:\Be-Mean\NodeJS\arquivos-api> npm i --save-dev colors
PS C:\Be-Mean\NodeJS\arquivos-api> npm i --save-optional colors

PS C:\Be-Mean\NodeJS\arquivos-api> cat .\package.json
{
  "name": "arquivos-api",
  "version": "0.0.1",
  "description": "API que fornece arquivos",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "arquivos",
    "css",
    "html",
    "js"
  ],
  "author": "FranciscoValerio",
  "license": "WTFPL",
  "dependencies": {
    "mongoose": "^4.3.6"
  },
  "devDependencies": {
    "jasmine": "^2.4.1"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

PS C:\Be-Mean\NodeJS\arquivos-api> cat .\package.json
{
  "name": "arquivos-api",
  "version": "0.0.1",
  "description": "API que fornece arquivos",
  "main": "index.js",
  "scripts": {
    "roda": "node script.js"
  },
  "keywords": [
    "arquivos",
    "css",
    "html",
    "js"
  ],
  "author": "FranciscoValerio",
  "license": "WTFPL",
  "dependencies": {
    "mongoose": "^4.3.6"
  },
  "devDependencies": {
    "jasmine": "^2.4.1"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}

>Arquivo script.js
```JS
console.log("Rodei!");
```

> Executando:
PS C:\Be-Mean\NodeJS\arquivos-api> npm run roda

> arquivos-api@0.0.1 roda C:\Be-Mean\NodeJS\arquivos-api
> node script.js

C:\Be-Mean\NodeJS\arquivos-api

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

**require:** Usamos quando queremos chamar um módulos do NodeJS.
```JS
require('http');
```

**__dirname:** Usada para obter o caminho do diretório atual.
```JS
console.log(__dirname);
```

**__filename:** Usada quando queremos obter o caminho do arquivo atual.
```JS
console.log(__filename);
```

**Buffer:** Usada para inserir algo no buffer

```JS
var buffer = new Buffer('I am Buffer!');
console.log(buffer.toString());
```

**process.pid:** Usado quando queremos obter o id do processo sendo executado na máquina.
```JS
console.log(process.pid);
```

## Explique como funciona e de um exemplo de `process`.

**process** é utilizado quando queremos executar algo quando algum evento ocorrer, ou seja, quando um server iniciar por exemplo:

```JS
'use strict';

const http = require('http');

let server = http.createServer((req, res) => {});

server.listen(3000, () => {
   console.log('I am on');
});
```
