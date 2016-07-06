# Node.js - Aula 05 - Exercício
**user:** [vitorcapretz](https://github.com/vitorcapretz)

**autor:** Vitor Capretz

**date:** 1465951250011

## 1. Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

#### Instalação do `nvm` via cUrl
```
vitor@vitor-ThinkPad-T440:/var/www/html/be-mean-modulo-nodejs$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
```
#### Checando a instalação
```
vitor@vitor-ThinkPad-T440:~$ command -v nvm
nvm
```
#### Versão do `nvm` 
```
vitor@vitor-ThinkPad-T440:~$ nvm --version
0.31.1
```

#### Versão do node, não há necessidade de atualização por ser a última
```
vitor@vitor-ThinkPad-T440:~$ node --version
v6.2.1
```

## 2. Inicie um projeto novo para essa aula, com o npm e instale, salvando no `package.json`
```
vitor@vitor-ThinkPad-T440:/var/www/html/workshop-be-mean/nodejs/proj-bemean$ npm init
```

#### Arquivo package.json finalizado
```js
{
  "name": "proj-bemean",
  "version": "0.0.1",
  "description": "projeto do bemean aula 05",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "vitorcapretz",
  "license": "ISC"
}
```

#### Instalando dependência local
```
vitor@vitor-ThinkPad-T440:/var/www/html/workshop-be-mean/nodejs/proj-bemean$ npm i --save bower
proj-bemean@0.0.1 /var/www/html/workshop-be-mean/nodejs/proj-bemean
└── bower@1.7.9 

npm WARN proj-bemean@0.0.1 No repository field.
```

#### Instalando dependência de desenvolvimento
```
vitor@vitor-ThinkPad-T440:/var/www/html/workshop-be-mean/nodejs/proj-bemean$ npm i --save-dev socket.io
proj-bemean@0.0.1 /var/www/html/workshop-be-mean/nodejs/proj-bemean
└─┬ socket.io@1.4.6 
  ├─┬ debug@2.2.0 
  │ └── ms@0.7.1 
  ├─┬ engine.io@1.6.9 
  │ ├─┬ accepts@1.1.4 
  │ │ ├─┬ mime-types@2.0.14 
  │ │ │ └── mime-db@1.12.0 
  │ │ └── negotiator@0.4.9 
  │ ├── base64id@0.1.0 
  │ ├─┬ engine.io-parser@1.2.4 
  │ │ ├── after@0.8.1 
  │ │ ├── arraybuffer.slice@0.0.6 
  │ │ ├── base64-arraybuffer@0.1.2 
  │ │ ├── blob@0.0.4 
  │ │ ├── has-binary@0.1.6 
  │ │ └── utf8@2.1.0 
  │ └─┬ ws@1.0.1 
  │   ├── options@0.0.6 
  │   └── ultron@1.0.2 
  ├─┬ has-binary@0.1.7 
  │ └── isarray@0.0.1 
  ├─┬ socket.io-adapter@0.4.0 
  │ └─┬ socket.io-parser@2.2.2 
  │   ├── debug@0.7.4 
  │   └── json3@3.2.6 
  ├─┬ socket.io-client@1.4.6 
  │ ├── backo2@1.0.2 
  │ ├── component-bind@1.0.0 
  │ ├── component-emitter@1.2.0 
  │ ├─┬ engine.io-client@1.6.9 
  │ │ ├── component-inherit@0.0.3 
  │ │ ├── has-cors@1.1.0 
  │ │ ├── parsejson@0.0.1 
  │ │ ├── parseqs@0.0.2 
  │ │ ├── xmlhttprequest-ssl@1.5.1 
  │ │ └── yeast@0.1.2 
  │ ├── indexof@0.0.1 
  │ ├── object-component@0.0.3 
  │ ├─┬ parseuri@0.0.4 
  │ │ └─┬ better-assert@1.0.2 
  │ │   └── callsite@1.0.0 
  │ └── to-array@0.1.4 
  └─┬ socket.io-parser@2.2.6 
    ├── benchmark@1.0.0 
    ├── component-emitter@1.1.2 
    └── json3@3.3.2 

npm WARN proj-bemean@0.0.1 No repository field.
```
#### Dependência opcional
```
vitor@vitor-ThinkPad-T440:/var/www/html/workshop-be-mean/nodejs/proj-bemean$ npm i --save-optional mocha
npm WARN deprecated jade@0.26.3: Jade has been renamed to pug, please install the latest version of pug instead of jade
npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
proj-bemean@0.0.1 /var/www/html/workshop-be-mean/nodejs/proj-bemean
└─┬ mocha@2.5.3 
  ├── commander@2.3.0 
  ├── diff@1.4.0 
  ├── escape-string-regexp@1.0.2 
  ├─┬ glob@3.2.11 
  │ ├── inherits@2.0.1 
  │ └─┬ minimatch@0.3.0 
  │   ├── lru-cache@2.7.3 
  │   └── sigmund@1.0.1 
  ├── growl@1.9.2 
  ├─┬ jade@0.26.3 
  │ ├── commander@0.6.1 
  │ └── mkdirp@0.3.0 
  ├─┬ mkdirp@0.5.1 
  │ └── minimist@0.0.8 
  ├── supports-color@1.2.0 
  └── to-iso-string@0.0.2 

npm WARN proj-bemean@0.0.1 No repository field.
```

**Arquivo `package.json após dependências**
```js
{
  "name": "proj-bemean",
  "version": "0.0.4",
  "description": "projeto do bemean aula 05",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "ScriptJs": "node server.js"
  },
  "author": "vitorcapretz",
  "license": "ISC",
  "dependencies": {
    "bower": "^1.7.9"
  },
  "devDependencies": {
    "socket.io": "^1.4.6"
  },
  "optionalDependencies": {
    "mocha": "^2.5.3"
  }
}
```

## 3. Crie e execute um script, via npm, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

#### Arquivo `package.json` atualizado
```js 
{
  "name": "proj-bemean",
  "version": "0.0.1",
  "description": "projeto do bemean aula 05",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "ScriptJs": "node server.js"
  },
  "author": "vitorcapretz",
  "license": "ISC"
}
```

#### Arquivo `server.js`
```js
console.log(__dirname);
```

#### Resultado no terminal
```
vitor@vitor-ThinkPad-T440:/var/www/html/workshop-be-mean/nodejs/proj-bemean$ npm run ScriptJs

