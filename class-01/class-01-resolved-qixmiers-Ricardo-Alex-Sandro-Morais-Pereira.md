# Nodejs - Aula 01 - Exercício
autor: Ricardo Pereira

## Explique como um processo síncrono e assíncrono roda no Node.js, de um exemplo para cada.

Síncrono: O processo síncrono bloquea o node de executar qualquer outro codigo até o mesmo estar concluído. Síncrono é bloqueante para I/O.
Assíncrono: Executa todo o codigo parelamente as chamadas de I/O, nao-bloqueantes.
Exemplo Síncrono:
```
var fs = require('fs');
for(var i = 0; i < 10; i++){
    fs.readFileSync('./mean.txt', 'utf8', callback);
}
```
Exemplo Assíncrono:
```
var fs = require('fs');
for(var i = 0; i < 10; i++){
    fs.readFile('./mean.txt', (err, data) => {
        console.log(data);
    });
}
```
    
## Como o V8 executa Javascript? Demonstre 1 exemplo com o código ou imagem.

Ele interpreta o código javascript como uma maquina virtual e transforma em código de máquina.
Exemplo:
```
svn co http://v8.googlecode.com/svn/trunk v8-trunk
cd v8-trunk
scons
g++ ./samples/shell.cc -o v8-shell -I include libv8.a
./v8-shell 
V8 version 2.0.2
> var x = 10;
> x
10
> function foo(x) { return x * x; }
> foo
function foo(x) { return x * x; }
> quit()
./v8-shell -e 'print("10*10 = " + 10*10)'
10*10 = 100
```
## Qual a diferenca entre um sistema single para um multi-thread?
Single-thread tem a instancia de um único processo.
Multi-tread tem varias instancias rodando em paralelo, conhecido como programacao concorrente. 

## Como a tread pool tem um tamanho de padrao 4, o que acontece se voce enviar 5 requisicoes para o banco

Ela se torna uma Idle-thread que é pre-executada e fica aguardando a task.

## Como voce venderia o peixe do Nodejs na sua empresa para tentar convencer seu chefe da sua adocao?

Comecava a explicar o basico da historia do node e mostraria os problemas de outras ferramentas que o node resolve.
Apresentava alguns cases de sucessos e a economia que isso pôde gerar para empresa com servidores.
Logo em seguida faria uma abordagem da linha de aprendizagem do Nodejs e principalmente mostraria que poderiamos usar uma única linguagem para Back-end e Front-end.
Uma comunidade muita ativa e todas os modulos que ja estao disponiveis para serem utilizados e as empresas de servidores que possuim APIS para nodejs.

## Qual a versao do seu node

MacBook-Pro-de-Ricardo:~ ricardo$ node -v
v5.6.0

## Qual a versao do sua npm
MacBook-Pro-de-Ricardo:~ ricardo$ npm -v
3.6.0