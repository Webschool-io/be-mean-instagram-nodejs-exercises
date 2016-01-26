# Node.js - Aula 05 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0  

`node -v`   

Saída:  

```  
ednilson@EDNILSON-NB:~$ node -v  
v5.5.0  
```


`npm -v`  

Saída:  

```  
ednilson@EDNILSON-NB:~$ npm -v  
3.3.12  
```


## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/exercicios05$ cat package.json  
{  
  "name": "aula05",  
  "version": "1.0.0",  
  "description": "Exercícios da Aula 05 de NodeJS do curso Be MEAN",  
  "main": "index.js",  
  "scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1"  
  },  
  "keywords": [  
    "node",  
    "mean",  
    "webschool"  
  ],  
  "author": "Ednilson Amaral",  
  "license": "WTFPL"  
}  
```  

### 1 dependência local; 1 dependência local de desenvolvimento; 1 dependência local opcional  

`npm install -S gulp`  
`npm install --save-dev jasmine`  
`npm install -O moongose`  

Arquivo `package.json`:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/exercicios05$ cat package.json  
{  
  "name": "aula05",  
  "version": "1.0.0",  
  "description": "Exercícios da Aula 05 de NodeJS do curso Be MEAN",  
  "main": "index.js",  
  "scripts": {  
    "executa": "node script.js"  
  },  
  "keywords": [  
    "node",  
    "mean",  
    "webschool"  
  ],  
  "author": "Ednilson Amaral",  
  "license": "WTFPL",  
  "dependencies": {  
    "gulp": "^3.9.0"  
  },  
  "devDependencies": {  
    "jasmine": "^2.4.1"  
  },  
  "optionalDependencies": {  
    "mongoose": "^4.3.7"  
  }  
}  
```


## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/exercicios05$ npm run executa  

> aula05@1.0.0 executa /var/www/be-mean-instagram-nodejs/exercicios05  
> node script.js  

O diretório atual é listado abaixo:  
/var/www/be-mean-instagram-nodejs/exercicios05  
```  


## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.  

### `__dirname`  

Ele mostra o caminho do diretório em que o script atual se encontra. Exemplo:  

Em nosso arquivo JS temos:  

```js  
//script.js  
console.log(__dirname);  
```  

Executando, temos:  

```  
//node  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs$ node script.js  
/var/www/be-mean-instagram-nodejs  
```


### `__filename`  

Ele mostra o caminho do diretório do arquivo que está sendo executado se encontra.  

Em nosso arquivo JS temos:  

```js  
console.log(__filename);  
```  

Executando, temos:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs$ node script.js  
/var/www/be-mean-instagram-nodejs/script.js  
```


### `setTimeout()`  

É uma função global usada para chamar uma função callback após X milissegundos.  

Em nosso arquivo JS temos:  

```js  
function mostra(){
	console.log("Hello, world!");
}

setTimeout(mostra, 3000);
```  

Executando, temos:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs$ node script.js  
Hello, world, após 3 segundos!  
```


### `clearTimeout()`  

Também é uma função global, utilizada para párar o cronômetro que foi criada no `setTimeout()`.  

Em nosso arquivo JS temos:  

```js  
function printHello(){  
   console.log( "Hello, World, após 2 segundos e depois dá um CLEAR!");  
}  

var t = setTimeout(printHello, 5000);  

clearTimeout(t);  
```  



### `setInterval()`  

É uma função global utilizada para executar uma função callback repetidamente após os milissegundos declarados. Para mátar o serviço devemos declarar um `clearInterval()` na função `setTimeout()`.  

Em nosso arquivo JS temos:  

```js  
const time = setInterval(() => console.log("Hello, again and again and again!"), 1000);  

setTimeout(() => {  
  clearInterval(time);  
}, 5000);  
```  

Executando, temos:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs$ node script.js  
Hello, again and again and again!  
Hello, again and again and again!  
Hello, again and again and again!  
Hello, again and again and again!  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs$  
```


## Explique como funciona e de um exemplo de `process`.  

É um objeto global que pode ser acessado de qualquer lugar e é uma instância de **EventEmitter**, ou seja, eles emitem eventos. Ele é útil para podermos identificar algumas informações sobre o ambiente de tempo de execução de um aplicativo, os argumentos passados, o diretório atual, etc.  

No exemplo abaixo, vemos o processo *exit* do evento, que é emitido quando está prestes a sair. Assim que todos as funções dentro do processo estiverem terminadas, ele vai sair, ou seja, *exit*.  

