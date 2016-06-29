# Node.js - Aula 05 - Exercício

**user:** [sostenesfreitas](http://github.com/sostenesfreitas)

**autor:** Sóstenes Freitas de Andrade


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
```
miojo@corsair:~$ nvm --version
0.23.2
miojo@corsair:~$ node -v
v6.2.1
miojo@corsair:~$ npm -v
3.9.3
 ```

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:
 ```
npm init
```

- 1 dependência local
```
npm install --save express
```
- 1 dependência local de desenvolvimento
```
npm install --save-dev mocha
```
- 1 dependência local opcional
```
npm install --save-optional colors
```

```
╭─miojo at corsair in ~/Documentos/Projetos/DeployOnline/pokemonsapi on master✘✘✘ using
╰─± cat package.json
{
  "name": "pokemonsapi",
  "version": "1.0.0",
  "description": "API para nossos Pokemons",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  
  },
  "repository": {
    "type": "git",
    "url": "ssh://576ec17a2d5271e74e0000a7@pokemonsapi-bemeansostenes.rhcloud.com/~/git/pokemonsapi.git/"
  
  },
  "keywords": [
    "pokemons",
    "node",
    "mongodb",
    "webschool"
  
  ],
  "author": "Sostenes Freitas",
  "license": "ISC",
  "dependencies": {
    "express": "^4.14.0",
    "mongoose": "^4.5.2"
  
  },
  "devDependencies": {
    "jasmine": "^2.4.1",
    "mocha": "^2.5.3"
  
  },
  "optionalDependencies": {
    "colors": "^1.1.2",
    "restangular": "^1.5.2"
  
  }

}

```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
```
╭─miojo at corsair in ~/Documentos/Projetos/DeployOnline/pokemonsapi on master✘✘✘ using
╰─± npm start

> pokemonsapi@1.0.0 start /home/miojo/Documentos/Projetos/DeployOnline/pokemonsapi
> node script.js

Nois ta aki ta ligado /home/miojo/Documentos/Projetos/DeployOnline/pokemonsapi

```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
```
1. `__dirname` retorna o nome do diretório que o script está sendo rodado.
```js
  console.log(__dirname); // /Users/diego/Mean/nodejs/sdm-control
``` 

2. `__filename` retorna o endereço absoluto do arquivo executado.
```js
  console.log(__dirname); // /Users/diego/Mean/nodejs/sdm-control/example.js
``` 

3. `console.log()` A classe console prove um debug simples. Uma utilização á funçao log, que imprime o conteúdo que estiver entre o parênteses.
```js
  console.log("Diego"); // Diego
``` 
4. `setTimeout()` chama um callback após o tempo determinado.
```
setTimeout(shows, 3000);
```
5. clearTimeout() limpa o temporizador.
```
var t = setTimeout(clareando, 5000);  
clearTimeout(t);  
```
```
## Explique como funciona e de um exemplo de `process`.
Process é um objeto global do node que pode ser acessado de qualquer lugar. Ele é uma instancia do eventEmitter que é responsável por prover a arquitetura assíncrona ao nodejs.

```
process.on('exit', (code) => {
  console.log('fim ', code);

		});

fim  0
```

## Criar um arquivo
```
var fs = require('fs');

var write = fs.writeFileSync('miojo.txt', 'nois');

ls
create.js
miojo.txt
```

## Ler um arquivo
```
var fs = require('fs');

fs.readFile('miojo.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

node read.js
nois
```

## Editar conteúdo desse arquivo
```
var fs = require('fs');

fs.readFile('miojo.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log('conteúdo antigo: ' + data);
  var novoConteudo = 'Pokemon';
  fs.writeFileSync('miojo.txt', novoConteudo);

		});

node edit.js
conteúdo antigo: nois
cat miojo.txt
Pokemon
```

## Renomear o arquivo
```
var fs = require('fs');

fs.rename('miojo.txt', 'pokemon.txt', function(err, data) {
  if (err) throw err;
  console.log(data);

		});

node rename.js
undefined
ls
create.js    read.js
edit.js      rename.js
pokemon.txt
```

## Deletar arquivo
```
var fs = require('fs');

fs.unlink('pokemon.txt', function(err) {
  if (err) throw err;
  console.log('Sucesso ao remover o arquivo pokemon.txt');

		});

node delete.js
Sucesso ao remover o arquivo pokemon.txt
```

