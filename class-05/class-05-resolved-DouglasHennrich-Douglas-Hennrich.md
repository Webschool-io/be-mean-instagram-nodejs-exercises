# Node.js - Aula 05 - Exercício

**user:** [DouglasHennrich](https://github.com/DouglasHennrich)

**autor:** Douglas Hennrich


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
Escolhi baixar o [NVM](https://github.com/creationix/nvm).
`node -v v5.4.1`

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:
```js
npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (pokemon-api)
version: (1.0.0) 0.0.1
description: API para os pokemons
entry point: (index.js)
test command:
git repository:
keywords: api, pokemons, teta
author: Douglas Hennrich
license: (ISC)
About to write to /Users/Odin/Documents/Curso/NodeJS/Exercícios/pokemon-api/package.json:

{
  "name": "pokemon-api",
  "version": "0.0.1",
  "description": "API para os pokemons",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "api",
    "pokemons",
    "teta"
  ],
  "author": "Douglas Hennrich",
  "license": "ISC"
}
```

* 1 dependência local:
  `npm install --save pm2`

* 1 dependência local de desenvolvimento:
  `npm install --save--dev jasmine`

* 1 dependência local opcional:
  `npm install --save-optional colors`


**package.json atualizado**
```js
{
  "name": "pokemon-api",
  "version": "0.0.1",
  "description": "API para os pokemons",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "api",
    "pokemons",
    "teta"
  ],
  "author": "Douglas Hennrich",
  "license": "ISC",
  "dependencies": {
    "pm2": "^1.0.0"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}
```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
**whereIm.js**
```js
console.log('Where Im ? ', __dirname);
```

**package.json**
```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
  , "where": "node whereIm.js"
  }
```

**npm run**
```js
npm run where

> pokemon-api@0.0.1 where /Users/Odin/Documents/Curso/NodeJS/Exercícios/pokemon-api
> node whereIm.js

Where Im ?  /Users/Odin/Documents/Curso/NodeJS/Exercícios/pokemon-api
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
1. `__dirname` retorna o nome do diretório o qual o script está sendo rodado.
  ```js
  console.log(__dirname); // /Users/Odin/Documents/Curso/NodeJS/Exercícios/pokemon-api
  ```

2. `setTimeout` executa uma função após determinado tempo em milisegundos.
  ```js
  setTimeout(function(){
    console.log('Mostra esse log após 1 segundo');
  }, 1000);
  ```

3. `setInterval` executa a mesma função, a cada milisegundo pré-definido, até ser parado.
  ```js
  setInterval(function(){
    console.log('A cada 1 segundo, esse log vai aparecer!');
  }, 1000);
  ```

4. `require` usado para requirir um módulo ou script.
  ```js
  "use strict";

  var meuScript = require('./meu_script');
  ```

5. `clearInterval` para a execução de um intervalo.
  ```js
  var intervalo = setInterval(function(){
    console.log('Só vai ser executado uma vez, depois será eliminado.');
    clearInterval(intervalo);
  }, 1000);
  ```

## Explique como funciona e de um exemplo de `process`.
Process é uma instancia do [EventEmitter](https://nodejs.org/api/events.html#events_class_events_eventemitter) e é uma variável Global do **NodeJS**. Como ele provem de um módulo de **eventos**, ele funciona "ouvindo" eventos e disparando callbacks sobre esses eventos capturados. Embora alguns eventos são de "mão única", não precisam de um callback.

```js
process.abort();  // Fecha o processo do NodeJS em si
```

## Criar um arquivo
```js
var fs = require('fs');

fs.writeFile('./pokemons.txt', 'Pikachu, Bulbasauro, Squirtle, Charmander', 'utf-8', function(err){
  if(err) throw err;
  console.log('arquivo criado');
});
```

## Ler um arquivo
```js
var fs = require('fs');

fs.readFile('./pokemons.txt', 'utf-8', function(err, data){
  if(err) throw err;
  console.log('Pokemons: ', data); // Pokemons:  Pikachu, Bulbasauro, Squirtle, Charmander
});
```

## Editar conteúdo desse arquivo
```js
var fs = require('fs');

fs.readFile('./pokemons.txt', 'utf-8', function(err, data){
  if(err) throw err;
  console.log('Pokemons: ', data); // Pokemons:  Pikachu, Bulbasauro, Squirtle, Charmander

  fs.writeFile('./pokemons.txt', data + ', Charizard, Blastoise, Suissa', 'utf-8', function(err){
    if(err) throw err;
    console.log('Editado :D');
  });
});
```

## Deletar arquivo
```js
var fs = require('fs');

fs.unlink('./pokemons.txt', function(err){
  if(err) throw err;
  console.log('arquivo deletado!');
});
```

## Renomear o arquivo
```js
var fs = require('fs');

fs.rename('whereIm.js', 'editado.js', function(err){
  if(err) throw err;
  console.log('arquivo renomeado');
});
```

## Desafio

**app.js**
```js
'use strict';

/*
@ Requires
*/
const http = require('http')
  , fs = require('fs')
  , path = require('path')
  , porta = process.env.PORT || 3000
  ;

/*
@ Paths
*/
const html_path = __dirname + '/public';

/*
@ Server
*/
const server = http.createServer((req, res)=>{
  let file = req.url
    , contentType = 'text/html'
    ;

  if(file == '/' ) {
    file = '/hello.html';
  }

  file = html_path + file;
  let extname = path.extname(file);

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
  }

  try {
    fs.accessSync(file, fs.F_OK);

    fs.readFile(file, (err, data) =>{
      if(err){
        res.writeHead(500);
        res.end();

      }else{

        if(extname == '.css'){
          res.setHeader("Content-Type", contentType);
          res.end(data);

        }else{
          res.writeHead(200, { contentType: contentType });
          res.end(data, 'utf-8');
        }
      }
    });

  } catch (e) {
    fs.readFile(html_path + '/not-found.html', (err, data) =>{
      if(err){
        res.writeHead(500);
        res.end();

      }else{
        res.writeHead(200, { contentType: 'text/html' });
        res.end(data);
      }
    });
  }

})
  .listen(porta, ()=>{
    console.log('Static Server on localhost:' + porta);
  });
```

**Screen Shots**
![](https://github.com/DouglasHennrich/be-mean-nodejs-exercicio05/blob/master/static.png)

![](https://github.com/DouglasHennrich/be-mean-nodejs-exercicio05/blob/master/not-found.png)
