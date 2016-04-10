# Node.js - Aula 05 - Exercício

**User:** [Cerezini](https://github.com/Cerezini)

**Autor:** Mateus Cerezini Gomes


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

```shell
> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

> nvm install node

> node -v
v5.9.0

> npm -v
3.7.3
```

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:

- 1 dependência local
- 1 dependência local de desenvolvimento
- 1 dependência local opcional

```shell
> mkdir aula5
> cd aula5
> npm init

> npm i -S moment
> npm i -D react
> npm i -O q

> cat package.json

{
  "name": "aula5",
  "version": "0.0.1",
  "description": "Projeto teste aula 5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "aula5",
    "teste"
  ],
  "author": "Cerezini",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.12.0"
  },
  "devDependencies": {
    "react": "^0.14.7"
  },
  "optionalDependencies": {
    "q": "^1.4.1"
  }
}
```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

```shell
> echo "console.log(__dirname);" > script.js
```

Modifica o arquivo packages.json

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dir": "node script.js"
}
```

```shell
> npm run dir
~/Documentos/Curso/testes/nodejs/aula5
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

1. console
2. \__dirname
3. \__filename
4. process
5. require

```js
//1
console.log('potato bread');

//2 e 3
console.log(__dirname);
console.log(__filename);

//4
console.log('Program PID: ', process.pid);

//5
const http = require('http');
```

## Explique como funciona e de um exemplo de `process`.

Process é um objeto global que contém informações referentes ao processo nodejs executando no SO.

```js
//Mostrar PID
>console.log('Program PID: ', process.pid);
Program PID:  5039

//Mostrar caminho do executável node
>console.log('Executable path: ', process.execPath);
Executable path:  ~/.nvm/versions/node/v5.9.0/bin/node

//Finalizar processo
>process.exit(0);
```

## Criar um arquivo

```js

const fs = require('fs');

fs.writeFile('potato.txt', 'Um pão de batata, calzone, essas coisas.', 'utf8', (err) => {
  if (err) throw err;
  console.log('Arquivo criado!');
});

Arquivo criado!
```

## Ler um arquivo

```js
fs.readFile('potato.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

Um pão de batata, calzone, essas coisas.
```

## Editar conteúdo desse arquivo

```js
fs.readFile('potato.txt', 'utf8', (err, data) => {
  if (err) throw err;

  data += ' O meu pai? Romero Brito? Guarapari? Búzios, minha arte?'

  fs.writeFile('potato.txt', data, 'utf8', (err) => {
    if (err) throw err;
    console.log('Arquivo editado!');
  });
});

Arquivo editado!
```

## Deletar arquivo

```js
fs.unlink('calzone.txt', (err) => {
  if (err) throw err;
  console.log('Arquivo deletado!');
});

Arquivo deletado!
```

## Renomear o arquivo

```js
fs.rename('potato.txt', 'calzone.txt', (err) => {
  if (err) throw err;
  console.log('Arquivo renomeado!');
});

Arquivo renomeado!
```

## Desafio: Criar um servidor web de arquivos estáticos: .css, .html, .js e etc... UTILIZANDO SOMENTE `fs` E `http`

```js
'use strict';

const http = require('http'),
	fs = require('fs'),
	path = require('path');

http.createServer(function(req, res){
	let file = path.basename(req.url),
		ext = path.extname(file),
		contentType = '';

	switch (ext) {
		case 'html':
			contentType = 'text/html';
			break;
		case 'css':
			contentType = 'text/css';
			break;
		case 'js':
			contentType = 'application/javascript';
			break;
		case 'png':
			contentType = 'image/jpeg';
			break;
		default:
			contentType = 'text/html';
			break;
	}

	fs.readFile(file, 'utf8', (err, data) => {
		if (err) {
			res.writeHead(500, {"Content-Type": "text/html"});
			res.end(err.toString());
		} else {
			res.writeHead(200, {"Content-Type": contentType});
			res.end(data);
		}
	});

}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});
```
