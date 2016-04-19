# Node.js - Aula 05 - Exercício

**User:** [matheusjkweber](https://github.com/matheusjkweber)

**Autor:** Matheus José Krumenauer Weber

**Date:** 1456875689947

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

Instalei o nvm usando esse <a href="http://www.liquidweb.com/kb/how-to-install-nvm-node-version-manager-for-node-js-on-ubuntu-12-04-lts/">tutorial</a>.

```
nvm --version
0.31.0

```

## Inicie um projeto novo para essa aula, com o npm e instale, salvando no package.json:
```
    npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (class5) pokemon-api
version: (1.0.0) 1.0.0
description: Api para Pokemons
entry point: (index.js) 
test command: 
git repository: 
keywords: pokemons, api, nodejs, be-mean
author: Matheus Jose Krumenauer Weber
license: (ISC) 
About to write to /home/matheus/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class5/package.json:

{
  "name": "pokemon-api",
  "version": "1.0.0",
  "description": "Api para Pokemons",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "pokemons",
    "api",
    "nodejs",
    "be-mean"
  ],
  "author": "Matheus Jose Krumenauer Weber",
  "license": "ISC"
}
```

Dependência Local
```
    npm install --save mongoose
```

Dependência Local
```
    npm install --save mongoose

    pokemon-api@1.0.0 /home/matheus/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class5
└─┬ mongoose@4.4.5 
  ├── async@1.5.2 
  ├── bson@0.4.21 
  ├── hooks-fixed@1.1.0 
  ├── kareem@1.0.1 
  ├─┬ mongodb@2.1.6 
  │ ├── es6-promise@3.0.2 
  │ ├─┬ mongodb-core@1.3.1 
  │ │ └─┬ require_optional@1.0.0 
  │ │   ├── resolve-from@2.0.0 
  │ │   └── semver@5.1.0 
  │ └─┬ readable-stream@1.0.31 
  │   ├── core-util-is@1.0.2 
  │   ├── inherits@2.0.1 
  │   ├── isarray@0.0.1 
  │   └── string_decoder@0.10.31 
  ├── mpath@0.2.1 
  ├── mpromise@0.5.5 
  ├─┬ mquery@1.7.0 
  │ ├── bluebird@2.9.26 
  │ ├── debug@2.2.0 
  │ └── sliced@0.0.5 
  ├── ms@0.7.1 
  ├── muri@1.1.0 
  ├── regexp-clone@0.0.1 
  └── sliced@1.0.1 

npm WARN pokemon-api@1.0.0 No repository field.

```
Dependência Local de Desenvolvimento
```
    npm i --save-dev jasmine
pokemon-api@1.0.0 /home/matheus/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class5
└─┬ jasmine@2.4.1 
  ├── exit@0.1.2 
  ├─┬ glob@3.2.11 
  │ └─┬ minimatch@0.3.0 
  │   ├── lru-cache@2.7.3 
  │   └── sigmund@1.0.1 
  └── jasmine-core@2.4.1 

npm WARN pokemon-api@1.0.0 No repository field.
```
Dependência Local Opcional
```   
    npm i color --save-optional
pokemon-api@1.0.0 /home/matheus/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class5
└─┬ color@0.11.1 
  ├── color-convert@0.5.3 
  └─┬ color-string@0.3.0 
    └── color-name@1.1.1 

npm WARN pokemon-api@1.0.0 No repository field.
matheus@Math:~/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class5$ 
```
## Crie e execute um script, via 'npm', que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
- package.json
```js
    "scripts":{
    "roda": "node script.js"
    },
```
- scripts.js
```js
    console.log("Rodei");
```
- terminal
```
    pokemon-api@1.0.0 roda /home/matheus/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class5
    > node script.js

    Rodei

```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
```
require - inclui um modulo no script.
__dirname - retorna o diretorio que o script esta sendo rodado.
__filename - retorna o arquivo que o script esta sendo rodado.
setTimeout - coloca um intervalo antes de rodar uma funcao.
setInterval - cria um loop de uma funcao.
```

```js
const http = require('http');

console.log(__dirname);

console.log(__filename);

setTimeout(function(){
    console.log("Timeout");
});

setInterval(function(){
    console.log("setInterval");
},200)
```

```
node global.js
/home/matheus/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class5
/home/matheus/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class5/global.js
Timeout
setInterval
setInterval
setInterval
setInterval
setInterval
```

## Explique como funciona e de um exemplo de process.
```js
É uma instância de EventEmitter, pode ser acessado de qualquer lugar, eles emitem eventos. 

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
setInterval(function() {
  console.log(process.memoryUsage().rss);
}, 1000);

node process.js 
15593472
15859712
16130048
16130048
```
##Criar um arquivo
```js
/**
* Sync
*/

var fs = require('fs');

var wrtie = fs.writeFileSync('./hello.txt', "Hello world!");

/**
*Async
*/

fs.writeFile("./hello2.txt", "hello again", function(err, result){
  if(err) throw err;
  console.log(result);
});

var writeStream = fs.createWriteStream('./helloStream.txt', {defaultEnconding:'utf8'});


writeStream.write('Hello');
```
##Ler um arquivo
```js
var fs = require('fs')

fs.readFile('./meusArquivos/helloworld.txt',  'utf8', function(err,data){
  if(err) throw err;
  console.log(data);
});

var dataSync = fs.readFileSync('./meusArquivos/helloworld1.txt', {encoding:'utf8'});

console.log(dataSync);
```

##Editar conteúdo desse arquivo
```js
fs.writeFile("./meusArquivos/helloworld.txt", "hello edited", function(err, result){
  if(err) throw err;
  console.log(result);
});
```

##Deletar arquivo
```js
fs.unlink('./meusArquivos/helloworld.txt', function(err,data){
  if(err) throw err;
  console.log("Deletado.");
});
```

##Renomear o arquivo
```js
var fs = require('fs')

fs.rename('./eufuicriadocomnode/', './eufuirenomeadocomnode', function(err){
  if(err) throw err;
});
```

#Desafio: Criar um servidor web de arquivos estáticos: .css, .html, .js e etc...
Index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN - Instagram</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <script src="script.js"></script>
</head>
<body>
  <h1>Be MEAN - Instagram - html </h1>
</body>
</html>
```
style.css
```

  h1{
    color:green;
  }

```
script.js
```
alert("Funcionou!");
```
server.js
```js
var http = require('http')
, fs = require('fs')
, index=fs.readFileSync('index.html')
, style = fs.readFileSync('style.css')
, scripts = fs.readFileSync('script.js');

http.createServer(function(request,response){
  console.log(request.url);
  if (request.url == "/" || request.url=="/index.html"){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(index);
  }else if(request.url == "/style.css"){
    response.writeHead(200,{'Content-Type':'text/css'});
    response.end(style);
  }else if(request.url == "/script.js"){
    response.writeHead(200,{'Content-Type':'text/javascript'});
    response.end(scripts);
  }else{
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write('<h1>404 - O arquivo não existe</h1>');
  }

  
}).listen(3000,function(){
  console.log('Servidor rodando em localhost:3000');
})
```
Resultado:

<img src="https://raw.githubusercontent.com/matheusjkweber/aux/master/Screenshot.from.2016-03-02.21.15.39.png">
