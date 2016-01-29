# Node.js - Aula 04 - Exercício
**user:** [diegolopesdev](http://www.github.com/diegolopesdev)
**autor:** Diego Lopes do Nascimento


## Exercícios de File System

## Criar um arquivo.

```
'use strict';

const fs = require('fs');

fs.writeFile('ola-mundo.txt', 'É o meu primeiro Olá Mundo.', (err) => {
   if(err) throw err;
   console.log('O arquivo foi criado com sucesso.');
});
```

## Ler um arquivo.

```
'use strict';

const fs = require('fs');

fs.readFile('ola-mundo.txt', (err, data) => {
   if(err) throw err;
   console.log(data.toString());
});
```

## Editar conteúdo desse arquivo.

```
'use strict';

const fs = require('fs');

var writeFileStream = fs.createWriteStream('./ola-mundo.txt');

writeFileStream.write('Inserindo um novo olá mundo!');
```

## Deletar arquivo.

```
'use strict';

const fs = require('fs');

fs.unlink('ola-mundo.txt', (err => {
   if(err) throw err;
   console.log('O arquivo foi deletado com sucesso.');
}));
```


## Renomear o arquivo.

```
'use strict';

const fs = require('fs');

fs.rename('./ola-mundo.txt', './ola-mundo-2.txt', (err) => {
   if(err) throw err;
   console.log('O arquivo foi renomeado com sucesso.');
});
```

## **Desafio: Criar um servidor web de arquivos estáticos: .css, .html, .js e etc...**

Challenge Accepted! Mãos na massa.

Para não poluir muito o código do meu mini servidor web de arquívos estáticos **sem usar express**, eu decidi por criar dois arquivos HTML: o **index.html** e o **404.html**, que serão nossos dois arquivos HTML padrões.

A lógica do servidor é baseada no client tentar acessar /nome-do-arquivo.extensao e, se o arquivo existir, carregará no browser e para caso não exista, retornar um error genérico 404.

**index.html**

```
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title></title>
   </head>
   <body>
      <h1>Bem vindo ao meu servidor estático!</h1>
   </body>
</html>
```

**404.html**

```
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title></title>
   </head>
   <body>
      <h1>Error 404 - Nada encontrado!</h1>
   </body>
</html>
```

**http-server.js**

```
'use strict';

const http = require('http')
    , fs   = require('fs');

http.createServer((req, res) => {
   let url = req.url;

   if(url == '/' || url == '/favicon.ico') url = 'index.html';

   const file = './' + url;

   fs.readFile(file, (err, data) => {
      if(err) {
         res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'});
         res.write( fs.readFileSync('404.html') );
      } else {
         res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
         res.write(data);
      }
      res.end();
   });

}).listen(8000, () => {
   console.log('O servidor está em localhost:8000');
});
```
