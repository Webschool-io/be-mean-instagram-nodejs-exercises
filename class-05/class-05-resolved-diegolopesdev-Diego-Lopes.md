# Node.js - Aula 05 - Exercício

**user:** [diegolopesdev](http://github.com.br/diegolopesdev)

**autor:** Diego Lopes


## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

Imagine que estou no Terminal e que vou instalar o gerenciador de versão do NodeJS chamado *n*.

```
sudo npm install n -g

```
Após instalar o *n*, eu escolho a versão que desejo instalar escrevendo a seguinte linha de código:

```
sudo n 5.5.0
```
ou, se houver necessidade de instalar a última versão:

```
sudo n latest
```

Eu estou usando o comando *sudo* porque estou no sistema operacional ubuntu, que é baseado no Debian, e que por padrão vem instalado. No Debian, por exemplo, o *sudo* não vem instalado por padrão, não havendo necessidade de usar a palavra *sudo*.

## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:

Terminal:

```
sudo mkdir maciota
cd maciota
npm init
```

Arquivo *package.json* sem dependências:

```js
{
  "name": "maciota",
  "version": "0.0.2",
  "description": "Gerador da palavra Maciota",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "maciota",
    "maciota",
    "com",
    "node"
  ],
  "author": "Diego Lopes",
  "license": "MIT"
}
```
No Terminal, eu escreverei o seguinte comando para instalar a dependência e salvar diretamente no meu arquivo *package.json*:

```
sudo npm install mongoose --save
```
Arquivo *package.json* com dependências instaladas.

```js
{
  "name": "maciota",
  "version": "0.0.2",
  "description": "Gerador da palavra Maciota",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "maciota",
    "maciota",
    "com",
    "node"
  ],
  "author": "Diego Lopes",
  "license": "MIT",
  "dependencies": {
    "mongoose": "^4.4.1"
  }
}

```

## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

No arquivo *dir.js*, escreverei o seguinte comando:

```js
console.log("Meu diretório atual é:" + __dirname);
```

*package.json*

```js
{
  "name": "maciota",
  "version": "0.0.2",
  "description": "Gerador da palavra Maciota",
  "main": "app.js",
  "scripts": {
    "start": "node dir"
  },
  "keywords": [
    "maciota",
    "maciota",
    "com",
    "node"
  ],
  "author": "Diego Lopes",
  "license": "MIT",
  "dependencies": {
    "mongoose": "^4.4.1"
  }
}
```

```
npm start
Meu diretório atual é:/home/diego/Estudos/NodeJS/05/maciota
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

*__dirname*

```js
console.log('Meu diretório atual é:' + __dirname);
```

*__filename*

```js
console.log('Meu arquivo se chama:' + __filename);

```

*process*

```js
process.on('exit', (code) => {
      console.log('O processo terminou com o código: ', code);
});
```

*module*

```js
module.exports = (base, altura) => {
   return {
      area: function(){
         return (base * altura)/2;
      }
   }
}

```

*setTimeout*

```js
setTimeout(() => {
   console.log('Eu executei depois de 2 secundos. rs')
}, 2000)
```

## Explique como funciona e de um exemplo de `process`.

*Process* é um objeto global que é uma instância de *EventEmitter* responsável por manipular e transmitir eventos no Node. Com ele eu posso controlar quando um evento de saída *exit* acontece ou até mesmo quando ocorre alguma exceção *uncaughtException*.
Por ser um objeto global, não é necessário usar o *require*.

```js
var fs = require('fs');

process.on('beforeExit', () => {
      console.log('Antes de fechar o processo, vamos ler o nosso arquivo package.json');

      fs.open('package.json', (err, data) => {
         if(err) throw err;
         console.log(data);
      });
});
```
