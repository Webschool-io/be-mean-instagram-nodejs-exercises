# NodeJS - Aula 04 - Exercício
autor: Wellerson Roberto

# Exercícios de File System

## 1) Criar um arquivo

```
'use strict';
const fs = require('fs');

fs.writeFile('./novo-arquivo.txt', '', (err) => {
    if (err)
        console.log(err);
});
```

## 2) Ler um arquivo
```
'use strict';
const fs = require('fs');

fs.readFile('./novo-arquivo.txt', 'utf8', (err, result) => {
    if (err)
        console.log(err);
    else
        console.log(result);
});
```

## 3) Editar conteúdo desse arquivo

```
'use strict';
const fs = require('fs');

let writeFileStream = fs.createWriteStream('./novo-arquivo.txt');

writeFileStream.write('Escrevendo novas coisas!');
```

## 4) Deletar arquivo

```
'use strict';
const fs = require('fs');

fs.unlink('./novo-arquivo.txt', (err) => {
    if (err)
        console.log(err);
});
```

## 5)Renomear o arquivo

```
'use strict';
const fs = require('fs');

fs.rename('./novo-arquivo.txt', 'renomeado.txt', (err) => {
    if (err)
        console.log(err);
});
```

## DESAFIO: Criar um servidor web de arquivos estáticos: .css, .html, .js e etc...

```
'use strict';

const http = require('http')
    , fs = require('fs')
    , buildHTML = text => {
        let html = '<!doctype html>' +
            '<html>' +
            '<head><title>Servidor de Arquivos Estáticos</title><meta charset="utf-8"/></head>' +
            '<body>' + text + '</body>' +
            '</html>';

        return html;
    };


http.createServer((req, res) => {
    let url = req.url;

    if (url.indexOf('/request') > -1) {
        url = url.substring(9);
        fs.readFile('./' + url, 'utf8', (err, result) => {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(buildHTML('Erro' + err));
                res.write(err);
            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write(result);
            }

            res.end();
        });
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(buildHTML('Servidor de Arquivos Estáticos -> Use a URL "request/NOME DO ARQUIVO" para requerer seu arquivo!'));
        res.end();
    }
}).listen(3000, () => {
    console.log('Estou pronto!')
})
```

# Exercícios de Callback

## 1) Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

```
'use strict';

const name = (name, callback) => {
    callback(name);
};

name('Wellerson Roberto', name => console.log(name));
```

## 2) Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado na aula.

```
'use strict';

const soma = (valor1, valor2, callback) => {
    if (typeof valor1 == 'number' && typeof valor2 == 'number')
        callback(null, (valor1 + valor2));
    else {
        var err = new Error('Você deve passar dois números filho da puta!');
        callback(err, null);
    }
};

soma(7, 2, (err, value) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(value);
    }
});
```

## 3) Criar uma função para calcular a média de dois valores e imprima essa média em uma outra função, como continuação da execução da mesma.

```
'use strict';

const media = (valor1, valor2, callback) => {
    if (typeof valor1 == 'number' && typeof valor2 == 'number'){
        let media = (valor1 + valor2) / 2
        callback(null, media);
    }

    else {
        var err = new Error('Você deve passar dois números filho da puta!');
        callback(err, null);
    }
};

media(7, 2, (err, value) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(value);
    }
});
```


## 4) Explicar a definição de continuação de uma função.

É uma forma de se obter funções sendo executada após a outra, mesmo que essas funções sejam assíncronas. Isso é obtivo passando-se a função por parâmetro para uma função assíncrona. Assim que essa função assíncrona terminar de ser executava, ela chamará a função passada como parâmetro, obtendo a mesma continuidade que você obtem se executar isso de forma síncrona.
