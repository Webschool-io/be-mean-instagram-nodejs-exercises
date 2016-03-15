# Node.js - Aula 05 - Exercício

**user:** https://github.com/paulosilva92

**autor:** Paulo Roberto da Silva

**date:** Sun Mar 06 2016 00:53:19 GMT-0300 (BRT)

## Instale algum gerenciador de versão do Node.js e instale a versão mais atua como padrão.

##### Instalação do NVM
```
➜  bemean curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  7766  100  7766    0     0   5608      0  0:00:01  0:00:01 --:--:--  5607
=> Downloading nvm from git to '/home/paulo/.nvm'
=> Cloning into '/home/paulo/.nvm'...
remote: Counting objects: 4402, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4402 (delta 0), reused 0 (delta 0), pack-reused 4399
Receiving objects: 100% (4402/4402), 1.10 MiB | 67.00 KiB/s, done.
Resolving deltas: 100% (2582/2582), done.
Checking connectivity... done.
* (HEAD detached at v0.31.0)
  master

=> Appending source string to /home/paulo/.zshrc
=> You currently have modules installed globally with `npm`. These will no
=> longer be linked to the active version of Node when you install a new node
=> with `nvm`; and they may (depending on how you construct your `$PATH`)
=> override the binaries of modules installed with `nvm`:

/usr/lib
├── lodash@4.6.1
├── nativescript@1.6.1
├── nodemon@1.9.1

=> If you wish to uninstall them at a later point (or re-install them under your
=> `nvm` Nodes), you can remove them from the system Node as follows:

     $ nvm use system
     $ npm uninstall -g a_module

=> Close and reopen your terminal to start using nvm
```

##### Instalação da versão mais atual do Node.js

```
➜  bemean nvm install node
Downloading https://nodejs.org/dist/v5.7.1/node-v5.7.1-linux-x64.tar.xz...
######################################################################## 100,0%
Now using node v5.7.1 (npm v3.6.0)
Creating default alias: default -> node (-> v5.7.1)
➜  bemean node -v
v5.7.1
```

## Inicie um projeto novo para essa aula, com o npm e instale, salvando no package.json

```
➜  exercicios git:(master) ✗ mkdir projeto-exercicio
➜  exercicios git:(master) ✗ cd projeto-exercicio 
➜  projeto-exercicio git:(master) ✗ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (projeto-exercicio) 
version: (1.0.0) 
description: "projeto de exercicio para o modulo de nodejs do bemean"
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Paulo Roberto da Silva
license: (ISC) 
About to write to /home/paulo/Documentos/bemean/be-mean-exercises/nodejs/exercicios/projeto-exercicio/package.json:

{
  "name": "projeto-exercicio",
  "version": "1.0.0",
  "description": "\"projeto de exercicio para o modulo de nodejs do bemean\"",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Paulo Roberto da Silva",
  "license": "ISC"
}


Is this ok? (yes) 
```

### 1 dependência local

