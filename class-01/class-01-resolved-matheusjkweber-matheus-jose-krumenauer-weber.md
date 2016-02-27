# Node.js - Aula 01 - Exercício
**user:** [matheusjkweber](http://github.com/matheusjkweber)
**autor:** Matheus Jose Krumenauer Weber
**date:** 1456355702659


## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
```
No Node.js um processo síncrono funciona seguindo uma série de tarefas síncronas, realiza uma e depois vai para outra e depois para outra numa ordem pré determinada, como no exemplo do garçom do vídeo onde o mesmo atende um cliente e só vai atender o segundo quando todas as tarefas do primeiro tiver terminada. 

Em um processo assíncrono, o mesmo realizará uma série de tarefas conforme as respostas do servidor, no exemplo do garçom ele irá atender o primeiro cliente e já irá atender o segundo cliente, mesmo que as tarefas do primeiro não tiverem sido terminadas, e quando a cozinha enviar uma mensagem para o garçom o mesmo voltará para o primeiro cliente para terminar as tarefas com ele(isso se a cozinha não mandar terminar as tarefas do segundo primeiro).```
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
```

O V8 compila e executa o código Javascript já fazendo uma limpeza na memória de objetos não mais necessários.

<img src="http://image.slidesharecdn.com/nodesecuritypresentationv3asfws-121126133358-phpapp02/95/asfws-2012-nodejs-security-old-vulnerabilities-in-new-dresses-par-sven-vetsch-7-638.jpg?cb=1353936909">
```

## Qual a diferença entre um sistema single para um multi-thread?
```
A diferença de um sistema single thread é que todo o sistema funcionará numa unica thread, ou seja, todo o programa rodará de uma só vez, ao contrário do multi-thread que pode dividir esse programa em diversas threads com funções para parar, iniciar, retomar, entre outras. Um sistema multi-thread é muito util para que o usuário não precise ficar esperando uma tarefa finalizar para iniciar outra, visto que a mesma pode ser jogada para a thread pool e iniciar outra, e só depois retomar aquela thread.
```

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
```
Essa requisição terá que aguardar alguma das outras 4 ser liberada para que essa entre.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Explicaria que desenvolver o nosso sistema em Node.js melhoraria muito o desempenho e a segurança do mesmo, visto que o mesmo utiliza o mesmo motor do Google Chrome para funcionar. Também explicaria como o mesmo funciona com requisições assíncronas, possui bibliotecas poderosas, um bom controle de threads, entre outras. 

Também falaria que é a mesma linguagem utilizada para desenvolver o Netflix e o Paypal.
```

## Qual a versão do seu `node`?
```
v5.7.0
```

## Qual a versão do seu `npm`?
```
3.6.0
```
