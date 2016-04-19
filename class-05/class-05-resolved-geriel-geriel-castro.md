# Node.js - Aula 05 - Exercício

**user:** [Geriel Castro](https://github.com/geriel)

**autor:** Geriel Castro


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

Baixei o [NVM](https://github.com/creationix/nvm) , peguei a referencia desse site desconhecido aqui [NomaDev](http://nomadev.com.br/node-js-o-que-%C3%A9-nvm-e-como-gerenciar-vers%C3%B5es-do-node/)

```js
node -v v5.8.0
```

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
name: (new-project)
version: (1.0.0)
description: Novo Projeto usando npm init aula5 exercicio
entry point: (index.js)
test command:
git repository:
keywords: mongodb, nodejs
author: Geriel Castro
license: (ISC)
About to write to /Applications/XAMPP/xamppfiles/htdocs/estudo/estudos/workshop-be-mean/nodejs/aula5/new-project/package.json:

{
  "name": "new-project",
  "version": "1.0.0",
  "description": "Novo Projeto usando npm init aula5 exercicio",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "mongodb",
    "nodejs"
  ],
  "author": "Geriel Castro",
  "license": "ISC"
}
```

* 1 dependência local:
  `npm i --save socket.io`

* 1 dependência local de desenvolvimento:
  `npm i --save--dev grunt`

* 1 dependência local opcional:
  `npm i colors --save-optional`


**Arquivo package.json atualizado**
```js
{
  "name": "new-project",
  "version": "1.0.0",
  "description": "Novo Projeto usando npm init aula5 exercicio",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "mongodb",
    "nodejs"
  ],
  "author": "Geriel Castro",
  "license": "ISC",
  "dependencies": {
    "socket.io": "^1.4.5"
  },
  "devDependencies": {
    "grunt": "^1.0.1"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}
```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
**app.js**
```js
console.log('Diretorio: ', __dirname);
```

**package.json**
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "getdir": "node app.js"
  }
```

**npm run**
```js
npm run getdir

> new-project@1.0.0 getdir /Applications/XAMPP/xamppfiles/htdocs/estudo/estudos/workshop-be-mean/nodejs/aula5/new-project
> node app.js

Diretorio:  /Applications/XAMPP/xamppfiles/htdocs/estudo/estudos/workshop-be-mean/nodejs/aula5/new-project

```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

1. `__dirname` retorna o diretório que o script está sendo executado.
  ```js
  console.log(__dirname);
  ```

## Explique como funciona e de um exemplo de `process`.
