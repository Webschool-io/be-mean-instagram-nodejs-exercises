# Node.js - Aula 05 - Exercício

**user:** [sergiokopplin](https://github.com/sergiokopplin)

**autor:** Sergio Aragao Kopplin

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

```JS
node -v
v5.4.1

npm -v
3.5.3
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
name: (be-mean-exercises)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository: (https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises.git)
keywords:
author:
license: (ISC)
About to write to /Users/kopplin/Desktop/be-mean-exercises/package.json:

{
  "name": "be-mean-exercises",
  "version": "1.0.0",
  "description": "- Coloque um email para login( hotmail não funciona ) - Após isso, clique em Webschool para entrar no link do slack - Coloque o email que você digitou antes e crie uma senha - Entre no channel `be-mean-instagram`",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises/issues"
  },
  "homepage": "https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises#readme"
}


Is this ok? (yes)
```

   * 1 dependência local

```
npm i lodash --save
be-mean-exercises@1.0.0 /Users/kopplin/Desktop/be-mean-exercises
└── lodash@4.3.0
```

   * 1 dependência local de desenvolvimento

```
npm i gulp --save-dev

npm WARN deprecated lodash@1.0.2: lodash@<3.0.0 is no longer maintained. Upgrade to lodash@^4.0.0
be-mean-exercises@1.0.0 /Users/kopplin/Desktop/be-mean-exercises
├─┬ browser-sync@2.11.1
│ ├─┬ chokidar@1.4.1
│ │ └─┬ fsevents@1.0.7
│ │   └─┬ node-pre-gyp@0.6.19
│ │     ├─┬ mkdirp@0.5.1
│ │     │ └── minimist@0.0.8
│ │     ├─┬ npmlog@2.0.0
│ │     │ └─┬ gauge@1.2.2
│ │     │   └─┬ lodash.pad@3.1.1
│ │     │     └── lodash._basetostring@3.0.1
│ │     └─┬ request@2.67.0
│ │       └─┬ har-validator@2.0.3
│ │         └─┬ chalk@1.1.1
│ │           ├── ansi-styles@2.1.0
│ │           ├─┬ has-ansi@2.0.0
│ │           │ └── ansi-regex@2.0.0
│ │           ├── strip-ansi@3.0.0
│ │           └── supports-color@2.0.0
│ └─┬ localtunnel@1.8.1
│   ├─┬ request@2.65.0
│   │ └─┬ har-validator@2.0.6
│   │   └─┬ chalk@1.1.1
│   │     ├── ansi-styles@2.1.0
│   │     ├─┬ has-ansi@2.0.0
│   │     │ └── ansi-regex@2.0.0
│   │     ├── strip-ansi@3.0.0
│   │     └── supports-color@2.0.0
│   └─┬ yargs@3.29.0
│     └─┬ cliui@3.1.0
│       ├─┬ string-width@1.0.1
│       │ └─┬ strip-ansi@3.0.0
│       │   └── ansi-regex@2.0.0
│       └─┬ strip-ansi@3.0.0
│         └── ansi-regex@2.0.0
└─┬ gulp@3.9.1
  ├── archy@1.0.0
  ├─┬ chalk@1.1.1
  │ ├── ansi-styles@2.1.0
  │ ├─┬ has-ansi@2.0.0
  │ │ └── ansi-regex@2.0.0
  │ ├── strip-ansi@3.0.0
  │ └── supports-color@2.0.0
  ├── deprecated@0.0.1
  ├─┬ gulp-util@3.0.7
  │ ├── array-differ@1.0.0
  │ ├── array-uniq@1.0.2
  │ ├── beeper@1.1.0
  │ ├─┬ chalk@1.1.1
  │ │ ├── ansi-styles@2.1.0
  │ │ ├─┬ has-ansi@2.0.0
  │ │ │ └── ansi-regex@2.0.0
  │ │ ├── strip-ansi@3.0.0
  │ │ └── supports-color@2.0.0
  │ ├── dateformat@1.0.12
  │ ├─┬ fancy-log@1.2.0
  │ │ ├─┬ chalk@1.1.1
  │ │ │ ├── ansi-styles@2.1.0
  │ │ │ ├─┬ has-ansi@2.0.0
  │ │ │ │ └── ansi-regex@2.0.0
  │ │ │ ├── strip-ansi@3.0.0
  │ │ │ └── supports-color@2.0.0
  │ │ └── time-stamp@1.0.0
  │ ├─┬ gulplog@1.0.0
  │ │ └── glogg@1.0.0
  │ ├─┬ has-gulplog@0.1.0
  │ │ └── sparkles@1.0.0
  │ ├── lodash._reescape@3.0.0
  │ ├── lodash._reevaluate@3.0.0
  │ ├── lodash._reinterpolate@3.0.0
  │ ├─┬ lodash.template@3.6.2
  │ │ ├── lodash._basetostring@3.0.1
  │ │ ├── lodash._basevalues@3.0.0
  │ │ ├─┬ lodash.escape@3.2.0
  │ │ │ └── lodash._root@3.0.0
  │ │ └── lodash.templatesettings@3.1.1
  │ ├─┬ multipipe@0.1.2
  │ │ └─┬ duplexer2@0.0.2
  │ │   └── readable-stream@1.1.13
  │ ├── replace-ext@0.0.1
  │ ├── through2@2.0.1
  │ └─┬ vinyl@0.5.3
  │   ├── clone@1.0.2
  │   └── clone-stats@0.0.1
  ├── interpret@1.0.0
  ├─┬ liftoff@2.2.0
  │ ├── extend@2.0.1
  │ ├─┬ findup-sync@0.3.0
  │ │ └── glob@5.0.15
  │ ├── flagged-respawn@0.3.1
  │ ├── rechoir@0.6.2
  │ └── resolve@1.1.7
  ├─┬ orchestrator@0.3.7
  │ ├── end-of-stream@0.1.5
  │ ├── sequencify@0.0.7
  │ └── stream-consume@0.1.0
  ├── pretty-hrtime@1.0.1
  ├── semver@4.3.6
  ├─┬ tildify@1.1.2
  │ └── os-homedir@1.0.1
  ├─┬ v8flags@2.0.11
  │ └── user-home@1.1.1
  └─┬ vinyl-fs@0.3.14
    ├── defaults@1.0.3
    ├─┬ glob-stream@3.1.18
    │ ├── glob@4.5.3
    │ ├─┬ glob2base@0.0.12
    │ │ └── find-index@0.1.1
    │ ├── ordered-read-streams@0.1.0
    │ ├─┬ through2@0.6.5
    │ │ └── readable-stream@1.0.33
    │ └── unique-stream@1.0.0
    ├─┬ glob-watcher@0.0.6
    │ └─┬ gaze@0.5.2
    │   └─┬ globule@0.1.0
    │     ├─┬ glob@3.1.21
    │     │ ├── graceful-fs@1.2.3
    │     │ └── inherits@1.0.2
    │     ├── lodash@1.0.2
    │     └─┬ minimatch@0.2.14
    │       ├── lru-cache@2.7.3
    │       └── sigmund@1.0.1
    ├── graceful-fs@3.0.8
    ├─┬ mkdirp@0.5.1
    │ └── minimist@0.0.8
    ├─┬ strip-bom@1.0.0
    │ ├── first-chunk-stream@1.0.0
    │ └── is-utf8@0.2.1
    ├─┬ through2@0.6.5
    │ └── readable-stream@1.0.33
    └─┬ vinyl@0.4.6
      └── clone@0.2.0
```

   * 1 dependência local opcional

```
npm i -O mongoose
be-mean-exercises@1.0.0 /Users/kopplin/Desktop/be-mean-exercises
├─┬ browser-sync@2.11.1
│ └─┬ chokidar@1.4.1
│   └─┬ fsevents@1.0.7
│     └─┬ node-pre-gyp@0.6.19
│       └── semver@5.1.0
└─┬ mongoose@4.4.3
  ├── bson@0.4.21
  ├── hooks-fixed@1.1.0
  ├── kareem@1.0.1
  ├─┬ mongodb@2.1.6
  │ ├── es6-promise@3.0.2
  │ ├─┬ mongodb-core@1.3.1
  │ │ └─┬ require_optional@1.0.0
  │ │   ├── resolve-from@2.0.0
  │ │   └── semver@5.1.0
  │ └── readable-stream@1.0.31
  ├── mpath@0.2.1
  ├── mpromise@0.5.5
  ├─┬ mquery@1.6.3
  │ ├── bluebird@2.9.26
  │ └── sliced@0.0.5
  ├── muri@1.1.0
  ├── regexp-clone@0.0.1
  └── sliced@1.0.1
```

```
{
  "name": "be-mean-exercises",
  "version": "1.0.0",
  "description": "- Coloque um email para login( hotmail não funciona ) - Após isso, clique em Webschool para entrar no link do slack - Coloque o email que você digitou antes e crie uma senha - Entre no channel `be-mean-instagram`",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises/issues"
  },
  "homepage": "https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises#readme",
  "dependencies": {
    "lodash": "^4.3.0"
  },
  "devDependencies": {
    "gulp": "^3.9.1"
  },
  "optionalDependencies": {
    "mongoose": "^4.4.3"
  }
}
```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

```
{
  "name": "be-mean-exercises",
  "version": "1.0.0",
  "description": "- Coloque um email para login( hotmail não funciona ) - Após isso, clique em Webschool para entrar no link do slack - Coloque o email que você digitou antes e crie uma senha - Entre no channel `be-mean-instagram`",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "pr": "node teste.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises/issues"
  },
  "homepage": "https://github.com/sergiokopplin/be-mean-instagram-nodejs-exercises#readme",
  "dependencies": {
    "lodash": "^4.3.0"
  },
  "devDependencies": {
    "gulp": "^3.9.1"
  },
  "optionalDependencies": {
    "mongoose": "^4.4.3"
  }
}
```

```teste.js
console.log(__dirname);
```

```
npm run pr

> be-mean-exercises@1.0.0 pr /Users/kopplin/Desktop/be-mean-exercises
> node teste.js

/Users/kopplin/Desktop/be-mean-exercises
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
```JS
__dirname
console.log(__dirname);

__filename
console.log(__filename);

Buffer
var buff = new Buffer('Hello World!');
console.log(buff.toString());

setTimeout
setTimeout(function(){
    console.log("esse vem com atraso de 1s");
}, 1000);

setInterval
setInterval(() => console.log("intervalo de 1s"), 1000);
```

## Explique como funciona e de um exemplo de `process`.
O process é uma instância do EventEmitter, portanto emite eventos.

```JS
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});
```
---

Aula 05 - Parte 2

## Criar um arquivo
```JS
var fs = require('fs');

