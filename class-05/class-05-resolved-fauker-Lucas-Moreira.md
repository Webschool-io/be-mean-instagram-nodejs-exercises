# Node.js - Aula 05 - Exercício

**user:** [fauker](http://github.com/fauker)

**autor:** LUCAS DA SILVA MOREIRA


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
```
 lucasmoreira@faukbook  ~  nvm install 6.0.0
######################################################################## 100,0%
Checksums empty
Now using node v6.0.0
 lucasmoreira@faukbook  ~  node -v
v6.0.0
 lucasmoreira@faukbook  ~  nvm current
v6.0.0
 lucasmoreira@faukbook  ~ 
```

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:
```
npm init
```

- 1 dependência local
```
npm install --save angularjs
```
- 1 dependência local de desenvolvimento
```
npm install --save-dev mocha
```
- 1 dependência local opcional
```
npm install --save-optional restangular
```

```
cat package.json
{
  "name": "be-mean-instagram-nodejs",
  "version": "1.0.0",
  "description": "Guia de referência do conteúdo ministrado no módulo **Nodejs** do curso gratuíto [*Construa seu Instagram com MEAN*](http://dagora.net/be-mean/) da [Webschool.io](https://github.com/Webschool-io/)",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/fauker/be-mean-instagram-nodejs.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/fauker/be-mean-instagram-nodejs/issues"
  },
  "homepage": "https://github.com/fauker/be-mean-instagram-nodejs#readme",
  "dependencies": {
    "angularjs": "0.0.1"
  },
  "devDependencies": {
    "mocha": "^2.4.5"
  },
  "optionalDependencies": {
    "restangular": "^1.5.2"
  }
}
```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
```
script.js -> console.log
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dir": "node script.js"
},
npm run dir

> be-mean-instagram-nodejs@1.0.0 dir /Users/lucasmoreira/Documents/dev/projects/Be MEAN Instagram /be-mean-instagram-nodejs
> node script.js
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
```
//1
console.log(__dirname);
//2
console.log(__filename);
//3
var buffer = new Buffer('Oie');
console.log(buffer.toString());
//4
console.log(process.pid)
//5
var express = require('express');
```

## Explique como funciona e de um exemplo de `process`.
O `process` é um objeto global do `node` e pode ser acessado de qualquer
lugar. É uma instância do `EventEmitter`.

```
process.title
'node'
```

## Criar um arquivo
```
var fs = require('fs');

var write = fs.writeFileSync('file.txt', 'Oieee!!!!');

ls
createFile.js
file.txt
```

## Ler um arquivo
```
var fs = require('fs');

fs.readFile('file.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

node readFile.js
Oieee!!!!
```

## Editar conteúdo desse arquivo
```
var fs = require('fs');

fs.readFile('file.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log('conteúdo antigo: ' + data);
  var novoConteudo = 'Novo conteúdo';
  fs.writeFileSync('file.txt', novoConteudo);
});

node editFile.js
conteúdo antigo: Oieee!!!!
cat file.txt
Novo conteúdo%
```

## Renomear o arquivo
```
node renameFile.js
undefined
ls
createFile.js    readFile.js
editFile.js      renameFile.js
fileAlterado.txt
```

## Deletar arquivo
```
var fs = require('fs');

fs.unlink('fileAlterado.txt', function(err) {
  if (err) throw err;
  console.log('Sucesso ao remover o arquivo fileAlterado.txt');
});

node deleteFile.js
Sucesso ao remover o arquivo fileAlterado.txt
```

