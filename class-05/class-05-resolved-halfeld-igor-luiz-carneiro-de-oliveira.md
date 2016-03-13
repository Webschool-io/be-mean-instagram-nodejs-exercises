# NodeJS - Aula 05 - Exercício
**Autor**: Igor luíz  
**Github**: [Halfeld](https://github.com/Halfeld)  
**Data**: 1457856832082

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquando escrevo é a versão 5.4.0.

#### Instalando `nvm`
```sh
➜  ~ curl https://raw.githubusercontent.com/creationix/nvm/v0.23.2/install.sh | bash  
```

#### Instalando versão mais atual do node
```sh
[root@fedora Igor]# nvm install 5.7.1
######################################################################## 100.0%
Checksums empty
Now using node v5.7.1
```

## Inicie um projeto novo para essa aula com `npm` e instale, salvando no package.json.
- 1 Dependência local
```sh
➜  ~ npm install --save commander
```
- 1 Dependência local de desenvolvimento
```sh
➜  ~ npm install --save-dev chai
```
- 1 Dependência local opcional
```sh
➜  ~ npm install --optional chalk
```


## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

#### Package.json
```js
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "dirname.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dirname": "node dirname.js"
  },
  "author": "",
  "license": "ISC"
}

```

#### Arquivo dirname.js
```js
console.log(__dirname);
```

#### Saída no console
```sh
(λ.npm.git:(master) ✗) ➜  npm run dirname

> npm@1.0.0 dirname /home/Igor/Documents/Be MEAN/NodeJS/Exercícios/be-mean-instagram-nodejs/exercises/practice/class-5/npm
> node dirname.js

/home/Igor/Documents/Be MEAN/NodeJS/Exercícios/be-mean-instagram-nodejs/exercises/practice/class-5/npm
```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

#### Atraza a execução da função no tempo escolhido
```js
setTimeout(function() {
    console.log('Um teste com setTimeout');
}, 1000);
```

#### Retira o atraza do setTimeout
```js
clearTimeout(myfunction); 
```

#### Retorna o diretório atual
```js
console.log(__dirname);
```

#### Chama a função de sempre que passar o tempo definido
```js
setInterval(function() {
    console.log('Um teste com setInterval');
}, 1000);
```

#### Retira o intervalo de  setInterval
```js
clearInterval(myfunction);
```
## Explique como funciona e de um exemplo de `process`.

É um instancia de EventEmitter, geralmente usamos para capturar eventos disparando callbacks ou não

```js
process.platform // Retorna a plataforma usada 'darwin', 'freebsd', 'linux', 'sunos' ou 'win32'
```


---
---
---

## Criar um arquivo
```js
var fs = require('fs');

fs.writeFile('./content.txt', 'Hello people', 'utf-8', function(err){
  if(err) throw err;
  console.log('OK');
});
```

## Ler um arquivo
```js
var fs = require('fs');

fs.readFile('./content.txt', 'utf-8', function(err, data){
  if(err) throw err;
  console.log(data);
});
```

## Editar conteúdo desse arquivo
```js

var fs = require('fs');

fs.readFile('./content.txt', 'utf-8', function(err, data){
  if(err) throw err;
  console.log('content: ', data); // Hello people

  fs.writeFile('./pokemons.txt', 'Hello gays', {encoding: 'utf8', flag: 'a+'}, function(err){
    if(err) throw err;
    console.log('OK');
  });
});
```

## Deletar arquivo
```js
var fs = require('fs');

fs.unlink('./trash.txt', function(err){
  if(err) throw err;
  console.log('OK');
});
```

## Renomear arquivo
```js
var fs = require('fs');

fs.rename('old.js', 'new.js', function(err){
  if(err) throw err;
  console.log('OK');
});

```

## Desafio: Criar um servidor web de arquivos estáticos: .css, .html, .js e etc...

#### Codigo

```js

'use strict';


const http = require('http'),
      path = require('path'),
      fs   = require('fs');


const index = fs.readFileSync(path.join(__dirname, 'index.html'));



const server = http.createServer((req, res) => {

    let _path = req.url,
        _contentType;


    if(_path == '/') {
        _path = '/index.html';
    }

    fs.readFile(__dirname + _path, (err, data) => {
        if(err) throw err;

        switch(path.extname(_path)) {
            case '.js':
                _contentType = "text/javascript";
                break;
            case '.css':
                _contentType = "text/css";
                break;
            case '.png':
                _contentType = "text/png";
                break;
            default:
                _contentType = "text/html";
        }
        res.writeHead(200, {"Content-Type": _contentType});
        res.end(data);
    });

    console.log(req.url);

});


server.listen(4000, () => console.log('Servidor no ar!'));
```


#### screen shots

![index](https://raw.githubusercontent.com/Halfeld/be-mean-instagram-nodejs/master/exercises/theory/files/index.png)  
---
![css](https://raw.githubusercontent.com/Halfeld/be-mean-instagram-nodejs/master/exercises/theory/files/css.png)  
---
![javascript](https://raw.githubusercontent.com/Halfeld/be-mean-instagram-nodejs/master/exercises/theory/files/js.png)  
---
![not found](https://raw.githubusercontent.com/Halfeld/be-mean-instagram-nodejs/master/exercises/theory/files/not-found.png)  