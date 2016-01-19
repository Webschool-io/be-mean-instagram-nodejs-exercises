# Node.js - Aula 05 - Exercício
**User:** [daniofilho](https://github.com/daniofilho)

**Autor:** Dânio Filho

**Date:** 1453236237757

# Exercício npm

**1.** Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.

~~~ terminal
> npm -v
3.3.12
> node -v
v5.4.0
~~~

**2.**  Inicie um projeto novo para esse exercício, com o **npm** e instale, salvando no **package.json**:
   - 1 dependência local
   - 1 dependência local de desenvolvimento
   - 1 dependência local opcional

~~~ json
{
  "name": "daniofilho-node-exercicio-05",
  "version": "1.0.0",
  "description": "Exercício Node - Aula 05",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "ex03": "node script.js"
  },
  "keywords": [
    "node",
    "exercicio",
    "webschool"
  ],
  "author": "Dânio Filho",
  "license": "ISC",
  "dependencies": {
    "mongoose": "^4.3.6"
  },
  "devDependencies": {
    "jasmine": "^2.4.1"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}
~~~

**3.** Crie e execute um script, via **npm**, que mostre uma mensagem no console com global, que possui caminho para o diretório atual.

~~~ js
//script.js
   console.log(__dirname);
~~~

`npm run ex03`

~~~ js
//retorno
> daniofilho-node-exercicio-05@1.0.0 ex03 /Users/daniofilho/Dropbox/Estudo/Be MEAN/02 - NodeJS/aula-05/exercicio
> node script.js

/Users/daniofilho/Dropbox/Estudo/Be MEAN/02 - NodeJS/aula-05/exercicio
~~~

**4.** Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

**console**

Usado para printar mensagens no terminal.

~~~ js
console.log( 'Usando o Global console.' );
~~~

**require**

Usado para chamar módulos do Node.

~~~ js
require('http');
~~~

**setInterval**

Usado para executar uma função a cada "x" milisegundos.

~~~ js
setInterval(() => {
   console.log(Date.now());
}, 1000);
~~~

**__dirname**

Retorna o caminho do diretório atual.

~~~ js
console.log(__dirname);
~~~

**__filename**

Retorna o caminho do arquivo atual.

~~~ js
console.log(__filename);
~~~


**5.** Explique como funciona e dê um exemplo de *process*

**process** é um módulo global do Node que transmite eventos, ou seja, toda vez que queremos executar qualquer ação quando um evento ocorrer, usamos o process.

Um exemplo é mostrar uma mensagem para o usuário ao finalizar uma sessão no terminal:

~~~ js
'use strict'

//código...

process.on('SIGINIT', () => {
   console.log('saindo...');//mostra a mensagem antes de sair
   process.exit(0);//finaliza o processo
});
~~~

# Exercício FileSystem

- Criar um arquivo
- Ler um arquivo
- Editar o conteúdo desse arquivo
- renomear arquivo
- deletar arquivo

~~~ js
'use strict'

var fs = require('fs');
let now = Date.now();
let fileTxt = './' + now + '.txt';

console.log('#debug: Date.now() => ', now);

//Cria o arquivo
fs.writeFile(fileTxt, 'Date.now(): ' + now , (err) => {
   if (err) throw err;
   console.log('Arquivo criado');
},()=> {

   //Lê
   fs.readFile(fileTxt, 'utf8', (err, data) => {
      if(err) throw err;
   },()=> {

      //Edita o conteúdo
      fs.readFile(fileTxt, 'utf-8', (err, data) => {
         if (err) throw err;
         var alterado = data + "\nNovo conteúdo.";

         fs.writeFile(fileTxt, alterado, 'utf-8', function (err) {
            if (err) throw err;
         },()=> {

            //Renomeia o arquivo
            fs.rename(fileTxt,'./fuirenomeado.txt', (err, data) => {
               if(err) throw err;
            },()=> {

               //Deleta o arquivo
               fs.unlink('./fuirenomeado.txt', (err) => {
                  if(err) throw err;
               });//unlink

            });//rename

         });//writeFile

      });//readFile

   });//readFile

});//writeFile
~~~

# desafio: criar um servidor web de arquivos estáticos: .css, .html, .js e etc...

**Arquivos usados no exercício foram gerados via [Initializr](http://www.initializr.com)**

**Servidor Node**

~~~ js
var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(request, response){

   //Dependendo do tipo de arquivo, retorna um content type diferente
   var filePath = "/site" + request.url;
   if (filePath == '/site/')
     filePath = '/site/index.html';

   filePath    = __dirname + filePath;
   var extname = path.extname(filePath);
   var contentType = 'text/html';

   //Debug
   console.log( "url: ", request.url );
   console.log( "arquivo: ", filePath );
   console.log( " - - - - - ");

   //Verifica os tipos de arquivo
   switch ( extname.toLowerCase() ) {
      case '.js':
         contentType = 'text/javascript';
         break;
      case '.css':
         contentType = 'text/css';
         break;
      case '.jpg':
      case '.jpeg':
         contentType = 'image/jpeg';
         break;
      case '.png':
         contentType = 'image/png';
         break;
      case '.gif':
         contentType = 'image/gif';
         break;
   }

   //Retorna o arquivo
   fs.readFile(filePath, function(err, content) {
      if (err) {
         response.writeHead(500);
         response.end();
      } else {
         response.writeHead(200, { 'Content-Type': contentType });
         response.end(content, 'utf-8');
      }
   });

}).listen(3000, function(){
   console.log('Servidor rodando em localhost:3000');
});

~~~

**Print do navegador **

![](http://daniofilho.github.io/assets/media/desafio-servidor-web.jpg)
