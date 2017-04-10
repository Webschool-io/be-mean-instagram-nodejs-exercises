# Node.js - Aula 05 - Exercício
**user:** [gkal19](https://github.com/gkal19)
**autor:** Gabriel Kalani

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
```js
npm -v
2.14.12

node -v
v4.2.6

```
## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:
```js

npm init

{
  "name": "ex5",
  "version": "2.14.12",
  "description": "Exercício da Aula 05 de Node.JS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "webschool",
    "suissa",
    "node"
  ],
  "author": "Gabriel Kalani",
  "license": "MIT"
}
```

- 1 dependência local

```js
npm i -S mongoose
```
- 1 dependência local de desenvolvimento

```js
npm install -SD jasmine
```
- 1 dependência local opcional

```js
npm install -SO color
```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

```js
// test.js
console.log("Tá tranquilo, Tá compilado!");
```

```js
// package.json
  "scripts":{
    "rodar": "node test.js"
  }
```

```js
npm run rodar

> node test.js

Tá tranquilo, Tá compilado!
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

```js
//Console serve para `printar` mensagens
console.log( 'Tá tranquilo, Tá compilado!');

//Require chama os módulos do Node.
require ('http');

//setInterval executa uma função a cada "x" milisegundos.
setInterval(() => {
   console.log(Date.now());
}, 1000);

//dirName Retorna o caminho do diretório atual.
console.log(__dirname);

//fileName Retorna o caminho do arquivo atual.
console.log(__filename);

```

## Explique como funciona e de um exemplo de `process`.
É um objeto global que manipula ou transmite eventos.

```js
// filename: process.js
'use strict';

process.on('uncaughtException', (err) => {
  console.log('Oops! Parece que tivemos um erro...');
});

```

```js
node process.js 

Oops! Parece que tivemos um erro...
```

## File System

### Criar um arquivo.
```js
// file: createFile
import fs from 'fs';

const write = fs.writeFileSync("./hello.txt","Tá tranquilo, Tá compilado!");
```

### Ler um arquivo.
```js
// file: readFile.js
import fs from 'fs';

const write = fs.writeFileSync("./hello.txt","Tá tranquilo, Tá compilado!");
});
```

### Editar conteúdo desse arquivo.
```js
// file: updateFile.js
import fs from 'fs';

fs.writeFileSync('./meusArquivos/hello-world.txt','Aprendendo NodeJS com meus professores =]');
```

### Deletar arquivo.
```js
// file: deleteFile.js

import fs from 'fs';

fs.unlink('renameFile.txt', err => {
	if(err) throw err;
	console.log('Deletado com sucesso');
});
```

### Renomear o arquivo.
```js
// file: renameFile.js
import fs from 'fs';

fs.rename('./meusArquivos/hello-world.txt', './meusArquivos/helloWorld.txt', err => {
	if (err) throw err;
})
```

## Desafio: Criar um servidor web de arquivos estáticos.
```js
import http from 'http';
import fs from 'fs';
const port = 3000;

// create directory for files.
try{

	fs.accessSync('files', fs.F_OK);

	}catch (e){

	fs.mkdirSync('files');
}


http.createServer((req, res) => {

		const path = `files${req.url}`;

		try{
			fs.accessSync(path, fs.R_OK);

			if(fs.lstatSync(path).isDirectory()){
				res.writeHeader(200, {"Content-Type": "text/html;charset=utf-8"});
				try{
				const indexPath = `${path}/index.html`;
				res.write(fs.readFileSync(indexPath, 'utf-8'));
				}catch(e){
					const files = fs.readdirSync(path);
					files.forEach(nome =>{
						res.write(`<a href="${req.url}/${nome}">${nome}</a><br>`);
					});
				}

			}else{
				const typeFile = path.split(".");
				switch(typeFile[typeFile.length-1]){
					case 'css':
					res.writeHeader(200, {"Content-Type": "text/css"});
					break;
					case 'html':
					res.writeHeader(200, {"Content-Type": "text/html;charset=utf-8"});
					break;
					case 'jpg':
					res.writeHeader(200, {"Content-Type": "image/jpeg"});
					break;
					case 'png':
					res.writeHeader(200, {"Content-Type": "image/png"});
					break;

				}
				res.write(fs.readFileSync(path));
			}
		} catch(e){
			res.writeHeader(404, {"Content-Type": "text/html;charset=utf-8"});
			res.write('Página não encontrada');
		}

		res.end();

}).listen(port, () => {
	console.log(`Server rodando em localhost: ${port}`);
});
```
<b>Acessando servidor:</b>
!['Index'](http://i.imgur.com/omsNKlF.jpg)<br>
