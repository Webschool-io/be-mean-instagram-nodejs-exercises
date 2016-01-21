# Node.js - Aula 05 - Exercício
**user:** [Pauloxt1](https://github.com/Pauloxt1)<br>
**autor:** Paulo Roberto

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
```shell
paulo@Paulo:~/workshop-be-mean/nodejs/mongoose$ sudo npm install -g n
/usr/local/bin/n -> /usr/local/lib/node_modules/n/bin/n
/usr/local/lib
└── n@2.1.0 
```
```shell
paulo@Paulo:~/workshop-be-mean/nodejs/mongoose$ n
    ο node/5.4.1
```
## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:
```shell
paulo@Paulo:~/workshop-be-mean/nodejs/aula5/exerc$ npm init
About to write to /home/paulo/workshop-be-mean/nodejs/aula5/exerc/package.json:

{
  "name": "exercicio5",
  "version": "1.0.0",
  "description": "Exercicio da aula 5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "webschool",
    "exercicio",
    "aula5"
  ],
  "author": "Paulo Roberto",
  "license": "MIT"
}
```

- 1 dependência local
```shell
paulo@Paulo:~/workshop-be-mean/nodejs/aula5/exerc$ npm i -S mongoose
```
- 1 dependência local de desenvolvimento
```shell
paulo@Paulo:~/workshop-be-mean/nodejs/aula5/exerc$ npm install -SD n
```
- 1 dependência local opcional
```shell
npm install -SO color
```
## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
```js
// filename: show_directory.js
console.log(__dirname);
```

```js
// package.json
  "scripts":{
    "ondeuto": "node show_directory.js"
  }
```

```shell
paulo@Paulo:~/workshop-be-mean/nodejs/aula5/exerc$ npm run ondeuto

> exercicio5@1.0.0 ondeuto /home/paulo/workshop-be-mean/nodejs/aula5/exerc
> node show_directory.js

/home/paulo/workshop-be-mean/nodejs/aula5/exerc
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

```js
console.log(__dirname);
```

```js
console.log(__filename);
```

```js
'use strict';
var interval = setInterval(()=>{
	console.log('Batata');
}, 2000);
```

```js
clearInterval(interval);
```


```js
setTimeout(()=>{
	console.log('zeus');
}, 1000);
```

## Explique como funciona e de um exemplo de `process`.
É um objeto global que manipula eventos.
```js
// filename: process.js
'use strict';

process.on('uncaughtException', (err) => {
  console.log('Ocorreu um erro desconhecido');
});

naoExisteFunc();
```

```shell
paulo@Paulo:~/workshop-be-mean/nodejs/aula5/exerc$ node process.js 
Ocorreu um erro desconhecido
```
