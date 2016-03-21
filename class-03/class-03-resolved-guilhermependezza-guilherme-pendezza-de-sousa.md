# Node.js - Aula 03 - Exercício

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

R: O Chrome faz uma nova requisição para obter o favicon.ico. Esse comportamento não acontece no Firefox e pelo console do node. Segue um link do stackoverflow: http://stackoverflow.com/questions/4460661/what-to-do-with-chrome-sending-extra-requests.

## Qual a DIFERENÇA entre o GET e o POST?
R: A diferença básica é a semântica dos verbos http. O get é utilizado para obter dados do servidor e o post para gravá-los. Além disso, no navegador, os dados enviados por post não são exibidos na url. Com o get, eles aparecem e é isso que permite linkar os conteúdos.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
1 - Criar o pokemon via post na api

´´´

'use strict';

const http = require('http');
const querystring = require('querystring');

let postData = querystring.stringify({
        name: 'Guilherme Pendezza de Sousa'
    ,   type: 'Programador'
});

let options = {
        host: 'webschool-io.herokuapp.com'
    ,   path: '/api/pokemons'
    ,   method: 'POST'
    ,   headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            ,   'Content-Length': postData.length
        }
    ,   agent: false
};

var retorno = '';

function callback(res){
    console.log('Headers: ', res.headers);
    console.log('Status code: ', res.statusCode);
    this.resposta = '';
    
    let data = '';
    
    res.setEncoding('utf-8');
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log('Data', data));
    
};

const req = http.request(options, callback)

req.on('error', e => console.log('Erro: ', e.message));
req.write(postData);
req.end();
´´´

2 - Atualizar o nome do pokemon via put

´´´
'use strict';

const http = require('http');
const querystring = require('querystring');

let postData = querystring.stringify({
        name: 'guilhermependezza'
});

let options = {
        host: 'webschool-io.herokuapp.com'
    ,   path: '/api/pokemons/56e030ae0a196c11006b3831'
    ,   method: 'PUT'
    ,   headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            ,   'Content-Length': postData.length
        }
    ,   agent: false
};

var retorno = '';

function callback(res){
    console.log('Headers: ', res.headers);
    console.log('Status code: ', res.statusCode);
    this.resposta = '';
    
    let data = '';
    
    res.setEncoding('utf-8');
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log('Data', data));
    
};

const req = http.request(options, callback)

req.on('error', e => console.log('Erro: ', e.message));
req.write(postData);
req.end();

´´´

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
R: apagando via delete

´´´´

'use strict';

const http = require('http');

let options = {
        host: 'webschool-io.herokuapp.com'
    ,   path: '/api/pokemons/56e030ae0a196c11006b3831'
    ,   method: 'DELETE'
    ,   agent: false
};

var retorno = '';

function callback(res){
    console.log('Headers: ', res.headers);
    console.log('Status code: ', res.statusCode);
    this.resposta = '';
    
    let data = '';
    
    res.setEncoding('utf-8');
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log('Data', data));
};

const req = http.request(options, callback)

req.on('error', e => console.log('Erro: ', e.message));
req.end();

´´´´
## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
R: eu escolhi uma API que fornece dados sobre o livro Crônicas de gelo e fogo, que é base pro Game of Thrones. O path usado foi a consulta aos personagens. Como a consulta é paginada, eu usei só a primeira página com 50 resultados por página.

 - Site da API - https://anapioficeandfire.com/
 - Documentação - https://anapioficeandfire.com/Documentation
 
 Código para consumo da API

'use strict';

const http = require('http');

http.createServer((req, res) => {
    
    function callback(data){
        res.write('<html><head><title>Personagens do Game of Thrones</title></head><body>');
        res.write('<h1>Personagens de Game of thrones</h1>');
        res.write('<ul>');
        let dataJson = JSON.parse(data);
        
        for(let i in dataJson){
            res.write('<li>');
            res.write('Nome: ' + (dataJson[i].name || dataJson[i].aliases[0]) + 
                      ', Origem: ' + (dataJson[i].culture || 'Desconhecida'));
            res.write('</li>');
        }
        
        res.write('</ul>');
        res.write('</body></html>');
        res.end();    
    };
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    http.get({
            host: 'anapioficeandfire.com'
        ,   path: '/api/characters/?pageSize=50'
    }, res => {
        let data = '';
        
        res.setEncoding('utf-8');
        res.on('data', chunk => data += chunk);
        res.on('end', () => callback(data));
    });
})
.listen(3000, () => console.log('Servidor rodando na porta 3000'));
