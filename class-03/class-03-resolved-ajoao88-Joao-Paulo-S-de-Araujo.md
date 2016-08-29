# Node.js - Aula 03 - Exercício
**user:** [ajoao88](https://github.com/ajoao88)<br>**autor:** João Paulo S de Araújo<br>**date:** 1454957716069  

## 1. Por que quando requisitamos ao nosso servidor de Query String, **com o Chrome**, ele executa 2 requisições, sendo a última "vazia"?
Porque atumaticamente ele faz uma segunda requisição solicitando o "favicon.ico", esse favicon hoje é usado para melhor identificação da página, fica à esquerda do título (<title>) na aba do navegador.

## 2. Qual a DIFERENÇA entre o GET e o POST?

|Característica                 | GET                                                                              | POST|
|------------------------------ | -------------------------------------------------------------------------------- |-----|
|**Limite bytes**               | 1024 bytes.                                                                      | Não possui.|
|**Padrão de transmissão**      | URL (Uniform Resource Locator).                                                  | URI (Uniform Resource Indentifier).|
|**Como lida com os dados**     | Expôe os dados na barra de endereços e eles ficam em cache (histórico).          | Encapsula os dados no corpo da requisição HTTP (Hyper Text Transfer Protocol), nenhum dado é visivel ao cliente e nem fica em cache.|
|**Formato dos dados enviados** | Query String                                                                     | Query String|
|**Indicações**                 | Envio de poucas e pequenas informações que não necessitam de segurança ou sigilo. | Envio de bastante e/ou grandes informações ou que necessitem de segurança e sigilo.|

## 3. Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github, colocando aqui a resposta de cada passo.
### Criação:
> **postData:**  name=Jo%C3%A3o%20Paulo&type=Estudante<br>**Tamanho do postData:**  37<br>**STATUS:** 201<br>**HEADERS:**

> ```json
> {  
>     "server":"Cowboy",  
>     "connection":"close",  
>     "x-powered-by":"Express",  
>     "access-control-allow-origin":"*",  
>     "content-type":"application/json;charset=utf-8",  
>     "content-length":"82",  
>     "etag":"W/"52-vko+eX5L8Ez2Vut24AhcMg"",  
>     "date":"Mon, 08 Feb 2016 19:54:04 GMT",  
>     "via":"1.1 vegur"  
> }
> ```

> **Dados finalizados:**  

> ```json
> {
>     "__v":0,  
>     "name":"João Paulo",  
>     "type":"Estudante",  
>     "_id":"56b8f25cde84f01100aba215"  
> }
> ```

### Atualização
> **postData:**  name=ajoao88<br>**Tamanho do postData:**  12<br>**STATUS:** 202<br>**HEADERS:**

> ```json
> {
>     "server":"Cowboy",  
>     "connection":"close",  
>     "x-powered-by":"Express",  
>     "access-control-allow-origin":"*",  
>     "content-type":"application/json; charset=utf-8",  
>     "content-length":"108",  
>     "etag":"W/"6c-XhSV7vAGvhRKZPCPduEgRQ"",  
>     "date":"Mon, 08 Feb 2016 20:04:52 GMT","via":"1.1 vegur"  
> }
> ```

> **Dados finalizados:**

> ```json
> {
>  "data":
>      {
>          "ok":1,
>          "nModified":1,
>          "n":1,
>          "lastOp":"6249013743066284033",
>          "electionId":
>          "565e25d106dca622271891c4"
>      }
> }
> ```

## 4. **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
> postData:''<br>Tamanho do postData:  0<br>STATUS: 204<br>HEADERS:

> ```json
> {
>     "server":"Cowboy",
>     "content-length":"0",
>     "connection":"close",
>     "x-powered-by":"Express",
>     "access-control-allow-origin":"*",
>     "date":"Mon, 08 Feb 2016 20:22:42 GMT",
>     "via":"1.1 vegur"
> }
> ```

> Dados finalizados: ''

## 5. Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

#### [Api Mercado Libre](https://api.mercadolibre.com)

```js
'use strict'

const https = require('https'),
    options = {
        host: 'api.mercadolibre.com',
        path: '/sites/'
    },
    json2Html = require('node-json2html')
function callback(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    let body = '';

    res.setEncoding('utf-8');
    res.on('data',(chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        var transform = {
            "tag": "li","id": "${id}","html": "${name}"
        };
        var html = "<ul>"
        html += json2Html.transform(body,transform);
        html += "</ul>"
        console.log('Dados em JSON: ', body);
        console.log('Dados em HTML: ',html);
    });
}

const req = https.request(options,callback);
req.on('error', (e) => {
    console.log('Erro: ' + e.message);
});

req.end();
```
Dados em JSON:
```json
[
    {"id":"MLA","name":"Argentina"},
    {"id":"MBO","name":"Bolivia"},
    {"id":"MLB","name":"Brasil"},
    {"id":"MLC","name":"Chile"},
    {"id":"MCO","name":"Colombia"},
    {"id":"MCR","name":"Costa Rica"},
    {"id":"MRD","name":"Dominicana"},
    {"id":"MEC","name":"Ecuador"},
    {"id":"MGT","name":"Guatemala"},
    {"id":"MLM","name":"Mexico"},
    {"id":"MPY","name":"Paraguay"},
    {"id":"MPA","name":"Panamá"},
    {"id":"MPE","name":"Perú"},
    {"id":"MPT","name":"Portugal"},
    {"id":"MLU","name":"Uruguay"},
    {"id":"MLV","name":"Venezuela"}
]
```

Dados em HTML:
```html
<ul>
    <li id="MLA">Argentina</li>
    <li id="MBO">Bolivia</li>
    <li id="MLB">Brasil</li>
    <li id="MLC">Chile</li>
    <li id="MCO">Colombia</li>
    <li id="MCR">Costa Rica</li>
    <li id="MRD">Dominicana</li>
    <li id="MEC">Ecuador</li>
    <li id="MGT">Guatemala</li>
    <li id="MLM">Mexico</li>
    <li id="MPY">Paraguay</li>
    <li id="MPA">Pana má</li>
    <li id="MPE">Perú</li>
    <li id="MPT">Portugal</li>
    <li id="MLU">Uruguay</li>
    <li id="MLV">Venezuela</li>
</ul>
```
