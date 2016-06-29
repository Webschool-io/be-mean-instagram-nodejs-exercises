## 1. Explique como um processo síncrono e assíncrono roda no Nodejs, dê um exemplo para cada.

No processo síncrono só temos o retorno da função quando a mesma é executa de forma total, com isso o processo aguarda o termino de cada função e executa uma de cada vez. Ex: [fs.readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options).

No processo assíncrono premite que o programa continue executando enquanto a função faz determinada tarefa e chama um *callback* quando é finalizada. Ex: [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback).

## 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

Ele basicamente compila o código "JavaScript" para linguagem de máquina utilizando "C++".

![Hidden class](http://thibaultlaurens.github.io/assets/themes/img/post/21-03-13-v8/hiddenclass.PNG)

![Hidden class](http://thibaultlaurens.github.io/assets/themes/img/post/21-03-13-v8/transition.PNG)

> Confesso que não domino o funcionamento do V8, segue no link o artigo das imagens para melhor entendimento. [How the V8 engine works?](http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/)

## 3. Qual a diferença entre um sistema single para um multi-thread?

No sistema Single-Thread consiste em somente um processo sendo excutado por vez dentro de uma quantidade especifica de tempo, onde em seu termino é executado o próximo processo agendado. Já no processo multithread, cada thread tem o seu próprio contexto compartilhando recursos do processo.


## 4. Como a Thread Poll tem um tamanho padrão de 4, o que acontece se enviar 5 requisiçoes ao banco?

A requisição 5 entra em uma estado de espera e aguarda o termino das primeiras 4 requisições.

## 5. Como você venderia o peixe do Nodejs na sua empresa para tentar convencer seu chefe da sua adoção?

O Node.js é uma tecnologia de vanguarda que rompe um pouco com a programação tradicional, exitem situações onde o desenvolvimento se torma mais simples e com melhor desempenho. Além de usar JavaScript, que é uma linguagem fácil de aprender e com uma grande comunidade que cria novas soluções em uma velocidade incrível.

## 6. Qual a versão do seu `node`?
```
~ λ node --version
v5.12.0
```

## 7. Qual a versão do seu `npm`?
```
~ λ npm --version
3.8.6
```
