```md
# Node.js - Aula 01 - Exercício
**user:** [josecarloweb](https://github.com/josecarlosweb)
**autor:** JOSÉ CARLOS DA SILVA DE CARVALHO
**date:** Tue Dec 15 2015 14:56:53 GMT-0300 (BRT)

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Um processo síncrono bloueia todo o ciclo de eventos, parando execução de seu código até que haja as saídas de processo gerado.
Chamadas síncronas são principalmente úteis para a execução de tarefas gerais e para simplificar o carregamento/processamento de configuração do aplicativo na inicialização. Uma vez que utilizado um processo síncrono no NodeJs, o processo principal será bloqueado até que a chamda síncrona seja executada (tenha uma saída).
Ex. Inicialização de uma aplicação, como um jogo que precisa carregar aquivos. O processo principal deve ser bloqueado até que todos os arquivos tenham sido carregados.

Processos assíncronos ocorrem independentemente do fluxo de programa principal. Ações assíncronas são ações executadas em um esquema de não bloqueio, permitindo que o fluxo de programa principal para continuar o processamento. Esse é o tipo de processo padrão do NodeJS.
Ex. Uma aplicação exibe um vídeo em tempo real (streaming) enquanto um processo de chat é executado ao mesmo tempo.

Detalhes e fonte: <http://kikobeats.com/synchronously-asynchronous/>

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

V8 compila JavaScript para código de máquina(IA-32, x86-64, ARM, ou MIPS ISA, também foi portado para PowerPC e IBM s390 para uso em servidores) antes de executá-lo, em vez de técnicas mais tradicionais, como a interpretação de bytecode ou compilar todo o programa para código de máquina e executá-lo a partir de um sistema de arquivos. O código compilado é adicionalmente otimizado (e re-optimized) dinamicamente em tempo de execução, com base em heurísticas de perfil de execução do código. Mais informações <http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/>
```
```c++
#include <v8.h> 
using namespace v8;
int main(int argc, char* argv[]) {
  // Create a stack-allocated handle scope. 
  HandleScope handle_scope;
  // Create a new context. 
  Handle<Context> context = Context::New();
  // Enter the created context for compiling and 
  // running the hello world script.
  Context::Scope context_scope(context);
  // Create a string containing the JavaScript source code. 
  Handle<String> source = String::New("'Hello' + ', World!'");
  // Compile the source code. 
  Handle<Script> script = Script::Compile(source);
  // Run the script to get the result. 
  Handle<Value> result = script->Run();
  // Convert the result to an ASCII string and print it. 
  String::AsciiValue ascii(result);
  printf("%s\n", *ascii);
  return 0;
}
```
```

## Qual a diferença entre um sistema single para um multi-thread?

Tem mais arquiteturas além de single-thread (ST) e multi-thread (MT). Basicamente o ST só pode tratar uma requisição de cada vez, então o processamento de cada uma não pode ser demorado, nem pode bloquear (por exemplo, ficar esperando pelo banco de dados). O MT, assumindo que se crie uma thread por requisição, pode tratar várias requisições em paralelo, mesmo que demorem ou bloqueiem.

Um servidor ST pode ser eficaz, desde que nunca bloqueie. O Node.js é assíncrono de modo a não bloquear. Qualquer processamento demorado deve ser delegado a um outro processo, o que também pode ser feito no Node com subprocess.

Outra forma de abordar o problema: o prefork do Apache cria um pool de subprocessos, e delega as requisições para cada subprocesso conforme elas chegam. Isto garante o paralelismo e evita as complexidades de programação MT. Isto pode ser implementado também no Node mas o Apache entrega isto de fábrica, o que facilita a vida do desenvolvedor PHP por exemplo, pois ele não precisa se preocupar se está bloqueando.

coletado em: <http://pt.stackoverflow.com/questions/75144/diferen%C3%A7a-entre-multi-e-single-thread>

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Caso seja feita a quinta requisição ao banco, essa requisição será incluída no **Idle Thread** e ficará aguardando para ser inserida na **Thread Pool** e ser executada.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Hoje em uma empresa que presto serviço, há uma API em PHP que sofre constantes modificações e já consome de infraestrutura o valor de 2 salários de desenvolvedores pleno. O primeiro argumento é o menor custo de infraestrutura, uma vez que o SGBD atual é postgres e o serviço RDS na aws custa bem caro, diferente do mongo ou cassandra. Os custos com infra poderiam cair até 40%.
É desejável que uma nova versão seja criada para corrigir os erros de implementação existentes. Logo uma nova versão da API com o Node/Express seria muito mais produtiva (rápida) e muito mais econômica.

## Qual a versão do seu `node`?
carlos@carlos-pc:~/Documentos/be-mean-instagram-node$ node -v
v5.2.0

## Qual a versão do seu `npm`?
carlos@carlos-pc:~/Documentos/be-mean-instagram-node$ npm -v
3.3.12

```