```
➜  projeto-exercicio git:(master) ✗ npm i express -S
projeto-exercicio@1.0.0 /home/paulo/Documentos/bemean/be-mean-exercises/nodejs/exercicios/projeto-exercicio
└─┬ express@4.13.4 
  ├─┬ accepts@1.2.13 
  │ ├─┬ mime-types@2.1.10 
  │ │ └── mime-db@1.22.0 
  │ └── negotiator@0.5.3 
  ├── array-flatten@1.1.1 
  ├── content-disposition@0.5.1 
  ├── content-type@1.0.1 
  ├── cookie@0.1.5 
  ├── cookie-signature@1.0.6 
  ├─┬ debug@2.2.0 
  │ └── ms@0.7.1 
  ├── depd@1.1.0 
  ├── escape-html@1.0.3 
  ├── etag@1.7.0 
  ├─┬ finalhandler@0.4.1 
  │ └── unpipe@1.0.0 
  ├── fresh@0.3.0 
  ├── merge-descriptors@1.0.1 
  ├── methods@1.1.2 
  ├─┬ on-finished@2.3.0 
  │ └── ee-first@1.1.1 
  ├── parseurl@1.3.1 
  ├── path-to-regexp@0.1.7 
  ├─┬ proxy-addr@1.0.10 
  │ ├── forwarded@0.1.0 
  │ └── ipaddr.js@1.0.5 
  ├── qs@4.0.0 
  ├── range-parser@1.0.3 
  ├─┬ send@0.13.1 
  │ ├── destroy@1.0.4 
  │ ├─┬ http-errors@1.3.1 
  │ │ └── inherits@2.0.1 
  │ ├── mime@1.3.4 
  │ └── statuses@1.2.1 
  ├── serve-static@1.10.2 
  ├─┬ type-is@1.6.12 
  │ └── media-typer@0.3.0 
  ├── utils-merge@1.0.0 
  └── vary@1.0.1 

npm WARN projeto-exercicio@1.0.0 No repository field.
```

### 1 dependência local de desenvolvimento 

