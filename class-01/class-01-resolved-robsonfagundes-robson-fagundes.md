# MongoDB - Aula 01 - Exercício
####Robson Fagundes - [http://robsonfagundes.github.io](robsonfagundes.github.io) - robsonfagundes@gmail.com

## 1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
#####Analogia
Imaginemos que um emissor está a enviar uma mensagem de texto através de um tubo e que a mensagem é enviada recorrendo a bolas, cada bola com uma letra. Quando as bolas chegam ao receptor, a mensagem tem que ser remontada, ou seja, têm que se colocar as bolas pela ordem correta, para se voltar a ter a mensagem.

- **Síncrono:** as bolas têm que ser enviadas e recebidas de forma sincronizada, mantendo uma ordem bem definida: a primeira bola (letra) a ser enviada, tem que ser a primeira a ser recebida e assim sucessivamente.

- **Assíncrono:** cada bola tem um número de sequência, que permite que seja colocada na sua posição. Isto permite que as bolas sejam enviadas e recebidas por qualquer ordem, uma vez que esse número de sequência identifica a posição de cada bola (letra) na mensagem.

## 2. Como o V8 executa o JavaScript? Demonstre 1 exemplo com código ou imagem.
[![Como o V8 executa o JavaScript](https://raw.githubusercontent.com/robsonfagundes/be-mean-instagram-nodejs-exercises/master/imgs/nodejs-event-loop.png)](https://raw.githubusercontent.com/robsonfagundes/be-mean-instagram-nodejs-exercises/master/imgs/nodejs-event-loop.png "Como o V8 executa o JavaScript")

## 3. Qual a diferença entre sistema single para um multi-thread?
#####Antes de mais nada... O que é uma Thread?

Uma Thread é uma sequencia de instruções sendo executadas em um programa. Uma thread pode ser interpretada como uma sequencia de instruções sendo executadas em um programa. Quando múltiplas thread são executadas em uma mesma entidade (no nosso caso, um processo), ela é chamada de multithreading.
[![Thread](https://raw.githubusercontent.com/robsonfagundes/be-mean-instagram-nodejs-exercises/master/imgs/thread.png)](https://raw.githubusercontent.com/robsonfagundes/be-mean-instagram-nodejs-exercises/master/imgs/thread.png "Thread")

#####Single-Threaded vs. Multithreaded
- Um sitema **singlethread** (thread única) inicia na etapa 1 e continua seqüencialmente (etapa 2, etapa 3, o passo 4) até atingir a etapa final. 

- Já um sistema **multithread** (multiplas threads) permitem que você execute várias threads ao mesmo tempo, cada uma executando um passo por exemplo. Cada thread é executada em seu próprio processo, então, teoricamente, você pode executar o passo 1 em uma thread e, ao mesmo tempo executar o passo 2 em outra thread e assim por diante. Isso significa que a etapa 1, etapa 2, etapa 3 e etapa 4 podem ser executadas simultaneamente.

## 4. Como a Thread Pool tem tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
O processo do Node é single-thread, ou seja, um processo por instância. O **Event-Loop** fica recepcionando os eventos [(Reactor Pattern)](https://en.wikipedia.org/wiki/Reactor_pattern), e assim que recebido o evento, o mesmo é direcionado para um **Thread-Pool** que executará as tarefas em background liberando assim o event loop, e assim que as tarefas vão sendo concluídas, o Node acionará o callback que foi passado no início da execução do evento. Quando houver um numero de eventos que executa uma **Intensive-Operation** maior á 4, estes serão incluídos ao **Idle-Thread** que nada mais são, eventos que ficam aguardando um dos outros 4 eventos que estão na thread pool serem executadas para ser executado.

## 5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
#####Por que Node?

O objetivo declarado do Node é “fornecer uma maneira fácil de criar programas de rede escaláveis”. Qual é o problema com os programas de servidor atuais? Vamos fazer as contas. Em linguagens como Java™ e PHP, cada conexão inicia um novo encadeamento que, potencialmente, é acompanhado de 2 MB de memória. Em um sistema que tenha 8 GB de RAM, isto define o número máximo teórico de conexões simultâneas em cerca de 4.000 usuários.

À medida que sua base de clientes cresce, você deseja que seu aplicativo da Web suporte mais usuários e, portanto, será necessário adicionar mais servidores. É claro, isso se soma a custos de negócios, especificamente custos de servidor, custos de tráfego e custos de mão de obra. Adicione a esses custos o problema técnico potencial de que um usuário poderá usar diferentes servidores para cada solicitação, de forma que quaisquer recursos compartilhados deverão ser compartilhados por todos os servidores. Por exemplo, no Java, variáveis estáticas e caches precisam ser compartilhados entre as JVMs em cada servidor. Este é o gargalo de toda a arquitetura de aplicativos da web, o número máximo de conexões simultâneas que um servidor pode tratar.

O Node soluciona o problema mudando a forma como uma conexão é feita no servidor. Em vez de iniciar um novo encadeamento do SO para cada conexão (e alocar a memória correspondente com ele), cada conexão cria um processo, que não requer que o bloco de memória o acompanhe. O Node alega que nunca ocorrerá um impasse de bloqueios, pois não são permitidos bloqueios e ele não bloqueia diretamente para realizar chamadas de E/S. O Node também alega que um servidor que o execute pode suportar dezenas de milhares de conexões simultâneas. De fato, o Node altera o panorama do servidor ao mudar o gargalo do sistema inteiro do número máximo de conexões para a capacidade de tráfego de um único sistema.

[![Convencendo meu Chefe - Placar UOL Copa do Mundo e Eleições com Node js](https://raw.githubusercontent.com/robsonfagundes/be-mean-instagram-nodejs-exercises/master/imgs/braziljs.png)](https://www.youtube.com/watch?v=vR8CP0gE-No "Convencendo meu Chefe!!! Placar UOL Copa do Mundo e Eleições com Node js")

## 6. Qual a versão do NodeJS que utilizo?
```
robsonfagundes@R1:~/Personal-Projects/WebSchool.io/be-mean-instagram-mongodb-excercises$ node -v
v5.2.0
```
## 7. Qual a versão do npm que utilizo?
```
robsonfagundes@R1:~/Personal-Projects/WebSchool.io/be-mean-instagram-mongodb-excercises$ npm -v
3.3.12
```
