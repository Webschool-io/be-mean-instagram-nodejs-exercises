# Node.js - Aula 02 - Exercício

**user:** [joseasousa](https://github.com/joseasousa/)  
**autor:** Jose Alves De Sousa Neto

## Quais são os 4 verbos que utilizamos para o CRUD?
C - Create - Criar/Inserir/Salvar
R - Retrieve - Recuperar/Pegar
U - Update - Atualizar
D - Delete - Apagar

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os `statos code` é uma das informações que vem na resposta, onde e definido o resultado da requisição

### 101 Mudando protocolos
Isso significa que o solicitante pediu ao servidor para mudar os protocolos e o servidor está 
reconhecendo que irá fazê-lo. 102 Processamento Como uma solicitação WebDAV pode conter muitos 
sub-pedidos que envolvam operações de arquivo, 
pode demorar muito tempo para concluir o pedido. Este código indica que o servidor recebeu e está 
processando o pedido, mas nenhuma resposta ainda não está disponível. Isso impede que o cliente o 
tempo limite e supondo que o pedido foi perdido.

![101](https://http.cat/101)


### 206 Conteúdo parcial
O servidor está entregando apenas parte do recurso devido a um cabeçalho intervalo enviados pelo 
cliente. O cabeçalho do intervalo é usado por ferramentas como wget para permitir retomada de 
downloads interrompidos, ou dividir um download em vários fluxos simultâneos.

![206](https://http.cat/206)


### 305 Use Proxy (desde HTTP/1.1)
Muitos clientes HTTP (como o Mozilla e Internet Explorer) podem não tratar corretamente as 
respostas com este código de status, principalmente por razões de segurança.

![305](https://http.cat/305)

### 402 Pagamento necessário
Reservado para uso futuro. A intenção original era que esse código pudesse ser usado como 
parte de alguma forma de dinheiro digital ou de micro pagamento regime, mas isso não 
aconteceu, e esse código não é usado normalmente.

![402](https://http.cat/402)

### https://http.cat/502
Em regra, o erro quando há uma configuração imprecisa entre os computadores de back-end, 
possivelmente incluindo o servidor Web no site visitado. Antes de analisar este problema, 
é necessário limpar o cache do navegador, completamente.
Se estiver navegando na Web e observar este problema em todos os websites visitados, então 1) 
o seu provedor de serviço de Internet tem uma falha/sobrecarga em um equipamento principal ou 2) 
tem algo de errado com a sua conexão interna à Internet, por exemplo, o firewall não está 
funcionando corretamente. Se for o primeiro caso, somente o seu provedor pode ajudar. Se for 
o segundo, você precisa corrigir o que quer que esteja prevenindo que você acesse a Internet.
Se tiver este problema somente em alguns websites visitados, provavelmente existe um problema 
nos sites. Por exemplo, uma das peças dos equipamentos estão falhando ou estão sobrecarregadas. 
Entre em contato com os responsáveis destes sites.

![502](https://http.cat/502)


## Explique o que é cada parâmetro da função recebida no `createServer`.
ele recebe uma função anonima com 2 parametros request e response

`request`: recebe informação da solicitação feita ao servidor

`response`: é a resposta dada para a requisição


## O que é e para que serve a Querystring?
A QueryString é um modelo clássico de manutenção do estado da página. Elas são nada mais 
do que conjuntos de pares/valores anexados a URL.

Seu uso é simples, após a URL de determinada página, adicionamos o primeiro valor usando a 
seguinte sintaxe: ?Chave=Valor. Para passarmos mais de um conjunto, os mesmos devem ser 
concatenados usando o caractere coringa &


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: '1.0'
        , name: 'BE MEAN'
        , returned_at: date.toString().
            replace(/T/, ' ').
            replace(/\..+/, '')
    }
    , ERROR = {
        message: 'Rota Inexistente'
    }

http.createServer((req, res) => {

    success = () => {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.write(JSON.stringify(SUCCESS));
    }

    error = () => {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.write(JSON.stringify(ERROR));
    }

    switch (req.url) {
        case '/api/r1':
            success();
            break;

        case '/api/r2':
            success();
            break;

        case '/api/r3':
            success();
            break;

        case '/api/r4':
            success();
            break;

        default:
            error();
            break;
    }

    res.end();
}).listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
```