```
➜  projeto-exercicio git:(master) ✗ npm i gulp -D   

projeto-exercicio@1.0.0 /home/paulo/Documentos/bemean/be-mean-exercises/nodejs/exercicios/projeto-exercicio
└─┬ gulp@3.9.1 
  ├── archy@1.0.0 
  ├─┬ chalk@1.1.1 
  │ ├─┬ ansi-styles@2.2.0 
  │ │ └── color-convert@1.0.0 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.0.0 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├── deprecated@0.0.1 
  ├─┬ gulp-util@3.0.7 
  │ ├── array-differ@1.0.0 
  │ ├── array-uniq@1.0.2 
  │ ├── beeper@1.1.0 
  │ ├─┬ dateformat@1.0.12 
  │ │ ├── get-stdin@4.0.1 
  │ │ └─┬ meow@3.7.0 
  │ │   ├─┬ camelcase-keys@2.0.0 
  │ │   │ └── camelcase@2.1.0 
  │ │   ├── decamelize@1.2.0 
  │ │   ├─┬ loud-rejection@1.3.0 
  │ │   │ ├── array-find-index@1.0.1 
  │ │   │ └── signal-exit@2.1.2 
  │ │   ├── map-obj@1.0.1 
  │ │   ├─┬ normalize-package-data@2.3.5 
  │ │   │ ├── hosted-git-info@2.1.4 
  │ │   │ ├─┬ is-builtin-module@1.0.0 
  │ │   │ │ └── builtin-modules@1.1.1 
  │ │   │ └─┬ validate-npm-package-license@3.0.1 
  │ │   │   ├─┬ spdx-correct@1.0.2 
  │ │   │   │ └── spdx-license-ids@1.2.0 
  │ │   │   └─┬ spdx-expression-parse@1.0.2 
  │ │   │     └── spdx-exceptions@1.0.4 
  │ │   ├── object-assign@4.0.1 
  │ │   ├─┬ read-pkg-up@1.0.1 
  │ │   │ ├─┬ find-up@1.1.2 
  │ │   │ │ ├── path-exists@2.1.0 
  │ │   │ │ └─┬ pinkie-promise@2.0.0 
  │ │   │ │   └── pinkie@2.0.4 
  │ │   │ └─┬ read-pkg@1.1.0 
  │ │   │   ├─┬ load-json-file@1.1.0 
  │ │   │   │ ├── graceful-fs@4.1.3 
  │ │   │   │ ├─┬ parse-json@2.2.0 
  │ │   │   │ │ └─┬ error-ex@1.3.0 
  │ │   │   │ │   └── is-arrayish@0.2.1 
  │ │   │   │ ├── pify@2.3.0 
  │ │   │   │ └── strip-bom@2.0.0 
  │ │   │   └── path-type@1.1.0 
  │ │   ├─┬ redent@1.0.0 
  │ │   │ ├─┬ indent-string@2.1.0 
  │ │   │ │ └─┬ repeating@2.0.0 
  │ │   │ │   └─┬ is-finite@1.0.1 
  │ │   │ │     └── number-is-nan@1.0.0 
  │ │   │ └── strip-indent@1.0.1 
  │ │   └── trim-newlines@1.0.0 
  │ ├─┬ fancy-log@1.2.0 
  │ │ └── time-stamp@1.0.0 
  │ ├─┬ gulplog@1.0.0 
  │ │ └── glogg@1.0.0 
  │ ├─┬ has-gulplog@0.1.0 
  │ │ └── sparkles@1.0.0 
  │ ├── lodash._reescape@3.0.0 
  │ ├── lodash._reevaluate@3.0.0 
  │ ├── lodash._reinterpolate@3.0.0 
  │ ├─┬ lodash.template@3.6.2 
  │ │ ├── lodash._basecopy@3.0.1 
  │ │ ├── lodash._basetostring@3.0.1 
  │ │ ├── lodash._basevalues@3.0.0 
  │ │ ├── lodash._isiterateecall@3.0.9 
  │ │ ├─┬ lodash.escape@3.2.0 
  │ │ │ └── lodash._root@3.0.1 
  │ │ ├─┬ lodash.keys@3.1.2 
  │ │ │ ├── lodash._getnative@3.9.1 
  │ │ │ ├── lodash.isarguments@3.0.8 
  │ │ │ └── lodash.isarray@3.0.4 
  │ │ ├── lodash.restparam@3.6.1 
  │ │ └── lodash.templatesettings@3.1.1 
  │ ├─┬ multipipe@0.1.2 
  │ │ └─┬ duplexer2@0.0.2 
  │ │   └── readable-stream@1.1.13 
  │ ├── object-assign@3.0.0 
  │ ├── replace-ext@0.0.1 
  │ ├─┬ through2@2.0.1 
  │ │ ├─┬ readable-stream@2.0.5 
  │ │ │ ├── core-util-is@1.0.2 
  │ │ │ ├── isarray@0.0.1 
  │ │ │ ├── process-nextick-args@1.0.6 
  │ │ │ ├── string_decoder@0.10.31 
  │ │ │ └── util-deprecate@1.0.2 
  │ │ └── xtend@4.0.1 
  │ └─┬ vinyl@0.5.3 
  │   ├── clone@1.0.2 
  │   └── clone-stats@0.0.1 
  ├── interpret@1.0.0 
  ├─┬ liftoff@2.2.0 
  │ ├── extend@2.0.1 
  │ ├─┬ findup-sync@0.3.0 
  │ │ └─┬ glob@5.0.15 
  │ │   ├── inflight@1.0.4 
  │ │   ├── minimatch@3.0.0 
  │ │   └── path-is-absolute@1.0.0 
  │ ├── flagged-respawn@0.3.1 
  │ ├── rechoir@0.6.2 
  │ └── resolve@1.1.7 
  ├── minimist@1.2.0 
  ├─┬ orchestrator@0.3.7 
  │ ├─┬ end-of-stream@0.1.5 
  │ │ └─┬ once@1.3.3 
  │ │   └── wrappy@1.0.1 
  │ ├── sequencify@0.0.7 
  │ └── stream-consume@0.1.0 
  ├── pretty-hrtime@1.0.2 
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
    │ ├─┬ minimatch@2.0.10 
    │ │ └─┬ brace-expansion@1.1.3 
    │ │   ├── balanced-match@0.3.0 
    │ │   └── concat-map@0.0.1 
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

### 1 dependência local opcional

```
➜  projeto-exercicio git:(master) ✗ npm i ejs -S
projeto-exercicio@1.0.0 /home/paulo/Documentos/bemean/be-mean-exercises/nodejs/exercicios/projeto-exercicio
└── ejs@2.4.1 

