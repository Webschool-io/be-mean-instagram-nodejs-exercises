# Node.js - Aula 01 - Exercício

**user:** [gilsondev](https://github.com/gilsondev)

**autor:** Gilson da Silva Borges Filho

**date:** 

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

**Processo Síncrono**: É quando o processo é enviado para execução, e o Node.js espera
finalizar sua execução. Enquanto aguarda, outros processos fica em modo de suspensão,
esperando sua vez.

**Processo Assíncrono:** Nesse caso é o padrão do Node.js, quando o Event Loop ao receber
os processos, envia para executá-las, mas diferente do assincrono, as mesmas precisam
ter uma função de callback, para executar quando o processamento for finalizado. Assim,
o event loop é notificado e retorna o seu resultado para quem a requisitou. Isso, libera
o mecanismo de receber processos depois de enviar cada uma delas para execução.


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

Ele compila o código para o código nativo de máquina para assim executá-lo. Do contrário,
que o código era interpretado, sua compilação aumenta a performance da aplicação Javascript.

Seguindo as boas praticas em uma VM, o V8 possui dois tipos de compiladores: Full compiler e Optimizing Compiler

**Full Compiler**: É aonde inicia a compilação do código Javascript. Ele não faz
análise de tipo, já que ele usa a estratégia de Inline Cache enquanto executa o
mesmo. Quando precisa de mais performance é usado o segundo compilador

**Optimizing Compiler**: É aqui onde ele produz um código performático, recompilando
funções que estão tendo alto índice de uso.

Segue um exemplo de como funciona: http://runtimejs.org/jsconf/img/runtimejs-arch.png


## Qual a diferença entre um sistema single para um multi-thread?

**Single-Thread**: É uma aplicação que roda em uma thread, e que oferece uma
vantagem de de economizar memória e processamento.

**Multi-thread**: É uma aplicação que criar várias threads, que normalmente são
criadas para executar tarefas distintas como requisição de cada usuário que
acessa, conexão com o banco de dados.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

As 4 primeiras requisições enviadas será alocadas na thread pool, mas a quinta estará
no queue list. Mas esse tamanho pode ser mudado passando o valor para uma variável de
ambiente com o nome `UV_THREADPOOL_SIZE`, em que vai ser o tamanho desse pool. Lembrando,
que na documentação mostra que o máximo suportado é de 128.

## Como você venderia o peixe do **Node.js** na sua empresa para tentar convencer seu chefe da sua adoção?

1 - O Node.js traz uma unidade no quesito de linguagem de programação. Agora podemos trabalhar com 
Javascript em praticamente todas as camadas de uma aplicação;

2 - Trabalha de forma assíncrona por padrão: Dessa forma evitaria possíveis gargalos em grandes
execuções de processos, assim sem deixar que a aplicação congele por exemplo.

3 - Com ele você possui soluções de real-time altamente abstraídos.

4 - Comunidade ativa e com criação de ferramentas cada vez mais performáticas e fáceis de trabalhar,
gerando novos conhecimentos, cases para serem usadas no dia a dia.

5 - E temos cases muito bem seguros de pesquisar, e ver o lado bom e ruim de usar o Node.js e analisar
os relatórios de mudança, para concluir qual ganho teremos ao usar. E como percebe-se, os ganhos são
consideráveis no quesito de performance, escalabilidade e produtividade no desenvolvimento.

## Qual a versão do seu `node`?

```bash
$ node --version
v.5.7.0
```

## Qual a versão do seu `npm`?

```bash
$ npm --version
v3.7.5
```
