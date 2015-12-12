# Nodejs - Aula 01 - Exercício
autor: Marcelo Alves
github: MalvesGO

## 1- Explique com um processo sincrono e assincrono roda no Nodejs, dê um exemplo para cada

Síncrono: No modo síncrono existe uma fila de espera que só termina assim que o usuário receber a resposta, assim o proximo usuário tem que aguardar até que o processo seja concluído.

Exemplo: A fila de um banco

<img class="center-block" src="http://paraibaja.com.br/wp-content/uploads/2014/07/13052014_1744.jpg">

Assíncrono: No modo assíncrono não existe filas então a cada requisição já obtemos a resposta imediata da solicitação.

Exemplo: Estacionamento de carros

<img class="center-block" src="http://revistagalileu.globo.com/Revista/Galileu2/foto/0,,40726009,00.jpg">

## 2- Como o V8 executa Javascript? Demonstre um exemplo com código ou imagem

O V8 foi o nome dado ao interpretador Javascript, também conhecido de VM (maquina virtual), foi desenvolvido pela Google para ser usado no navegador Google Chrome.

A principal virtude do V8 é acelerar o desempenho de aplicações compilando o codigo Javascript para o formato nativo de maquina antes de ser executando, permitindo assim que rode a velocidade de um código binário ja compilado.

<img class="center-block" src="https://sathyalog.files.wordpress.com/2014/05/toptal-blog-1_b.png?w=645">

Tendo como premissa a idéia do Nodejs é trabalhar com múltiplas requisições e permanecer leve e eficiente. 

## 3- Qual a diferença entre um sistema single para um multi-thread?

A diferença entre sistemas single e multi-thread é que ao usar uma unica thread apenas uma tarefa pode ser realizada em determinado tempo e o programa deve esperar até a tarefa ser concluida, já nos sistemas multi-thread as tarefas podem ser realizadas de modo simultáneo não bloqueando novas requisições o que nos proporciona um ganho imenso em produtividade e desempenho.

## 4- Como a thread Poll tem um tamanho padrão de 4, o que acontece se enviar 5 requisiçoes ao banco?

Libuv tem um tamanho total de  4 threads por padrão e utiliza uma fila para gerenciar o acesso ao poll de threads. Nesse caso quando você tiver 5 pesquisas de longa duração simultaneas um deles vai ficar aguardando por estas pesquisas antes mesmo delas começarem.

Podemos aumentar o tamanho deste conjunto de threads através da variável de ambiente <strong>UV_THREADPOOL_SIZE</strong>, e modificarmos a variável de acordo com as necessidades do projeto <strong>process.env.UV_THREADPOOL_SIZE = 10;</strong>

## 5- Como você venderia o peixe do Nodejs na sua empresa para tentar convencer seu chefe da sua adoção?

Acho que a melhor forma de convencer uma pessoa a usar Nodejs seria mostrar com uma aplicação real rodando e demonstrar o "poder de fogo" do Javascript. Criaria um dashboard fazendo requisições nos dados da empresa e mostrar o seu funcionamento utilizando socket.io (dados em tempo real). Isso seria o pontapé inicial para tentar convencer a adoção do Nodejs. 

## 6- Qual a versão do seu Node.js?

```   
marcelo@marcelo-js:~/Projetos$ node -v
v0.10.41

```

## 7- Qual a versão do seu NPM?

```   
marcelo@marcelo-js:~$ npm -v
1.4.29


```
