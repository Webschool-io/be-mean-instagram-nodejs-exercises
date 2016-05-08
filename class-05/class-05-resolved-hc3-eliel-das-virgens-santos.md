# Node.js - Aula 05 - Exercício
**user:** [hc3](https://github.com/hc3)
**autor:** Eliel das Virgens
**date:** 20/03/2016


#01.Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
```
hc3@darkSide:~/Bemean/Repositorios/be-mean-instagram-nodejs-exercises/class-05$ nvm ls
       v0.11.16
         v5.6.0
->       system
stable -> 5.6 (-> v5.6.0) (default)
unstable -> 0.11 (-> v0.11.16) (default)
hc3@darkSide:~/Bemean/Repositorios/be-mean-instagram-nodejs-exercises/class-05$ nvm use 5.6
Now using node v5.6.0
hc3@darkSide:~/Bemean/Repositorios/be-mean-instagram-nodejs-exercises/class-05$ node -v
v5.6.0

```

#02.Inicie um projeto novo para essa aula, com o npm e instale, salvando no package.json
```
hc3@darkSide:~/Bemean/Repositorios/estoqueMEAN$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (estoqueMEAN) estoqueMEAN
version: (0.0.0) 0.0.1
description: sistema para controlar estoque e servicos
entry point: (index.js) app.js
test command: 
git repository: (https://github.com/hc3/estoqueMEAN.git) 
keywords: MEAN , javascript , Webschool
author: hc3
license: (BSD-2-Clause) hc3PL
About to write to /home/hc3/Bemean/Repositorios/estoqueMEAN/package.json:

{
  "name": "estoqueMEAN",
  "version": "0.0.1",
  "description": "sistema para controlar estoque e servicos",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/hc3/estoqueMEAN.git"
  },
  "keywords": [
    "MEAN",
    "javascript",
    "Webschool"
  ],
  "author": "hc3",
  "license": "hc3PL",
  "bugs": {
    "url": "https://github.com/hc3/estoqueMEAN/issues"
  }
}


Is this ok? (yes) yes

```

#03.Crie e execute um script, via npm, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
lets go make smoke
lgms.js
```
console.log('lets go make smoke!',__dirname);
```
run
```
node lgms.js
lets go make smoke! /home/hc3/Bemean/Repositorios/estoqueMEAN
```

#04.Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
__dirname mostra o diretório atual
```
console.log(__dirname)
/home/hc3/Bemean/Repositorios/estoqueMEAN
```

setTimeout()
chama um callback após um tempo
```
function shows(){
    console.log("HAHAHA");
}

setTimeout(shows, 3000);

node ex4.js
HAHAHA
```

clearTimeout()
utilizada para cronometro
```
function clareando(){  
   console.log( "HAHAHA 2 SEG STOP");  
}  

var t = setTimeout(clareando, 5000);  

clearTimeout(t);  
```

process

```
process.on('exit', (code) => {
  console.log('fim processo ', code);
});

fim processo 0
```

