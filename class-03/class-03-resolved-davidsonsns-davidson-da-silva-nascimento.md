# Node.js - Aula 02 - Exercício
**user:** [davidsonsns](https://github.com/davidsonsns)
**autor:** Davidson da Silva Nascimento

### Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Na primeira requisição é enviado os dados normalmente. Na segunda o Chrome requisita o **favicon** ao servidor.

[Removendo requisição favicon no node.js](https://gist.github.com/kentbrew/763822)

### Qual a DIFERENÇA entre o GET e o POST?
#### GET
+ Requisita informações no serviço/api
+ Requisição feita totalmente via URL(dados enviados juntamente a url)
+ Tamanho limitado de capacidade de envio
+ Mais rápido devido sua simplicidade
+ Apenas dados do tipo texto pode ser enviado
+ Requisição armazenada em cache
+ Método(method) padrão de formulários
+ Limitado ao padrão ASCII
+ Para indicar o início dos dados é utilizado a interrogação **(?)**, e para se separar cada valor se usa o símbolo **&**

Exemplo:
```
http://www.url.com.br?valor1=be&valor2=mean
```
#### POST
+ Cria entidades no serviço/api
+ Dados enviados no corpo da requisição HTTP.
+ Sem limitação de espaço
+ O encaplulamento da mensagem gera uma demora no envio
+ Transposta qualquer tipo de dado
+ Pode usar o atributo “enctype” com o valor “multipart/form-data”, que faz uso do padrão UCS(Universal Multiple-Octet Coded Character Set)

Exemplo:
```
POST /servlet/default.jsp HTTP/1.1
Accept: text/plain; text/html 
Accept-Language: en-gb 
Connection: Keep-Alive 
Host: localhost 
Referer: http://localhost/ch8/SendDetails.htm 
User-Agent: Mozilla/4.0 (compatible; MSIE 4.01; Windows 98) 
Content-Length: 33 
Content-Type: application/x-www-form-urlencoded 
Accept-Encoding: gzip, deflate 

LastName=Magalhaes&FirstName=Guilherme
```

### Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
##### Criado
```js
STATUS:201
HEADERS:{
   "server":"Cowboy",
   "connection":"close",
   "x-powered-by":"Express",
   "access-control-allow-origin":"*",
   "content-type":"application/json; charset=utf-8",
   "content-length":"86",
   "etag":"W/\"56-dg3rEt0+ozh6uDqbY0CXAQ\"",
   "date":"Tue, 22 Mar 2016 23:55:39 GMT",
   "via":"1.1 vegur"
}
Dados finalizados:{
   "__v":0,
   "name":"Davidson Nascimento",
   "type":"aluno",
   "_id":"56f1db7bcb11f71100f8d2b2"
}
```

##### Modificado
```js
STATUS:202
HEADERS:{
   "server":"Cowboy",
   "connection":"close",
   "x-powered-by":"Express",
   "access-control-allow-origin":"*",
   "content-type":"application/json; charset=utf-8",
   "content-length":"108",
   "etag":"W/\"6c-dn2tbrpwX9BFx5AlJ5P7/A\"",
   "date":"Tue, 22 Mar 2016 23:58:17 GMT",
   "via":"1.1 vegur"
}
Dados finalizados:{
   "data":{
      "ok":1,
      "nModified":1,
      "n":1,
      "lastOp":"6265030556581363713",
      "electionId":"56ee12f2563048036a1e77e7"
   }
}
```

### **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```js
STATUS:204
HEADERS:{
   "server":"Cowboy",
   "content-length":"0",
   "connection":"close",
   "x-powered-by":"Express",
   "access-control-allow-origin":"*",
   "date":"Tue, 22 Mar 2016 23:59:47 GMT",
   "via":"1.1 vegur"
}
Dados finalizados:
```

### Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
#### GET
```js
// file: http-request.js
'use strict';

const http = require('http');

const options = {
    host: 'api.randomuser.me',
    path: '/?gender=female&nat=br',
    method: 'GET',
    headers: {
        'User-Agent': 'Chrome/46.0.2490.86',
        'Content-Type': 'text/html'
    }
};

function callback(res) {
    let status = 'STATUS: ' + res.statusCode;
    let headers = 'HEADERS: ' + JSON.stringify(res.headers);

    let data = '';

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        let body = '<html><body><h4>' + status + '</h4><br>' + headers + '<br><br><code>' + data + '</code></body></html>'
        console.log(body)
    })
}

const req = http.request(options, callback);

req.on('error', (e) => {
    console.log('ERROOOO: ' + e.message);
});
req.end();
```
#### Resultado
```js
<html><body><h4>STATUS: 200</h4><br>HEADERS: {"server":"nginx","date":"Wed, 23 Mar 2016 01:24:13 GMT","content-type":"application/json; charset=utf-8","transfer-encoding":"chunked","connection":"close","access-control-allow-origin":"*"}<br><code>{
    "results": [
        {
            "user": {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "samara",
                    "last": "rocha"
                },
                "location": {
                    "street": "3166 rua pará",
                    "city": "cabo frio",
                    "state": "goiás",
                    "zip": 44101
                },
                "email": "samara.rocha@example.com",
                "username": "smallmeercat214",
                "password": "april",
                "salt": "lJeLupaH",
                "md5": "93d85105384f191849047f1f5f604ecb",
                "sha1": "35acee66eea14c004f214819d11ab3bf92f07c8b",
                "sha256": "f7c94aaef6fdfe1553aa107025b9df633af578af7a5635ebd7075785cf1390b0",
                "registered": 1352011251,
                "dob": 1131595230,
                "phone": "(90) 5421-1840",
                "cell": "(58) 9894-6336",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/67.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
                }
            }
        }
    ],
    "nationality": "BR",
    "seed": "0b39f06d3acac76c01",
    "version": "0.8"
}</code></body></html>
```