fs.writeFile('teste.txt', 'Esse é o conteúdo do arquivo', function (err){
    if(err) throw err;
    console.log('Arquivo salvo');
});
```

```
$ cat teste.txt
Esse é o conteúdo do arquivo%
```

## Ler um arquivo
```JS
var fs = require('fs');

fs.readFile('teste.txt', 'utf8' ,function (err, data){
    if(err) throw err;
    console.log(data);
});
```

```
node read-file.js
Esse é o conteúdo do arquivo
```

## Editar conteúdo desse arquivo
```JS
var fs = require('fs');

var texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

fs.writeFile('teste.txt', texto ,function (err, data){
    if(err) throw err;
    console.log('Arquivo alterado!');
});
```

```
node edit-file.js
Arquivo alterado!
```

## Deletar arquivo
```JS
var fs = require('fs');

fs.unlink('teste.txt', function (err){
    if(err) throw err;
    console.log('Arquivo deletado');
});
```

```
node delete-file.js
Arquivo deletado
```

## Renomear o arquivo
```JS
var fs = require('fs');

fs.rename('teste.txt', 'novo-nome.txt', function (err){
    if(err) throw err;
    console.log('Arquivo alterado');
});
```

```
node rename-file.js
Arquivo alterado
``

##Desafio: Criar um servidor web de arquivos estáticos: .css, .html, .js e etc...

```JS
var http = require('http')
    , fs = require('fs');

http.createServer(function(request, response){
    var contentType;

    switch (request.url) {

        case '/index.html':
            contentType = 'text/html';
            break;

        case '/style.css':
            contentType = 'text/css';
            break;

        case '/server.js':
            contentType = 'text/javascript';
            break;

        default:
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.write('<h1>404 - O arquivo não existe</h1>');
            break;
    }

    fs.readFile(request.url.substring(1), 'utf8', function (err, data){
        if (err) {
            console.log(err);
            return false;
        }
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(data);
    });
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
});
```
