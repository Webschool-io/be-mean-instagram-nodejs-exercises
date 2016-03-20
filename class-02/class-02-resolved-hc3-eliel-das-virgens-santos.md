Node.js - Aula 02 - Exercício
user:hc3
autor:Eliel das Virgens Santos
Data:16/03/2016

#01.Quais são os 4 verbos que utilizamos para o CRUD
-CREATE , READ , UPDATE , DELETE.

#02.Para que foram inventados os status codes? de um exemplo de 1 código por grupo e a imagem do 
cat Status Code.
-Servem para padronizar erros que acontecem 
1xx informação
https://camo.githubusercontent.com/6823dd450e814031bd02ef388700f49ca89b51e8/68747470733a2f2f687474702e6361742f313031
2xx sucesso
https://camo.githubusercontent.com/0a6b55dfbbd4c449bd11b66c67bbf79cd39256e7/68747470733a2f2f687474702e6361742f323036
3xx redirecionamento
https://camo.githubusercontent.com/44c90dc6ec4792e3fd639415aba907923c838df4/68747470733a2f2f687474702e6361742f333037
4xx erro no cliente
https://camo.githubusercontent.com/5849853b5addf949c7c9c6986f0f30ae13d1ae92/68747470733a2f2f687474702e6361742f343039
5xx erro no servidor
https://camo.githubusercontent.com/dc7334b72617db9df1e8354985c0566d899880cb/68747470733a2f2f687474702e6361742f353039

#03.Explique o que é cada parâmetro da função recebida no createServer
-Request métodos para lidar com a requisição do cliente
-Response métodos para lidar com a resposta do servidor

#04.Oque é e para que serve a QueryString
é um conjunto de chave valor anexado a URL e com ela podemos passar parametros para o servidor

#05.Escreva o código do server.js uma forma de entregar um JSON de sucesso em 4 rotas diferentes
```
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
  , SUCCESS = {
      version: 1.0
    , code: 200
    , name: 'MEAN'
    , created_at: date
    }
  , ERROR = {
      message: "DEU MERDA"
    , code: 405
    };

http.createServer(function(req, res){
    let url = req.url
      , method = req.method;

    switch(url){
        case "/api/cliente/create":
            if(method === "POST"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        case "/api/cliente/read":
            if(method === "GET"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        case "/api/cliente/update":
            if(method === "PUT"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        case "/api/cliente/delete":
            if(method === "DELETE"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            ERROR.message = "Not Found";
            ERROR.code = 404
            res.write(JSON.stringify(ERROR));
            break;
    }

    res.end();
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
 });

```