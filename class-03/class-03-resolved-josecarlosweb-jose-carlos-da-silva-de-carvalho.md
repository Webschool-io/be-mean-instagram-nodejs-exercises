```md
# Node.js - Aula 03 - Exercício
**user:** [josecarlosweb](https://github.com/josecarloweb)
**autor:** JOSE CARLOS DA SILVA DE CARVALHO

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
A segunda requisição realizada pelo chrome é uma requisição GET pelo _favincon.ico_

## Qual a DIFERENÇA entre o GET e o POST?
Uma requisição GET possui por padrão argumentos expostos na URL (Ex. www.site.com.br/?var=valor). Há um tamanho limitado para a requisição GET (255 caracteres). Ele também é o tipo de requisição padrão do HTML.

Uma requisição POST possui seus argumentos encapsulados na mensagem HTTP. A requisição POST não pode transportar somente texto, podendo ser enviados arquivos/binários. 

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
**Criando o Pokemon**
node http-request-post.js 
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"84","etag":"W/\"54-sJ+lyj1X1KVDI81lGmOzhw\"","date":"Sat, 19 Dec 2015 18:53:13 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Carlos Carvalho","type":"student","_id":"5675a799addf2e11003746ec"}

**Editando**
node http-request-put.js 
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-89O7HQ1nsBoqvhBp6xk+Mg\"","date":"Sat, 19 Dec 2015 18:54:03 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6230070149857148929","electionId":"565e25d106dca622271891c4"}}

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

**Código**
//file http-request-delete

'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
    name: 'Megaloaníaco de plantão',
});

const options = {
    host: 'webschool-io.herokuapp.com',
    method: 'DELETE',
    path: '/api/pokemons/5672e0e007bbbe11004259ee',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

[callbacks, req e afins igual aos demais]


**Uso**
node http-request-delete.js 
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sat, 19 Dec 2015 18:56:25 GMT","via":"1.1 vegur"}

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

API externa: fipeapi.appspot.com
Pacote extra: node-json2tml

**Código**
//file http-get-localhost-querystring

'use strict';

const http = require('http');
const json2html = require('node-json2html');
var retorno = '';

http.get({
    hostname: 'fipeapi.appspot.com',
    path: '/api/1/carros/marcas.json',
    port: 80,
    agent: false
},function(response){
    let body = '';
    console.log('STATUS: '+response.statusCode);
    console.log('HEADERS: '+JSON.stringify(response.headers));
    response.on('data', function(data){
        body += data;
    });

    response.on('end', function(){
        var transform = {'tag':'div','html':'${name} fipe_name ${fipe_name}'};

        var html = json2html.transform(body,transform);
        console.log('RESPOSTA: ', html);
    });
});

**Saída**
node http-get-fipe.js 
STATUS: 200
HEADERS: {"cache-control":"no-cache","content-type":"application/json; charset=utf-8","date":"Sat, 19 Dec 2015 19:52:18 GMT","server":"Google Frontend","content-length":"7524","connection":"close"}
RESPOSTA:  <div>AUDI fipe_name Audi</div><div>BMW fipe_name BMW</div><div>CITROEN fipe_name Citroën</div><div>FIAT fipe_name Fiat</div><div>FORD fipe_name Ford</div><div>CHEVROLET fipe_name GM - Chevrolet</div><div>HONDA fipe_name Honda</div><div>HYUNDAI fipe_name Hyundai</div><div>KIA fipe_name Kia Motors</div><div>MERCEDES-BENZ fipe_name Mercedes-Benz</div><div>MITSUBISHI fipe_name Mitsubishi</div><div>NISSAN fipe_name Nissan</div><div>PEUGEOT fipe_name Peugeot</div><div>RENAULT fipe_name Renault</div><div>SUZUKI fipe_name Suzuki</div><div>TOYOTA fipe_name Toyota</div><div>VOLVO fipe_name Volvo</div><div>VOLKSWAGEN fipe_name VW - VolksWagen</div><div>ACURA fipe_name Acura</div><div>AGRALE fipe_name Agrale</div><div>ALFA ROMEO fipe_name Alfa Romeo</div><div>AM GEN fipe_name AM Gen</div><div>ASIA MOTORS fipe_name Asia Motors</div><div>ASTON MARTIN fipe_name ASTON MARTIN</div><div>BRM fipe_name BRM</div><div>BUGGY fipe_name Buggy</div><div>BUGRE fipe_name Bugre</div><div>CADILLAC fipe_name Cadillac</div><div>CBT JIPE fipe_name CBT Jipe</div><div>CHANA fipe_name CHANA</div><div>CHANGAN fipe_name CHANGAN</div><div>CHERY fipe_name CHERY</div><div>CHRYSLER fipe_name Chrysler</div><div>CROSS LANDER fipe_name Cross Lander</div><div>DAEWOO fipe_name Daewoo</div><div>DAIHATSU fipe_name Daihatsu</div><div>DODGE fipe_name Dodge</div><div>EFFA fipe_name EFFA</div><div>ENGESA fipe_name Engesa</div><div>ENVEMO fipe_name Envemo</div><div>FERRARI fipe_name Ferrari</div><div>FIBRAVAN fipe_name Fibravan</div><div>FOTON fipe_name FOTON</div><div>FYBER fipe_name Fyber</div><div>GEELY fipe_name GEELY</div><div>GREAT WALL fipe_name GREAT WALL</div><div>GURGEL fipe_name Gurgel</div><div>HAFEI fipe_name HAFEI</div><div>ISUZU fipe_name Isuzu</div><div>JAC fipe_name JAC</div><div>JAGUAR fipe_name Jaguar</div><div>JEEP fipe_name Jeep</div><div>JINBEI fipe_name JINBEI</div><div>JPX fipe_name JPX</div><div>LADA fipe_name Lada</div><div>LAMBORGHINI fipe_name LAMBORGHINI</div><div>LAND ROVER fipe_name Land Rover</div><div>LEXUS fipe_name Lexus</div><div>LIFAN fipe_name LIFAN</div><div>LOBINI fipe_name LOBINI</div><div>LOTUS fipe_name Lotus</div><div>MAHINDRA fipe_name Mahindra</div><div>MASERATI fipe_name Maserati</div><div>MATRA fipe_name Matra</div><div>MAZDA fipe_name Mazda</div><div>MERCURY fipe_name Mercury</div><div>MG fipe_name MG</div><div>MINI fipe_name MINI</div><div>MIURA fipe_name Miura</div><div>PLYMOUTH fipe_name Plymouth</div><div>PONTIAC fipe_name Pontiac</div><div>PORSCHE fipe_name Porsche</div><div>RAM fipe_name RAM</div><div>RELY fipe_name RELY</div><div>ROLLS-ROYCE fipe_name Rolls-Royce</div><div>ROVER fipe_name Rover</div><div>SAAB fipe_name Saab</div><div>SATURN fipe_name Saturn</div><div>SEAT fipe_name Seat</div><div>SHINERAY fipe_name SHINERAY</div><div>SMART fipe_name smart</div><div>SSANGYONG fipe_name SSANGYONG</div><div>SUBARU fipe_name Subaru</div><div>TAC fipe_name TAC</div><div>TROLLER fipe_name Troller</div><div>WAKE fipe_name Wake</div><div>WALK fipe_name Walk</div>


```