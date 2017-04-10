# Node.js - Aula 05 - Exercício

**user:** [fernandobd42](https://github.com/fernandobd42)
**autor:** Fernando Lucas

## 1 - Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0
**Instalando NVM**
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

```

**Instalando versão atual do Node**
```
➜  Node_BeMean nvm install node
v7.0.0 is already installed.
Now using node v7.0.0
```

## 2 - Inicie um projeto novo para essa aula, com o `npm` e instale, salvando no `package.json`:
```
➜  Node_BeMean mkdir New_Project
➜  Node_BeMean cd New_Project
➜  New_Project npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (New_Project) New_Project
Sorry, name can no longer contain capital letters.
name: (New_Project) new_project
version: (1.0.0)
description: project nodejs-bemean
entry point: (index.js)
test command:
git repository:
keywords:
author: Fernando Lucas
license: (ISC)
About to write to /home/fernando/Documentos/Node_BeMean/New_Project/package.json:

{
  "name": "new_project",
  "version": "1.0.0",
  "description": "project nodejs-bemean",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Fernando Lucas",
  "license": "ISC"
}


Is this ok? (yes)



➜  New_Project ls
package.json

```

**Dependência Local**
```
npm i --save bower
```

**Dependência de desenvolvimento**
```
npm i --save-dev gulp
```

**Dependência opcional**
```
npm i --save-optional colors
```

**package.json**
```
➜  New_Project cat package.json
{
  "name": "new_project",
  "version": "1.0.0",
  "description": "project nodejs-bemean",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Fernando Lucas",
  "license": "ISC",
  "dependencies": {
    "bower": "^1.8.0"
  },
  "devDependencies": {
    "gulp": "^3.9.1"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}
```

##  - Crie e execute um script, via `npm`, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.
**Cógido arquiro dir.js**
```
console.log(__dirname);
```

**Código package.json**
```
{
  "name": "new_project",
  "version": "1.0.0",
  "description": "project nodejs-bemean",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dirpath": "node dir.js"
  },
  "author": "Fernando Lucas",
  "license": "ISC",
  "dependencies": {
    "bower": "^1.8.0"
  },
  "devDependencies": {
    "gulp": "^3.9.1"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}
```

**Código para mostrar o caminho**
```
➜  New_Project npm run-script dirpath

> new_project@1.0.0 dirname /home/fernando/Documentos/Node_BeMean/New_Project
> node dir.js

/home/fernando/Documentos/Node_BeMean/New_Project

```

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.
**console -> exibe mensagem no console**
```
console.log('Printando');
```

**__filename -> exibe o caminho do arquivo que está sendo executado**
```
console.log(__filename)
```

**__dirname -> exibe o caminho do diretório em que o arquivo está inserido**
```
console.log(__dirname)
```

**require() -> importa um módulo do node**
```
require('http')
```

**setTimeout() -> define uma latência para exibir/executar determinada instrução**
```
setTimeout(() =>  {
  console.log('Latência de 5 segundos para exibir esta mensagem');
  }, 5000);
```

## Explique como funciona e de um exemplo de `process`.
  Process é uma instância do EventEmitter, é uma variável global que emite eventos.

**exibe caminho do node**  
```
console.log(process.execPath);
```

**exibe o diretorio atual**
```
console.log(process.cwd());
```

## Criar um arquivo
```
const fs = require('fs');

fs.writeFile('./file.txt','Criando arquivo', (err) => {
  if (err) throw err;
  console.log('Arquivo Criado!');
})
```

## Ler um arquivo
```
const fs = require('fs');

fs.readFile('./file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```

## Editar conteúdo desse arquivo
```
const fs = require('fs');

fs.readFile('./file.txt', (err, data) => {
  data += ' e Editando';
fs.writeFile('./file.txt', data, (err) => {
    if (err) throw err;
  })
console.log(data.toString());
});
```

## Renomear o arquivo
```
const fs = require('fs');

fs.rename('./file.txt', './file_renamed.txt', (err, data) => {
  if (err) throw err;
  console.log('Arquivo renomeado com sucesso.');
});
```

## Deletar arquivo
```
const fs = require('fs');  

fs.unlink('./file_renamed.txt', (err) => {  
  if (err) throw err;
  console.log('Arquivo deletado com sucesso.');
});
```

