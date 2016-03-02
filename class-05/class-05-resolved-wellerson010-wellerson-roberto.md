# NodeJS - Aula 05 - Exercício
autor: Wellerson Roberto

# 1) Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão.

Antes do gerenciados de versão:

```
node -v
v5.4.1
```

Versão mais nova no momento que faço esse exercício: 5.6.0

Usei o versionador **nvm-windows**.

Instalando a última versão:
```
nvm install latest
```


Definindo o Node.js em uso:
```
C:\Users\Wellerson>nvm use 5.6.0
Now using node v5.6.0 (64-bit)

C:\Users\Wellerson>node -v
v5.6.0
```

# 2) Inicie um projeto novo pra esse aula, com o **npm** e instale, salvando no **package.json** 1 dependência local, 1 dependência local de desenvolvimento e 1 dependência local opcional:

Iniciando o package.json:
```
npm init
```

Instalando dependência local:
```
npm i consign --save
```

Instalando dependência local de desenvolvimento:
```
npm i mocha --save-dev
```

Instalando dependência opcional:
```
npm i colors --save-optional
```

Package.json ao final:
```
{
  "name": "exercicio",
  "version": "1.0.0",
  "description": "Fazendo exercicio do curso Be Mean",
  "main": "index.js",
  "scripts": {
    "test": "]"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "consign": "^0.1.2"
  },
  "devDependencies": {
    "mocha": "^2.4.5"
  },
  "optionalDependencies": {
    "colors": "^1.1.2"
  }
}
```

# 3) Crie e execute um script, via **npm**, que mostre uma mensagem no console com a global que possui caminho para o diretório atual:

Script:

```
console.log(__dirname);
```

Package.json:

```
...
 "scripts": {
    "roda": "node global.js"
  }
...
```

No console:
```
npm run roda

> exercicio@1.0.0 roda D:\Developer\Curso Mean\workshop-be-mean\nodejs\exercicio rapido
> node global.js

D:\Developer\Curso Mean\workshop-be-mean\nodejs\exercicio rapido
```

# 4) Cite 5 globais do Node.js e pelo menos um exemplo de cada:

**console**

Módulo que provê um console pra depurar.

```
console.log('Testando')
```

**__filename**

Mostra o caminho e o nome do arquivo do script que está sendo executado.

```
console.log(__filename)
```

**require**

Usado para requirir outros módulos

```
var mongoose = require('mongoose');
```

**Buffer**

Usado para lidar com dados binários.
```
var buff = new Buffer('Treinando!');
console.log(buff.toString());
```

**global**

O objeto que representa o namespace global do Node.js.

```
global.curso = 'Be Mean';

console.log(global.curso);
```

# 5) Explique como funciona e dê um exemplo de 'process':

O objeto global **process** é basicamente um **wrapper** do processo atual, sendo uma instância do **EventEmitter**.

Uma das propriedades desse objeto é o **argv**, que trás uma array com todos os argumentos da linha de comando usado para executar o script.

```
console.log(process.argv);

[ 'D:\\NodeJS\\node.exe', 'D:\\Developer\\Curso Mean\\workshop-be-mean\\nodejs\\exercicio rapido\\global' ]
```