# Node.js - Aula 01 - Exercício
**Autor:** Diego Ferreira
**Data:** 23/02/2016 - 10:00

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
##### Processo Síncrono

É executada apenas uma função por vez, ou seja, os recursos ficam todos disponívels para determinada tarefa e somente são liberados após a tarefa ser completamente finalizada e respondida ao usuário. Ou seja, neste momento "travando" o Node e impedindo naquele instante que o mesmo continue o processamento de outras tarefas. Por exemplo, se essa função fizer um I/O em disco, ele vai bloquear o sistema inteiro, deixando o processador ocioso enquanto ele usa outros re-cursos de hardware, como por exemplo, leitura em disco, utilização da rede etc, e somente liberará os recuros após a finalização da tarefa.

##### Processo Assíncrono

 Em um processo assíncrono o servidor não bloqueia os recursos da máquina durante o processamento de uma requisição neste momento apenas o recurso que esta sendo utilizado fica bloqueado e os demais ficam liberados para o processamento de outras requisições, o node utiliza do recurso de callbacks ou seja, o cliente envia a requisição o nodejs responde a primeira requisição e aguarda a chamada de retorno, ao mesmo tempo atende outras requisições e fica escutando a chamada de CALLBACK das outras requisições enviadas. E com isto vai processando todas as requisições, e a medida que os CALLBACKS são acionados ele vai devolvendo as respostas para o cliente, compartilhando assim os recursos da máquina, e processando várias requisições ao mesmo tempo.


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 funciona como uma máquina virtual, ele recebe e lê o script escrito em javascript compila o código para linguagem de máquina quando é executado pela primeira vez. Ele cria classes ocultas para o determinado objeto prevendo que o mesmo irá ser utilizado por todos os objetos futuros acessados na mesma sessão de código, e utiliza estas informações para atualizar o cache interno que contém a classe.

Se V8 prever corretamente o valor da propriedade, é atribuído (ou forçado) em uma única operação. Se a previsão estiver incorreto, V8 corrige o código para remover a otimização.

Por exemplo, o código JavaScript para acessar a propriedade x de um objeto Teste é:

```

teste.x
```

Na V8, o código de máquina gerado para acessar x é:

```

# ebx = o objeto teste
cmp [ebx,<hidden class offset>],<cached hidden class>
jne <inline cache miss>
mov eax,[ebx, <cached x offset>]

```

Se classe oculta do objeto não corresponde à classe oculta em cache, a execução salta para o sistema de execução V8que lida com erros de cache em linha realiza correções no código de cache embutido. Se houver uma correspondência, o que é o caso comum, o valor da propriedade x é simplesmente recuperado.

A combinação de uso de: classes ocultas para acessar propriedades, caching embutido e geração de código de máquina, otimiza a forma com a qual os objetos são criados e acessados e com isso melhora gradativamente a velocidade com que o código javascript é executado.

## Qual a diferença entre um sistema single para um multi-thread?

##### Single-Thread

Em um sistema single-thread uma única tarefa é executada por vez, funcionando como se fosse uma fila, chega a tarefa um o sistema executa, responde, pega a tarefa 2 executa e responde e assim por diante. Uma tarefa somente é executada após a finalização da execução da tarefa anterior.

#### Multi-Thread
Em um sistema multi-thread, as tarefas são executadas em paralelo, enquanto uma tarefa esta aguardando em um processo de IO, as outras podem fazer uso da(s) CPU's disponíveis, e com isso gerando a impressão para o usuário que as tarefas estão sendo executas mais rápidas.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se enviar 5 requisições ao banco?

Quando é enviado um número de requisições a mais do que a thread pool suporta, estas requisições "adicionais" são colocadas na Task Queue, que é uma fila de espera onde as tarefas ficam até que a thread pool libere espaço para que as mesmas possam ser executadas.


## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Atualmente trabalho com Java para Web, então para a adoção do Node, seria necessário fazer um estudo comparativo mostrando ao gerente a performance de uma app java e uma app node, e mostraria que o node economizaria também em recursos operacionais para a empresa. Caso ele ainda não acreditasse, pegaria alguma funcionalidade de algum projeto existente e faria a mesma em node, como prova de conceito e para tirar as dúvidas existentes.

## Qual a versão do seu `node`?
```
node --version
v5.4.1
```

## Qual a versão do seu `npm`?
```
npm --version
3.5.3
```

## Bibliografia
```
https://developers.google.com/v8/design#mach_code
Node.js - Aplicações web real-time com Node.js 
```
