# Node.js - Aula 01 - Exercício

**user:** [jeffersondanielss](https://github.com/jeffersondanielss)

**autor:** Jefferson Daniel Santos Silva

**date:** 1449708675195

#### Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
O processo síncrono se caracteriza pela necessidade de um processo acabar para poder executar um próximo processo.
Já o assíncrono pode executar vários processos ao mesmo tempo enquanto espera a resposta dos mesmos para quando estiverem prontos.
Podemos pegar como exemplo uma transportadora.
Em um processo síncrono ela só poderia ter um caminhão na rua entregando uma mercadoria por vez para que quando voltasse ele recebesse outra mercadoria e assim voltasse para a rua.
Já com um processo assíncrono a transportadora poderia enviar vários caminhões a rua fazendo suas entregas e quando a transportadora receber a informação que a mercadoria foi entregue com sucesso ela pode reabastecer esse caminhão e envia-lo novamente as ruas.

#### Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O fluxo de compilação de javascript para o código nativo da máquina, no v8 do nodejs:
![Execution v8 nodejs](http://image.slidesharecdn.com/nodejs-140507132306-phpapp02/95/nodejs-code-tracing-2-638.jpg?cb=1427946166)

#### Qual a diferença entre um sistema single para um multi-thread?
Uma single thread trata apenas uma requisição por vez já o multi-thread cria uma nova thread por requisição podendo tratar várias requisições ao mesmo tempo.


#### Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
Ela não será executada até que umas das quatro anteriores sejam finalizadas.

#### Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Explicaria as vantagens que 

+ Linha de aprendizado é muito mais rápida já que js é requisito pra trabalhar na web.
+ A vantagem de investir em uma linguagem que está em constante ascensão.
+ [Empresas grandes usam nodejs](https://github.com/nodejs/node-v0.x-archive/wiki/Projects%2C-Applications%2C-and-Companies-Using-Node)

#### Qual a versão do seu `node`?
v5.2.0

#### Qual a versão do seu `npm`?
3.3.12