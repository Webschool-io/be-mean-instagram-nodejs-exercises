# Node.js - Aula 01 - Exercício
**user:** https://github.com/VagnerSilva
**autor:** Vagner Pereira Silva
**date:** 26/03/2016

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Assíncrono: Independe do término de execução de alguma atividade. São funções executadas de forma tardia, cujo chamamos de callback.
No nodejs quase todas as funções são assíncronas.

	```js
    fs.readFile('./Index.html', function read(err, data) {
    console.log(data)
    }
    
```


Síncrono: seu processamento e realizado de forma sequencial, ou seja, o início de uma tarefa depende do termino da outra.
No nodejs as funções síncronas utilização o "prefixo" sync
  ex:.

```js
    var data = fs.readFileSync(filename, "utf8");
    console.log(data);
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
  ![V8](https://pbs.twimg.com/media/Bt5ywJrIEAAKJQt.jpg)

## Qual a diferença entre um sistema single para um multi-thread?

No multi-theard temos um thread para cada requisição, no single, como o nome mesmo sugere temos apenas uma thread, tratando as requisições.
![thread](https://sathyalog.files.wordpress.com/2014/05/toptal-blog-1_b.png)

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Por padrão a thread pool é de 4 no Node, mas pode ser configurada para até 128 threads.
No caso de os valores de requisição ser maior, as requisições excedentes ficam na fila aguardando as demais serem executadas.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Fazendo um exemplo básico e mostrando suas vantagens.

## Qual a versão do seu `node`?

C:\>node -v
v5.7.1

## Qual a versão do seu `npm`?

C:\>npm -v
3.6.0


