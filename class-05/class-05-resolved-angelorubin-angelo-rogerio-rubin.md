# Node.js - Aula 05 - Parte 1 - Exercícios

**User:** [angelorubin](https://github.com/angelorubin)

**Autor:** Angelo Rogério Rubin

**Date:** 1453919880

## Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

	PS C:\Projetos\pokemons-api> npm install nvm-win
	pokemons-api@0.0.1 C:\Projetos\pokemons-api
	├─┬ nodemon@1.8.1
	│ ├─┬ chokidar@1.4.2
	│ │ └─┬ readdirp@2.0.0
	│ │   └── readable-stream@2.0.5
	│ └─┬ update-notifier@0.5.0
	│   └─┬ latest-version@1.0.1
	│     └─┬ package-json@1.2.0
	│       └─┬ got@3.3.1
	│         ├─┬ duplexify@3.4.2
	│         │ └── readable-stream@2.0.5
	│         └─┬ read-all-stream@3.0.1
	│           └── readable-stream@2.0.5
	└── nvm-win@0.2.4  extraneous

	npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
	npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.6
	npm WARN mongodb-core@1.2.32 requires a peer of kerberos@~0.0 but none was installed.
	npm WARN pokemons-api@0.0.1 No repository field.
	PS C:\Projetos\pokemons-api>

## Inicie um projeto novo para essa aula, com o npm e instale, salvando no package.json:

	PS C:\Projetos\pokemons-api> npm init
	This utility will walk you through creating a package.json file.
	It only covers the most common items, and tries to guess sensible defaults.

	See `npm help json` for definitive documentation on these fields
	and exactly what they do.

	Use `npm install <pkg> --save` afterwards to install a package and
	save it as a dependency in the package.json file.

	Press ^C at any time to quit.
	name: (pokemons-api)
	version: (0.0.1)
	git repository:
	license: (MIT) MIT
	About to write to C:\Projetos\pokemons-api\package.json:

	{
	  "name": "pokemons-api",
	  "version": "0.0.1",
	  "description": "API Pokemons",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "roda": "node npm/script.js"
	  },
	  "keywords": [
	    "pokemons",
	    "node",
	    "mongodb",
	    "webschool"
	  ],
	  "author": "Angelo Rubin",
	  "license": "MIT",
	  "dependencies": {
	    "mongoose": "^4.3.6",
	    "nodemon": "^1.8.1"
	  },
	  "devDependencies": {
	    "jasmine": "^2.4.1"
	  }
	}

	Is this ok? (yes) yes

1 - Dependência Local

	PS C:\Projetos\pokemons-api> npm i express -S
	pokemons-api@0.0.1 C:\Projetos\pokemons-api
	├── express@4.13.3  extraneous
	└── nvm-win@0.2.4  extraneous

	npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
	npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.6
	npm WARN mongodb-core@1.2.32 requires a peer of kerberos@~0.0 but none was installed.
	npm WARN pokemons-api@0.0.1 No repository field.

2 - Dependência Local de Desenvolvimento
	
	PS C:\Projetos\pokemons-api> npm i express -SD
	pokemons-api@0.0.1 C:\Projetos\pokemons-api
	└── nvm-win@0.2.4  extraneous

	npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
	npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.6
	npm WARN mongodb-core@1.2.32 requires a peer of kerberos@~0.0 but none was installed.
	npm WARN pokemons-api@0.0.1 No repository field.

3 - Dependência Local Opcional

	PS C:\Projetos\pokemons-api> npm i color -SO
	pokemons-api@0.0.1 C:\Projetos\pokemons-api
	├─┬ color@0.11.1
	│ ├── color-convert@0.5.3
	│ └─┬ color-string@0.3.0
	│   └── color-name@1.1.1
	├── express@4.13.3
	└── nvm-win@0.2.4  extraneous

	npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
	npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.6
	npm WARN mongodb-core@1.2.32 requires a peer of kerberos@~0.0 but none was installed.
	npm WARN pokemons-api@0.0.1 No repository field.

## Crie e execute um script, via 'npm', que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

	PS C:\Projetos\pokemons-api> npm run script

	> pokemons-api@0.0.1 script C:\Projetos\pokemons-api
	> node npm/run-script-by-npm.js

	Fui executado pelo comando run do npm.

## Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

### __dirname

Retorna o nome do diretório em que o script esta atualmente em execução.

Exemplo:

	console.log(__dirname);

Resultado:

	PS C:\Projetos\be-mean-instagram\be-mean-code-examples\file-system> node _dirname.js
	C:\Projetos\be-mean-instagram\be-mean-code-examples\file-system

### _filename

Retorna o nome do arquivo do código que está sendo executado. Mostra o caminho absoluto do arquivo.

Exemplo:

	console.log(__filename);

Resultado:

	PS C:\Projetos\be-mean-instagram\be-mean-code-examples\file-system> node _filename.js
	C:\Projetos\be-mean-instagram\be-mean-code-examples\file-system\_filename.js

### clearTimeout(t)

Para um temporizador que foi criado anteriormente com setTimeout (). O retorno de chamada não será executado.

