# Node.js - Aula 05 - Exercício
**user:** [felipelopesrita](https://github.com/felipelopesrita)
**autor:** Felipe José Lopes Rita


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
O gerenciado instalado foi o *n*
```js
 ➡ sudo n -V
2.1.0
 ➡ node -v
v5.6.0
```

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:
```js
 npm init
 npm i --save mongoose
 npm i --save-dev jasmine
 npm i --optional colors
 cat package.json 
   {
     "name": "ex05",
     "version": "1.0.0",
     "description": "Exercício 05",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "Felipe",
     "license": "ISC",
     "dependencies": {
       "mongoose": "^4.4.5"
     },
     "devDependencies": {
       "jasmine": "^2.4.1"
     },
     "optionalDependencies": {
       "color": "^0.11.1",
       "colors": "^1.1.2"
     }
   }
```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
```js
 ➡ npm start

> ex05@1.0.0 start /home/felipe/Documentos/myRepo/Workshop-be-mean/nodejs/exercises/ex05
> node script.js

/home/felipe/Documentos/myRepo/Workshop-be-mean/nodejs/exercises/ex05
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
*console*
```js
//Usado para exibir mensagens no console
console.log('JS é vida');
//Saída: JS é vida
```
*filename*
```js
console.log(__filename);
//Saída: /home/felipe/Documentos/myRepo/Workshop-be-mean/nodejs/exercises/ex05/script.js
```
*process*
```js
process.on('exit', (code) => {
  console.log('O processo terminou com o código: ', code);
  //Saída: O processo terminou com o código:  0
});
```
*dirname*
```js
console.log(__dirname);
//Saída: /home/felipe/Documentos/myRepo/Workshop-be-mean/nodejs/exercises/ex05
```
*setTimeOut*
```js
setTimeOut(()=>{
  console.log('Esse texto só será exibido depois de 5 segundos');
}, 5000);
```

## Explique como funciona e de um exemplo de `process`.
É a instancia global do EventEmitter, que controla todas os eventos do Node e pode ser acessado em qualquer trecho do código. Atráves dele, é possível controlar os eventos disparados durante toda a execução do código, como a detecção de erros ou o encerramento do código.
```js
process.on('uncaughtException', (err) => {
  console.log(`Algo de errado não está certo: ${err}`);
});
```

## Criar um arquivo
```js
'use strict';
var fs = require('fs');
var write = fs.writeFileSync('./ex05.txt', 'Hello World!', 'utf8');
```

## Ler um arquivo
```
'use strict';
var fs = require('fs');
fs.readFile(path, options, callback_);('./ex05.txt', 'utf8', (err, result)=>{
	if(err) throw err;
	console.log(result);
});
```

## Editar conteúdo desse arquivo
```js
'use strict';
var fs = require('fs');
fs.writeFile('./ex05.txt', 'Daqui a pouco já vai ser excluido', 'utf8', (err, result)=>{
	if(err) throw err;
	console.log(result);
});
```

## Renomear o arquivo
```js
'use strict';
var fs = require('fs');
fs.rename('./ex05.txt', './renomeia.txt', err=>{
	if(err) throw err;
	console.log('Arquivo renomeado :)');
});
```

## Deletar arquivo
```js
'use strict';
var fs = require('fs');
fs.unlink('./renomeia.txt', (err)=>{
	if(err) throw err;
	console.log('Arquivo excluído :)');
});
```

## Desafio
```js
'use strict';

var http = require('http')
  , fs   = require('fs')
  ;

http.createServer((req, res)=>{

	/* Verifica se a requisição é na origem. Se nã0 for, busca pelo arquivo */
	if( req.url!=="/" ) {

		var url = "." + req.url; 
		fs.readFile(url, (err, data)=>{

			if(err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.write('<h2 style="font-family: Arial"> 404 :( </h2>');
				res.end();
			} else {
				var type = 'text/' + url.match(/[^\.]+$/g);
				res.writeHead(200, {'Content-Type': type});
				res.write(data);
				res.end();
			}

		});
	
	} else {
		
		res.writeHead(200, {'Content-Type': 'text/html'});
		var html = fs.readFileSync('./index.html', 'utf8');
		res.write(html);
		res.end();
	}

}).listen(3000, ()=>{
	console.log('Aplicação rodando em localhost:3000')
});
```

**Servidor Web (200:OK)**
![Servidor Rodando](http://i.imgur.com/N1UQCiP.png)

**404**
![404 Status](http://i.imgur.com/sg0oeEg.png)