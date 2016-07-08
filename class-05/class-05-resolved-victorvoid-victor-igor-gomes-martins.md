# Node.js - Aula 04 - Exercício

**user:** [victorvoid](https://github.com/victorvoid)

**autor:** Victor Igor

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
```js  

sudo npm install -g nvm

/usr/bin/nvm -> /usr/lib/node_modules/nvm/bin/nvm
/usr/lib
└─┬ nvm@0.0.3 
  └── mkdirp@0.3.5 

node -v
v5.4.1

```

## Inicie um projeto novo para essa aula, com o npm e instale, salvando no package.json


```js
/* INICIANDO */
npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (class05) class05
version: (1.0.0) 
description: exercitando a aula 05
entry point: (index.js) 
test command: 
git repository: 
keywords: node, npm
author: Victor Igor
license: (ISC) 
About to write to /home/victorigor/Área de Trabalho/workshop-be-mean/NodeJS - Be Mean /Arquivos de Exercícios/class05/package.json:

{
  "name": "class05",
  "version": "1.0.0",
  "description": "exercitando a aula 05",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node",
    "npm"
  ],
  "author": "Victor Igor",
  "license": "ISC"
}

```

- dependência local

```js
 npm i --save yo 
npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of date with respect to npm

> yo@1.7.0 postinstall /home/victorigor/Área de Trabalho/workshop-be-mean/NodeJS - Be Mean /Arquivos de Exercícios/class05/node_modules/yo
> yodoctor


Yeoman Doctor
Running sanity checks on your system

✔ Global configuration file is valid
✔ NODE_PATH matches the npm root
✔ Node.js version
✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✔ npm version

Everything looks all right!
class05@1.0.0 /home/victorigor/Área de Trabalho/workshop-be-mean/NodeJS - Be Mean /Arquivos de Exercícios/class05
└─┬ yo@1.7.0 
  ├── async@1.5.2 
  ├─┬ chalk@1.1.1 
  │ ├─┬ ansi-styles@2.2.0 
  │ │ └── color-convert@1.0.0 
  │ ├── escape-string-regexp@1.0.5 
  │ ├── has-ansi@2.0.0 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├── cli-list@0.1.6 
  ├─┬ configstore@1.4.0 
  │ ├── graceful-fs@4.1.3 
  │ ├─┬ mkdirp@0.5.1 
  │ │ └── minimist@0.0.8 
  │ ├── object-assign@4.0.1 
  │ ├── os-tmpdir@1.0.1 
  │ ├── osenv@0.1.3 
  │ ├── uuid@2.0.1 
  │ ├─┬ write-file-atomic@1.1.4 
  │ │ ├── imurmurhash@0.1.4 
  │ │ └── slide@1.1.6 
  │ └── xdg-basedir@2.0.0 
  ├─┬ cross-spawn-async@2.1.9 
  │ ├─┬ lru-cache@4.0.0 
  │ │ ├── pseudomap@1.0.2 
  │ │ └── yallist@2.0.0 
  │ └─┬ which@1.2.4 
  │   ├─┬ is-absolute@0.1.7 
  │   │ └── is-relative@0.1.3 
  │   └── isexe@1.1.2 
  ├── figures@1.4.0 
  ├─┬ fullname@2.1.0 
  │ ├─┬ npmconf@2.1.2 
  │ │ ├─┬ config-chain@1.1.10 
  │ │ │ └── proto-list@1.2.4 
  │ │ ├── inherits@2.0.1 
  │ │ ├── ini@1.3.4 
  │ │ ├─┬ nopt@3.0.6 
  │ │ │ └── abbrev@1.0.7 
  │ │ ├─┬ once@1.3.3 
  │ │ │ └── wrappy@1.0.1 
  │ │ ├── semver@4.3.6 
  │ │ └── uid-number@0.0.5 
  │ ├── pify@2.3.0 
  │ └─┬ pinkie-promise@2.0.0 
  │   └── pinkie@2.0.4 
  ├─┬ got@5.5.0 
  │ ├─┬ create-error-class@2.0.1 
  │ │ └── capture-stack-trace@1.0.0 
  │ ├── duplexer2@0.1.4 
  │ ├── is-plain-obj@1.1.0 
  │ ├── is-redirect@1.0.0 
  │ ├── is-retry-allowed@1.0.0 
  │ ├── is-stream@1.0.1 
  │ ├── lowercase-keys@1.0.0 
  │ ├── node-status-codes@1.0.0 
  │ ├─┬ parse-json@2.2.0 
  │ │ └─┬ error-ex@1.3.0 
  │ │   └── is-arrayish@0.2.1 
  │ ├── read-all-stream@3.1.0 
  │ ├─┬ readable-stream@2.0.5 
  │ │ ├── core-util-is@1.0.2 
  │ │ ├── isarray@0.0.1 
  │ │ ├── process-nextick-args@1.0.6 
  │ │ ├── string_decoder@0.10.31 
  │ │ └── util-deprecate@1.0.2 
  │ ├── timed-out@2.0.0 
  │ ├── unzip-response@1.0.0 
  │ └─┬ url-parse-lax@1.0.0 
  │   └── prepend-http@1.0.3 
  ├─┬ humanize-string@1.0.1 
  │ └── decamelize@1.2.0 
  ├─┬ inquirer@0.11.4 
  │ ├── ansi-escapes@1.2.0 
  │ ├── ansi-regex@2.0.0 
  │ ├─┬ cli-cursor@1.0.2 
  │ │ └─┬ restore-cursor@1.0.1 
  │ │   └── exit-hook@1.1.1 
  │ ├── cli-width@1.1.1 
  │ ├─┬ readline2@1.0.1 
  │ │ ├── code-point-at@1.0.0 
  │ │ ├── is-fullwidth-code-point@1.0.0 
  │ │ └── mute-stream@0.0.5 
  │ ├── run-async@0.1.0 
  │ ├── rx-lite@3.1.2 
  │ ├── string-width@1.0.1 
  │ └── through@2.3.8 
  ├─┬ insight@0.7.0 
  │ ├── inquirer@0.10.1 
  │ ├─┬ lodash.debounce@3.1.1 
  │ │ └── lodash._getnative@3.9.1 
  │ ├─┬ os-name@1.0.3 
  │ │ ├─┬ osx-release@1.1.0 
  │ │ │ └── minimist@1.2.0 
  │ │ └─┬ win-release@1.1.1 
  │ │   └── semver@5.1.0 
  │ ├─┬ request@2.69.0 
  │ │ ├── aws-sign2@0.6.0 
  │ │ ├── aws4@1.3.2 
  │ │ ├── bl@1.0.3 
  │ │ ├── caseless@0.11.0 
  │ │ ├─┬ combined-stream@1.0.5 
  │ │ │ └── delayed-stream@1.0.0 
  │ │ ├── extend@3.0.0 
  │ │ ├── forever-agent@0.6.1 
  │ │ ├── form-data@1.0.0-rc3 
  │ │ ├─┬ har-validator@2.0.6 
  │ │ │ ├─┬ commander@2.9.0 
  │ │ │ │ └── graceful-readlink@1.0.1 
  │ │ │ └─┬ is-my-json-valid@2.13.1 
  │ │ │   ├── generate-function@2.0.0 
  │ │ │   ├─┬ generate-object-property@1.2.0 
  │ │ │   │ └── is-property@1.0.2 
  │ │ │   └── jsonpointer@2.0.0 
  │ │ ├─┬ hawk@3.1.3 
  │ │ │ ├── boom@2.10.1 
  │ │ │ ├── cryptiles@2.0.5 
  │ │ │ ├── hoek@2.16.3 
  │ │ │ └── sntp@1.0.9 
  │ │ ├─┬ http-signature@1.1.1 
  │ │ │ ├── assert-plus@0.2.0 
  │ │ │ ├─┬ jsprim@1.2.2 
  │ │ │ │ ├── extsprintf@1.0.2 
  │ │ │ │ ├── json-schema@0.2.2 
  │ │ │ │ └── verror@1.3.6 
  │ │ │ └─┬ sshpk@1.7.4 
  │ │ │   ├── asn1@0.2.3 
  │ │ │   ├─┬ dashdash@1.13.0 
  │ │ │   │ └── assert-plus@1.0.0 
  │ │ │   ├── ecc-jsbn@0.1.1 
  │ │ │   ├── jodid25519@1.0.2 
  │ │ │   ├── jsbn@0.1.0 
  │ │ │   └── tweetnacl@0.14.1 
  │ │ ├── is-typedarray@1.0.0 
  │ │ ├── isstream@0.1.2 
  │ │ ├── json-stringify-safe@5.0.1 
  │ │ ├─┬ mime-types@2.1.10 
  │ │ │ └── mime-db@1.22.0 
  │ │ ├── node-uuid@1.4.7 
  │ │ ├── oauth-sign@0.8.1 
  │ │ ├── qs@6.0.2 
  │ │ ├── stringstream@0.0.5 
  │ │ └── tunnel-agent@0.4.2 
  │ └── tough-cookie@2.2.1 
  ├── lodash@3.10.1 
  ├─┬ meow@3.7.0 
  │ ├─┬ camelcase-keys@2.0.0 
  │ │ └── camelcase@2.1.0 
  │ ├─┬ loud-rejection@1.3.0 
  │ │ ├── array-find-index@1.0.1 
  │ │ └── signal-exit@2.1.2 
  │ ├── map-obj@1.0.1 
  │ ├── minimist@1.2.0 
  │ ├─┬ normalize-package-data@2.3.5 
  │ │ ├── hosted-git-info@2.1.4 
  │ │ ├─┬ is-builtin-module@1.0.0 
  │ │ │ └── builtin-modules@1.1.1 
  │ │ └─┬ validate-npm-package-license@3.0.1 
  │ │   ├─┬ spdx-correct@1.0.2 
  │ │   │ └── spdx-license-ids@1.2.0 
  │ │   └─┬ spdx-expression-parse@1.0.2 
  │ │     └── spdx-exceptions@1.0.4 
  │ ├─┬ redent@1.0.0 
  │ │ ├── indent-string@2.1.0 
  │ │ └── strip-indent@1.0.1 
  │ └── trim-newlines@1.0.0 
  ├─┬ npm-keyword@4.2.0 
  │ └── registry-url@3.0.3 
  ├── opn@3.0.3 
  ├─┬ package-json@2.3.1 
  │ ├─┬ rc@1.1.6 
  │ │ ├── deep-extend@0.4.1 
  │ │ ├── minimist@1.2.0 
  │ │ └── strip-json-comments@1.0.4 
  │ └── semver@5.1.0 
  ├─┬ read-pkg-up@1.0.1 
  │ ├─┬ find-up@1.1.2 
  │ │ └── path-exists@2.1.0 
  │ └─┬ read-pkg@1.1.0 
  │   ├─┬ load-json-file@1.1.0 
  │   │ └─┬ strip-bom@2.0.0 
  │   │   └── is-utf8@0.2.1 
  │   └── path-type@1.1.0 
  ├─┬ repeating@2.0.0 
  │ └─┬ is-finite@1.0.1 
  │   └── number-is-nan@1.0.0 
  ├─┬ root-check@1.0.0 
  │ ├─┬ downgrade-root@1.1.0 
  │ │ ├── default-uid@1.0.0 
  │ │ └── is-root@1.0.0 
  │ └─┬ sudo-block@1.2.0 
  │   └── is-docker@1.0.0 
  ├─┬ sort-on@1.2.2 
  │ ├── arrify@1.0.1 
  │ └─┬ dot-prop@2.4.0 
  │   └── is-obj@1.0.0 
  ├── string-length@1.0.1 
  ├── titleize@1.0.0 
  ├─┬ update-notifier@0.6.1 
  │ ├─┬ boxen@0.3.1 
  │ │ ├── filled-array@1.1.0 
  │ │ └── widest-line@1.0.0 
  │ ├── is-npm@1.0.0 
  │ ├── latest-version@2.0.0 
  │ └─┬ semver-diff@2.1.0 
  │   └── semver@5.1.0 
  ├─┬ user-home@2.0.0 
  │ └── os-homedir@1.0.1 
  ├─┬ yeoman-character@1.1.0 
  │ └─┬ supports-color@3.1.2 
  │   └── has-flag@1.0.0 
  ├─┬ yeoman-doctor@2.1.0 
  │ ├─┬ bin-version-check@2.1.0 
  │ │ ├─┬ bin-version@1.0.4 
  │ │ │ └─┬ find-versions@1.2.1 
  │ │ │   └── semver-regex@1.0.0 
  │ │ ├── minimist@1.2.0 
  │ │ └─┬ semver-truncate@1.1.0 
  │ │   └── semver@5.1.0 
  │ ├─┬ each-async@1.1.1 
  │ │ ├── onetime@1.1.0 
  │ │ └── set-immediate-shim@1.0.1 
  │ ├── log-symbols@1.0.2 
  │ ├── object-values@1.0.0 
  │ ├── semver@5.1.0 
  │ └─┬ twig@0.8.8 
  │   ├─┬ minimatch@0.2.14 
  │   │ ├── lru-cache@2.7.3 
  │   │ └── sigmund@1.0.1 
  │   └─┬ walk@2.3.9 
  │     └── foreachasync@3.0.0 
  ├─┬ yeoman-environment@1.5.2 
  │ ├─┬ debug@2.2.0 
  │ │ └── ms@0.7.1 
  │ ├── diff@2.2.1 
  │ ├─┬ globby@4.0.0 
  │ │ ├─┬ array-union@1.0.1 
  │ │ │ └── array-uniq@1.0.2 
  │ │ └─┬ glob@6.0.4 
  │ │   ├── inflight@1.0.4 
  │ │   ├─┬ minimatch@3.0.0 
  │ │   │ └─┬ brace-expansion@1.1.3 
  │ │   │   ├── balanced-match@0.3.0 
  │ │   │   └── concat-map@0.0.1 
  │ │   └── path-is-absolute@1.0.0 
  │ ├── grouped-queue@0.3.2 
  │ ├─┬ mem-fs@1.1.2 
  │ │ ├─┬ through2@2.0.1 
  │ │ │ └── xtend@4.0.1 
  │ │ ├─┬ vinyl@1.1.1 
  │ │ │ ├── clone@1.0.2 
  │ │ │ ├── clone-stats@0.0.1 
  │ │ │ └── replace-ext@0.0.1 
  │ │ └─┬ vinyl-file@1.3.0 
  │ │   └─┬ strip-bom-stream@1.0.0 
  │ │     └── first-chunk-stream@1.0.0 
  │ ├── text-table@0.2.0 
  │ └── untildify@2.1.0 
  └─┬ yosay@1.1.0 
    ├── minimist@1.2.0 
    ├── pad-component@0.0.1 
    ├─┬ taketalk@1.0.0 
    │ ├── get-stdin@4.0.1 
    │ └── minimist@1.2.0 
    └── word-wrap@1.1.0 

```

- Uma dependência local de desenvolvimento

```js
npm i --save-dev jasmine
class05@1.0.0 /home/victorigor/Área de Trabalho/workshop-be-mean/NodeJS - Be Mean /Arquivos de Exercícios/class05
├─┬ jasmine@2.4.1 
│ ├── exit@0.1.2 
│ ├─┬ glob@3.2.11 
│ │ └─┬ minimatch@0.3.0 
│ │   └── lru-cache@2.7.3 
│ └── jasmine-core@2.4.1 
└─┬ yo@1.7.0
  └─┬ yeoman-doctor@2.1.0
    └─┬ twig@0.8.8
      └─┬ minimatch@0.2.14
        └── lru-cache@2.7.3 


```

- Uma dependência local opcional

```js
npm i --save-optional colors 
class05@1.0.0 /home/victorigor/Área de Trabalho/workshop-be-mean/NodeJS - Be Mean /Arquivos de Exercícios/class05
└── colors@1.1.2 

```

```js
/* COMO FICOU O PACKAGE: */

cat package.json 

{
  "name": "class05",
  "version": "1.0.0",
  "description": "exercitando a aula 05",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node",
    "npm"
  ],
  "author": "Victor Igor",
  "license": "ISC",
  "dependencies": {
    "yo": "^1.7.0"
  },
  "devDependencies": {
    "jasmine": "^2.4.1"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}

```

## Crie e execute um script, via npm, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

script.js:
```js
	console.log('UUUIUUUUU vc está aqui: '+__dirname);
```

```js
//executando:
sudo npm run ondeEstou 

ondeEstou /home/victorigor/Área de Trabalho/workshop-be-mean/NodeJS - Be Mean /Aulas/npm

> node script.js

UUUIUUUUU  vc está aqui: /home/victorigor/Área de Trabalho/workshop-be-mean/NodeJS - Be Mean /Aulas/npm
```
## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

```js
/*1 - filename */
console.log('Diretorio com o nome do arquivo é: '+__filename);
```

```js
/*2 - dirname */
console.log('Eu estou em '+__dirname)
```

```js
/*3 - buffer */
var buffer = new Buffer('Ola mucura =)');
console.log(buffer.toString());
```
	
```js
/*4 - setTimeout */
setTimeout(()=>{
	console.log('Ola estou usando timeout');
}, 1000);
```

```js
/*5 - setInterval */
setInterval(()=>{
	console.log('ola estou usando setInterval');
}, 1000);
```

## Explique como funciona e de um exemplo de process

O *process* é um objeto global e uma instancia do *EventEmitter*, então com ele você tem a capacidade de manipular e transmitir eventos.

Exemplo: 

```js

process.on('exit', () => console.log('Executando apenas ao final do processo!!!: '));

```
# Exercício de FS Aula 05 Parte 2

## Criar um arquivo
```js
'use strict';

const fs = require('fs');

fs.writeFile('./index.txt', 'Estou criando e escrevendo', 'utf-8', (err)=>{
	if (err) throw err;
	console.log('Arquivo criado');
});

```

## Ler um arquivo
```js

const fs = require('fs');
fs.readFile('./index.txt', 'utf-8', (err, result)=>{
	if (err) throw err;
	console.log(result);
});

```
## Editar o conteúdo desse arquivo
```js

'use strict';
const fs = require('fs');
fs.readFile('./index.txt', 'utf-8', (err, data)=>{
	if (err) throw err;

	data = data.replace('escrevendo', 'EDITEI AQUI');

	fs.writeFile('./index.txt', data, 'utf-8', (err)=>{
		if (err) throw err;
		console.log('Arquivo modificado com sucesso!');
	});
});
```

## Deletar arquivo
```js

'use strict';
const fs = require('fs');
fs.unlink('index.txt', (err)=>{
	if (err) throw err;
	console.log('Arquivo deletado!');
})

```

## Renomear arquivo
```js
const fs = require('fs');
fs.rename('./index.txt', 'index2.txt', (err)=>{
	if (err) throw err;
	console.log('Arquivo renomeiado');
});

```

