# Node.js - Aula 04 - Exercício
**user:** [Pauloxt1](https://github.com/Pauloxt1)<br>
**autor:** Paulo Roberto


## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.  
```js
// file: name.js
function setName(name, callback){
	callback(name);
}

setName('paulo', function(name){
	console.log(name);
});
```
```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node name.js
paulo
```
## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
```js
// file: sum.js
function sum(num1, num2, callback){
	if(typeof num1 == "number" && typeof num2 == "number"){
		var resultado = num1+num2;
		callback(null, resultado);
	} else {
		callback("Passe um número por favor", null);
	}
}

sum(2,2,function(err, result){
	if(err){
		console.log(err);
	}else{
		console.log(result);
	}
});
```

```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node sum.js 
4
```

## Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.  
```js
// file: media.js
function media(num1, num2, callback){
	if(typeof num1 == "number" && typeof num2 == "number"){
		var resultado = (num1+num2)/2;
		callback(null, resultado);
	} else {
		callback("Passe um número por favor", null);
	}
}

media(2,2,function(err, result){
	if(err){
		console.log(err);
	}else{
		console.log(result);
	}
});
```
```js
paulo@Paulo:~/workshop-be-mean/nodejs/4$ node media.js 
2
```
## Explicar a definição de continuação de uma função. 
Uma função que recebe como parâmetro outra função<b>(callback)</b>, e executa essa função recebida passando para ela
seu resultado como parâmetro.

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