> proj-bemean@0.0.1 ScriptJs /var/www/html/workshop-be-mean/nodejs/proj-bemean
> node server.js

/var/www/html/workshop-be-mean/nodejs/proj-bemean
```

## 4. Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

#### dirname e filename

Ambas são muito parecidas, a variável global `__dirname` retorna o caminho completo do diretório, enquanto a variável `__filename` inclui também o nome do próprio arquivo.

```js
console.log(__dirname); // /var/www/html/workshop-be-mean/nodejs/proj-bemean
console.log(__filename); // /var/www/html/workshop-be-mean/nodejs/proj-bemean/server.js
```
#### setInterval e setTimeout

Também muito semelhantes, ambas recebem uma função de callback e um tempo em milisegundos. A diferença é que `setInterval` executa a função callback infinitamente a cada X milisegundos passados como parâmetro, enquanto a `setTimeout` aguarda por X milisegundos e executa a função callback apenas uma vez.

```js
'use strict';

const interval = setInterval(() => {
    console.log('loop');
}, 500);

setTimeout(() => {
    clearInterval(interval);
    console.log('stopped infinite loop');
}, 5000);
```

#### console

Conhecido principalmente por permitir a impressão de dados, um de seus métodos muito utilizados é o `console.log`

```js
console.log('just a print');
```

#### Buffer - classe

Usado para lidar com dados binários

```js
'use strict';

const buf = new Buffer(10);
console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 a0 6b>
```

## 5. Explique como funciona e de um exemplo de `process`.

O `process` é uma váriavel global que disponibiliza ao desenvolvedor informações sobre o atual estado da aplicação.

O objeto `process` é uma instância do `EventEmitter`.

**Exemplo de impressão de uso de memória**
```js
console.log(process.memoryUsage()); // { rss: 23867392, heapTotal: 8384512, heapUsed: 4230040 }
```

## 6. Gerenciamento de arquivos usando FileSystem: Criar, Ler, Editar, Renomear e Deletar

```js
"use strict";

const fs = require('fs');
let test_file = "test.txt";

fs.writeFileSync(test_file, 'Olá mundo com teste de criação de arquivo', 'utf8');

console.log('file created');

let file_content = fs.readFileSync(test_file, 'utf8');

console.log(file_content);

fs.writeFileSync(test_file, file_content + ', versão editada', 'utf8');

let new_test_file = "renomeado_" + test_file;
fs.rename(test_file, new_test_file, () => {
    console.log('file renamed');
    fs.unlink(new_test_file, () => {
        console.log('ok, deleted file');
    });
});
```
