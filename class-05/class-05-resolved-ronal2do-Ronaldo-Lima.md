# Node.js - Aula 05 - Exercício
**User:** ronal2do     
**Author:** Ronaldo Lima     
**Date:**  1468036239552     

##### [Exercício-01](#instale-algum-gerenciador-de-vers%C3%A3o-do-nodejs-e-instale-a-vers%C3%A3o-mais-atual-como-padr%C3%A3o-enquanto-escrevo-%C3%A9-a-vers%C3%A3o-540)

##### [Exercício-02](#inicie-um-projeto-novo-para-essa-aula-com-o-npm-e-instale-salvando-no-packagejson)

##### [Exercício-03](#crie-e-execute-um-script-via-npm-que-mostre-uma-mensagem-no-console-com-a-global-que-possui-caminho-para-o-diret%C3%B3rio-atual)

##### [Exercício-04](#cite-5-globais-do-nodejs-e-pelo-menos-1-exemplo-de-cada)

##### [Exercício-05](#explique-como-funciona-e-de-um-exemplo-de-process)

## [Parte 02 ](#nodejs---aula-05-parte-02---exerc%C3%ADcio)

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0


```
npm install -g webpack
/usr/local/bin/webpack -> /usr/local/lib/node_modules/webpack/bin/webpack.js
/usr/local/lib
└─┬ webpack@1.13.1 
  ├─┬ node-libs-browser@0.5.3
  │ └── events@1.1.1 
  ├── uglify-js@2.6.4 
  └─┬ watchpack@0.2.9
    └─┬ chokidar@1.6.0 
      ├─┬ is-binary-path@1.0.1
      │ └── binary-extensions@1.5.0 
      └─┬ readdirp@2.1.0 
        ├── minimatch@3.0.2 
        └── set-immediate-shim@1.0.1 

```

```
npm install -g webpack@2.1.0-beta.15
/usr/local/bin/webpack -> /usr/local/lib/node_modules/webpack/bin/webpack.js
- amdefine@1.0.0 node_modules/webpack/node_modules/amdefine
- etc ...
```


## Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:

```js
sh-3.2# cat package.json 
{
  "name": "aula05",
  "version": "0.0.1",
  "description": "Exercício proposto em aula",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "aula05",
    "test"
  ],
  "author": "ronal2do",
  "license": "MIT"
}

```
* Dependência local

```
npm install --save react

```
* Dependência local
```
npm install --save-dev jasmine

```
* Dependência local
```
npm install --save-optional colors
```
Package.json

```js
sh-3.2# cat package.json 
{
  "name": "aula05",
  "version": "0.0.1",
  "description": "Exercício proposto em aula",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "aula05",
    "test"
  ],
  "author": "ronal2do",
  "license": "MIT",
  "dependencies": {
    "react": "^15.2.1"
  },
  "devDependencies": {
    "mocha": "^2.5.3"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}

```




## Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

```js
sh-3.2# cat package.json 
{
  "name": "aula05",
  "version": "0.0.1",
  "description": "Exercício proposto em aula",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dir": "node dir.js"
  },
  "keywords": [
    "aula05",
    "test"
  ],
  "author": "ronal2do",
  "license": "MIT",
  "dependencies": {
    "gulp": "^3.9.1",
    "react": "^15.2.1"
  },
  "devDependencies": {
    "jasmine": "^2.4.1",
    "mocha": "^2.5.3"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}
```
```js
sh-3.2# cat dir.js 
console.log("Meu diretório atual é:" + __dirname);
```
```js
sh-3.2# npm run dir

> aula05@0.0.1 dir /Users/ronaldolima/testes/npm
> node dir.js

Meu diretório atual é:/Users/ronaldolima/testes/npm
```


## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

*__dirname*

```js
console.log(__dirname); 
```

*__filename*

```js
console.log(__filename);  
```

*Buffer*

```js
const buff = new Buffer('Sou um buffer'); 
console.log(buff.toString());
```

*setTimeout*

```js
setTimeout(()=>{
  console.log('atrasado');
}, 3000);

```

*console*

```js
console.log('Qualquer coisa');

```

## Explique como funciona e de um exemplo de `process`.

Process é um objeto global e é uma instância de `EventEmiter`.  


```js
'use strict';

process.nextTick(() => {
	console.log('Eu sou um async');
});
```

# Node.js - Aula 05 parte 02 - Exercício

## File System

### Criar um arquivo.

```js
'use strict';

const fs = require('fs');

fs.writeFile("./arquivo.txt","Salve Loko, fui gerado no Node", (err) => {
  if (err) throw err;
  console.log('File created!');
});
```

Saída:

```
sh-3.2# node create.js && ls
File created!
arquivo.txt	   create.js 
```    

### Ler um arquivo.

```js
'use strict';

const fs = require('fs');

fs.readFile('mensagem.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```

Saída:

```
sh-3.2# node read.js && ls
Salve Loko, fui gerado no Node
arquivo.txt	  create.js	  read.js
```

### Editar conteúdo desse arquivo.
```js
'use strict';

const fs = require('fs');

fs.readFile('mensagem.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const content = data + "\n Sou um novo conteúdo adicionado ao arquivo.";

    fs.writeFile('mensagem.txt', content, 'utf-8', (err) => {
        if (err) throw err;
        console.log(content);
    });
});
```

Saída:

```js
sh-3.2# node update.js && ls
Salve Loko, fui gerado no Node
Salve Loko, fui gerado no Node Editado.
arquivo.txt	create.js	read.js		update.js
```

### Deletar arquivo.
```js
'use strict';

const fs = require('fs');  

fs.unlink('mensagem.txt', (err) => {  
  if (err) throw err;
  console.log('Arquivo deletado com sucesso.');
});
```
Saída:
```
sh-3.2# node delete.js && ls
File destroyed!
create.js	delete.js	read.js		update.js
```
### Renomear o arquivo.
```js
'use strict';

const fs = require('fs');

fs.rename("./arquivo.txt", 'arquivo-renomeado.txt', (err, data) => {
  if (err) throw err;
  console.log('File renamed!');
});


```
Saída:
```
sh-3.2# node rename.js && ls
arquivo-renomeado.txt	delete.js		rename.js
create.js		read.js			update.js
```
# Desafio: Criar um servidor web de arquivos estáticos (CSS, HTML, JS).

app.js
```js
'use strict';

let http = require('http')
  , fs   = require('fs');

http.createServer((req, res)=>{
    if( req.url!=="/" ) {

        let url = "." + req.url; 
        fs.readFile(url, (err, data)=>{

            if(err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(' <link rel="stylesheet" href="app.css">');
                res.write('<div class="Container"><h1>404</h1></div>');
                res.end();
            } else {
                let type = 'text/' + url.match(/[^\.]+$/g);
                res.writeHead(200, {'Content-Type': type});
                res.write(data);
                res.end();
            }

        });

    } else {

        res.writeHead(200, {'Content-Type': 'text/html'});
        let html = fs.readFileSync('./index.html', 'utf8');
        res.write(html);
        res.end();
    }

}).listen(3000, ()=>{
    console.log('Aplicação rodando em localhost:3000')
});
```

### Acessando HTML

![HTML](https://s32.postimg.org/kuccoljrl/site.png)

### Pagina Não Encontrada.

![404](https://s32.postimg.org/je0u6ggup/404.png)
