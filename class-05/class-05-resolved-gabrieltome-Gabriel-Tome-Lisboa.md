# Node.js - Aula 05 - Exercício

**user:** [gabrieltome](https://github.com/gabrieltome)

**autor:** Gabriel Tomé Lisboa

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

```
MacBook-Pro-de-Gabriel-Tome:npm gabrieltome$ npm --v
3.8.3
```
```
MacBook-Pro-de-Gabriel-Tome:~ gabrieltome$ brew install node
==> Downloading https://homebrew.bintray.com/bottles/node-5.1.0.yosemite.bottle.tar.gz
######################################################################## 100,0%
==> Pouring node-5.1.0.yosemite.bottle.tar.gz

MacBook-Pro-de-Gabriel-Tome:~ gabrieltome$ node -v
v5.10.1
```



## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:

	* 1 dependência local
	* 1 dependência local de desenvolvimento
	* 1 dependência local opcional
	
	
```
{
  "name": "pokemons-api",
  "version": "0.0.1",
  "description": "API para nossos Pokemons",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "pokemons",
    "nodejs",
    "mongodb",
    "webschool"
  ],
  "author": "Gabriel Tomé",
  "license": "WTFPL",
  "dependencies": {
    "mongoose": "^4.4.16"
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
MacBook-Pro-de-Gabriel-Tome:teste-npm gabrieltome$ npm run roda

> teste-npm@1.0.0 roda /Users/gabrieltome/be-mean-instagram/be-mean-instagram-nodejs/workshop-be-mean/nodejs/teste-npm
> node scripts.js

Diretório atual: /Users/gabrieltome/be-mean-instagram/be-mean-instagram-nodejs/workshop-be-mean/nodejs/teste-npm
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

#####__filename (Diretório + arquivo)

```
console.log('Diretorio com o nome do arquivo é: '+__filename);
```

#####_dirname (Diretório)

```
console.log('Diretório: ' + __dirname);
```

##### buffer

```
var buffer = new Buffer('Hello Buffer');
console.log(buffer.toString());
```

#####setTimeout

```
setTimeout(()=>{
    console.log('Hello setTimeout');
}, 50000);
```

#####setInterval

```
setInterval(()=>{
    console.log('Hello setInterval');
}, 50000);
```

## Explique como funciona e de um exemplo de `process`.


É um objeto global, uma instância de **EventEmitter**, ou seja, emite aventos.



```
'use strict';

const http = require('http');

let server = http.createServer((request, response) => {

});

server.listen(3000, () => {
	console.log('I am on!');
});

process.on('SIGINT', () => {
	console.log('\t I am leaving...');
	process.exit(0);
});
```

##Parte 02

## 1. Criar um arquivo

```
// create a file

'use strict';

const fs = require('fs');

fs.writeFile('./index.txt', 'Arquivo criado com FS. (Texto)', 'utf-8', (err)=>{
    if (err) throw err;
    console.log('Arquivo criado com sucesso!');
});
```

## 2. Ler um arquivo

```
// lendo um arquivo

'use strict';

const fs = require('fs');

fs.readFile('./index.txt', 'utf-8', (err, result)=>{
    if (err) throw err;
    console.log(result);
});
```

## 3. Editar um arquivo

```
// Editando arquivo com FS

'use strict';

const fs = require('fs');
fs.readFile('./index.txt', 'utf-8', (err, data)=>{
    if (err) throw err;

    data = data.replace('Arquivo', 'EDITEI AQUI');

    fs.writeFile('./index.txt', data, 'utf-8', (err)=>{
        if (err) throw err;
        console.log('Arquivo modificado com sucesso!');
    });
});
```

## 4. Deletar um arquivo

```
'use strict';

const fs = require('fs');

fs.unlink('index.txt', (err)=>{
    if (err) throw err;
    console.log('Arquivo deletado com sucesso!');
})
```

## 5. Renomar um arquivo

```
const fs = require('fs');

fs.rename('./index.txt', 'index2.txt', (err)=>{
    if (err) throw err;
    console.log('Arquivo renomeado com sucesso!');
});
```

## Desafio: Criar um servidor web de arquivos estáticos: .css, .html, .js e etc...