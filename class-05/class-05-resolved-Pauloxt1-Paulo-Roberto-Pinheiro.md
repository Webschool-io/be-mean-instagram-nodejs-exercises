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

## File System

### Criar um arquivo.
```js
// file: createFile
const fs = require('fs');
fs.writeFile('./novoArquivo.txt', '', function(err, result){
	if(err) throw err;
	console.log(result);
});
```

```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node createFile.js
undefined
```

### Ler um arquivo.
```js
// file: readFile.js
const fs = require('fs');
fs.readFile('./novoArquivo.txt', 'utf-8', function(err, data){
	console.log(data);
});
```

```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node readFile.js 


```
### Editar conteúdo desse arquivo.
```js
// file: updateFile.js
const fs = require('fs');
fs.writeFile('./novoArquivo.txt', 'Update file', function(err, result){
    if(err) throw err;
    console.log(result);
});
```
```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node updateFile.js
undefined
```
### Deletar arquivo.
```js
// file: deleteFile.js

const fs = require('fs');
fs.unlink('renameFile.txt', function(err){
	if(err) throw err;
	console.log('Deletado com sucesso');
});
```

```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node deleteFile.js 
Deletado com sucesso
```

### Renomear o arquivo.
```js
// file: renameFile.js
const fs = require('fs');

fs.rename('./novoArquivo.txt', 'renameFile.txt', function(err, result){
	if(err) throw err;
	console.log(result);
});
```
```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node renameFile.js
undefined
```

## Desafio: Criar um servidor web de arquivos estáticos.
```js
'use strict';
'use strict';

const http = require('http'), 
fs = require('fs'), 
port = 3000;

// create directory for files.
try{

	fs.accessSync('files', fs.F_OK);

	}catch (e){

	fs.mkdirSync('files');
}


http.createServer(function(req, res){

		var path = 'files'+req.url;

		try{
			fs.accessSync(path, fs.R_OK);

			if(fs.lstatSync(path).isDirectory()){
				res.writeHeader(200, {"Content-Type": "text/html;charset=utf-8"});
				try{
				var indexPath = path+'/index.html';
				res.write(fs.readFileSync(indexPath, 'utf-8'));
				}catch(e){
					var files = fs.readdirSync(path);
					files.forEach(nome =>{
						res.write('<a href="'+req.url+'/'+nome+'">'+nome+'</a><br>');
					});
				}

			}else{
				var typeFile = path.split(".");
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
					case 'gif':
					res.writeHeader(200, {"Content-Type": "image/gif"});
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
	console.log('Servidor levantado na porta '+port);
});
```
<b>Acessando servidor levantado:</b>
!['Index'](http://i.imgur.com/nG2FrDW.png)<br>

<b>Acessando diretório:</b>
!['diretório'](http://i.imgur.com/s7AbvgR.png)<br>

<b>Acessando local inexistente:</b>
!['diretório'](http://i.imgur.com/VHAaTLQ.png)