npm WARN projeto-exercicio@1.0.0 No repository field.
```

## Crie um *script*, via npm, que mostre uma mensagem no console com a global que possui o caminho para o diretório atual

##### Código do arquivo *path.js*

```
console.log(process.cwd());
```

##### Criação do script no package.json

```js
"scripts": {
    "caminho": "node path.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

##### Execução do script

```
➜  projeto-exercicio git:(master) ✗ npm run-script caminho

> projeto-exercicio@1.0.0 caminho /home/paulo/Documentos/bemean/be-mean-exercises/nodejs/exercicios/projeto-exercicio
> node path.js

/home/paulo/Documentos/bemean/be-mean-exercises/nodejs/exercicios/projeto-exercicio
```

## Cite 5 globais do Node e pelo menos 1 exemplo de cada

##### __filename

Contém o caminho do arquivo que está sendo executado.

```js
console.log(__filename);
// /home/paulo/Documentos/bemean/be-mean-exercises/nodejs/exercicios/teste.js
```

##### require();

Utilizado para importar módulos. Tem-se que passar para essa função o caminho onde o módulo se encontra.

```js
const modulo = require('./modulos/modulo.js');
```

##### console

Utilizado para mostrar saidas de texto ou conteudos de variaveis,funções objetos e etc.

```js
> console.log('Ola %s', 'Mundo');
Ola Mundo
```

##### setInterval

Roda uma função repetidamente durante a cada periode de tempo determinado pelo usuário. Essa função recebe dois parâmetros, o primeiro parâmetro é a função que será repetida e o segundo é o tempo entre cada repetição em milisegundos.

```js
setInterval(function(){
  console.log('intervalo');
  },1000)
```

##### setTimeout

Roda uma função após determinado tempo. Essa função recebe dois parâmetros, o primeiro é a função a ser repetida e o segundo é o tempo em milisegundos.

```js
setTimeout(function(){
  console.log('intervalo');
  },2000);
```


## Explique como funciona e de um exemplo de *process*

*process* é uma instância do *EvenEmitter*, ou seja, um objeto global que contém, além de métodos, eventos. É utilizado para manipuar e ver algumas informações sobre o ambiente de execução da aplicação.

```js
setTimeout(function(){
  console.log('intervalo');
  },2000);
console.log(process.uptime()); //mostra a quantidade de tempo que a aplicação está em execução
//Resposta : 
//  0.101
//  intervalo
```

## Criar um arquivo

```js
const fs = require('fs');
fs.writeFileSync('teste.txt', 'Esse é um texto para o arquivo de teste', 'utf-8');
```

## Ler um arquivo 

```js
var teste = fs.readFileSync('./teste.txt', 'utf-8');
console.log(teste);
//Esse é um texto para o arquivo de teste
```

## Editar um arquivo

```js
fs.writeFileSync('teste.txt', 'Esse é um texto modificado para fazer update no arquivo de teste', 'utf-8');
var teste = fs.readFileSync('./teste.txt', 'utf-8');
console.log(teste);
//Esse é um texto modificado para fazer update no arquivo de teste 
```

## Deletar um arquivo

```js
fs.unlinkSync('./teste.txt');
```

## Renomear um arquivo

```js
fs.renameSync('./teste.txt', './novoteste.txt');
var teste = fs.readFileSync('./novoteste.txt', 'utf-8');
console.log(teste);
```

## Desafio: Criar um servidor web de arquivos estáticos: css, html, js e etc;

Colocar este código num arquivo com nome de `app.js` e rodar com o node 

```js
const http = require('http');
const fs = require('fs');

http.createServer((req, res)=> {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      console.log(err);
      res.end("Página não encontrada");
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(3000, ()=>{
    console.log('Server rodando na porta 3000');
});
```

Colocando no navegador `http://localhost:3000/app.js` veremos então o código do nosso arquivo que cria o servidor