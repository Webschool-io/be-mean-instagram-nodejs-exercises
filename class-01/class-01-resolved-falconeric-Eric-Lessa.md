# Node.js - Aula 01 - Exercício
**Autor:** Eric Lessa

**User:** [falconeric](https://github.com/falconeric)

**Data:** 1465880788

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Processos síncronos são processos bloqueantes, só permitirão que outros processos sejam executados após que este tenha terminado. Na documentação do Node.JS temos um exemplo de processo assíncro, veja:

```
const fs = require('fs');

fs.unlinkSync('/tmp/hello');
console.log('successfully deleted /tmp/hello');
```
neste exemplo o log só será exibido quando **fs.unlinkSync** terminar de executar.

Processos assíncronos em Node.JS não esperam que um processo seja concluido para iniciar outro, quando um processo é concluido é emitido um evento informando o resultado, chamamos esse evento de callback. Veja o exemplo de um processo assíncrono:

```
const fs = require('fs');

fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
```
o exemplo acima retirado da documentação do Node.JS apresenta uma forma melhorada da versão síncrona, desta vez é passado um callback para o método **fs.unlink** que informa o resultado da operação.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

Em termos simples, o v8 pega o código-fonte, divide em strings, converte em bytecode que um compilador pode entender, e então executa.

V8 compila código javascript diretamente em código máquina quando executado pela primeira vez. Sem bytecodes intermediários, sem interpretador. O acesso as propriedades é tratado pelo código em cache que pode ser corrigido com outras instruções de máquina enquanto V8 é executado.

Durante a execução inicial do código para acessar uma propriedade de um determinado objeto, V8 define o objeto atual uma classe escondida. V8 otimiza o acesso à propriedade, prevendo que esse objeto também será usado por todos os objetos futuros acessados na mesma seção do código e use as informações na classe para corrigir o código em cache para usar a classe escondida. Se V8 previu corretamente o valor da propriedade é atribuído (ou forçado) em uma única operação. Se a previsão estiver incorreta, V8 corrige o código para remover a otimização.

Por exemplo, o código JavaScript para acessar a propriedade *x* de um objeto *Point* é:
```
point.x
```

Em V8, o código de máquina gerado para acessar *x* é:
```
# ebx = the point object
cmp [ebx,<hidden class offset>],<cached hidden class>
jne <inline cache miss>
mov eax,[ebx, <cached x offset>]
```

Se o objeto classe escondido não corresponde à classe escondida em cache, a execução salta para o sistema de execução V8 que lida com erros de cache e corrige o código em cache embutido. Se houver uma correspondência, o que é o caso comum, o valor da propriedade x é simplesmente recuperado.

**referência:** [Chrome V8](https://developers.google.com/v8/design#dynamic-machine-code-generation)

## Qual a diferença entre um sistema single para um multi-thread?
Em sistemas single-thread quando executamos um programa temos um fluxo único(thread) de controle sequencial.

![Image of single-thread](http://www.dsc.ufcg.edu.br/~jacques/cursos/map/html/threads/threads-single.gif)

Em sistemas multi-thread podemos ter multiplas threads sendo processadas ao mesmo tempo

![Image of single-thread](http://www.dsc.ufcg.edu.br/~jacques/cursos/map/html/threads/threads-two.gif)

>Thread é uma forma de um processo dividir a si mesmo em duas ou mais tarefas que podem ser executadas concorrencialmente.


## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

A quinta requisição vai ter que aguardar uma das outras quatro requisições terminar. Isso não significa que o event-loop será bloqueado ele continua atendendo novas requisições maaaas elas terão que aguardar.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Falaria das vantagens do Node.js em relação a tecnologia utilizada pela nossa empresa e que os custos da operação para migrar de tecnologia se refletiriam em economia de gastos no futuro, falaria da baixa curva de aprendizado e alta disponibilidade de profissionais javascript citaria cases de sucesso de grandes empresas que migraram para o Node.js.

## Qual a versão do seu `node`?\
v4.4.4
## Qual a versão do seu `npm`?
2.15.1