Exemplo:

	var timeout = setTimeout(function(str1, str2) {
	  console.log(str1 + " " + str2);
	}, 1000, "Hello.", "How are you?");

	clearTimeout(timeout);

### clearInterval(t)

Para um temporizador que foi criado anteriormente com setInterval (). O retorno de chamada não será executado.

As funções de temporizador são variáveis globais.

Exemplo:

	var i = 1;
	var interval = setInterval(function() { alert(i++) }, 2000);
	clearInterval(interval);

### console.log()

O módulo de console fornece um console de depuração simples que é semelhante ao mecanismo de console JavaScript fornecido pelos navegadores da web.

O módulo exporta dois componentes específicos:

Uma classe de console com métodos tais como console.log (), console.error () e console.warn () que pode ser usada para escrever para qualquer fluxo Node.js.

Uma instância do console global configurado para escrever para stdout e stderr. 

Como este objeto é global, ele pode ser usado sem chamar require ('console').

Exemplo:

	console.log('hello world'); // hello world

## Explique como funciona e de um exemplo de 'process'.

O objeto process é um objeto global e pode ser acessado de qualquer lugar. Ele é uma instância de [EventEmitter](http://devdocs.io/node/events#events_class_events_eventemitter "EventEmitter").

Exemplo:

	process.on('exit', (code) => {
	  setTimeout(() => {
	    console.log('This will not run');
	  }, 0);
	  console.log('About to exit with code:', code);
	});

# Node.js - Aula 05 - Parte 2 - Exercícios

## File System

### Criar um arquivo.

	'use strict';

	const fs = require('fs');

	fs.writeFile('mensagem.txt', 'Olá, eu sou um arquivo.', (err) => {
	  if (err) throw err;
	  console.log('Arquivo criado e salvo com sucesso.');
	});

Resultado:

	PS C:\Projetos\be-mean-instagram\be-mean-code-examples\file-system> node criar-arquivo.js
	Arquivo criado e salvo com sucesso.

### Ler um arquivo.

	'use strict';

	const fs = require('fs');

	fs.readFile('mensagem.txt', (err, data) => {
	  if (err) throw err;
	  console.log(data.toString());
	});

Resultado:

	PS C:\Projetos\be-mean-instagram\be-mean-code-examples\file-system> node ler-arquivo.js
	Olá, eu sou um arquivo.

### Editar conteúdo desse arquivo.

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

Resultado:

	PS C:\Projetos\be-mean-instagram\be-mean-code-examples\file-system> node editar-arquivo.js
	Olá, eu sou um arquivo.
	Sou um novo conteúdo adicionado ao arquivo.
	

### Deletar arquivo.

	'use strict';

	const fs = require('fs');  

	fs.unlink('mensagem.txt', (err) => {  
	  if (err) throw err;
	  console.log('Arquivo deletado com sucesso.');
	});
	
Resultado:

	PS C:\Projetos\be-mean-instagram\be-mean-code-examples\file-system> node deletar-arquivo.js
	Arquivo deletado com sucesso.

### Renomear o arquivo.

	'use strict';

	const fs = require('fs');

	fs.rename('mensagem.txt', 'mensagem-renomeada.txt', (err, data) => {
	  if (err) throw err;
	  console.log('Arquivo renomeado com sucesso.');
	});

Resultado:

	PS C:\Projetos\be-mean-instagram\be-mean-code-examples\file-system> node renomear-arquivo.js
	Arquivo renomeado com sucesso.

# Desafio: Criar um servidor web de arquivos estáticos (CSS, HTML, JS).

app.js

	'use strict';

	const http = require('http');
	const fs = require('fs');
	const path = require('path');

	http.createServer((request, response) => {

	    let filePath = '.' + request.url;

	    if (filePath == './')
	        filePath = './index.html';

	    let extname = path.extname(filePath);

	    switch (extname) {
	    	case '.css':
	            contentType = 'text/css';
	            break;
	        case '.js':
	            contentType = 'text/javascript';
	            break;
	        case '.html':
	            contentType = 'text/html';
	            break;
	    }

	    let contentType = 'text/html';

	    fs.readFile(filePath, (error, content) => {
	        if (error) {
	            if (error.code == 'ENOENT') {
	                fs.readFile('./404.html', (error, content) => {
	                    response.writeHead(200, {
	                        'Content-Type': contentType
	                    });
	                    response.end(content, 'utf-8');
	                });
	            }
	        } 
	        else {
	            response.writeHead(200, {
	                'Content-Type': contentType
	            });
	            response.end(content, 'utf-8');
	        }
	    });

	}).listen(3000);
	console.log('Servidor rodando em http://localhost:3000');


### Acessando CSS

![CSS](http://s26.postimg.org/ku7vf6ck9/css_fw.png)

### Acessando JS

![JS](http://s26.postimg.org/l897erwnt/js_fw.png)

### Acessando HTML

![HTML](http://s26.postimg.org/hd5tc7di1/html_fw.png)

### Pagina Não Encontrada.

![404](http://s26.postimg.org/85imsmcrd/404_not_found_fw.png)