```js  
process.on('exit', function(code) {  
  setTimeout(function() {  
    console.log("Está rodando essa bagaça!");  
  }, 0);  
  
  console.log('Sobre esse código:', code);  
});  

console.log("Código finalizado, vlw flw!");  
```


## Criar um arquivo  

Arquivo `create.js`:  

```js  
//criando o arquivo de forma async  
var fs = require('fs');  

fs.writeFile("./arquivo.txt", "Hello, world!", function(err, result){  
  if (err) throw err;  

  console.log(result);  
});  
```  

Saída no terminal:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/fs$ node create.js  
undefined  

ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/fs$ ls  
arquivo.txt  create.js  

ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/fs$ cat arquivo.txt  
Hello, world!  
```


## Ler um arquivo  

Arquivo `read.js`:  

```js  
//lendo o arquivo de forma async  
var fs = require('fs');  

fs.readFile('arquivo.txt', 'utf-8', function (err, data){  
  if (err) throw err;  

  console.log(data);  
});  
```  

Saída no terminal:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/fs$ node read.js  
Hello, world!  
```


## Editar conteúdo desse arquivo  

Arquivo `edit.js`:  

```js  
//editando o arquivo de forma async  

//primeiro, leio o arquivo; se não der erro na leitura, então acrescento uma nova linha com texto  
var fs = require('fs');  

fs.readFile('arquivo.txt', 'utf-8', function (err, data) {  
  if (err) throw err;  

  var update = data + "\nNovo conteúdo no arquivo!";  

  fs.writeFile('arquivo.txt', update, 'utf-8', function (err){  
    if (err) throw err;  

    console.log(update);  
  });  
});  
```  

Saída no terminal:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/fs$ node edit.js  
Hello, world!  
Novo conteúdo no arquivo!  
```


## Deletar arquivo  

Arquivo `delete.js`:  

```js  
//deletando o arquivo de forma async  
var fs = require('fs');  

fs.unlink('arquivo.txt', function (err){  
  if (err) throw err;  
});  
```  

Saída no terminal:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/fs$ node delete.js  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/fs$  
```


## Renomear o arquivo  

Arquivo `rename.js`:  

```js  
//renomeando arquivo de forma async
var fs = require('fs');

fs.rename('arquivo.txt', 'arquivoRenomeado.txt', function (err, data) {
  if (err) throw err;
});
```  

Saída no terminal:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/fs$ node rename.js  
/var/www/be-mean-instagram-nodejs/fs/rename.js:5  
  if (err) throw err;  
           ^  

Error: ENOENT: no such file or directory, rename 'arquivo.txt' -> 'arquivoRenomeado.txt'  
    at Error (native)  
```  

Deu esse erro aí porque o arquivo foi deletado, né! Hehehe'


## Desafio  

Arquivo `server.js`:  

```js  
var http = require('http');  
var fs = require('fs');  

http.createServer(function (request, response){  
var path = 'desafio'+ request.url;  

//verificando se ele encontra o diretorio, caso não encontre, criar  
try{  
  fs.accessSync('desafio', fs.F_OK);  
} catch (e){  
  fs.mkdirSync('desafio');  
}  

try{  
  fs.accessSync(path, fs.R_OK);  

  if(fs.lstatSync(path).isDirectory()){  
    response.writeHeader(200, {"Content-Type": "text/html"});  
    
    try{  
      var indexPath = path+'/index.html';  
      response.write(fs.readFileSync(indexPath, 'utf-8'));  
    }catch(e){  
      var dir = fs.readdirSync(path);  
      
      dir.forEach(nome =>{  
        response.write('<a href="'+ request.url +'/'+ nome +'">'+ nome +'</a><br>');  
      });  
    }  
  } else {  
    var typeFile = path.split(".");  
  
    switch(typeFile[typeFile.length-1]){  
      case 'css':  
        response.writeHead(200, {"Content-Type": "text/css"});  
        break;  
      case 'html':  
        response.writeHead(200, {"Content-Type": "text/html"});  
        break;  
      case 'jpg':  
        response.writeHead(200, {"Content-Type": "image/jpeg"});  
        break;  
      case 'gif':  
        response.writeHead(200, {"Content-Type": "image/gif"});  
        break;  
    }  
    
    response.write(fs.readFileSync(path));  
  }  
} catch(e){  
  response.writeHeader(404, {"Content-Type": "text/html;charset=utf-8"});  
  response.write('Página não encontrada');  
}  

response.end();  

}).listen(3000, function(){  
  console.log("Servidor rodando em localhost:3000");  
});  
```  

Print no Navegador:  

![Desafio](https://raw.githubusercontent.com/ednilsonamaral/be-mean-instagram-nodejs/master/img/desafio.png)