# Node.js - Aula 05 - Exercício

**user:** [FranciscoValerio](https://github.com/FranciscoValerio)

**autor:** Francisco Henrique Ruiz Valério

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

```
PS C:\Users\franc> npm -v
3.3.12
PS C:\Users\franc> node -v
v5.4.1
```

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:

   * 1 dependência local
   * 1 dependência local de desenvolvimento
   * 1 dependência local opcional

```
PS C:\Be-Mean\NodeJS\arquivos-api> npm i --save mongoose
PS C:\Be-Mean\NodeJS\arquivos-api> npm i --save-dev colors
PS C:\Be-Mean\NodeJS\arquivos-api> npm i --save-optional colors
PS C:\Be-Mean\NodeJS\arquivos-api> cat .\package.json
{
   "name": "arquivos-api",
   "version": "0.0.1",
   "description": "API que fornece arquivos",
   "main": "index.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [
    "arquivos",
    "css",
    "html",
    "js"
   ],
   "author": "FranciscoValerio",
   "license": "WTFPL",
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
```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

```
//package.json
"scripts": {
   "roda": "node script.js"
}

//Arquivo script.js
console.log( __dirname );

PS C:\Be-Mean\NodeJS\arquivos-api> npm run roda
> arquivos-api@0.0.1 roda C:\Be-Mean\NodeJS\arquivos-api
> node script.js
C:\Be-Mean\NodeJS\arquivos-api
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

**require:** Usamos quando queremos chamar um módulos do NodeJS.
```JS
require('http');
```

**__dirname:** Usada para obter o caminho do diretório atual.
```JS
console.log(__dirname);
```

**__filename:** Usada quando queremos obter o caminho do arquivo atual.
```JS
console.log(__filename);
```

**Buffer:** Usada para inserir algo no buffer

```JS
var buffer = new Buffer('I am Buffer!');
console.log(buffer.toString());
```

**process.pid:** Usado quando queremos obter o id do processo sendo executado na máquina.
```JS
console.log(process.pid);
```

## Explique como funciona e de um exemplo de `process`.

O objeto process é um objeto global e pode ser acessado de qualquer lugar. É uma instância de EventEmitter. Normalmente é utilizado quando queremos executar algo quando algum evento ocorrer.

```JS
//Um exemplo que registra cada rejeição não processada para o console

process.on('unhandledRejection',  (reason, p)  =>  {
   console.log("Rejeição Unhandled em: Promise", p,  "razão:", reason);     
});

// e aqui um exemplo que irá chamar o unhandledRejection
somePromise.then((response) => {
  return reportToUser(JSON.parse(response));
});
```


##Desafio: Criar um servidor web de arquivos estáticos: .css, .html, .js e etc...

Os arquivos podem ser encontrados aqui:
(https://github.com/FranciscoValerio/server-files)

**servidor.js:**
```
'use strict';

const http = require( 'http' ),
fs   = require('fs'),
port = 3000;

try{
   fs.accessSync( 'arquivos', fs.F_OK );
}catch (e){
   fs.mkdirSync( 'arquivos' );
}

http.createServer( function( req, res ){

   var path = 'arquivos' + req.url;

   try{
      fs.accessSync( path, fs.R_OK );

      if( fs.lstatSync( path ).isDirectory() ){
         res.writeHeader( 200, { "Content-Type": "text/html;charset=utf-8" } );
         try{
            var indexPath = path + '/index.html';
            res.write( fs.readFileSync( indexPath, 'utf-8' ) );
         }catch(e){
            var files = fs.readdirSync(path);
            files.forEach(file =>{
               res.write('<a href="' + req.url + '/' + file + '">' + file + '</a><br>' );
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
      res.write( fs.readFileSync( 'arquivos/not_found.html' ) );
   }

   res.end();

}).listen(port, () => {
    console.log('Waiting in port: ' + port );
});
```

**not_found.js:**
```HTML
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Servidor de arquivos - Desafio -</title>
      <style>

         body {
            background: url('/img/beer.jpg');
            background-repeat: no-repeat;
            background-size: 100%;
         }

         h1 {
            font-size: 140px;
         }

         h2 {
            font-size: 40px;
         }
      </style>
   </head>
   <body>
      <h1>404 :(</h1>
      <h2>
         Beer not found...
         <br>
         Ops...
         <br>
         Page not found...
      </h2>

   </body>
</html>
```

**Rodando:**

**Home:**
!['Home'](https://github.com/FranciscoValerio/server-files/blob/master/arquivos/img/home.jpg)<br>

**Arquivos JS:**
!['ArquivosJS'](https://github.com/FranciscoValerio/server-files/blob/master/arquivos/img/files.jpg)<br>

**404 - Not found:**
!['404'](https://github.com/FranciscoValerio/server-files/blob/master/arquivos/img/not-found.jpg)
