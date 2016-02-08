# NodeJS - Aula 03 - Exercício
autor: Wellerson Roberto

## 1) Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições sendo a última "vazia"?

A segunda requisição feita pelo Google Chrome é a requisição pra buscar o favicon.ico.

## 2) Qual a DIFERENÇA entre o GET e o POST?

Os verbos **GET** e **POST** são usados para propósitos distintos. Enquanto o **GET** é usado para requisitar dados, o **POST** é usado para enviar dados para o servidor. Outras diferenças:

* O **GET** envia os dados pela URL, portanto é menos seguro. O **POST** faz o envio pelo **body** da requisição.
* O **GET** pode ser cacheado e ficar no histórico do navegador, o **POST** não.
* Como os dados do **GET** são enviados pela URL, ele fica limitado ao tamanho da URL. Por **POST** não.

## 3) Crie um POKEMON na nossa API com o seu nome, depois modifique seu nome pelo User do GitHub, colocando aqui a resposta de cada passo.

```
'use strict'

const http = require('http')
    , queryString = require('querystring')
    , postData = queryString.stringify({
        name: 'Wellerson Roberto Alves Nobrega'
        , type: 'aluno'
    })
    , options = {
        host: 'webschool-io.herokuapp.com'
        , method: 'post'
        , path: '/api/pokemons'
        , headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            , 'Content-Length': postData.length
        }
    };

var req = http.request(options, res => {
    let chunck = '';

    res.on('data', data => chunck += data);

    res.on('end', () => console.log('Fim!'));
})

req.on('error', e => console.log('Erro!' + e));

req.write(postData);

req.end();
```

```
'use strict'

const http = require('http')
    , queryString = require('querystring')
    , postData = queryString.stringify({
        name: 'wellerson010'
        , type: 'aluno'
    })
    , options = {
        host: 'webschool-io.herokuapp.com'
        , method: 'put'
        , path: '/api/pokemons/56b80d13ff45d31100182506'
        , headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            , 'Content-Length': postData.length
        }
    };

var req = http.request(options, res => {
    let chunck = '';

    res.on('data', data => chunck += data);

    res.on('end', () => console.log('Fim!'));
})

req.on('error', e => console.log('Erro!' + e));

req.write(postData);

req.end();
```

## 4) Depois faça o DELETE, criado o script para tal, colocando aqui a resposta.

```
'use strict'

const http = require('http')
    , options = {
        host: 'webschool-io.herokuapp.com'
        , method: 'delete'
        , path: '/api/pokemons/56b80d13ff45d31100182506'
    };

var req = http.request(options, res => {
    let chunck = '';

    res.on('data', data => chunck += data);

    res.on('end', () => console.log('Fim!'));
})

req.on('error', e => console.log('Erro!' + e));

req.end();
```

## 5) Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado em HTML.

```
'use strict';

const http = require('http');

const app = {
    createServer: () => {
        this.server = http.createServer((req, response) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            http.get(app.optionsRequest, res => {
                let data = '';

                res.on('data', chunck => data += chunck);

                res.on('end', () => {
                    var json = JSON.parse(data)
                        , html = app.htmlHelper.build(json.data);
                    response.write(html);
                    response.end();
                });
            });
        });
    },
    htmlHelper: {
        build: (data) => {
            var html = '';
            html += app.htmlHelper.buildHeader();
            html += app.htmlHelper.buildBody(data);
            html += app.htmlHelper.buildFooter();
            return html;
        },
        buildHeader: () => {
            var html = '<!doctype html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8">' +
                '<title>Usando a API do Deezer!</title>' +
                '</head>' +
                '<body>'
            return html;
        },
        buildBody: data => {
            var html = ''
                , i = 0
                , length = 0;
            for (i = 0, length = data.length ; i < length; i++) {
                html += '<div>' +
                    '<p>' + data[i].title + '</p>' +
                    '<img src="' + data[i].album.cover + '"/>' +
                    '<audio controls><source src="' + data[i].preview + '" type="audio/mpeg" preload="none"/></audio>' +
                    '</div></hr>';

            };
            return html;
        },
        buildFooter: () =>{ return '</body></html>' }
    },
    optionsRequest: {
        hostname: 'api.deezer.com',
        path: '/search?q=eminem'
    },
    listen: () => this.server.listen(3000, () => console.log('Estou pronto!')),
    server: null
};


app.createServer();
app.listen();
```
