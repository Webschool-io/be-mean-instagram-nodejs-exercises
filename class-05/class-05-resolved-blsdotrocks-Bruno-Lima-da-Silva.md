# Node.js - Aula 05 - Exercício

autor: Bruno Lima da Silva

## 1. Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
npm i n -g || npm i nvm -g
node -v
v6.9.1

## 2. Inicie um projeto novo para essa aula, com o npm e instale, salvando no package.json:
mkdir npm
cd npm
npm init
- 1 dependência local
npm i -S react
- 1 dependência local de desenvolvimento
npm i -D webpack
- 1 dependência local opcional
npm i -O colors
```js
cat package.json
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^15.3.2"
  },
  "devDependencies": {
    "webpack": "^1.13.3"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}
```

## 3. Crie e execute um script, via npm, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
mkdir scrtip.js
```js
'use strict';
console.log (__dirname);
```
e no package.json
```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node script.js"
},
```

## 4. Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
- dirname: O nome do diretório no qual o script em execução reside.
```js
console.log (__dirname);
> node script.js

/home/fsociety/be-mean-instagram/nodeJS/npm
```
- filename: O nome do arquivo do código que está sendo executado. Esse é o caminho absoluto resolvido desse arquivo de código.
```js
console.log (__filename);
> node script.js

/home/fsociety/be-mean-instagram/nodeJS/npm/script.js
```
- module: Uma referência ao módulo atual.
```js
console.log(module);
> node script.js

Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/home/fsociety/be-mean-instagram/nodeJS/npm/script.js',
  loaded: false,
  children: [],
  paths:
   [ '/home/fsociety/be-mean-instagram/nodeJS/npm/node_modules',
     '/home/fsociety/be-mean-instagram/nodeJS/node_modules',
     '/home/fsociety/be-mean-instagram/node_modules',
     '/home/fsociety/node_modules',
     '/home/node_modules',
     '/node_modules' ] }
```
- buffer: usado para manipular dados binários
```js
var buff = new Buffer('Hello World!');
console.log(buff.toString());
```
- set time out: acrescenta um atraso na execução da função
```js
setTimeout(() => {
    console.log("Após um segundo é executado");
}, 1000);
```
## 5. Explique como funciona e de um exemplo de process.
- Process é um objeto do NodeJS que fornece informações sobre o controle atual de processos do NodeJS. É uma instância de EventEmitter, ou seja, um emissor de eventos.
```js
// 'exit' é emitido quando um processo do NodeJS está a ser encerrado.
process.on ('exit', (code) => {
    setTimeout (() => {
        console.log('Estou saindo')
    }, 0)
})
```
